import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from '../models/users';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

/**
 * userService is used to so the User Operations
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private router: Router) { }

  // baseApiUrl: string = 'http://10.117.189.111:8844/hcis';

  // /**
  // * Declare loginStatus global veriable to track the login status
  // */
  // loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // /**
  // * This function is to update the loginStatus global veriable after changed login status
  // * @param {boolean} status login status
  // */
  // updateLoginStatus = (status: boolean) => {
  //   this.loginStatus.next(status);
  // }

  // /**
  // * checkUserLoginStatusAndRedirect function is to check user login info from localStorage and redirect the page
  // */
  // checkUserLoginStatusAndRedirect = () => {
  //   let userData = localStorage.getItem("user");
  //   if (userData != null && userData != undefined) {
  //     this.updateLoginStatus(true);
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     this.updateLoginStatus(false);
  //     this.router.navigate(['/']);
  //   }
  // }

  // /**
  // * userLogin function is to check user login
  // * @param {FormGroup} loginData login form Object
  // * @returns 
  // */
  // userLogin = (loginData) => {
  //   return this._http.post(this.baseApiUrl + '/approver/login', loginData);
  // }

}
