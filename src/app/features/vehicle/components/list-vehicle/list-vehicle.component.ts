import { Component, inject } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { UserService } from '../../../user/services/user.service';
import { VehicleReponse } from '../../interfaces/vehicle.interface';

@Component({
  selector: 'list-vehicle',
  imports: [],
  templateUrl: './list-vehicle.component.html',
  styleUrl: './list-vehicle.component.scss'
})
export class ListVehicleComponent {

    vehicleService = inject(VehicleService);
    
    listVehicle:VehicleReponse[] = [];
    
    constructor() { }

    subscribe = this.vehicleService.getListVehicle().subscribe({
                next: (data) => {
                    this.listVehicle = data;
                },
                error: (error) => {
                    console.error(error);
                }
            });
}
