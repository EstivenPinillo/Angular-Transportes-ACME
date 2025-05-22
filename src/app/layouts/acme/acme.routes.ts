import { Routes } from '@angular/router';
import { AcmeComponent } from './acme.component';
import { UserComponent } from '../../features/user/components/user/user.component';
import { ListVehicleComponent } from '../../features/vehicle/components/list-vehicle/list-vehicle.component';
import { ListOwnerDriverComponent } from '../../features/profile/components/list-owner-driver/list-owner-driver.component';
import { RegisterVehicleOwnerDriverComponent } from '../../features/vehicle/components/register-vehicle-owner-driver/register-vehicle-owner-driver.component';


export const AcmeRoutes: Routes = [

    {
        path: '', 
        component: AcmeComponent,
        children: [
            { 
                path: 'user', 
                component: UserComponent 
            },
            { 
                path: 'owners-drivers',
                component:  ListOwnerDriverComponent
            },
            { 
                path: 'vehicles-list', 
                component: ListVehicleComponent
            },
            { 
                path: 'register-vehicle-owner-driver', 
                component: RegisterVehicleOwnerDriverComponent
            },
        ]
    },

]

export default AcmeRoutes;