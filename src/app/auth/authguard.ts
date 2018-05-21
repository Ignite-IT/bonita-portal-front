import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
 
import {environment} from '../../environments/environment';

import { GlobalVars } from '../services/globalVars';
import {UserService} from '../services/user.service';
/**
 * Esta clase se encarga de cargar toda la informacion del usuario si es que se encuentra conectado.
 * No le importa si hay usuario conectado o no.
 */
@Injectable()
export class LoadUser implements CanActivate {
 
    constructor(private router: Router, private globalVars: GlobalVars, private userService: UserService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return new Observable<boolean>(observer => {
            if (this.globalVars.getActualUser() != null){
                observer.next(true);
            }else{           
                return this.userService.logged().subscribe(
                rta => {
                    observer.next(true);
                },err => {
                    observer.next(true);
                });
            }        
        });
    }
}

/**
 * Controla que el usuario este conectado, en caso contrario lo devuelve al /login.
 */
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router, private globalVars: GlobalVars, private userService: UserService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return new Observable<boolean>(observer => {
            if(this.globalVars.getActualUser() != null){                
                observer.next(true);
            }else{
                return this.userService.logged().subscribe(
                rta => {
                    observer.next(true);
                },err => {
                    // not logged in so redirect to login page with the return url and return false
                    //this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
                    this.router.navigate(['/login']);
                    observer.next(false);
                });
            }        
        });
    }
}

/**
 * Controla que el usuario no este conectado, en caso contrario lo manda a una pagina por defecto segun profile
 */
@Injectable()
export class NoLogin implements CanActivate {
 
    constructor(private router: Router, private globalVars: GlobalVars, private userService: UserService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return new Observable<boolean>(observer => {
            if(this.globalVars.actualUser != null){
                let page: string = environment.defaultPage;
                this.router.navigate([page]);
                observer.next(false);
            }else{
                return this.userService.logged().subscribe(
                rta => {
                    let page: string = environment.defaultPage;
                    this.router.navigate([page]);
                    observer.next(false);
                },err => {
                    observer.next(true);
                });
            }        
        });
    }
}