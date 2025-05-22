import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './features/user/components/user/user.component';
import { ListVehicleComponent } from "./features/vehicle/components/list-vehicle/list-vehicle.component";
import { ListOwnerDriverComponent } from "./features/profile/components/list-owner-driver/list-owner-driver.component";
import { LoginComponent } from './features/auth/components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ListVehicleComponent, ListOwnerDriverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Transportes-ACME';
}
