import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * DataServiceService is used to make all HTTP requests
*/
export class DataServiceService {

  constructor(private _http: HttpClient, private router: Router) { }

  /**
  * Declare loginStatus global veriable to track the login status
  */
  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
  * This function is to update the loginStatus global veriable after changed login status
  * @param {boolean} status login status
  */
  updateLoginStatus = (status: boolean) => {
    this.loginStatus.next(status);
  }

  /**
  * checkUserLoginStatusAndRedirect function is to check user login info from localStorage and redirect the page
  */
  checkUserLoginStatusAndRedirect = () => {
    let userData = localStorage.getItem("user");
    if (userData != null && userData != undefined) {
      this.updateLoginStatus(true);
      this.router.navigate(['/dashboard']);
    } else {
      this.updateLoginStatus(false);
      this.router.navigate(['/']);
    }
  }

  /**
 * httpGetRequest is a common method to make all GET requests
 * @param {string} apiUrl API Url
*/
  httpGetRequest = (apiUrl: string) => {
    return this._http.get(apiUrl);
  }

  /**
   * httpPostRequest is a common method to make all POST requests
   * @param {string} apiUrl API Url
   * @param {object} requestObject Request Object Body
  */
  httpPostRequest = (apiUrl: string, requestObject: object) => {
    return this._http.post(apiUrl, requestObject);
  }

}
