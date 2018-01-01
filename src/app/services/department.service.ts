import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BasicRequestService } from './basic-request.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentService extends BasicRequestService {
  constructor( protected http: Http ) {
    super( http, 'Departments' )
   }

   public allDepartmentRelations(): Observable<any[]> { 
    return this.http.get(`${this.endPoint}?filter[include]=subdirection`)
      .map(res => res.json() || { }, console.log(this.endPoint))
      .catch(err => JSON.stringify(err));
  }
  
}
