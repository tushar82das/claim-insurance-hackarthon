/*angular core modules start*/
import { Component, OnInit } from '@angular/core';
/*angular core modules end*/
/*application realted services,interfaces,enviroment import start*/
import { DataServiceService } from '../../../shared/data-service.service';
import { environment } from '../../../../environments/environment';
import { IClaims } from '../../../models/claims';
/*application realted services,interfaces,enviroment import end*/

@Component({
  selector: 'app-approver-dashboard',
  templateUrl: './approver-dashboard.component.html',
  styleUrls: ['./approver-dashboard.component.css']
})

/**
 * ApproverDashboardComponent is used to perform all Claim related functionality
*/
export class ApproverDashboardComponent implements OnInit {

  baseApiUrl: string;

  claims: IClaims[];
  userSession;
  claimStatus: string;

  constructor(private dataServiceService: DataServiceService) {
    this.baseApiUrl = environment.baseApiUrl;
  }

  ngOnInit() {
    this.initGetUser();
    this.initGetClaimList(this.userSession.appoverId, this.claimStatus);
  }

  /**
   * initGetUser() is used to get user detail from localStorage
  */
  initGetUser = () => {
    this.userSession = JSON.parse(localStorage.getItem('user'));

    if (this.userSession.role == 'Approver1') {
      this.claimStatus = 'Pending L1';
    } else if (this.userSession.role == 'Approver2') {
      this.claimStatus = 'Pending L2';
    }
  }

  /**
   * initGetClaimList is used to get all Claims list based om the approver ID
   * @param {number} approverId Approver ID
   * * @param {string} status Claim Status
  */
  initGetClaimList = (approverId: number, status: string) => {
    let url = this.baseApiUrl + '/approver/' + approverId + '/claims/?status=' + status
    this.dataServiceService.httpGetRequest(url).subscribe(response => {
      if (response != null && response != undefined) {
        let val = JSON.parse(JSON.stringify(response));
        if (val.statuCode == 200) {
          this.claims = val.policyClaim;
        }
      }
    });
  }

}
