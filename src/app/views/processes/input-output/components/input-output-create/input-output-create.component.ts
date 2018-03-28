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

  public products$: Observable<any[]>
  public products: any[] = []
  public behaviorSubject: BehaviorSubject<any[]>

  public dateRe = new Date()

  constructor(
    private activatedRoute: ActivatedRoute,
    private requisitionService: RequisitionService
  ) { }

  ngOnInit() {
    this.getRequisition()

    this.behaviorSubject = new BehaviorSubject<any[]>( this.products );
    this.products$ = this.behaviorSubject.map( data => data.map( a => a ))   
  }

  getRequisition() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.requisitionService.findById( this.id , {
        include : ['provider','concept_requisition', 'boss_department', 'budget_key']
      }).subscribe( res => {
        console.log('res: ', res);
        this.requisition = res;
        this.products = res.concept_requisition;
        this.behaviorSubject.next(this.products);
      })
    })
  }

  close( val ){
    this.products = this.products.filter( product => product.description !== val )
    this.behaviorSubject.next( this.products )
  }

  onQuantity(quantity, id){
    console.log('event: ', quantity, id);
    this.products.forEach( product => {
      if (product.id == id)
        product.quantity = quantity;
    })
    this.behaviorSubject.next( this.products )
  }

  onCost(cost, id){
    console.log('cost, id: ', cost, id);
    this.products.forEach( product => {
      if (product.id == id)
        product.cost = cost;
    })
    this.behaviorSubject.next( this.products )
  }

  jiji(){
    console.log(this.products);
  }

}
