import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { ownerDriverResponse } from '../interfaces/profile.interface';

@Injectable({providedIn: 'root'})
export class ProfileService {
    
    private urlApi = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    getListProfile():Observable<ownerDriverResponse[]> {
    
        return this.httpClient.get<ownerDriverResponse[]>(`${this.urlApi}/api/profile/owner-driver`);
    }

}


