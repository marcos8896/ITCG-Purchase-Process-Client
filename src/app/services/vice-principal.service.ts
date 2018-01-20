import { BasicRequestService } from './basic-request.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VicePrincipalService extends BasicRequestService{

    constructor( protected http: Http ) {
        super( http, 'Vice_principals' )
     }
}
