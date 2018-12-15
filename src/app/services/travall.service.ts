import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../models/user';
import { Travall } from '../models/travall';
import { Observable } from 'rxjs';

// const apiUrl = 'https://travall-server.herokuapp.com/travall'
const apiUrl = 'http://localhost:4000/travall'
@Injectable({
  providedIn: 'root'
})
export class TravallService {
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  getTravalls(user: User) {
    return this.http.get(apiUrl + `/getall/` + user.id)
  }

  createTravall(travall: any) : any {
    return this.http.post(apiUrl + `/create`, travall)
    .subscribe(response => {
      localStorage.setItem("currentTravall", JSON.stringify(response));
      this.router.navigate(['/about']);
  });
}
}
