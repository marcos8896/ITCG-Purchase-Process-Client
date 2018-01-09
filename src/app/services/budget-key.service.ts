import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BasicRequestService } from './basic-request.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BudgetKeyService extends BasicRequestService {

  constructor( protected http: Http ) {
    super( http, 'Budget_keys')
  }

  public getBudgetKeysWithTheirSubdirectionPrograms(): Observable<any[]> { 
    return this.http.get(`${this.endPoint}?filter[include]=subdirection&filter[include]=program`)
      .map(res => res.json() || { }, console.log(this.endPoint))
      .catch(err => JSON.stringify(err));
  }

  public getBudgetKeyWithItsDetails( budgetKeyId ): Observable<any[]> { 
    return this.http.get(`${this.endPoint}/${ budgetKeyId }?filter[include]=budget_key_details`)
      .map(res => res.json() || { })
      .catch(err => JSON.stringify(err));
  }
}
