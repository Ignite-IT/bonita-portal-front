import { Injectable } from '@angular/core';

import { Subject }    from 'rxjs/Subject';

import {Tramite} from '../models/tramite';

@Injectable()
export class QueryCommunicate {
    // Observable string sources    
    private documentacionModalPopSource = new Subject<Tramite>();
    private solicitudModalPopSource = new Subject<Tramite>();
    private historialModalPopSource = new Subject<Tramite>();
    
    // Observable string streams
    public documentacionModalPop$ = this.documentacionModalPopSource.asObservable();
    public solicitudModalPop$ = this.solicitudModalPopSource.asObservable();
    public historialModalPop$ = this.historialModalPopSource.asObservable();
    
    constructor() { 
    }
    
    public documentacionModalPopUp(tramite: Tramite){
        this.documentacionModalPopSource.next(tramite);
    }
    public solicitudModalPopUp(tramite: Tramite){
        this.solicitudModalPopSource.next(tramite);
    }
    public historialModalPopUp(tramite: Tramite){
        this.historialModalPopSource.next(tramite);
    }
}