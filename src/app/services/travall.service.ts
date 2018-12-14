import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { Travall } from '../models/travall';
import { Observable } from 'rxjs';

const apiUrl = 'https://travall-server.herokuapp.com/travall'
@Injectable({
  providedIn: 'root'
})
export class TravallService {
  constructor(private http: HttpClient) { }

  getTravalls(user: User) {
    return this.http.get(`/getall/` + user.id)
  }

  createTravall(travall: any) : any {
    return this.http.post<Travall[]>(`/create`, travall)
  }
}
