import { MaterialModule } from './../../../shared/modules/material-module.module';
import { AddUserComponent } from './add-user.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidateEqualModule } from 'ng-validate-equal';



const routes: Routes = [
  { path: '', component: AddUserComponent }
]
@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ValidateEqualModule
  ],
})
export class AddUserModule { }
