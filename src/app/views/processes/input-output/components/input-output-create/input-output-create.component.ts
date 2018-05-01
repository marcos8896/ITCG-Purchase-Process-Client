import { ToastrService } from 'ngx-toastr';
import { InputOutputDetailsService } from './../../../../../services/input-output-details.services';
import { InputOutputService } from './../../../../../services/input-output.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { RequisitionService } from './../../../../../services/requisition.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  public dateIO = new Date()
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private requisitionService: RequisitionService,
    private inputOutputService: InputOutputService,
    private inputOutputDetailsService: InputOutputDetailsService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.behaviorSubject = new BehaviorSubject<any[]>( this.products );
    this.products$ = this.behaviorSubject.map( data => data.map( a => a ))   

    this.behaviorSubjectTotal = new BehaviorSubject<any>( this.total );
    this.total$ = this.behaviorSubjectTotal.map( data => data)   
    this.getRequisition()    
  }

  initializateCosts(){
    this.products.forEach( product => {
      product.price = 0;
    })
    this.behaviorSubject.next( this.products )
    this.getTotal();
  }

  getRequisition() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this.requisitionService.findById( this.id , {
        include : [
          {relation: 'provider'},
          {relation: 'budget_key'},
          {
            relation: 'concept_requisition',
            scope: {
              fields: ['id', 'conceptId', 'unit', 'quantity', 'description'],
                include: {
                  relation: 'concept',
                  scope: {
                      fields: ['concept_number'],
                  }
                }
              }
          },
          {
            relation: 'boss_department',
            scope: {
            fields: ['id', 'name'],
              include: {
                relation: 'department',
                scope: {
                    fields: ['name'],
                }
              }
            }
          }
          
        ]
      }).subscribe( res => {
        this.requisition = res;
        this.products = [...res.concept_requisition]
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

  onCost(price, id){
    this.products.forEach( product => {
      if (product.id == id){
        if (price == '')
          product.price = 0;
        else
        product.price = price;
      }        
    })
    this.behaviorSubject.next( this.products )
    this.getTotal()
  }

  getTotal(){
    this.total = 0;
    this.products.forEach( product => {
      this.total += ( product.quantity * product.price )
    })
    this.behaviorSubjectTotal.next( this.total )
  }

  onFormInputOutput(values){
    console.log('values: ', values);
    var products: any[] = [];
    
    values.requisitionId = this.requisition.id;
    this.inputOutputService.create(values)
      .subscribe( res =>{
        this.products.forEach(element => {
          products.push({ quantity: element.quantity, unit: element.unit, description: element.description, price: element.price, input_outputId: res.id, conceptId: element.conceptId })
        });
        this.inputOutputDetailsService.create(products)        
          .subscribe( res => {
            this.requisition.status = "Facturado";
            this.requisitionService.update( this.requisition )
              .subscribe( resp => {
                this.showSuccess(); 
                this.router.navigate(['/processes/input-output/all']);
              })
          })
      })
      
    
  }

  showSuccess() {
    this.toastr.success('Registro agregado exitosamente', '¡Registro agregado!')
  }
}
