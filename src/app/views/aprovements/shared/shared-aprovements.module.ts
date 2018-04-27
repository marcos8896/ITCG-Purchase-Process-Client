import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AprovementsComponent } from './../aprovements.component';
import { SelectableTableModule } from './../../../shared/selectable-table/selectable-table.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Exported components
import { CollapseDepartmentComponent } from './components/collapse-departmen/collapse-departments.component';
import { TableRequisitionComponent } from './components/table-requisition/table-requisition.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxDatatableModule,
        CollapseModule.forRoot(),
        SelectableTableModule
    ],
    exports: [
        CollapseDepartmentComponent,
        TableRequisitionComponent
    ],
    declarations: [
        CollapseDepartmentComponent,
        TableRequisitionComponent
    ],
    providers: [],
})
export class SharedAprovementsModule { }
