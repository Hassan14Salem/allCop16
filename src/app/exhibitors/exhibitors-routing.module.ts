import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhibitorsMainComponent } from './exhibitors-main/exhibitors-main.component';

const routes: Routes = [
  {path:'',component:ExhibitorsMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitorsRoutingModule { }
