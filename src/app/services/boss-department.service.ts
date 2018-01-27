import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BasicRequestService } from './basic-request.service';

@Injectable()
export class BossDepartmentService extends BasicRequestService {

    constructor( protected http: Http ) {
        super ( http, 'Boss_departments' )
     }
}
