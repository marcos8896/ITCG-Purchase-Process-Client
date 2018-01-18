import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { RequisitionRoutingModule } from './requisition.routing';
import { RequisitionCreateComponent } from './components/requisition-create/requisition-create.component';

@NgModule({
  imports: [
    RequisitionRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    RequisitionCreateComponent,  
  ]
})
export class RequisitionModule { }