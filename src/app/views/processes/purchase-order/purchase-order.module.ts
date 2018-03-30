import { SelectableTableModule } from './../../../shared/selectable-table/selectable-table.module';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { PurchaseOrderRoutingModule } from './purchase-order.routing';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  imports: [
    PurchaseOrderRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    TabsModule,
    SelectableTableModule
  ],
  declarations: [
    PurchaseOrderCreateComponent,
  ]
})
export class PurchaseOrderModule { }