import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

/**
 * AlertComponent is a Reusable component. It can be used accross the application
 * Example:
 * <app-alert [visible]="isAlert" [type]="alertType" [msg]="alertMsg"></app-alert>
*/
export class AlertComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() type: string = '';
  @Input() msg: string = '';
  @Output() alertCloseEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
  * onCloseAlert function is used to close the Aler box.
  *
  */
  onCloseAlert() {
    this.alertCloseEvent.emit();
  }

}
