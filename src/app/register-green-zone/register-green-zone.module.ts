import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRegisterComponent } from './main-register/main-register.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    MainRegisterComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class RegisterGreenZoneModule { }
