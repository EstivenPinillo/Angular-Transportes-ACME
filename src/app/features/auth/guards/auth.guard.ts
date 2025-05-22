import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthResponse } from '../interfaces/auth.interface';
import { firstValueFrom, map, tap } from 'rxjs';

export const AuthGuard: CanMatchFn = async(
    route: Route,
    segments: UrlSegment[]
) => {

    const authService = inject(AuthService);
    const router = inject(Router);
    let isAuth = await firstValueFrom(authService.isAuth());

    let url = '/' + segments;

    if (isAuth.message === "Authenticated.") {
        
        if ( url === '/') {
            router.navigateByUrl('/home');
            return false;
        }

        return true;    
    }
    
    //localStorage.removeItem('tokenacme');
    router.navigateByUrl('/');
    return false;    
    
}