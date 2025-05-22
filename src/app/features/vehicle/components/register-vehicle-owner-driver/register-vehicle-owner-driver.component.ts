import { Component, inject } from '@angular/core';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { registerVehicleOwnerDriverResponse } from '../../interfaces/vehicle.interface';
import { CityService } from '../../../world/services/city.service';
import { CountryService } from '../../../world/services/country.service';
import { CityRequest, CountryRequest } from '../../../world/interfaces/world.interface';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-register-vehicle-owner-driver',
    imports: [ReactiveFormsModule, VehicleComponent, JsonPipe],
    templateUrl: './register-vehicle-owner-driver.component.html',
    styleUrl: './register-vehicle-owner-driver.component.scss'
})
export class RegisterVehicleOwnerDriverComponent {

    router = inject(Router);
    formBuild = inject(FormBuilder);
    vehicleService = inject(VehicleService);
    cityService = inject(CityService);
    countryService = inject(CountryService);
    countries: CountryRequest[] = [];
    cityOwner: CityRequest[] = [];
    cityDriver: CityRequest[] = [];

    countrySub = this.countryService.getCountries().subscribe(
        response => {
            this.countries = response;
        }
    );

    formOrdenACME = this.formBuild.group({

        "profile_owner": [2, [Validators.required]],
        "first_name_owner": ['', [Validators.required]],
        "second_name_owner": [''],
        "last_name_owner": ['', [Validators.required]],
        "type_document_owner": ['', [Validators.required]],
        "document_owner": ['', [Validators.required]],
        "address_owner": ['', [Validators.required]],
        "phone_number_owner": ['', [Validators.required]],
        "countrie_owner": [0, [Validators.required]],
        "city_woner": ['', [Validators.required]],

        "profile_id": [3, [Validators.required]],
        "first_name": ['', [Validators.required]],
        "second_name": [''],
        "last_name": ['', [Validators.required]],
        "type_document_id": ['', [Validators.required]],
        "document": ['', [Validators.required]],
        "address": ['', [Validators.required]],
        "phone_number": ['', [Validators.required]],
        "countrie_id": [0, [Validators.required]],
        "city_id": ['', [Validators.required]],

        "license_plate": ['', [Validators.required]],
        "color": ['', [Validators.required]],
        "brand": ['', [Validators.required]],
        "type": ['', [Validators.required]],
    });

    onRegisterVehicleOwnerDriver() {
        
        if(this.formOrdenACME.invalid) {
            this.formOrdenACME.markAllAsTouched();
            return;
        }

        let data = this.formOrdenACME.value;
        this.vehicleService.registerVehicleOwnerDriver(data as registerVehicleOwnerDriverResponse).subscribe(resp => {
            if (resp) {
                //alert("Registro Exitoso " +resp);
            }
        });
        this.router.navigateByUrl('/acme/vehicles-list');
        
    }

    onCityByCountriesOwner(){
        let idCountry = this.formOrdenACME.controls.countrie_owner.value;
        this.cityService.getCityByCountrie(idCountry!).subscribe(
            response => {
                this.cityOwner = response;
            }
        );
    }
    
    onCityByCountriesDriver(){
        let idCountry = this.formOrdenACME.controls.countrie_id.value;
        this.cityService.getCityByCountrie(idCountry!).subscribe(
            response => {
                this.cityDriver = response;
            }
        );
    }

}
