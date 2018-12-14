// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError, tap } from 'rxjs/operators'
// import { User } from '../models/user';
// import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

// const apiUrl = ' https://travall-server.herokuapp.com'
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': JSON.parse(localStorage.getItem('token'))
//   })
// };

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthService {
//   user: FormGroup;
//   thisUser: any = [];

//   constructor(private http: HttpClient, private FormBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.user = this.FormBuilder.group({
//       username: new FormControl(),
//       password: new FormControl()
//     });
//   }

//   setToken(){
//     localStorage.setItem('token', this.thisUser.token);
//   }
//   login(username: string, password: string) {
//     return this.http.post<any>('https://travall-server.herokuapp.com/user/login', {username: username, password: password })
//       .pipe(map(user => {
//         if (user) {
//           localStorage.setItem('token', JSON.stringify(user.token));
//         }
//         return user;
//       }));
//   }

//   logout() {
   
//     localStorage.removeItem('token');
// }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


const apiUrl = ' https://travall-server.herokuapp.com'


@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

  

    login(username: string, password: string) {
        return this.http.post<any>(apiUrl + '/user/login', { username, password} )
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.sessionToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
// this works 
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { User } from '../models/user';

// const apiUrl = ' https://travall-server.herokuapp.com'

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//     private currentUserSubject: BehaviorSubject<User>;
//     public currentUser: Observable<User>;

//     constructor(private http: HttpClient) { 
//         this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
//         this.currentUser = this.currentUserSubject.asObservable();

//     }
//     public get currentUserValue(): User {
//         return this.currentUserSubject.value;
//     }

//     login(username: string, password: string) {
//         return this.http.post<any>(apiUrl + '/user/login', { username, password})
//             .pipe(map(user => {
//                 // login successful if there's a jwt token in the response
//                 if (user && user.sessionToken) {
//                     // store user details and jwt token in local storage to keep user logged in between page refreshes
//                     localStorage.setItem('sessionToken', JSON.stringify(user.sessionToken));
//                 }

//                 return user;
//             }));
//     }

    // signup(email: string, username: string, password: string, color: string,) {
    //     return this.http.post<any>(apiUrl + '/user/signup', { email, username, password, color})
    //         .pipe(map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }

    //             return user;
    //         }));
    // }

//     logout() {
//         // remove user from local storage to log user out
//         localStorage.removeItem('currentUser');
//     }
// }




// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError, tap } from 'rxjs/operators'
// import { Login } from './models/user'
// import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

// const endpoint = 'http://'
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': JSON.parse(localStorage.getItem('token'))
//   })
// };

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthService {
//   user: FormGroup;
//   thisUser: any = [];

//   constructor(private http: HttpClient, private FormBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.user = this.FormBuilder.group({
//       email: new FormControl(),
//       username: new FormControl(),
//       password: new FormControl()
//     });
//   }

//   setToken(){
//     localStorage.setItem('token', this.thisUser.token);
//   }


//   login(username: string, password: string) {
//     return this.http.post<any>('https://efa-gardenapp-backend.herokuapp.com/api/auth/login', { username: username, password: password })
//       .pipe(map(user => {
//         if (user) {
//           localStorage.setItem('token', JSON.stringify(user.token));
//         }
//         return user;
//       }));
//   }

//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error);
//       console.log(`${operation} failed: ${error.message}`);
//       return of(result as T);
//     };
//   }

//   logout() {
   
//     localStorage.removeItem('token');
// }
// }