import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import * as environmentDevelopment from '../../../../environments/environment.development';
import { UserReponse } from '../../user/interfaces/user-reponse.interface';
import { AuthResponse } from '../interfaces/auth.interface';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient) { }
    
    private urlApi = environmentDevelopment.environment.urlApi;
    public token = signal<string|null>(localStorage.getItem("tokenacme"));
    public isAuthActive: AuthResponse|string = "Unauthenticated.";

    login(email: string, password:string): Observable<UserReponse> {

        return this.http.post<UserReponse>(`${this.urlApi}/api/login`,{
            email: email,
            password: password,
            name_token: "name_token"
        });        
    }

    logout() {
        return this.http.post(`${this.urlApi}/api/logout`,{ });
    }
    
    isAuth(): Observable<AuthResponse> {
        
        return this.http.get<AuthResponse>(`${this.urlApi}/api/auth-token-active`).pipe(
                    catchError((error) => {
                        return of({ message: 'Unauthorized.'} as AuthResponse);
                    })
        );
    }

    get tokenAPI(): string {
        return localStorage.getItem('tokenacme') || '';
    }


}