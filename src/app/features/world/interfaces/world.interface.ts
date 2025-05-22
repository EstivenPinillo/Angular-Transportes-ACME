export interface CountryRequest {
    
    id: number,
    name: string,
    iso_code: string,
    phone_code: string,
}

export interface CityRequest {

    id: number,
    country_id: number,
    name: string,
    state: string,
    postal_code: string,
}