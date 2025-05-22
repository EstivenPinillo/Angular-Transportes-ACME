import { Component, inject } from '@angular/core';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'login-acme',
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

    formBuild = inject(FormBuilder);
    AuthService = inject(AuthService);
    router = inject(Router);

    userForm = this.formBuild.group({
        "email": ['', [Validators.required, Validators.email]],
        "password": ['', [Validators.required, Validators.minLength(8)]],
    });
    
    startSesion() {

        const {email = "", password = "" } = this.userForm.value;
        //localStorage.removeItem('tokenacme');
        this.AuthService.login(email!, password!).subscribe( async resp => {
            localStorage.setItem("tokenacme", resp.tokenacme);
            this.router.navigateByUrl('/acme');    
        });
        //alert(localStorage.getItem("tokenacme"));
    }

}
