import { ConfigUrlService } from './config.url.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BasicRequestService {
  private endPoint: string
  private headers: Headers
  constructor( private http: Http, private configUrlService: ConfigUrlService ) {
    this.endPoint = configUrlService.getBaseUrl()
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }

  public all(): Observable<any[]> {
    return this.http.get(`${this.endPoint}`)
      .map(res => res.json() || { })
      .catch(err =>  JSON.stringify(err));
  }

  public create( obj ): Observable<any> {
    return this.http.post(`${this.endPoint}`, obj, { headers: this.headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }

  // public findById( id ): Observable<Provider> {
  //   return this.http.get(`${this.endPoint}/${id}`)
  //     .map( res => res.json() || {} )
  //     .catch( error => JSON.stringify(error) );
  // }

  // public findByColumn( column: string, value: string ): Observable<Provider[]> {
  //   return this.http.get(`${this.endPoint}/byColumn/${column}/${value}`)
  //     .map( res => res.json() || {} )
  //     .catch( error => JSON.stringify(error) );
  // }

  // public update( provider: Provider ): Observable<any> {
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   return this.http.put(`${this.endPoint}/${provider.provider_id}`, provider, {headers: headers})
  //     .map( res => res.json() || {} )
  //     .catch( error => JSON.stringify(error) );
  // }

  // public delete( id ): Observable<any> { // Not sure if this method works
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   return this.http.delete(`${this.endPoint}/id`, { headers: headers})
  //     .map( res => res.json() || {} )
  //     .catch( error => JSON.stringify(error) );
  // }
}
