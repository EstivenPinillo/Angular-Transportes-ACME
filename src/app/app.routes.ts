import { Routes } from '@angular/router';
import { AuthGuard } from './features/auth/guards/auth.guard';

export const routes: Routes = [

    {
        path: 'acme', 
        loadChildren: () => import("./layouts/acme/acme.routes"),
        canMatch: [AuthGuard],
    },

    {
        path: '', 
        loadChildren: () => import("./layouts/auth-acme/auth-acme.routes"),
        
    },

    { path: '**', redirectTo: '/acme' },

];
