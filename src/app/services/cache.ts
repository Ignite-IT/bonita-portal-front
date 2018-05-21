import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import {environment} from '../../environments/environment';

@Injectable()
export class Cache {
    constructor() { 
    }
    
    //COMPLEX SERVICES
    //
    //Estos metodos la idea es que se les pasa el servicio que hace el pedido a la API. Entonces si esta cacheada devuelve eso y si no hace el pedido a la API y guarda.
    //Los 3 metodos son para si los metodos de los servicios tienen 0, 1 o 2 parametros.
    getCache(key: any, time: any, data: () => Observable<any>, parse?: (data: any) => any){
        return new Observable<any>(observer => {
            let cache: any = this.getCacheData(key);
            if(cache != null){
                if(parse){
                    observer.next(parse(cache));
                }else{
                    observer.next(cache);
                }
            }else{
                //Cargo los datos
                data().subscribe(
                    data => {
                        this.setCacheData(key, data, time);
                        observer.next(data);
                    },err => {
                        observer.error(err);
                });
            }      
        });
    }    
    getCache1(key: any, time: any, data: (param1: any) => Observable<any>, param1: any, parse?: (data: any) => any){
        return new Observable<any>(observer => {
            let cache: any = this.getCacheData(key);
            if(cache != null){
                if(parse){
                    observer.next(parse(cache));
                }else{
                    observer.next(cache);
                }                
            }else{
                //Cargo los datos
                data(param1).subscribe(
                    data => {
                        this.setCacheData(key, data, time);
                        observer.next(data);
                    },err => {
                        observer.error(err);
                });
            }      
        });
    }
    getCache2(key: any, time: any, data: (param1: any, param2: any) => Observable<any>, param1: any, param2: any, parse?: (data: any) => any){
        return new Observable<any>(observer => {
            let cache: any = this.getCacheData(key);
            if(cache != null){
                if(parse){
                    observer.next(parse(cache));
                }else{
                    observer.next(cache);
                }
            }else{
                //Cargo los datos
                data(param1, param2).subscribe(
                    data => {
                        this.setCacheData(key, data, time);
                        observer.next(data);
                    },err => {
                        observer.error(err);
                });
            }      
        });
    }
              
    //SIMPLE SERVICES
    public getCacheDataObserver(key){
        return new Observable<any>(observer => {
            var cache = JSON.parse(localStorage.getItem(environment.cachePrefix + key));   
            if(cache != null){
                let d = new Date();
                if(d.getTime() > cache.ttl){
                    this.deleteCacheData(key);
                    observer.error(null);
                }else{
                    observer.next(cache.data);
                }
            }else{
                observer.error(null);
            } 
        });
    }
    
    public getCacheData(key){
        var cache= JSON.parse(localStorage.getItem(environment.cachePrefix + key));   
        if(cache != null){            
            let d = new Date();
            if(d.getTime() <= cache.ttl){
                return cache.data;
            }
        }
        this.deleteCacheData(key);
        return null;
    }
    
    //ttl: en segundos.
    public setCacheData(key, data, ttl){
        if (localStorage.length > environment.maxCacheItems){
            console.log("Borrando cache automaticamente cantidad maxima de items");
            this.cleanAllCache();
        }
        let cache= new CacheData(data, ttl);
        localStorage.setItem(environment.cachePrefix + key, JSON.stringify(cache));
    }
    
    public deleteCacheData(key){
        localStorage.removeItem(environment.cachePrefix + key);
    }
    
    public cleanAllCache(){
        let token= localStorage.getItem('authorization');
        localStorage.clear();
        localStorage.setItem('authorization', token);
    }
}

export class CacheData {
    public data;
    public ttl: number;
    
    constructor(data, ttl) {
        this.data= data;
        let d = new Date();
        this.ttl= d.getTime() + (ttl * 1000);
    }
}