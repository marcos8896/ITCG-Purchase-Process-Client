import { ConfigUrlService } from 'app/services/config.url.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http/';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RolesService {
    private headers: Headers
    
    constructor( private http: Http ) {
        this.headers = new Headers({ 'Content-Type': 'application/json' })
    }
    
    private handleError(error: Response) {
        return Observable.throw(error.json() || 'Server error')
    }
    private generateHeaderObject(): Headers {
        const headers = Object.create(this.headers);
        headers.set('Authorization', JSON.parse(localStorage.getItem('ITCG_token')));
        return headers;
    }
}
