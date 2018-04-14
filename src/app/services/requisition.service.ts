import { ConfigUrlService } from './config.url.service';
import { Http } from '@angular/http';
import { BasicRequestService } from './basic-request.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequisitionService extends BasicRequestService {

  constructor( protected http: Http ) {
    super( http, 'Requisitions');
    
  }
  
  /**
   * Change the status in the field check_subdirection from Requisition
   * 
   * @param id Requisition id
   * @param status can be any value from {REQUISITION_STATES}
   */
  checkSubdirection( id, status ) {
    return this.http.patch(`${this.endPoint}/${id}`,
                    { check_subdirection: status },
                    { headers: this.generateHeaderObject() } )
        .map( res => res.json() || {} )
        .catch( this.handleError );
  }

  /**
   * Change the status in the field check_planning from Requisition
   * 
   * @param id Requisition id
   * @param status can be any value from {REQUISITION_STATES}
   */
  checkPlanning( id, status ) {
    return this.http.patch(`${this.endPoint}/${id}`,
                    { check_planning: status },
                    { headers: this.generateHeaderObject() } )
        .map( res => res.json() || {} )
        .catch( this.handleError );
  }
}
