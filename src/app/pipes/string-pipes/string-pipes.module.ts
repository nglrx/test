import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglrxStringPipesModule } from '@nglrx/pipes';

import { StringPipesRoutingModule } from './string-pipes-routing.module';
import { StringPipesComponent } from './string-pipes.component';
import { CamelCaseComponent } from './camel-case/camel-case.component';

@NgModule({
  declarations: [
    StringPipesComponent,
    CamelCaseComponent
  ],
  imports: [
    CommonModule,
    NglrxStringPipesModule,
    StringPipesRoutingModule
  ]
})
export class StringPipesModule { }
