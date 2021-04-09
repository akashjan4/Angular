import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface AuthResponseData {
    token: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }
    user  = new Subject<AuthResponseData>()
    singUp(authData: { email: string; password: string }): Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>('https://reqres.in/api/login', authData)
    }
}