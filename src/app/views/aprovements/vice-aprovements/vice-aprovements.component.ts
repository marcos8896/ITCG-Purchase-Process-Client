import { SubdirectionService } from 'app/services/subdirection.service';
import { VicePrincipalService } from './../../../services/vice-principal.service';
import { BossDepartmentService } from 'app/services/boss-department.service';
import { RequisitionService } from './../../../services/requisition.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'app-vice-aprovements',
    templateUrl: './vice-aprovements.component.html',
    styleUrls: ['./vice-aprovements.component.scss']
})

export class ViceAprovementsComponent implements OnInit {

    public departments: any[];

    constructor( 
        private vicePrincipalService: VicePrincipalService
    ) { 
        this.departments = [];        
    }
    
    ngOnInit() {
        this.getRequisitions();
    }


    
    getRequisitions() {
        this.vicePrincipalService.getRequisitionsToSign()
            .subscribe( res =>
                this.departments = res.result.subdirection.department);
    }

    
}
