import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BluezoneRoutingModule } from './bluezone-routing.module';
import { BluemainComponent } from './bluemain/bluemain.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BluePlanComponent } from './blue-plan/blue-plan.component';


@NgModule({
  declarations: [
    BluemainComponent,
    BluePlanComponent
  ],
  imports: [
    CommonModule,
    BluezoneRoutingModule,
    CarouselModule,
  ]
})
export class BluezoneModule { }
