import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

/**
 * FooterComponent is a Reusable component. It can be used accross the application
 * Example:
 * <app-footer [title]="footerTitle"><app-footer>
*/
export class FooterComponent implements OnInit {

  constructor() { }

  /**
   * title holds the fooert title message 
  */
  title: string = 'Developed By Mavericks';

  ngOnInit() {
  }

}
