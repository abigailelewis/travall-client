import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


// const apiUrl = ' https://travall-server.herokuapp.com'
const apiUrl = 'http://localhost:3000'


@Injectable()
export class AdminService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(apiUrl + '/admin/login', { username, password} )
            .pipe(map(user => {            
                if (user && user.sessionToken) {
                    console.log(user);
                    localStorage.setItem('currentAdmin', JSON.stringify(user));
                }
                
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentAdmin');
    }
}