import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

const apiUrl = 'https://travall-server.herokuapp.com'
//const apiUrl = 'http://localhost:3000'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/user`);
    }

    getById(id: number) {
        return this.http.get(`/user/` + id);
    }

    signup(user: User) {
        return this.http.post(apiUrl + '/user/signup', user);
    }

    update(user: User) {
        return this.http.put(`/user/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/user/` + id);
    }
}
