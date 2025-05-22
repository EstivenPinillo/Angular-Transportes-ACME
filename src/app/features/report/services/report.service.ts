import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({providedIn: 'root'})
export class ReportService {

    urlApi = environment.urlApi;
    authService = inject(AuthService);

    constructor(private httpClient: HttpClient) { }

    createReport() {
        
        let token = this.authService.token;
        
        return this.httpClient.get(`${this.urlApi}/api/report-company`,{
            responseType: 'blob',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).subscribe(blob => {
            const url = URL.createObjectURL(blob);
            window.open(url); 
        });

    }
    
}