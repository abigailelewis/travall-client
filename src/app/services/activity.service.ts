import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { tap } from 'rxjs/operators';

const apiUrl = 'https://travall-server.herokuapp.com';
// const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';

  constructor(private http: HttpClient) { }

  getActivities(id: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(apiUrl + `/activity/getall/` + id);
  }

  getActivity(id: number) {
    return this.http.get(`${apiUrl}/activity/${id}`);
  }

  createActivity(activity: any) {
    return this.http.post(apiUrl + `/activity/create`, activity)
      .subscribe(() => {
        location.reload();
        this.getActivities(this.currentTravall.id);
      });
  }

  updateActivity(activity: any, activityid: any) {
    return this.http.put(`${apiUrl}/activity/update/${activityid}`, activity)
      .subscribe(() => {
        location.reload();
        this.getActivities(this.currentTravall.id);
      })
  }

  deleteActivity(activityid: any): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/activity/delete/${activityid}`)
      .pipe(tap(_ => {
        this.getActivities(this.currentTravall.id);
      }));
  }

}

