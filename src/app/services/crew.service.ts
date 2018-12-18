import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const apiUrl = 'https://travall-server.herokuapp.com'
// const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private http: HttpClient, private router: Router) { }

  getCrew(travallid: any): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/travall/getcrew/${travallid}`);
  }

  addMember(email: any, travallid: any) {
    console.log(email);
    return this.http.post(`${apiUrl}/travall/adduser/${travallid}`, email)
      .subscribe(response => {
        this.router.navigate(['/travall']);
        location.reload();
      })
  }
}