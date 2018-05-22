import { Injectable } from '@angular/core';

import { Subject }    from 'rxjs/Subject';

import {SafeResourceUrl } from '@angular/platform-browser';

import {Task} from '../models/bonita';

@Injectable()
export class BonitaCommunicate {
    // Observable string sources    
    private taskModalPopSource = new Subject<any>();
    
    // Observable string streams
    public taskModalPop$ = this.taskModalPopSource.asObservable();
    
    constructor() { 
    }
    
    public taskModalPopUp(task: Task, url: SafeResourceUrl){
        this.taskModalPopSource.next({task: task, url: url});
    }
}