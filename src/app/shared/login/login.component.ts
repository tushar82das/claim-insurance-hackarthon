/*angular core modules start*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/*angular core modules end*/
/*application realted services,interfaces,enviroment import start*/
import { DataServiceService } from '../../shared/data-service.service';
import { environment } from '../../../environments/environment';
/*application realted services,interfaces,enviroment import end*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * LoginComponent is perform login operation
*/
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter();

  baseApiUrl: string;

  isLoginError: boolean;
  laertType: string;
  alertMsg: string;

  loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private dataServiceService: DataServiceService) {
    this.baseApiUrl = environment.baseApiUrl;

    this.isLoginError = false;
    this.laertType = '';
    this.alertMsg = '';

    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  /**
   * onSubmit() will call on registration form submit.
  */
  onSubmit(formStatus) {
    let formObj = this.loginForm.value;
    let url = this.baseApiUrl + '/approver/login';

    this.laertType = 'warning';
    this.alertMsg = 'Invalid Username or Password !!';

    if (formStatus == 'VALID') {
      this.isLoginError = false;

      this.dataServiceService.httpPostRequest(url, formObj).subscribe(response => {
        if (response != null && response != undefined) {
          let user = JSON.parse(JSON.stringify(response))
          if (user.statusCode == 200) {
            this.isLoginError = false;
            this.loginEvent.emit(user);
          } else {
            this.alertMsg = user.message;
            this.isLoginError = true;
          }
        } else {
          this.isLoginError = true;
        }
      });
    } else {
      this.isLoginError = true;
    }
  }

  /**
   * closeAlertBox() will call on closing of alert box
  */
  closeAlertBox() {
    this.isLoginError = false;
  }
}
