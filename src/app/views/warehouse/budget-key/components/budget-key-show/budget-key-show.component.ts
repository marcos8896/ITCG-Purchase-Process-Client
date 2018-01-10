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
    })
  }

  getBudgetKeyWithItsDetails(): void {
    this.budgetKeyService.getBudgetKeyWithItsDetails( this.id )
      .subscribe( data => {
        this.budgetKey = data;
        console.log('this.budgetKey: ', this.budgetKey);
    });
  }
}
