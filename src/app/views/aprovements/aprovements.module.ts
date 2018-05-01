import { RequisitionDetailsComponent } from './components/requisition-details/requisition-details.component';
import { SelectableTableModule } from './../../shared/selectable-table/selectable-table.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AprovementsRoutingModule } from './aprovements.routing';
import { NgModule } from '@angular/core';

import { AprovementsComponent } from './aprovements.component';

@NgModule({
    imports: [
        AprovementsRoutingModule,
        CommonModule,
        FormsModule,
        NgxDatatableModule,
        CollapseModule.forRoot(),
        SelectableTableModule,
    ],
    exports: [],
    declarations: [
        AprovementsComponent,
        RequisitionDetailsComponent
    ],
    providers: [],
})

export class AprovementsModule { }
