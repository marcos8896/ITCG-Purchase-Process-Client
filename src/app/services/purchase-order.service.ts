import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BasicRequestService } from './basic-request.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PurchaseOrderService extends BasicRequestService {

  constructor( protected http: Http ) {
    super( http, 'Purchase_orders')
  }
}
