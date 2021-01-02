import { ListUsersComponent } from './list-users.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material-module.module';

const routes: Routes = [
  { path: '', component: ListUsersComponent }
]

@NgModule({
  declarations: [ListUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class ListUsersModule { }
