import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivityService } from '@/services/activity.service';
import { CreateActivityComponent } from '@/create-activity/create-activity.component';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../models/activity';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';
  activities: any = [];

  constructor(
    private activityService: ActivityService,
    private dialog: MatDialog,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities() {
    this.activities = [];
    if (this.currentTravall != '') {
      this.activityService.getActivities(this.currentTravall.id)
        .subscribe((data: any) => {
          this.activities = data;
        });
    }
  }

  openDialog() {
    this.dialog.open(CreateActivityComponent);
  }

  deleteActivity(activityid: Activity) {
    this.activityService.deleteActivity(activityid)
      .subscribe(res => {
        this.getActivities();
      }, (err) => {
        console.log(err);
      }
      );
  }

}
