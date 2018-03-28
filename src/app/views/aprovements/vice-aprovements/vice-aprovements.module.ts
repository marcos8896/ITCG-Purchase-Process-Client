import { DateParserService } from './../../../services/date-parser.service';
import { SelectableTableModule } from './../../../shared/selectable-table/selectable-table.module';
import { NgModule } from '@angular/core';
import { ViceAprovementsRoutingModule } from './vice-aprovements.routing';

// Custom Components
import { ViceAprovementsComponent } from './vice-aprovements.component';
import { CollapseDepartmentComponent } from './components/collapse-departmen/collapse-departments.component';
import { TableRequisitionComponent } from './components/table-requisition/table-requisition.component';

// Modules
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ViceAprovementsRoutingModule,
        CommonModule,
        FormsModule,
        NgxDatatableModule,
        CollapseModule.forRoot(),
        SelectableTableModule
    ],
    exports: [],
    declarations: [
        ViceAprovementsComponent,
        CollapseDepartmentComponent,
        TableRequisitionComponent
    ],
    providers: [
        DateParserService
    ],
})
export class ViceAprovementsModule { }
