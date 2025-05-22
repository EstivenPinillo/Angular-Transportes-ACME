import { Routes } from '@angular/router';
import { LoginComponent } from '../../features/auth/components/login/login.component';
import { AuthAcmeComponent } from '../auth-acme/auth-acme.component';

export const AuthAcmeRoutes: Routes = [

    {
        path: '', 
        component: AuthAcmeComponent,
        children: [
            { 
                path: '', 
                component: LoginComponent
            },
        ]
    },

]

export default AuthAcmeRoutes;