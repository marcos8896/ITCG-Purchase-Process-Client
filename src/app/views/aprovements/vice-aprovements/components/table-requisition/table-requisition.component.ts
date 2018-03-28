import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-table-requisition',
    templateUrl: 'table-requisition.component.html'
})

export class TableRequisitionComponent implements OnInit {
    @Input() requisitions: any;
    constructor() { }

    ngOnInit() { }
}
