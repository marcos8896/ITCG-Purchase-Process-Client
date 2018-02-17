import { ConfigUrlService } from './config.url.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http/';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    private headers: Headers
    private endPoint: string

    constructor( private http: Http ) {
        this.endPoint = `${ConfigUrlService.BASE_URL}/`
        this.headers = new Headers({ 'Content-Type': 'application/json' })
    }
    
    public create( lastEntry: string, obj ): Observable<any> {
        return this.http.post(`${this.endPoint}/${lastEntry}`, obj, { headers: this.headers })
            .map( res => res.json() || { } )
            .catch( this.handleError )
    }
    
    private handleError(error: Response) {
        return Observable.throw( error.json() || 'Server error' )
    }

}
