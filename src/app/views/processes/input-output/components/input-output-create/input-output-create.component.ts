import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { RequisitionService } from './../../../../../services/requisition.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-create',
  templateUrl: './input-output-create.component.html',
  styleUrls: ['./input-output-create.component.scss']
})
export class InputOutputCreateComponent implements OnInit {

  public id: any
  public requisition: any
  public bill: any

  public total: any = 0
  public total$: Observable<any>
  public behaviorSubjectTotal: BehaviorSubject<any>

  public products$: Observable<any[]>
  public products: any[] = []
  public behaviorSubject: BehaviorSubject<any[]>

  public dateRe = new Date()
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private requisitionService: RequisitionService
  ) { }

  ngOnInit() {
    this.behaviorSubject = new BehaviorSubject<any[]>( this.products );
    this.products$ = this.behaviorSubject.map( data => data.map( a => a ))   

    this.behaviorSubjectTotal = new BehaviorSubject<any>( this.total );
    this.total$ = this.behaviorSubjectTotal.map( data => data)   
    this.getRequisition()    
    console.log('dateRe: ', this.dateRe);
  }

  initializateCosts(){
    this.products.forEach( product => {
      product.cost = 0;
    })
    this.behaviorSubject.next( this.products )
    this.getTotal();
  }

  getRequisition() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.requisitionService.findById( this.id , {
        include : ['provider','concept_requisition', 'boss_department', 'budget_key']
      }).subscribe( res => {
        this.requisition = res;
        this.products = res.concept_requisition;
        this.behaviorSubject.next(this.products);
        this.initializateCosts();        
      })
    })
  }

  close( val ){
    this.products = this.products.filter( product => product.description !== val )
    this.behaviorSubject.next( this.products )
    this.getTotal()
  }

  onQuantity(quantity, id){
    this.products.forEach( product => {
      if (product.id == id){
        if (quantity == '')
          product.quantity = 0;
        else
          product.quantity = quantity;          
      }        
    })
    this.behaviorSubject.next( this.products )
    this.getTotal()
  }

  onCost(cost, id){
    this.products.forEach( product => {
      if (product.id == id){
        if (cost == '')
          product.cost = 0;
        else
        product.cost = cost;
      }        
    })
    this.behaviorSubject.next( this.products )
    this.getTotal()
  }

  getTotal(){
    this.total = 0;
    this.products.forEach( product => {
      this.total += ( product.quantity * product.cost )
    })
    this.behaviorSubjectTotal.next( this.total )
  }

  onFormInputOutput(values){
    console.log('values: ', values);

  }

}
