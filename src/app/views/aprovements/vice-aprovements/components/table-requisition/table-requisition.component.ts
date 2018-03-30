import { DateParserService } from './../../../../../services/date-parser.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-table-requisition',
    templateUrl: 'table-requisition.component.html'
})

export class TableRequisitionComponent implements OnInit {
    @Input() requisitions: any;
    public selectedRequisition: any[] = [];
    public columns = [
        { name: 'Fecha', prop: 'date'},
        { name: 'Acción', prop: 'action'}
    ];
    public providerTableMessages = {
        primaryTable: 'Selecciona una requisición',
        secondaryTable: 'Requisición seleccionada',
        noSelection: 'Seleccione una requisición, por favor'
    };
    public columnsSize = 12;

    constructor(
        private dateParserService: DateParserService
    ) { }

    ngOnInit() {
        this.parseRequisitionsDate();
    }

    selectedElementHandler( element ) {
        this.selectedRequisition = element;
        console.log(this.selectedRequisition);
    }

    parseRequisitionsDate() {
        const parser = this.dateParserService;
        const parserOptions = {
            locale: 'es',
            format: 'LLL' 
        };

        this.requisitions.forEach( requisition => {
            const { date } = requisition;
            requisition.date = parser.formatDate(date, parserOptions);
        })
    }
    
}
