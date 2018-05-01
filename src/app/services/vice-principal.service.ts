import { BasicRequestService } from './basic-request.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VicePrincipalService extends BasicRequestService{

    constructor( protected http: Http ) {
        super( http, 'Vice_principals' )
    }

    /**
     * getRequisitionsToSign
     * 
     * Gets all the requisitions so the vice principal can aprove or cancel
     */
    public getRequisitionsToSign() {
        return this.http.get(`${this.endPoint}/getRequisitionsToSign/${JSON.parse(localStorage.getItem('ITCG_userId'))}`, {
            headers: this.generateHeaderObject()
        })
        .map( res => res.json() || {})
        .catch( this.handleError );
    }
}
