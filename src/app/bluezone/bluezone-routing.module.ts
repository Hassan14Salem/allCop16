import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BluemainComponent } from './bluemain/bluemain.component';

const routes: Routes = [
  {path: '', component : BluemainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BluezoneRoutingModule { }
