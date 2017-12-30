import { BudgetKeyEditComponent } from './components/budget-key-edit/budget-key-edit.component';
import { BudgetKeyRoutingModule } from './budget-key.routing';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BudgetKeyCreateComponent } from 'app/views/warehouse/budget-key/components/budget-key-create/budget-key-create.component';
import { BudgetKeysComponent } from 'app/views/warehouse/budget-key/components/budget-keys/budget-keys.component';
import { BudgetKeyComponent } from 'app/views/warehouse/budget-key/budget-key.component';

@NgModule({
  imports: [
    BudgetKeyRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    BudgetKeyEditComponent,
    BudgetKeyCreateComponent,
    BudgetKeysComponent,
    BudgetKeyComponent
  ]
})
export class BudgetKeyModule { }
