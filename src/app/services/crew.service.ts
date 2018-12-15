import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
// const apiUrl = 'https://travall-server.herokuapp.com'
const apiUrl = 'http://localhost:4000/travall'

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private http: HttpClient) { }

  getCrew(travallid: any) {
    return this.http.get(`http://localhost:3000/travall/getcrew/${travallid}`)
  }

}