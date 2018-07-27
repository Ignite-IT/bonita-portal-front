import { Injectable } from '@angular/core'  
import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';  

import { Observable } from 'rxjs/Observable';  
//import 'rxjs/add/operator/do';  
import {map, catchError } from 'rxjs/operators';

import {UserService} from '../services/user.service';
  
@Injectable()  
export class CommonInterceptor implements HttpInterceptor {
    
    constructor(private userService: UserService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {         
        /*const dummyrequest = req.clone({  
            setHeaders: {  
                'AuthKey': '12345', 'DeviceID': '85645',  
                'content-type': 'application/json'  
            }  
        })  
        console.log("Cloned Request");   
        console.log(dummyrequest);
        return next.handle(dummyrequest); */
        return next.handle(req).pipe(
            catchError((err, caught) => {
                if (err instanceof HttpErrorResponse)  
                {
                    if (err.status == 401) {
                        this.userService.sessionExpired();
                    }  
                }
                return Observable.throw(err);
            })
        );
    }  
}  