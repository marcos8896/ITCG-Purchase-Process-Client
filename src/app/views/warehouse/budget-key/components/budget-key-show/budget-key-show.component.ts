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
    this.getDetail();
  }

  ngOnInit() {
  }

  getUrlId() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.budgetKeyService.findById( this.id )
        .subscribe( budgetKey => this.budgetKey = budgetKey )
      }
    })
  }

  getDetail(): void {
    this.budgetKeyService.getBudgetKeyDetails( this.id )
      .subscribe( data => {
        this.budgetKeyDetails = data;
      console.log('this.budgetKeyDetails: ', this.budgetKeyDetails);
      console.log(JSON.stringify(this.budgetKeyDetails));
    });
  }
}
