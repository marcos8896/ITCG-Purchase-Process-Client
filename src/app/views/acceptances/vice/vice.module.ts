import { ViceRequisitionsComponent } from './components/vice-requisitions/vice-requisitions.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ViceRoutingModule } from 'app/views/acceptances/vice/vice.routing';

@NgModule({
  imports: [
    ViceRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    ViceRequisitionsComponent
      
  ]
})
export class ViceModule { }