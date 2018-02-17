import { BossDepartmentInterface } from 'app/models/boss-department';
import { VicePrincipalInterface } from './../../../models/vice-principal';
import { VicePrincipalService } from 'app/services/vice-principal.service';
import { BossDepartmentService } from 'app/services/boss-department.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'app-roles',
    templateUrl: 'roles.component.html'
})

export class RolesComponent implements OnInit {
    public bossDepartments: BossDepartmentInterface[];
    public vicePrincipals: VicePrincipalInterface[];
    constructor(
        private bossDepartmentService: BossDepartmentService,
        private vicePrincipalService: VicePrincipalService
    ) { }

    ngOnInit() {
        this.getAllVicePrincipals()
        this.getAllBosses()
    }

    getAllBosses() {
        this.bossDepartmentService.getAll()
            .subscribe( data => {
                console.log(data)
                this.bossDepartments = data;
            })
    }

    getAllVicePrincipals() {
        this.vicePrincipalService.getAll()
            .subscribe( data => this.vicePrincipals = data)
    }

    handleBossUpdated( user ) {
        this.getAllBosses()
    }

    handleSubUpdated( user ) {
        this.getAllVicePrincipals()
    }

}
