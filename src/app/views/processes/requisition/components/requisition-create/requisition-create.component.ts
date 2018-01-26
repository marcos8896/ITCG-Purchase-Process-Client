import { ProductInterface } from './../../../../../models/product';
import { Concept } from 'app/models/concept';
import { Component, OnInit, ViewChild } from '@angular/core';

import { SubdirectionService } from './../../../../../services/subdirection.service';
import { BudgetKeyInterface } from './../../../../../models/budget-key';
import { BudgetKeyService } from 'app/services';
import { ConceptService } from 'app/services/concept.service';

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
  public concept: any;
  public conceptDescription: any;
  
  public products: any[] = []
  public product: ProductInterface

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

  onSelectConcept( value ): void {
    this.conceptDescription = value
    this.concept = this.concepts.filter(concept => concept.description == value)
    console.log('this.concept: ', this.concept);
  }

  onSubmitProduct( values ) {
    let val: any = { prod: this.product }
    this.products.push( val )
  }
}
