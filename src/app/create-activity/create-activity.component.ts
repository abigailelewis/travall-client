import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivityService } from '../services/activity.service';



@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss']
})
export class CreateActivityComponent implements OnInit {
  createActivityForm: FormGroup;
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';
  loading: any;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private matDialogRef: MatDialogRef<ActivityService>,
    public dialog: MatDialog,
    private activityService: ActivityService
    ) { }

  ngOnInit() {
    this.createActivityForm = this.formBuilder.group({
      "title": new FormControl(),
      "date": new FormControl(),
      "startTime": new FormControl(),
      "endTime": new FormControl(),
      "location": new FormControl(),
      "description": new FormControl(),
      "travallId": this.currentTravall.id,
    });
  }

  onSubmit() {
    this.activityService.createActivity(this.createActivityForm.value);
    this.matDialogRef.close();
  }

}
