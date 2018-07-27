import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import { map, catchError } from 'rxjs/operators';

import {GlobalVars} from '../services/globalVars';

import {Tramite} from '../models/tramite';
import {Documento, ClaseDocumento, TipoDocumento, EstadoDocumento} from '../models/documento';

@Injectable()
export class DocumentacionService{
    constructor(private http: HttpClient, protected globalVars:GlobalVars) {
    }
    
    //
    //DOCUMENTOS TRAMITE
    documentosTramite(idTramite, params: any): Observable<any> {
        const url = `${this.globalVars.apiHostCaja}tramites/${idTramite}/documentos`;
        return this.http.get<any>(url, this.globalVars.getOptionsRequest(params)).pipe(
            map((data: any) => {
                data.data = data.data.map(doc => new Documento(doc));
                return data;
            })
        );
    }
    
    //
    //DOCUMENTO
    documento(id): Observable<Documento> {
        const url = `${this.globalVars.apiHostCaja}documentos/${id}`;
        return this.http.get<Documento>(url, this.globalVars.getOptionsRequest()).pipe(
            map((documento: Documento) => {
                return new Documento(documento);
            })
        );
    }
    
    verDocumento(id){
        window.open(this.globalVars.apiHostCaja + 'documentos/' + id + '/file');
    }
    
    //
    //TIPOS
    tiposDocumento(): Observable<TipoDocumento[]> {
        const url = `${this.globalVars.apiHostCaja}tipos_documento`;
        return this.http.get<TipoDocumento[]>(url, this.globalVars.getOptionsRequest());
    }
    
    clasesDeTipoDocumento(tipo): Observable<ClaseDocumento[]> {
        const url = `${this.globalVars.apiHostCaja}tipos_documento/${tipo}/clases`;
        return this.http.get<ClaseDocumento[]>(url, this.globalVars.getOptionsRequest());
    }
    
    //
    //CLASES
    clasesDocumento(): Observable<ClaseDocumento[]> {
        const url = `${this.globalVars.apiHostCaja}clases_documento`;
        return this.http.get<ClaseDocumento[]>(url, this.globalVars.getOptionsRequest());
    }
    
    //
    //ESTADOS
    estadosDocumento(): Observable<EstadoDocumento[]> {
        const url = `${this.globalVars.apiHostCaja}estados_documento`;
        return this.http.get<EstadoDocumento[]>(url, this.globalVars.getOptionsRequest());
    }
}