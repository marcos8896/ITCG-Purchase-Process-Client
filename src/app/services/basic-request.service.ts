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

  /**
   * Get all the records that match with the given query params.
   * 
   * @param { Object } where Loopback's where syntax - Example: { where : {property: "text to match"} }
   * @param { string | string[] } include Loopback's include - Example: "myrelation1" | ["myrelation1", "myrelation2"] => Get records with the related objects.
   * @param { number } limit Loopback's limit - Example: 10 => Get maximum 10 records.
   * @param { number } skip Loopback's skip - Example: 10 => Skip first 10 records.
   * @param { string | string[] } order Loopback's order - Example: "property ASC" or ["property ASC", "property2 DESC"] => Get records with the wanted order.
   * @param { Object } fields Loopback's fields - Example: { property1: true, property2: true } => Get records only with two properties.
   * @returns { Observable<any> } 
   * @memberof BasicRequestService
   */
  public getAll( where?: any, include?: string[] | string, limit?: number, 
                skip?: number, order?: string[] | string, fields?: any): Observable<any> {

    return this.http.get(`${this.endPoint}`, {
      headers: this.headers,
      params: {
        filter: { where, include, limit, skip, order, fields }
      }
    })
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  /**
   * Get a record based on its id and the given query params.
   * 
   * @param { number } [id=null] Model's ID.
   * @param { Object } where Loopback's where syntax - Example: { where : {property: "text to match"} }
   * @param { string | string[] } include Loopback's include - Example: "myrelation1" | ["myrelation1", "myrelation2"] => Get records with the related objects.
   * @param { number } limit Loopback's limit - Example: 10 => Get maximum 10 records.
   * @param { number } skip Loopback's skip - Example: 10 => Skip first 10 records.
   * @param { string | string[] } order Loopback's order - Example: "property ASC" or ["property ASC", "property2 DESC"] => Get records with the wanted order.
   * @param { Object } fields Loopback's fields - Example: { property1: true, property2: true } => Get records only with two properties.
   * @returns { Observable<any> } 
   * @memberof BasicRequestService
   */
  public findByIdCustomFilters( id: any = null, where?: any, include?: string[] | string, limit?: number, 
                                skip?: number, order?: string[] | string, fields?: any ): Observable<any> {
    return this.http.get(`${this.endPoint}/${id}`, {
      headers: this.headers,
      params: {
        filter: { where, include, limit, skip, order, fields }
      }
    })
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  public update( obj ): Observable<any> {
    return this.http.put(`${this.endPoint}/${obj.id}`, obj, { headers: this.headers })
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  private handleError(error: Response) {
    return Observable.throw(error.json()|| 'Server error')
  }

}
