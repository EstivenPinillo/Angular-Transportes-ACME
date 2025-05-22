import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { CityRequest, CountryRequest } from '../interfaces/world.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CityService {

    apiUrl = environment.urlApi;

    constructor(private httpClient: HttpClient) { }

    getCityByCountrie(country_id: number): Observable<CityRequest[]>{
        
        return this.httpClient.get<CityRequest[]>(
            `${this.apiUrl}/api/city-by-countrie/${country_id}`
        );
    }
    
}