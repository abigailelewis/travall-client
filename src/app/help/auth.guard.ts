
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { Add, Operator, Map, Rxjs} from 'rxjs/operators';
import { Observable } from 'rxjs'


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
       
    ) {}

    canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            if(!sessionStorage.getItem('currentUser')){
                this.router.navigate(['/login']);
                return observer.next(false);
            } else {
                return observer.next(true);
            }
        });
    
    }
}


