
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        // private authService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const currentUser = this.authService.currentUserValue;
        if (localStorage.getItem('currentUser')) {
            // authorised so return true
            // this.router.navigate(['/about']);
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}



// import { Injectable } from '@angular/core';
// import { AuthService } from '../services/auth.service';
// import { CanActivate } from '@angular/router';

// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService) {}

//   canActivate() {
//     return this.authService.isAuthenticated();
//   }
// }