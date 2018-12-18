import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { tap } from 'rxjs/operators';

const apiUrl = 'https://travall-server.herokuapp.com';
// const apiUrl = 'http://localhost:3000/travall';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient, private router: Router) { }

  getActivities(id: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(apiUrl + `/activity/getall/` + id);
  }

  createActivity(activity: any) {
    return this.http.post(apiUrl + `/activity/create`, activity)
      .subscribe(response => {
        this.router.navigate(['/travall']);
        location.reload();
      });
  }
  deleteActivity(activityid: any): Observable<any> {
    
    return this.http.delete<any>(`${apiUrl}/activity/delete/${activityid}`).pipe(
    tap(_ => console.log(`deletedactivity id=${activityid}`)),
   
  );
  
}
};
