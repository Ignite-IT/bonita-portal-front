import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import { map, catchError } from 'rxjs/operators';

import {GlobalVars} from '../services/globalVars';
import {ProjectUtils} from '../services/utils';

import {SolicitudPrestamo, TramiteMovimiento} from '../models/tramite';

@Injectable()
export class QueryService{
    constructor(private http: HttpClient, protected globalVars:GlobalVars, protected utils: ProjectUtils) {
    }                
     
    queryTramites(params): Observable<any> {
        const url = `${this.globalVars.apiHostCaja}queries/tramites`;
        return this.http.get<any>(url, this.globalVars.getOptionsRequest(params));
    }
    
    //
    //PRESTAMO
    prestamoTramite(idTramite): Observable<SolicitudPrestamo> {
        const url = `${this.globalVars.apiHostCaja}tramites/${idTramite}/prestamo`;
        return this.http.get<SolicitudPrestamo>(url, this.globalVars.getOptionsRequest()).pipe(
            map((prestamo: SolicitudPrestamo) => {
                return new SolicitudPrestamo(prestamo);
            })
        );
    }
    
    //
    //MOVIMIENTOS
    movimientos(idTramite, params: any): Observable<any> {
        const url = `${this.globalVars.apiHostCaja}tramites/${idTramite}/movimientos`;
        return this.http.get<TramiteMovimiento[]>(url, this.globalVars.getOptionsRequest(params)).pipe(
            map((data: any) => {
                data.data = data.data.map(movimiento => new TramiteMovimiento(movimiento));
                return data;
            })
        );
    }
}