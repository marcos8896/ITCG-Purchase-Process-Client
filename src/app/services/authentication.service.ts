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
        this.endPoint = `${ConfigUrlService.BASE_URL}`
        this.headers = new Headers({ 'Content-Type': 'application/json' })
    }

    isLoggedIn() {
        return localStorage.getItem('ITCG_isLoggedIn') ? true : false
    }

    login( email: string, password: string, lastEndpointEntry: string ) {
        return this.http.post(`${this.endPoint}/${lastEndpointEntry}/login`, { email, password })
            .map(( response: any ) => {
                response = response.json()
                if ( response && response.id ) {
                    localStorage.setItem('ITCG_token', JSON.stringify(response.id));
                    localStorage.setItem('ITCG_userId', JSON.stringify(response.userId));
                    localStorage.setItem('ITCG_isLoggedIn', JSON.stringify(true));
                    localStorage.setItem('ITCG_endPoint', lastEndpointEntry);
                    localStorage.setItem('ITCG_role', JSON.stringify(response.type));

                }
                return response;
            })
            .catch( this.handleError )
    }

    logout() {
        const lastEndpointEntry = localStorage.getItem('ITCG_endPoint');
        return new Promise(( resolve, reject ) => {
            this.headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('ITCG_token'))
            })
            this.http.post(`${this.endPoint}/${lastEndpointEntry}/logout`, { }, { headers: this.headers })
                .subscribe(( response: any ) => {
                    this.flushLocalStorage();
                    resolve( 'Has salido de la sesión')
                },
                error =>  {
                  this.flushLocalStorage();
                  reject({ message: 'Ha ocurrido un error, por favor, inténtelo de nuevo'})
                },
                () => console.log('Complete'))
        })
    }
    
    private handleError( error: Response ) {
        return Observable.throw( error.json() || 'Server error' )
    }

    private flushLocalStorage() {
      localStorage.removeItem('ITCG_token');
      localStorage.removeItem('ITCG_userId');
      localStorage.removeItem('ITCG_isLoggedIn');
      localStorage.removeItem('ITCG_endPoint');
      localStorage.removeItem('ITCG_role');
    }

}
