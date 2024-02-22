import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterExhibitorsRoutingModule } from './register-exhibitors-routing.module';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';


@NgModule({
  declarations: [
    Form1Component,
    Form2Component,
    Form3Component
  ],
  imports: [
    CommonModule,
    RegisterExhibitorsRoutingModule
  ]
})
export class RegisterExhibitorsModule { }
