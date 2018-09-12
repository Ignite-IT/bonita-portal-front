import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
// Import RxJs required methods
import { map, catchError } from 'rxjs/operators';

import { GlobalVars } from '../services/globalVars';
import { Cache } from '../services/cache';

import {PrecargaSolicitud, LineaVigente, MatrizFinanciamiento, Distrito, AptitudPrestamo, AptitudPrestamo2, MedioPago, Aval, Inmueble, 
    Cft, DeudaPrestamo, DeudaAporteInch, ValorUcp, DistritoDetalle} from '../models/cpsm';

@Injectable()
export class CpsmService{

    constructor(private http: HttpClient, private globalVars: GlobalVars, private cache: Cache) {        
    }
    
    precargaSolicitud(matricula: string, cuit: string): Observable<PrecargaSolicitud> {
        let params= {matricula: matricula, cuit: cuit};
        const url = `${this.globalVars.apiHostMedicos}precargasolicitud`;
        return this.http.get<PrecargaSolicitud>(url, this.globalVars.getOptionsRequest(params)).pipe(
            map((res: PrecargaSolicitud) => {
                if (res.docConyuge){
                    let i = res.docConyuge.indexOf(" ");
                    if(i >= 0){
                        res.docConyuge = res.docConyuge.substring(i + 1);
                    }                    
                }
                return res;
            }) // or any other operator
        )
        //
//        return this.http.get(url, this.globalVars.getOptionsRequest(params))
//            .map((res:Response) => res.json())
//            .catch((error:any) => this.globalVars.tratarErrores(error));
    }
    
//    edadSolicitante(matricula: string, cuit: string): Observable<any> {
//        let params= {matricula: matricula, cuit: cuit};
//        const url = `${this.globalVars.apiHostMedicos}edadsolicitante`;
//        return this.http.get<any>(url, this.globalVars.getOptionsRequest(params));
//    }
//    
//    aptoPrestamo(matricula: string, cuit: string): Observable<AptoPrestamo> {
//        let params= {matricula: matricula, cuit: cuit};
//        const url = `${this.globalVars.apiHostMedicos}aptoprestamo`;
//        return this.http.get<AptoPrestamo>(url, this.globalVars.getOptionsRequest(params));
//    }
    
    informacionDistrito(distritoId): Observable<Distrito> {
        let params= {id: distritoId};
        const url = `${this.globalVars.apiHostMedicos}getInformacionDistrito`;
        return this.http.get<Distrito>(url, this.globalVars.getOptionsRequest(params));
    }
    
    lineasPrestamo(tipoPrestamo, destinoPrestamo): Observable<LineaVigente[]> {
        let params= {tipo: tipoPrestamo, destino: destinoPrestamo};
        const url = `${this.globalVars.apiHostMedicos}lineasVigentes`;
        return this.http.get<LineaVigente[]>(url, this.globalVars.getOptionsRequest(params));
    }
    
//    matrizFinanciamiento(matricula, cuil, tipoPrestamo, destinoPrestamo, lineaPrestamo, concepto, estado): Observable<MatrizFinanciamiento> {
//        let params = {matricula: matricula, cuil: cuil, tipoPtmo: tipoPrestamo, destPtmo: destinoPrestamo, lineaPtmo: lineaPrestamo, concepto: concepto, estado: estado};
//        const url = `${this.globalVars.apiHostMedicos}matrizFinanciamiento`;
//        return this.http.get<MatrizFinanciamiento>(url, this.globalVars.getOptionsRequest(params));
//    }
    matrizFinanciamiento(concepto, estado): Observable<MatrizFinanciamiento> {
        let params = {concepto: concepto, estado: estado};
        const url = `${this.globalVars.apiHostMedicos}matrizFinanciamiento`;
        return this.http.get<MatrizFinanciamiento>(url, this.globalVars.getOptionsRequest(params));
    }
    
