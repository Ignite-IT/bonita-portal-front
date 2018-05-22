import { Injectable }    from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import { map, catchError } from 'rxjs/operators';

import {GlobalVars} from '../services/globalVars';
import {ProjectUtils} from '../services/utils';

import {Task, Form, Process, Case} from '../models/bonita';

@Injectable()
export class BonitaService{
    constructor(private http: HttpClient, protected globalVars:GlobalVars, protected utils: ProjectUtils) {
    }                
     
    //
    //TASK   
    tasks(params: any): Observable<Task[]> {
        const url = `${this.globalVars.apiHost}humanTask`;
        return this.http.get<Task[]>(url, this.globalVars.getOptionsRequest(params));
    }
    
    assignTask(taskId: string, userId: number): Observable<any> {
        const url = `${this.globalVars.apiHost}humanTask/${taskId}`;
        let body = {assigned_id: userId};
        return this.http.put<any>(url, JSON.stringify(body), this.globalVars.getOptionsRequest());
    }
    
    unassignTask(taskId: string): Observable<any> {
        const url = `${this.globalVars.apiHost}humanTask/${taskId}`;
        let body = {assigned_id: ""};
        return this.http.put<any>(url, JSON.stringify(body), this.globalVars.getOptionsRequest());
    }
    
    //
    //FORMS
    getFormOfTask(task: Task): Observable<Form> {
        const url = `${this.globalVars.apiHost}form`;
        let params = {processDefinitionId: task.processId, type: 'TASK', task: task.name};
        return this.http.get<Form>(url, this.globalVars.getOptionsRequest(params)).pipe(
            map((rta: any) => {
               return <Form> rta[0]; 
            })
        );
    }
    
    //
    //CASES   
    cases(params: any): Observable<Case[]> {
        const url = `${this.globalVars.apiHost}case`;
        return this.http.get<Case[]>(url, this.globalVars.getOptionsRequest(params));
    }
    
    startCase(processId: string): Observable<Case> {
        const url = `${this.globalVars.apiHost}case`;
        let body = {process_id: processId};
        return this.http.post<Case>(url, JSON.stringify(body), this.globalVars.getOptionsRequest());
    }
    
    //
    //PROCESS   
    process(params: any): Observable<Process[]> {
        const url = `${this.globalVars.apiHost}process`;
        return this.http.get<Process[]>(url, this.globalVars.getOptionsRequest(params));
    }
}