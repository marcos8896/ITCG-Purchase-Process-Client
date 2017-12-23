import { Http } from '@angular/http';
import { BasicRequestService } from '../services/basic-request.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SubdirectionService extends BasicRequestService {

  constructor( protected http: Http ) {
    super( http, 'Subdirections')
  }

}
