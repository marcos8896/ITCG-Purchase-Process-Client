import { Http } from '@angular/http';
import { BasicRequestService } from './basic-request.service';
import { Injectable } from '@angular/core';

@Injectable()
export class InputOutputService extends BasicRequestService {

  constructor( protected http: Http ) {
    super( http, 'Input_outputs')
  }
}