import { BossDepartmentsService } from './../../../../../services/boss-department';
import { ProviderService } from './../../../../../services/provider.service';
import { Provider } from './../../../../../models/provider';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ProductInterface } from './../../../../../models/product';
import { Concept } from 'app/models/concept';
import { Component, OnInit, ViewChild } from '@angular/core';

import { SubdirectionService } from './../../../../../services/subdirection.service';
import { BudgetKeyInterface } from './../../../../../models/budget-key';
import { BudgetKeyService, UserService } from 'app/services';
import { ConceptService } from 'app/services/concept.service';

@Component({
  selector: 'app-requisition-create',
  templateUrl: './requisition-create.component.html',
  styleUrls: ['./requisition-create.component.scss']
})
export class RequisitionCreateComponent implements OnInit {
  public budgetKeys: BudgetKeyInterface[]
  public concepts: any[] = []
  public providers: Provider[]
  public actions: any[] = []

  public action: String = ""
  public concept: any;
  public conceptDescription: any;
  
  public products$: Observable<any[]>
  public products: any[] = []
  public behaviorSubject: BehaviorSubject<any[]>

  public quantity: any = 0
  public conceptNumber: any = 0
  public unit: String = ""
  public description: String = ""
  public status: String = ""
  public requisitionId: any = 0
  public cost: any = 0  

  public dateRe = new Date()

  constructor( 
    private budgetKeyService: BudgetKeyService, 
    private conceptService: ConceptService,
    private providerService: ProviderService,
    private bossDepartmentsService: BossDepartmentsService
  ) { }

  ngOnInit() {
    console.log(this.dateRe);
    this.getBudgetKeys()
    this.getProviders()
    this.behaviorSubject = new BehaviorSubject<any[]>( this.products );
    this.products$ = this.behaviorSubject.map( data => data.map( a => a ))   
    
    this.bossDepartmentsService.findById(JSON.parse(localStorage.getItem("ITCG_userId")), { include: ['department'] }).subscribe( res => console.log(res))
  }

  cleanProduct(){
    this.quantity = 0
    this.unit = ""
    this.description = " "
    this.cost = 0
  }

  getBudgetKeys(): void {
    this.budgetKeyService.getAll()
    .subscribe ( data => {
      this.budgetKeys = data;
      this.getConcepts()
    });
  }

  getProviders(): void {
    this.providerService.getAll()
    .subscribe ( data => {
      this.providers = data;
    });
  }

  getConcepts(): void {
    this.conceptService.getAll()
    .subscribe ( data => {
      this.concepts = data;
    });
  }

  onSelectDate( value ) {
    console.log('value: ', value);

  }

  onSelectBudget( value ): void {
    this.budgetKeyService.findById( value, {
      include: ['budget_key_details']
    }).subscribe( data => {
        this.actions = data;
    });
  }
  
  onSelectAction( value ): void {
    this.action = value
  }

  onSelectConcept( value ): void {
    this.conceptDescription = value
    this.concept = this.concepts.filter(concept => concept.description == value)
    this.conceptNumber = this.concept[0].concept_number;
  }

  onSubmitProduct() {
    let total = this.cost * this.quantity
    let product = {quantity: this.quantity, unit: this.unit, description: this.description, concept: this.conceptNumber,cost: this.cost, total }
    this.products.push( product )
    this.behaviorSubject.next( this.products )
    this.cleanProduct()
  }

  onFormRequisition( value ) {
    console.log('value: ', value);
    var products: any[] = [];
    this.products.forEach( product => {
      var concept = this.concepts.filter(concept => concept.concept_number == product.concept)
      let producto = {quantity: product.quantity, unit: product.unit, description: product.description,conceptId: concept[0].id}
      products.push(producto)
    })
    var req = {date: value.date, action: this.action, providerId: value.provider_, budget_keyId: value.budgetKey_, status: "Esperando", Concept_Requisition: products}
    
    console.log('Objeto final', req);
  }
}
