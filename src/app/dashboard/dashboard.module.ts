import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import {MatListModule} from '@angular/material/list';
import { UserServiceService } from './shared/user-service.service';
import { AppRoutingModule } from '../app-routing.module';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    MainComponent,
    UsersComponent,
    UpdateComponent,
    LoginComponent,
    ViewComponent,
    CreateComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  providers: [
    UserServiceService
  ]
})
export class DashboardModule { }
