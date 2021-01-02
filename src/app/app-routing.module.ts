import { ViewComponent } from './shared/components/layout/view/view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },

  {
    path: '', component: ViewComponent, children: [
      { path: 'adduser', loadChildren: () => import('./pages/profile/add-user/add-user.module').then(m => m.AddUserModule) },
      { path: 'edituser/:id', loadChildren: () => import('./pages/profile/add-user/add-user.module').then(m => m.AddUserModule) },
      { path: 'users', loadChildren: () => import('./pages/profile/list-users/list-users.module').then(m => m.ListUsersModule) },
    ]
  },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
