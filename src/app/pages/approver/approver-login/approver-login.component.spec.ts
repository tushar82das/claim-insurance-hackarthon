import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverLoginComponent } from './approver-login.component';
import { LoginComponent } from '../../../shared/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../../../shared/alert/alert.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ApproverLoginComponent', () => {
  let component: ApproverLoginComponent;
  let fixture: ComponentFixture<ApproverLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApproverLoginComponent, LoginComponent, AlertComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
