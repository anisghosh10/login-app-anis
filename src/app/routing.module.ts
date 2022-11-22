import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Admin1Component } from './admin-login/admin1/admin1.component';
import { Admin2Component } from './admin-login/admin2/admin2.component';
import { Admin3Component } from './admin-login/admin3/admin3.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SurveyComponent } from './survey/survey.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLoginComponent,
    children: [
      { path: 'Admin1', component: Admin1Component, outlet: 'admin1' },
      { path: 'Admin2', component: Admin2Component, outlet: 'admin2' },
      { path: 'Admin3', component: Admin3Component, outlet: 'admin3' },
    ],
  },
  {
    path: 'user',
    component: UserLoginComponent,
    children: [
      {
        path: 'forgotPassword',
        component: ForgotPasswordComponent,
      },
      {
        path: 'register',
        component: RegisterUserComponent,
      },
      {
        path: 'survey',
        component: SurveyComponent,
      },
    ],
  },
  {
    path: 'feedback',
    component: FeedbackListComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
