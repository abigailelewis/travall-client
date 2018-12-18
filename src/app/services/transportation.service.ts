import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transport } from '../models/transport';
import { tap } from 'rxjs/operators';

const apiUrl = 'https://travall-server.herokuapp.com';
// const apiUrl = 'http://localhost:3000/travall';
@Injectable({
  providedIn: 'root'
})
export class TransportationService {
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';

  constructor(private http: HttpClient, private router: Router) { }

  getTransports(id: number): Observable<Transport[]> {
    return this.http.get<Transport[]>(apiUrl + `/transport/getall/` + id);
  }

  createTransport(transport: any) {
    return this.http.post(apiUrl + `/transport/create`, transport)
      .subscribe(response => {
        this.router.navigate(['/travall']);
        location.reload();
      });
  }
  deleteTransport(transportid: any): Observable<any> {
    
    return this.http.delete<any>(`${apiUrl}/transport/delete/${transportid}`).pipe(
    tap(_ => console.log(`deleted transport id=${transportid}`)),
   
  );
}

}
