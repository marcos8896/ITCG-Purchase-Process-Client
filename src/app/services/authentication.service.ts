import { ConfigUrlService } from './config.url.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http/';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
    private headers: Headers
    private endPoint: string

    constructor( private http: Http ) {
        this.endPoint = `${ConfigUrlService.BASE_URL}/Users`
        this.headers = new Headers({ 'Content-Type': 'application/json' })
    }
    
    login( username: string, password: string ) {
        return this.http.post(`${this.endPoint}/login`, { username, password })
            .map( (response: any) => {
                console.log(response)
                if ( response && response.id ) {
                    localStorage.setItem('ITCGToken', JSON.stringify(response.id));
                    localStorage.setItem('userId', JSON.stringify(response.userId));
                }
 
                return response;
            })
            .catch( this.handleError )
    }
    
    logout() {
        localStorage.removeItem('ITCGToken');
        localStorage.removeItem('userId');
    }
    private handleError( error: Response ) {
        return Observable.throw( error.json() || 'Server error' )
    }

}
