import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';

import { SelectableTableComponent } from './selectable-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgxDatatableModule
    ],
    exports: [SelectableTableComponent],
    declarations: [SelectableTableComponent],
    providers: [],
})
export class SelectableTableModule { }
