import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimFormComponent } from './claim-form.component';
import { AlertComponent } from '../../shared/alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClaimFormComponent', () => {
  let component: ClaimFormComponent;
  let fixture: ComponentFixture<ClaimFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimFormComponent, AlertComponent],
      imports: [ReactiveFormsModule, CalendarModule, HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); import { from } from 'rxjs';

