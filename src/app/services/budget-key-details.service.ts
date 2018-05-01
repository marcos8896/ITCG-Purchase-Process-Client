import { Http } from '@angular/http';
import { BasicRequestService } from './basic-request.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BudgetKeyDetailsService extends BasicRequestService {

  constructor( protected http: Http ) {
    super( http, 'Budget_key_details')
  }

  public updateDetails( array ): Observable<any> {
    return this.http.put(`${this.endPoint}/`, array, { headers: this.generateHeaderObject() })
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

}
