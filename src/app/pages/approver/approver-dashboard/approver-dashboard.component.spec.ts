import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApproverDashboardComponent } from './approver-dashboard.component';
import { ProfileComponent } from '../../../shared/profile/profile.component';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from '../../../shared/data-service.service';

import { DebugElement } from '@angular/core';

import { of } from 'rxjs';

describe('ApproverDashboardComponent', () => {
  let component: ApproverDashboardComponent;
  let fixture: ComponentFixture<ApproverDashboardComponent>;

  let dataServiceService: DataServiceService;
  let httpMock: HttpTestingController;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApproverDashboardComponent, ProfileComponent],
      imports: [CardModule, RouterModule.forRoot([]), HttpClientModule, HttpClientTestingModule],
      providers: [DataServiceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverDashboardComponent);
    component = fixture.componentInstance;
    dataServiceService = TestBed.get(DataServiceService);
    de = fixture.debugElement;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call initGetUser and check Role to update claimStatus', () => {
    component.userSession = {
      role: 'Approver1'
    }
    component.initGetUser();
  })
});
