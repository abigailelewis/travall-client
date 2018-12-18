import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transport } from '../models/transport';
import { tap } from 'rxjs/operators';

const apiUrl = 'https://travall-server.herokuapp.com';
// const apiUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class TransportationService {
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';

  constructor(private http: HttpClient) { }

  getTransports(id: number): Observable<Transport[]> {
    return this.http.get<Transport[]>(apiUrl + `/transport/getall/` + id);
  }

  getTransport(id: number) {
    return this.http.get(`${apiUrl}/transport/${id}`);
  }

  createTransport(transport: any) {
    return this.http.post(apiUrl + `/transport/create`, transport)
      .subscribe(() => {
        location.reload();
        this.getTransports(this.currentTravall.id);
      });
  }

  updateTransport(transport: any, transportid: any) {
    return this.http.put(`${apiUrl}/transport/update/${transportid}`, transport)
      .subscribe(() => {
        location.reload();
        this.getTransports(this.currentTravall.id);
      })
  }

  deleteTransport(transportid: any): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/transport/delete/${transportid}`)
      .pipe(tap(_ => {
        this.getTransports(this.currentTravall.id);
      }));
  }

}
