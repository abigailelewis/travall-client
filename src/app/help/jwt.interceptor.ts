import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    // constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser =JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser && currentUser.sessionToken) {
            request = request.clone({
                setHeaders: { 
                    Authorization: currentUser.sessionToken
                }
            });
        }

        return next.handle(request);
    }
}