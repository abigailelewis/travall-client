import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


const apiUrl = 'https://travall-server.herokuapp.com'
// const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';

  constructor(private http: HttpClient) { }

  getCrew(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/travall/getcrew/${id}`);
  }

  addMember(email: any, travallid: any) {
    return this.http.post(`${apiUrl}/travall/adduser/${travallid}`, email)
      .subscribe(response => {
        location.reload();
      })
  }

  deleteMember(userid: any): Observable<any> {

    return this.http.delete<any>(`${apiUrl}/travall/dropuser/${this.currentTravall.id}/${userid}`).pipe(
      tap(_ => console.log(`deleted user id=${userid}`)),

    );
  }
}