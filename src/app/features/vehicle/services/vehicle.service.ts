import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { registerVehicleOwnerDriverResponse, VehicleReponse } from '../interfaces/vehicle.interface';

@Injectable({providedIn: 'root'})
export class VehicleService {
    
    private urlApi = environment.urlApi;

    constructor(private http: HttpClient) { }

    getListVehicle(): Observable<VehicleReponse[]> {

        return this.http.get<VehicleReponse[]>(`${this.urlApi}/api/vehicle/with-owner-driver`);
    }

    registerVehicleOwnerDriver(vehicleOwnerDriver: registerVehicleOwnerDriverResponse): Observable<registerVehicleOwnerDriverResponse> {
        
        return this.http.post<registerVehicleOwnerDriverResponse>(`${this.urlApi}/api/vehicle/driver-owner`,{ 
            "profile_id": vehicleOwnerDriver.profile_id,
            "city_id": vehicleOwnerDriver.city_id,
            "type_document_id": vehicleOwnerDriver.type_document_id,
            "first_name": vehicleOwnerDriver.first_name,
            "second_name": vehicleOwnerDriver.second_name,
            "last_name": vehicleOwnerDriver.last_name,
            "document": vehicleOwnerDriver.document,
            "address": vehicleOwnerDriver.address,
            "phone_number": vehicleOwnerDriver.phone_number,
            "profile_owner": vehicleOwnerDriver.profile_owner,
            "city_owner": vehicleOwnerDriver.city_woner,
            "type_document_owner": vehicleOwnerDriver.type_document_owner,
            "first_name_owner": vehicleOwnerDriver.first_name_owner,
            "second_name_owner": vehicleOwnerDriver.second_name_owner,
            "last_name_owner": vehicleOwnerDriver.document_owner,
            "document_owner": vehicleOwnerDriver.document_owner,
            "address_owner": vehicleOwnerDriver.address_owner,
            "phone_number_owner": vehicleOwnerDriver.phone_number_owner,
            "license_plate": vehicleOwnerDriver.license_plate,
            "color": vehicleOwnerDriver.color,
            "brand": vehicleOwnerDriver.brand,
            "type": vehicleOwnerDriver.type,
        });
    }

}