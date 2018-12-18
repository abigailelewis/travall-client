import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const apiUrl = 'https://travall-server.herokuapp.com'
// const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private http: HttpClient, private router: Router) { }

  getCrew(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/travall/getcrew/${id}`);
  }

  addMember(email: any, travallid: any) {
    return this.http.post(`${apiUrl}/travall/adduser/${travallid}`, email)
      .subscribe(response => {
        this.router.navigate(['/travall']);
        location.reload();
      })
  }
}