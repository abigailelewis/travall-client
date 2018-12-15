import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

// const apiUrl = 'https://travall-server.herokuapp.com'
const apiUrl = 'http://localhost:3000/travall'

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private http: HttpClient) { }

  getCrew(travallid: any): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/travall/getcrew/${travallid}`)
  }

}