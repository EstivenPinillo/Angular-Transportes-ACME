import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { UserReponse } from '../interfaces/user-reponse.interface';
import { environment } from '../../../../environments/environment.development';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private http: HttpClient) { }
    /*
    private urlApi = environment.urlApi;
    public token = signal<string|null>(localStorage.getItem("tokenacme"));

    login(email: string, password:string) {

        return this.http.post<UserReponse>(`${this.urlApi}/api/login`,{
            email: email,
            password: password,
            name_token: "name_token"
        });        
    }*/

}