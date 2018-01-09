import { BudgetKeyDetailsService } from './../../../../../services/budget-key-details.service';
import { BudgetKeyInterface } from 'app/models/budget-key';
import { Router, ActivatedRoute } from '@angular/router';
import { BudgetKeyService } from 'app/services';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-budget-key-show',
  templateUrl: './budget-key-show.component.html',
  styleUrls: ['./budget-key-show.component.scss']
})
export class BudgetKeyShowComponent implements OnInit {
  public id: any
  public budgetKeyId: any
  public budgetKey: BudgetKeyInterface[]
  public budgetKeyDetails: any[]

  constructor(
    private budgetKeyService: BudgetKeyService,
    private BudgetKeyDetailsService: BudgetKeyService,
    private activatedRoute: ActivatedRoute, 
    private router: Router
  ) { 
    this.getUrlId();
  }

  ngOnInit() {
  }

  
  getUrlId() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if( this.id )
        this.getBudgetKeyWithItsDetails();
      //Tío, este código no es necesario, porque al hacer la request con el método de getDetail, ya te traes
      //el Budget_Key con todos sus detalles. Lo puedes borrar gg.
      // if ( this.id ) {
      //   this.budgetKeyService.findById( this.id )
      //   .subscribe( budgetKey => {
      //     this.budgetKey = budgetKey
      //     console.log('this.budgetKey: ', this.budgetKey);
      //   } )
      // }
    })
  }

  getBudgetKeyWithItsDetails(): void {
    //Cambié el url de la request por el formato adecuado. Aunque esta solución es provisional,
    //porque la manera más adecuada es mandarle parámetros, pero luego lo hacemos bien ;)
    this.budgetKeyService.getBudgetKeyWithItsDetails( this.id )
      .subscribe( data => {
        //Aquí viene el objeto Budget_Key junto con sus detalles gg

        //Agregué en la interfaz de budgetKey una propiedad opcional llamada 'budgetKeyDetails?: any []'
        //Para que la cheques ;*
        this.budgetKey = data;
        console.log('this.budgetKey: ', this.budgetKey);
    });
  }
}
