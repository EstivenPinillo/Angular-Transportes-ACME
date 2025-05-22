import { Signal } from "@angular/core"

export interface VehicleReponse {

    license_plate: string,
    color: string,
    brand: string,
    type: string,
    owner_first_name: string,
    driver_first_name: string
}

export interface registerVehicleOwnerDriverResponse {

    address: string,
    address_owner: string,
    brand: string,
    city_id: string,
    city_woner: string,
    color: string,
    countrie_id: number,
    countrie_owner: number,
    document: string,
    document_owner: string,
    first_name: string,
    first_name_owner: string,
    last_name: string,
    last_name_owner: string,
    license_plate: string,
    phone_number: string,
    phone_number_owner: string,
    profile_id: number,
    profile_owner: number,
    second_name: string,
    second_name_owner: string,
    type: string,
    type_document_id: string,
    type_document_owner: string

}