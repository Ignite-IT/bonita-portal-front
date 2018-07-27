import { Injectable } from '@angular/core';
import {HttpHeaders, HttpParams } from '@angular/common/http';

import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import {environment} from '../../environments/environment';

import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';

import { User } from '../models/user';

@Injectable()
export class GlobalVars {
    public authorization: string = null;
    public actualUser: User = null;
        
    public apiHost: string= environment.apiHost;
    public apiHostCaja: string = environment.apiHostCaja;

    // Observable string sources
    private logoutUserSource = new Subject<any>();
    // Observable string streams
    logoutUser$ = this.logoutUserSource.asObservable();

    constructor(private sanitizer: DomSanitizer) {
        this.getAuthorization();
    }

    //
    //SESION Y SUS VARIABLES
    public deleteSessionData(){
        this.authorization= null;
        this.actualUser= null;      
        //Local Storage
        localStorage.removeItem('authorization');        
    }
    
    //Token
    public getAuthorization(){
        if(this.authorization == null){
            this.authorization= localStorage.getItem('authorization');
        }
        return this.authorization;
    }
    public setAuthorization(token: string){
        this.authorization= token;
        localStorage.setItem('authorization', this.authorization);
    }    
    
    //Usuario Actual
    public getActualUser(){
        return this.actualUser;
    }
    public setActualUser(user: any){
        this.actualUser= user;
    } 

    //
    //HTTP
    public getOptionsRequest(params?, body?){
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        if (this.authorization != 'undefined' && this.authorization != null){
            headers = headers.append('Authorization', this.authorization);
        }
        let opts= { headers: headers };
        if(params){
            let httpParams: HttpParams = new HttpParams();
            for (var prop in params) {   
                if(params[prop]){             
                    httpParams= httpParams.append(prop, params[prop]);
                }
            }
            opts['params']= httpParams;
        }
        //
        //LO DE BODY CREO QUE CAMBIO
        if(body){
            opts['body']= body;
        }
        return opts;
//        let options = new RequestOptions(opts);
//        return options;
    }
    
    tratarErrores(error) {
        console.log(error);
        //let errorOb= JSON.stringify(error);
        if (error.status == 401) {
            this.logoutUserSource.next();
            return Observable.throw(error._body != '' ? error.json() : 'Prohibido');            
//            const url= `${this.apiHost}login`;
//            return this.http.delete(url, this.getOptionsRequest())
//                .map((res:Response) => {
//                    this.authorization= null;
//                    //this.storage.remove('session_id');
//                    this.actualUser= null;
//                    //this.storage.remove('user');
//                    this.logoutUserSource.next();
//                    return Observable.throw(error._body != '' ? error.json() : '401 - Error de permisos');
//                })
//              .catch((error:any) => Observable.throw(error._body != '' ? error.json() : 'Server error'));            
        }else if(error.status == 500){
            alert("Ha sucedido un error inesperado en el servidor. En caso de persistir este error comunicarse con personal tecnico.");
            return Observable.throw(error._body != '' ? error._body : 'Error General');            
        }else if(error.status == 0){ //error.type= 3
            alert("No hay conexion con el Servidor. Vuelva a intentar en unos momentos");
            return Observable.throw(error._body != '' ? error._body : 'Sin Conexion');
        }else{
            //Aca estarian solo los errores que devuelve error que deben materializarse en comunicacion con el usuario.
            return Observable.throw(error._body != '' ? error.json() : 'Error');
        }
    }
    
    //
    //UTILS VARIOS
    public linkSanitizer(url: string): SafeResourceUrl{
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);   
    }
}