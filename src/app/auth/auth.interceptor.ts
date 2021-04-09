import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = JSON.parse(sessionStorage.getItem('token'))
        console.log(!!token)
        if (!!token) {
            // const reqClone = req.clone({setHeaders: token})
            // return next.handle(reqClone)
        }
        return next.handle(req)
    }
}