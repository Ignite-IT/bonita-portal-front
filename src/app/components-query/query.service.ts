import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import { map, catchError } from 'rxjs/operators';

import {GlobalVars} from '../services/globalVars';
import {ProjectUtils} from '../services/utils';

import {SolicitudPrestamo, TramiteMovimiento} from '../models/tramite';
import {Grupo, Actividad} from './models';

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
    
    //
    //GRUPOS
    grupos(): Observable<Grupo[]> {
        const url = `${this.globalVars.apiHostCaja}grupos`;
        return this.http.get<Grupo[]>(url, this.globalVars.getOptionsRequest()).pipe(
            map((grupos: Grupo[]) => {
                return grupos.map(grupo => new Grupo(grupo));
            })
        );
    }
    
    //
    //ACTIVIDADES
    actividades(): Observable<Actividad[]> {
        const url = `${this.globalVars.apiHostCaja}actividades`;
        return this.http.get<Actividad[]>(url, this.globalVars.getOptionsRequest()).pipe(
            map((actividades: Actividad[]) => {
                return actividades.map(actividad => new Actividad(actividad));
            })
        );
    }
}