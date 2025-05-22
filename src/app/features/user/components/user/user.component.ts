import { Component, inject } from '@angular/core';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'app-user',
    imports: [ReactiveFormsModule],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss'
})
export class UserComponent {

    formBuild = inject(FormBuilder);
    AuthService = inject(AuthService);

    userForm = this.formBuild.group({
        "email": ['', [Validators.required, Validators.email]],
        "password": ['', [Validators.required, Validators.minLength(8)]],
    });
    
    OnSubmit(){

        const {email = "", password = "" } = this.userForm.value;

        this.AuthService.login(email!, password!).subscribe(resp => {
            localStorage.setItem("tokenacme", resp.tokenacme);
        });

    }

}
