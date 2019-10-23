import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimFormComponent } from './pages/claim-form/claim-form.component';
import { ApproverLoginComponent } from './pages/approver/approver-login/approver-login.component';
import { ApproverDashboardComponent } from './pages/approver/approver-dashboard/approver-dashboard.component';
import { ClaimDetailsComponent } from './pages/approver/claim-details/claim-details.component';


const routes: Routes = [
  { path: '', component: ClaimFormComponent },
  { path: 'login', component: ApproverLoginComponent },
  { path: 'dashboard', component: ApproverDashboardComponent },
  { path: 'claim-detail/:id', component: ClaimDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
