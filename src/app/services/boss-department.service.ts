import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BasicRequestService } from './basic-request.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BossDepartmentService extends BasicRequestService {

  constructor( protected http: Http ) {
    super( http, 'Boss_departments')
  }
}
