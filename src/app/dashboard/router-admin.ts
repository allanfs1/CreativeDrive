import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes } from '@angular/router';


export const AdminLayoutRoutes: Routes = [
    {
        path:' ',
        redirectTo:'dashboard'
     },
 
    {
         path: 'dashboard', 
              component: MainComponent
    },
    {
        path: 'login', 
           component: LoginComponent
     },
    {
     path: 'profile',
      component: ProfileComponent
    },
 
];
