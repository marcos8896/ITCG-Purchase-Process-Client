import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ConfigUrlService } from 'app/services';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlanningService {
    private headers: Headers
    private endPoint: string

    constructor( private http: Http ) {
        this.endPoint = `${ConfigUrlService.BASE_URL}/Plannings`
        this.headers = new Headers({ 'Content-Type': 'application/json' })
    }

    addBoss( id: string ): Observable<any> {
        return this.http.post(`${this.endPoint}/addBoss/${id}`, { }, { headers: this.generateHeaderObject() })
            .map( res => res.json() || {} )
            .catch( this.handleError );
    }

    addVicePrincipal( id: string ): Observable<any> {
        return this.http.post(`${this.endPoint}/addVicePrincipal/${id}`, { }, { headers: this.generateHeaderObject() })
            .map( res => res.json() || {} )
            .catch( this.handleError );
    }

    removeBoss( id: string ): Observable<any> {
        return this.http.delete(`${this.endPoint}/removeBoss/${id}`, { headers: this.generateHeaderObject() })
            .map( res => res.json() || {} )
            .catch( this.handleError );
    }

    removeVicePrincipal( id: string ): Observable<any> {
        return this.http.delete(`${this.endPoint}/removeVicePrincipal/${id}`, { headers: this.generateHeaderObject() })
            .map( res => res.json() || {} )
            .catch( this.handleError );
    }

    private handleError(error: Response) {
        return Observable.throw(error.json() || 'Server error')
    }
    
    private generateHeaderObject(): Headers {
        const headers = Object.create(this.headers);
        headers.set('Authorization', JSON.parse(localStorage.getItem('ITCG_token')));
        return headers;
    }

    /**
     * getRequisitionsToSign
     * 
     * Gets all the requisitions so the planning user can aprove or cancel
     */
    public getRequisitionsToSign() {
        return this.http.get(`${this.endPoint}/getRequisitionsToSign`, {
            headers: this.generateHeaderObject()
        })
        .map( res => res.json() || {})
        .catch( this.handleError );
    }
}
