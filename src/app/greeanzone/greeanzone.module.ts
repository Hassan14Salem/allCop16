import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreeanzoneRoutingModule } from './greeanzone-routing.module';
import { GreenmainComponent } from './greenmain/greenmain.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    GreenmainComponent
  ],
  imports: [
    CommonModule,
    GreeanzoneRoutingModule,
    HomeModule
  ]
})
export class GreeanzoneModule { }
