import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";


export function tokenInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  
    const authToken = inject(AuthService).tokenAPI;

    if(authToken){

        const newRequest = request.clone({
            headers: request.headers.append('Authorization', `Bearer ${authToken}`),
        });

        return next(newRequest);
    }

    return next(request);
}