import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-table-requisition',
    templateUrl: 'table-requisition.component.html'
})

export class TableRequisitionComponent implements OnInit {
    @Input() requisitions: any;
    public selectedRequisition: any[] = [];
    public columns = [
        { name: 'Jefe ID', prop: 'boss_departmentId'},
        { name: 'Fecha', prop: 'date'},
        { name: 'Acción', prop: 'action'}
    ];
    public providerTableMessages = {
        primaryTable: 'Selecciona una requisición',
        secondaryTable: 'Requisición seleccionada',
        noSelection: 'Seleccione una requisición, por favor'
    };
    public columnsSize = 12;

    constructor() { }

    ngOnInit() {
        this.requisitions.forEach( requisition => {
            

        })

    }

    selectedElementHandler( element ) {
        this.selectedRequisition = element;
        console.log(this.selectedRequisition);
    }
    
}
