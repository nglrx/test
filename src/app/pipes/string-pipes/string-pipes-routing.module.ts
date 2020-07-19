import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StringPipesComponent } from './string-pipes.component';
import { CamelCaseComponent } from './camel-case/camel-case.component';

const routes: Routes = [
  {
    path: '',
    component: StringPipesComponent,
    children: [
      {
        path: 'camel-case',
        component: CamelCaseComponent
      },
      { path: '', redirectTo: 'camel-case', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StringPipesRoutingModule { }
