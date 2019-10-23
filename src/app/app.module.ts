/*Default Angular module start*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/*Default Angular module end*/

/*Application components services, pipe, and directives start*/
import { ClaimFormComponent } from './pages/claim-form/claim-form.component';
import { ApproverLoginComponent } from './pages/approver/approver-login/approver-login.component';
import { ApproverDashboardComponent } from './pages/approver/approver-dashboard/approver-dashboard.component';
import { ClaimDetailsComponent } from './pages/approver/claim-details/claim-details.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { FormComponent } from './shared/form/form.component';
import { AlertComponent } from './shared/alert/alert.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { DataServiceService } from './shared/data-service.service';
/*Application components services, pipe, and directives end*/

/*Third party modules start*/
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
/*Third party modules start*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    FormComponent,
    AlertComponent,
    LoaderComponent,
    ClaimFormComponent,
    ApproverLoginComponent,
    ApproverDashboardComponent,
    ClaimDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    CalendarModule,
    CardModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