    datosPersonalesAfiliado(matricula): Observable<any> {
        let params= {matricula: matricula};
        const url = `${this.globalVars.apiHostMedicos}getDatosPersonalesAfiliado`;
        return this.http.get(url, this.globalVars.getOptionsRequest(params));
    }
    
    aptitudPrestamo(matricula, cuit, concepto): Observable<AptitudPrestamo> {
        let params = {matricula: matricula, cuit: cuit, concepto: concepto};
        const url = `${this.globalVars.apiHostMedicos}aptoPrestamo`;
        return this.http.get<AptitudPrestamo>(url, this.globalVars.getOptionsRequest(params));
    }
    
    aptitudPrestamo2(matricula, cuit, tipo_prestamo, destino_prestamo, linea_prestamo, concepto, estado): Observable<AptitudPrestamo2> {
        let params = {matricula: matricula, cuit: cuit, tipo_prestamo: tipo_prestamo, destino_prestamo: destino_prestamo, linea_prestamo: linea_prestamo, 
            concepto: concepto, estado: estado};
        const url = `${this.globalVars.apiHostMedicos}aptitudPrestamo`;
        return this.http.get<AptitudPrestamo2>(url, this.globalVars.getOptionsRequest(params));
    }
    
    mediosPago(concepto): Observable<MedioPago[]> {
        let params= {/*lineaPtmo: linea, */concepto: concepto};
        const url = `${this.globalVars.apiHostMedicos}mediosPago`;
        return this.http.get<MedioPago[]>(url, this.globalVars.getOptionsRequest(params));
    }
    
    avalesPrestamo(nroExpediente): Observable<Aval[]> {
        let params= {idExpediente: nroExpediente};
        const url = `${this.globalVars.apiHostMedicos}avalesPrestamo`;
        return this.http.get<Aval[]>(url, this.globalVars.getOptionsRequest(params));
    }
    
    inmueblesPrestamo(nroExpediente): Observable<Inmueble[]> {
        let params= {idExpediente: nroExpediente};
        const url = `${this.globalVars.apiHostMedicos}inmueblesPrestamoHipotecario`;
        return this.http.get<Inmueble[]>(url, this.globalVars.getOptionsRequest(params));
    }
    
    calculoTeaCft(monto, cantidadCuotas, tna, alicuota, gastosTotales, seguroVida, seguroIncendio, montoSegInc): Observable<Cft> {
        let params = {monto: monto, cantidadCuotas: cantidadCuotas, tna: tna, alicuota: alicuota, gastosTotales: gastosTotales, seguroVida: seguroVida,
            seguroIncendio: seguroIncendio, montoSegInc: montoSegInc};
        const url = `${this.globalVars.apiHostMedicos}calculoTeaCft`;
        return this.http.get<Cft>(url, this.globalVars.getOptionsRequest(params));
    }
    
    deudaPrestamos(matricula): Observable<DeudaPrestamo> {
        let params= {matricula: matricula};
        const url = `${this.globalVars.apiHostMedicos}deudaPrestamos`;
        return this.http.get<DeudaPrestamo>(url, this.globalVars.getOptionsRequest(params));
    }
    
    deudaAportesInch(matricula): Observable<DeudaAporteInch> {
        let params= {matricula: matricula};
        const url = `${this.globalVars.apiHostMedicos}deudaAportesInch`;
        return this.http.get<DeudaAporteInch>(url, this.globalVars.getOptionsRequest(params));
    }
    
    valorUCP(periodo): Observable<ValorUcp> {
        let params= {periodo: periodo};
        const url = `${this.globalVars.apiHostMedicos}valorUCP`;
        return this.http.get<ValorUcp>(url, this.globalVars.getOptionsRequest(params));
    }
    
    getDistritosCaja(): Observable<DistritoDetalle[]> {
        const url = `${this.globalVars.apiHostMedicos}getDistritosCaja`;
        return this.http.get<DistritoDetalle[]>(url, this.globalVars.getOptionsRequest());
    }
}