import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'general-8',
    loadChildren: () => import('./bluezone/bluezone.module').then(m => m.BluezoneModule)
  },
  {
    path: 'exhibitors',
    loadChildren: () => import('./exhibitors/exhibitors.module').then(m => m.ExhibitorsModule)
  },
  {
    path: 'green-zone',
    loadChildren: () => import('./greeanzone/greeanzone.module').then(m => m.GreeanzoneModule)
  },

  {
    path: 'FAQ',
    loadChildren: () => import('./faq/faq.module').then(m => m.FAQModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
