import { PlanningService } from './../../../services/planning.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-planning-aprovements',
    templateUrl: 'planning-aprovements.component.html'
})

export class PlanningAprovementsComponent implements OnInit {
    public departments: any[];
    constructor(
        private planningService: PlanningService
    ) {
        this.departments = [];
    }

    ngOnInit() { }

    getRequisitions() {
        
    }
}
