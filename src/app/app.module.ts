import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SurveyComponent } from './survey/survey.component';
import { loginService } from './login-page.service';
import { Admin1Component } from './admin-login/admin1/admin1.component';
import { Admin2Component } from './admin-login/admin2/admin2.component';
import { Admin3Component } from './admin-login/admin3/admin3.component';
import { HeadingComponentComponent } from './heading-component/heading-component.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackDisplayComponent } from './feedback-list/feedback-display/feedback-display.component';
import { TextHighlightDirective } from './Directives/text-highlight.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    ForgotPasswordComponent,
    RegisterUserComponent,
    SurveyComponent,
    Admin1Component,
    Admin2Component,
    Admin3Component,
    HeadingComponentComponent,
    FeedbackListComponent,
    FeedbackDisplayComponent,
    TextHighlightDirective,
  ],
  bootstrap: [AppComponent],
  providers: [loginService],
})
export class AppModule {}
