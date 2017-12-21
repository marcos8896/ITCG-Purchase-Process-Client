import { ConfigUrlService } from './config.url.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class BasicRequestService {
  protected headers: Headers

  constructor( protected http: Http, protected endPoint: string ) {
    this.endPoint = `${ConfigUrlService.BASE_URL}/${endPoint}`
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }

  public all(): Observable<any[]> {
    return this.http.get(`${this.endPoint}`)
      .map(res => res.json() || { })
      .catch(err => JSON.stringify(err));
  }

  public create( obj ): Observable<any> {
    return this.http.post(`${this.endPoint}`, obj, { headers: this.headers })
      .map( res => res.json() || {})
      .catch( this.handleError );
  }

  public findById( id ): Observable<any> {
    return this.http.get(`${this.endPoint}/${id}`)
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  public update( obj ): Observable<any> {
    return this.http.put(`${this.endPoint}/${obj.provider_id}`, obj, { headers: this.headers })
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  private handleError(error: Response) {
    return Observable.throw(error.json()|| 'Server error')
  }

}
