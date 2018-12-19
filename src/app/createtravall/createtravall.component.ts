import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

import { TravallService } from '../services/travall.service';

@Component({
  selector: 'app-createtravall',
  templateUrl: './createtravall.component.html',
  styleUrls: ['./createtravall.component.css']
})
export class CreatetravallComponent implements OnInit {
  createTravallForm: FormGroup;
  currentUser: any = JSON.parse(sessionStorage.getItem('currentUser')) || '';
  loading: any;

  constructor(private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<CreatetravallComponent>, public dialog: MatDialog, private travallService: TravallService, ) { }

  ngOnInit() {
    this.createTravallForm = this.formBuilder.group({
      "title": new FormControl(),
      "location": new FormControl(),
      "type": new FormControl(),
      "startDate": new FormControl(),
      "endDate": new FormControl(),
      "user": this.currentUser,
    });
  }

  onSubmit() {
    this.travallService.createTravall(this.createTravallForm.value);
    this.matDialogRef.close();
  }
}
