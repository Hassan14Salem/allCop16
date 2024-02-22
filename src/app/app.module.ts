import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RegisterExhibitorsModule } from './register-exhibitors/register-exhibitors.module';
import { RegisterGreenZoneModule } from './register-green-zone/register-green-zone.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RegisterExhibitorsModule,
    RegisterGreenZoneModule,
    CarouselModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
