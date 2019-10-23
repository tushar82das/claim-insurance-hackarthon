/*angular core modules start*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*angular core modules end*/
/*application realted services,interfaces,enviroment import start*/
import { DataServiceService } from '../../../shared/data-service.service';
/*application realted services,interfaces,enviroment import end*/

@Component({
  selector: 'app-approver-login',
  templateUrl: './approver-login.component.html',
  styleUrls: ['./approver-login.component.css']
})
/**
 * ApproverLoginComponent is used to check loginSuccess then redirect to dash
*/
export class ApproverLoginComponent implements OnInit {

  title: string;

  constructor(private router: Router, private dataServiceService: DataServiceService) {
    /**
     * Title of the Approver login page
    */
    this.title = 'Approver Login';
  }

  ngOnInit() {
  }

  /**
   * onLoginSuccess() will call when login successfull.
  */
  onLoginSuccess = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    this.dataServiceService.updateLoginStatus(true);
    this.router.navigate(['/dashboard']);
  }

}
