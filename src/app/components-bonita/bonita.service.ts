import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import { map, catchError } from 'rxjs/operators';

import {GlobalVars} from '../services/globalVars';
import {ProjectUtils} from '../services/utils';

@Injectable()
export class BonitaService{
    constructor(private http: HttpClient, protected globalVars:GlobalVars, protected utils: ProjectUtils) {
    }                
        
    tasks(): Observable<any> {
        const url = `${this.globalVars.apiHost}humanTask`;
        return this.http.get<any>(url, this.globalVars.getOptionsRequest());
    }
}