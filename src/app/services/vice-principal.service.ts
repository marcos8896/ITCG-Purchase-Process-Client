import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VicePrincipalService {

    constructor( private http: Http ) {
        super( http, 'Vice_principals' )
     }
}