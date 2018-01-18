import { Component, OnInit } from '@angular/core';

import { SubdirectionService } from './../../../../../services/subdirection.service';
import { BudgetKeyInterface } from './../../../../../models/budget-key';
import { Concept } from './../../../../../models/concept';

import { BudgetKeyService, UserService } from 'app/services';
import { ConceptService } from 'app/services/concept.service';

@Component({
  selector: 'app-requisition-create',
  templateUrl: './requisition-create.component.html',
  styleUrls: ['./requisition-create.component.scss']
})
export class RequisitionCreateComponent implements OnInit {
  public budgetKeys: BudgetKeyInterface
  public concepts: Concept
  public actions: any[]

  constructor( 
    private budgetKeyService: BudgetKeyService, 
    private conceptService: ConceptService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getBudgetKeys()
    this.getConcepts()
  }

  getBudgetKeys(): void {
    this.budgetKeyService.getAll()
    .subscribe ( data => {
      this.budgetKeys = data;
    });
  }

  getConcepts(): void {
    this.conceptService.getAll()
    .subscribe ( data => {
      this.concepts = data;
    });
  }

  onSelectBudget( value ): void {
    console.log(value)
    this.budgetKeyService.findById( value, {
      include: ['budget_key_details']
    }).subscribe( data => {
        this.actions = data;
        console.log('this.budgetKey: ', this.actions);
    });
  }
  
  nothing(){
    
  }
  

}
