import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ViewComponent,
    HeaderComponent,
  ],
  exports: [
    ViewComponent,
    HeaderComponent,
  ],
  entryComponents: [
    ViewComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
