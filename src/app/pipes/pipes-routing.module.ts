import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipesComponent } from './pipes.component';

const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
    children: [
      {
        path: 'generic',
        loadChildren: () => import('./generic-pipes/generic-pipes.module').then(m => m.GenericPipesModule)
      },
      {
        path: 'string',
        loadChildren: () => import('./string-pipes/string-pipes.module').then(m => m.StringPipesModule)
      },
      { path: '', redirectTo: 'generic', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
