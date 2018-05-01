import { SharedAprovementsModule } from './../shared/shared-aprovements.module';
import { NgModule } from '@angular/core';
import { DateParserService } from './../../../services/date-parser.service';

import { PlanningAprovementsComponent } from './planning-aprovements.component';
import { PlanningAprovementsdRoutingModule } from './planning-aprovements.routing';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectableTableModule } from '../../../shared/selectable-table/selectable-table.module';


@NgModule({
    imports: [
        PlanningAprovementsdRoutingModule,
        CommonModule,
        SharedAprovementsModule,
    ],
    exports: [],
    declarations: [PlanningAprovementsComponent],
    providers: [
        DateParserService
    ],
})
export class PlanningAprovementsModule { }
