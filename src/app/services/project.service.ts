import { Http } from '@angular/http';
import { BasicRequestService } from 'app/services/basic-request.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService extends BasicRequestService {

  constructor( protected http: Http ) {
    super( http, 'Projects')
  }

}
