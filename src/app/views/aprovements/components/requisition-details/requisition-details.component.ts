import { ToastrService } from 'ngx-toastr';
import { REQUISITION_STATES } from './../../../../shared/_requisition_states';
import { filters } from './_filter-requisition';
import { RequisitionService } from './../../../../services/requisition.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';


@Component({
    selector: 'app-requisition-details',
    templateUrl: 'requisition-details.component.html'
})

export class RequisitionDetailsComponent implements OnInit, OnDestroy {
    private subscriber: any;
    public requisition: any;
    public selectedConcept: any[] = [];
    public columns = [
        { name: 'ID Partida', prop: 'conceptId'},
        { name: 'Descripción', prop: 'description'},
        { name: 'Cantidad', prop: 'quantity'}
    ];
    public tableMessages = {
        primaryTable: 'Selecciona una requisición',
        secondaryTable: 'Requisición seleccionada',
        noSelection: 'Seleccione una requisición, por favor'
    };
    public columnsSize = 12;
    constructor(
        private activatedRoute: ActivatedRoute,
        private requisitionService: RequisitionService,
        private location: Location,
        private toastrService: ToastrService,
    ) { }

    ngOnInit() {
        this.fetchIdFromUrl()
            .then( id => this.fetchRequisition(id))
            .catch( err => console.log(err))
    }

    fetchIdFromUrl() {
        return new Promise((resolve, reject) => {
            const params = this.activatedRoute.params;
            this.subscriber = params.subscribe(
                parameters => resolve(parameters['id']),
                error => reject(error),
                () => console.log('Complete'));
        })
    }

    fetchRequisition( id ) {
        this.requisitionService.findById( id, filters )
            .subscribe( requisition => {this.requisition = requisition; console.log(this.requisition)});
    }

    selectedElementHandler( element ) { }
   
    goBack() {
       this.location.back();
    }

    acceptRequisition() {
        const { id } = this.requisition;
        const { ACEPTADA } = REQUISITION_STATES;
        this.requisitionService.checkSubdirection( id, ACEPTADA )
            .subscribe( res => this.showSuccess('La requisición ha sido aceptada'),
                        error => this.showError(error));
    }

    cancelRequisition() {
        const { id } = this.requisition;
        const { CANCELADA } = REQUISITION_STATES;
        this.requisitionService.checkSubdirection( id, CANCELADA )
            .subscribe( res => this.showSuccess('La requisición ha sido cancelada'),
                        error => this.showError(error));
    }

    showSuccess( message ) {
        this.toastrService.success(message, 'Requisición atendida');
        this.goBack();
    }

    showError( error ) {
        console.log(error);
        this.toastrService.warning(error, '¡Ha numa!')
    }

    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }

}
