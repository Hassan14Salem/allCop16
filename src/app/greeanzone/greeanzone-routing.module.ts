import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenmainComponent } from './greenmain/greenmain.component';

const routes: Routes = [
  {path:'',component:GreenmainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreeanzoneRoutingModule { }
