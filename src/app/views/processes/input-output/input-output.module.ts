import { InputOutputCreateComponent } from './components/input-output-create/input-output-create.component';
import { InputOutputRoutingModule } from './input-output.routing';

import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InputOutputsComponent } from './components/input-outputs/input-outputs.component';

@NgModule({
  imports: [
    InputOutputRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    InputOutputCreateComponent,
    InputOutputsComponent
  ]
})
export class InputOutputModule { }