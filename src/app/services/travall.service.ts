import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';

 const apiUrl = 'https://travall-server.herokuapp.com'
// const apiUrl = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class TravallService {

  constructor(private http: HttpClient, private router: Router) { }

  getTravalls(user: User) {
    return this.http.get(apiUrl + `/travall/getall/` + user.id)
  }

  createTravall(travall: any): any {
    return this.http.post(apiUrl + `/travall/create`, travall)
      .subscribe(response => {
        console.log(response);
        sessionStorage.setItem("currentTravall", JSON.stringify(response));
        this.router.navigate(['/travall']);
      });
  }
}
