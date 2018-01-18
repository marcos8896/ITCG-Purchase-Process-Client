import { FilterPropertiesInterface } from './../models/filter-properties';
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
    this.endPoint = `${ConfigUrlService.BASE_URL}/${endPoint}`;
    this.headers = new Headers({ 
      'Content-Type': 'application/json'
    });
  }

  public create( obj ): Observable<any> {
    return this.http.post(`${this.endPoint}`, obj, { headers: this.generateHeaderObject() })
      .map( res => res.json() || {})
      .catch( this.handleError );
  }

  /**
   * Get all the records that match with the given query params.
   * 
   * @param {FilterPropertiesInterface} [filter] - An object with the proper FilterPropertiesInterface format - See interface for more information.
   * @returns {Observable<any>} 
   * @memberof BasicRequestService
   */
  public getAll( filter?: FilterPropertiesInterface ): Observable<any> {
    return this.http.get(`${this.endPoint}`, { 
      headers: this.generateHeaderObject(), 
      params: { filter: filter || {} }
    })
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }



  /**
   * Get a record that matches with the given ID and the given query params.
   * 
   * @param {(string | number)} id Model's ID.
   * @param {FilterPropertiesInterface} [filter] - An object with the proper FilterPropertiesInterface format - See interface for more information.
   * @returns {Observable<any>} 
   * @memberof BasicRequestService
   */
  public findById( id: string | number, filter?: FilterPropertiesInterface ): Observable<any> {
    return this.http.get(`${this.endPoint}/${id}`, {
      headers: this.generateHeaderObject(),
      params: { filter: filter || {} }
    })
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  public update( obj ): Observable<any> {
    return this.http.put(`${this.endPoint}/${obj.id}`, obj, { headers: this.generateHeaderObject() })
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  private handleError(error: Response) {
    return Observable.throw(error.json()|| 'Server error')
  }

  private generateHeaderObject(): Headers {
    let headers = Object.create(this.headers);
    headers.set('Authorization', JSON.parse(localStorage.getItem("ITCG_token")));
    return headers;
  }

}
