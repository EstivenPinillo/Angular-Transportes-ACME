import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { CountryRequest } from '../interfaces/world.interface';

@Injectable({providedIn: 'root'})
export class CountryService {

    apiUrl = environment.urlApi;

    constructor(private httpClient: HttpClient) { }
    
    getCountries(): Observable<CountryRequest[]> {
        return this.httpClient.get<CountryRequest[]>(`${this.apiUrl}/api/countrie`);
    }

}