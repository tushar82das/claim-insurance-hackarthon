/*angular core modules start*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*angular core modules end*/
/*application realted services,interfaces,enviroment import start*/
import { DataServiceService } from '../../../shared/data-service.service';
import { environment } from '../../../../environments/environment';
import { IClaims } from 'src/app/models/claims';
/*application realted services,interfaces,enviroment import end*/


@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})

/**
 * ClaimDetailsComponent is used to see the Claim details and do all operation related the claim detail
*/
export class ClaimDetailsComponent implements OnInit {

  baseApiUrl: string;

  isLoadingShow: boolean;
  userSession;

  claims: IClaims[];
  claim: object;

  claimId: number;
  claimStatus: string;

  comments: string;
  reqLevelOneStatus: string;
  reqLevelTwoStatus: string;

  isAlert: boolean;
  alertType: string;
  alertMsg: string;

  approvedL1: boolean;
  approvedL2: boolean;

  isCheckedFirst: boolean;
  isCheckedSecond: boolean;

  constructor(private dataServiceService: DataServiceService, private activatedRoute: ActivatedRoute) {

    this.baseApiUrl = environment.baseApiUrl;

    this.isLoadingShow = false;

    this.reqLevelTwoStatus = 'complete';

    this.isAlert = false;

    this.approvedL1 = false;
    this.approvedL2 = false;

    this.isCheckedFirst = false;
    this.isCheckedSecond = false;
  }

  ngOnInit() {
    this.initGetUser();

    this.claimId = Number(this.activatedRoute.snapshot.params['id']);

    this.initGetClaimList(this.userSession.appoverId, this.claimStatus);

    this.isLoadingShow = true;

    setTimeout(() => {
      this.isLoadingShow = false;
    }, 1000);
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
    let url = this.baseApiUrl + '/approver/' + approverId + '/claims/?status=' + status;
    this.dataServiceService.httpGetRequest(url).subscribe(response => {
      if (response != null && response != undefined) {
        let val = JSON.parse(JSON.stringify(response));
        if (val.statuCode == 200) {
          this.claims = val.policyClaim;
          this.getClaimDetaild(this.claimId);
        }
      }
    });
  }

  /**
   * getClaimDetaild to retrive claim detail from the list of claims
   * @param {number} claimId Claim ID
  */
  getClaimDetaild = (claimId: number) => {
    this.claims.filter(data => {
      if (data.claimId == claimId) {
        this.claim = data;
        this.updateFlagStatus();
      }
    })
  }

  /**
   * onChangeLevelStatus is used to upadte reqLevelTwoStatus
   * @param {object} event Event Object
  */
  onChangeLevelStatus = (event) => {
    this.reqLevelTwoStatus = event.target.value;
  }

  /**
   * approveClaim to submit the Claim
  */
  approveClaim = () => {
    let url = this.baseApiUrl + '/approver/claim/approve';
    let reqObject = {
      "approverId": this.userSession.appoverId,
      "claimId": this.claimId,
      "comments": this.comments,
      "levelOneStatus": "Approved",
      "levelTwoStatus": this.reqLevelTwoStatus
    }

    this.dataServiceService.httpPostRequest(url, reqObject).subscribe(response => {
      if (response != null && response != undefined) {
        let val = JSON.parse(JSON.stringify(response));
        if (val.statusCode == 200) {

          if (this.userSession.role == 'Approver1') {
            this.approvedL1 = true;
          } else {
            this.approvedL2 = true;
          }

          this.isAlert = true;
          this.alertType = 'success';
          this.alertMsg = val.message;
        } else {
          this.isAlert = true;
          this.alertType = 'warning';
          this.alertMsg = val.message;
        }
      }
    });
  }

  /**
   * rejectClaim() is to reject the claim
  */
  rejectClaim = () => {
    /*Not Implemented*/
  }

  /**
   * updateFlagStatus is used to update the Flags
  */
  updateFlagStatus = () => {
    let val = JSON.parse(JSON.stringify(this.claim));

    /*Progress Bar*/
    if (val.status == 'Pending L2' || val.status == 'PENDING L2') {
      this.approvedL1 = true;
    }

    /*Radio Buttons*/
    if (val.claimAmount > val.requestedClaimAmount) {
      this.isCheckedFirst = true;
    } else {
      this.isCheckedSecond = true;
    }

  }

}
