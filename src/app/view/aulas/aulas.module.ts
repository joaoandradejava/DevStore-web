import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulasRoutingModule } from './aulas-routing.module';
import { AulasComponent } from './aulas.component';


@NgModule({
  declarations: [
    AulasComponent
  ],
  imports: [
    CommonModule,
    AulasRoutingModule
  ]
})
export class AulasModule { }
