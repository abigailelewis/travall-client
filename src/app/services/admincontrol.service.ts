import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of  } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Travall } from '../models/travall';

const apiUrl = 'https://travall-server.herokuapp.com'
// const apiUrl = 'http://localhost:3000/travall'
// const httpOptions = {
//     headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': sessionStorage.getItem('sessionToken')
//     })
// }

@Injectable({
  providedIn: 'root'
})
export class AdmincontrolService {

  constructor(private http: HttpClient) { }

  getAll(user: any): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/admin/user`)
  }
  getAlltravall(travall: any): Observable<Travall[]> {
    return this.http.get<Travall[]>(`${apiUrl}/admin/travall`)
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    return this.http.delete<User>(`${apiUrl}/admin/user/${id}`).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
    //   catchError(this.handleError<any>('deleteProduct'))
    );
  }
  deleteTravall(travall: Travall | number): Observable<Travall> {
    const idt = typeof travall === 'number' ? travall : travall.id;
    return this.http.delete<Travall>(`${apiUrl}/admin/travall/${idt}`).pipe(
      tap(_ => console.log(`deleted travall id=${idt}`)),
    //   catchError(this.handleError<any>('deleteProduct'))
    );
  }
  logout() {
    sessionStorage.clear();
}
}




