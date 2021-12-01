import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UpdateComponent } from './update/update.component';


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
    {
        path: 'users/all',
         component: UsersComponent
    },
    {
        path: 'remove/:id',
          redirectTo:'dashboard'
    },
    {
        path: 'update/:id',
         component: UpdateComponent
    },

 
 
 
];
