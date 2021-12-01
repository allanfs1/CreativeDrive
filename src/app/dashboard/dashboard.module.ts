import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { UserServiceComponent } from './shared/user-service/user-service.component';



@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    MainComponent,
    UserServiceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
