import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';


export const AdminLayoutRoutes: Routes = [
    {
        path:' ',
        redirectTo:'/login'
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
     path: 'profile/:id',
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
    {
        path: 'views/:id',
         component:ViewComponent
    },
    {
        path: 'create',
         component:CreateComponent
    }


 
];
