import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


const apiUrl = 'https://travall-server.herokuapp.com'
//const apiUrl = 'http://localhost:3000'

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(apiUrl + '/user/login', { username, password })
            .pipe(map(user => {
                if (user && user.sessionToken) {
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
    }

    logout() {
        sessionStorage.clear();
    }
}
