import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { DateParserService } from '../../../../../services/date-parser.service';

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
        private dateParserService: DateParserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.parseRequisitionsDate();
    }

    selectedElementHandler( element ) {
        this.selectedRequisition = element;
        const route = '/aprovements/requisition-details';
        const { id } = this.selectedRequisition[0];
        this.router.navigate([ route, id ])
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
