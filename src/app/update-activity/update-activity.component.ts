import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ActivityService } from '@/services/activity.service';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.scss']
})
export class UpdateActivityComponent implements OnInit {
  updateActivityForm: FormGroup;
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';
  activityDetails: Activity;
  activityForm: FormGroup;
  loading: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<UpdateActivityComponent>, public dialog: MatDialog,
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    // this.activityService.getActivity(this.data)
    //   .subscribe((activity: Activity) => {
    //     this.activityDetails = activity;
    //     return this.updateForm();
    //   });
      this.updateActivityForm = this.formBuilder.group({
        "title": new FormControl(),
        "date": new FormControl(),
        "startTime": new FormControl(),
        "endTime": new FormControl(),
        "location": new FormControl(),
        "description": new FormControl(),
      });
  }

  // updateForm() {
    
  // }

  onSubmit() {
    this.activityService.updateActivity(this.updateActivityForm.value, this.data);
    this.matDialogRef.close();
  }

}
