import { Component, OnInit, ViewChild } from '@angular/core';

import { SubdirectionService } from './../../../../../services/subdirection.service';
import { BudgetKeyInterface } from './../../../../../models/budget-key';
import { BudgetKeyService } from 'app/services';
import { ConceptService } from 'app/services/concept.service';

import { Concept } from './../../../../../models/concept';

@Component({
  selector: 'app-requisition-create',
  templateUrl: './requisition-create.component.html',
  styleUrls: ['./requisition-create.component.scss']
})
export class RequisitionCreateComponent implements OnInit {
  public budgetKeys: BudgetKeyInterface[]
  public concepts: Concept[]
  public actions: any[] = []
  public requisition: any[]
  public action: String = ""
  
  public products: any[] = []
  public product: Object = { 
    budget : Number,
    concept: Number,
    quantity: Number,
    unit: String,
    price: Number,
    description: String
  }
  @ViewChild('budgetSelect') Selection: any;

  constructor( 
    private budgetKeyService: BudgetKeyService, 
    private conceptService: ConceptService,
  ) { }

  ngOnInit() {
    this.getBudgetKeys()
  }

  getBudgetKeys(): void {
    this.budgetKeyService.getAll()
    .subscribe ( data => {
      this.budgetKeys = data;
      this.getConcepts()
    });
  }

  getConcepts(): void {
    this.conceptService.getAll()
    .subscribe ( data => {
      this.concepts = data;
    });
  }

  onSelectBudget( value ): void {
    this.budgetKeyService.findById( value, {
      include: ['budget_key_details']
    }).subscribe( data => {
        this.actions = data;
        console.log('Actions: ', this.actions);
    });
  }
  
  onSelectAction( value ): void {
    this.action = value
    console.log(this.action)
  }

  onSubmitProduct( values) {
    let val: any = { prod: this.product }
    this.products.push( val )
  }
}
