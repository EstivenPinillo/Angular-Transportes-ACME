import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

    authService = inject(AuthService);
    route = inject(Router);

    logout() {

        this.authService.logout().subscribe(res => {
            console.log(res);
        });
        localStorage.removeItem('tokenacme');
        this.route.navigateByUrl("/");
    }


}
