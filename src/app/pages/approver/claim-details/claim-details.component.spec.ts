import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDetailsComponent } from './claim-details.component';
import { ProfileComponent } from '../../../shared/profile/profile.component';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { AlertComponent } from '../../../shared/alert/alert.component';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClaimDetailsComponent', () => {
  let component: ClaimDetailsComponent;
  let fixture: ComponentFixture<ClaimDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimDetailsComponent, ProfileComponent, LoaderComponent, AlertComponent],
      imports: [CardModule, FormsModule, HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
