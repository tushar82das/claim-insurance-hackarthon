/*Import default angular class start*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
/*Import default angular class end*/

/*application related class and service start*/
import { UserService } from './services/user.service';
import { DataServiceService } from './shared/data-service.service';
/*application related class and service end*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * AppComponent is the application level component
*/
export class AppComponent {

  title: string;

  constructor(private router: Router, private dataServiceService: DataServiceService) {
    this.title = 'Health Insurance Claim';
  }

  /**
   * headerLogInBtn is used to navigate to login route
  */
  headerLogInBtn = () => {
    this.router.navigate(['/login']);
  }

  /**
   * headerLogOutBtn is used to perform logout operation
  */
  headerLogOutBtn = () => {
    let userData = localStorage.getItem("user");
    if (userData != null && userData != undefined) {
      localStorage.removeItem("user");
    }
    this.dataServiceService.updateLoginStatus(false);
    this.router.navigate(['/login']);
  }
}
