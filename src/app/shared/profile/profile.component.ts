import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  userSession;
  ctx: {};

  ngOnInit() {
    this.initGetUser();
    this.initGetUserDetail();
  }

  /**
   * initGetUser() is used to get user detail from localStorage
  */
  initGetUser = () => {
    this.userSession = JSON.parse(localStorage.getItem('user'));
  }

  /**
   * initGetUserDetail will call when page initiate
  */
  initGetUserDetail = () => {
    this.ctx = {
      name: this.userSession.approverName,
      role: this.userSession.role
    };
  }

}
