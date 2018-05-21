import { Injectable, OnInit }    from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable, Subject } from 'rxjs/Rx';
// Import RxJs required methods
import { map, catchError } from 'rxjs/operators';

import { GlobalVars } from '../services/globalVars';

export interface User {
    user_id: number;
    user_name: string;
}

@Injectable()
export class UserService{
    private loginUrl = 'login';  // URL to web api

    // Observable string sources
    private loginUserSource = new Subject<any>();
    private logoutUserSource = new Subject<any>();
    // Observable string streams
    loginUser$ = this.loginUserSource.asObservable();
    logoutUser$ = this.logoutUserSource.asObservable();

    constructor(private http: HttpClient, private globalVars: GlobalVars) {
        this.globalVars.logoutUser$.subscribe(
            rta => {
                this.logout();
            }
        );
    }

    //LOGIN - PREFERENCES
    login(username, password): Observable<any> {
        const url = `${this.globalVars.apiHost}${this.loginUrl}`;
        let body= {username: username, password: password};
        return this.http.post(url, JSON.stringify(body), this.globalVars.getOptionsRequest()).pipe(
            map((res: any) => {
                let user: User = {user_id: res.user_id, user_name: res.user_name};
                this.globalVars.setAuthorization(res.PHPSESSID);
                this.globalVars.setActualUser(user);
                //Levanto para observadores
                this.loginUserSource.next(this.globalVars.actualUser);
                return res;
            })
        );
    }
    
    logged(): Observable<any> {
        const url = `${this.globalVars.apiHost}${this.loginUrl}`;
        return this.http.get(url, this.globalVars.getOptionsRequest()).pipe(
            map((res: any) => {
                let user: User = {user_id: res.user_id, user_name: res.user_name};
                this.globalVars.setActualUser(user);
                return res;
            })
        );
    }
    
    logout() {
        this.globalVars.deleteSessionData();
        this.logoutUserSource.next();
    }      
}