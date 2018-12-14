import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private http: HttpClient) { }

  getCrew(travallid: any) {
    return this.http.get(`http://localhost:3000/travall/getcrew/${travallid}`)
  }

}