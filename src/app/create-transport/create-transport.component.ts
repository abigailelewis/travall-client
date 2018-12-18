import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

import { TransportationService } from '../services/transportation.service'

@Component({
  selector: 'app-create-transport',
  templateUrl: './create-transport.component.html',
  styleUrls: ['./create-transport.component.scss']
})
export class CreateTransportComponent implements OnInit {
  createTransportForm: FormGroup;
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';

  constructor(private formBuilder: FormBuilder, private router: Router, private matDialogRef: MatDialogRef<CreateTransportComponent>, public dialog: MatDialog, private transportService: TransportationService) { }

  ngOnInit() {
    this.createTransportForm = this.formBuilder.group({
      "dOrA": new FormControl(),
      "type": new FormControl(),
      "date": new FormControl(),
      "upTime": new FormControl(),
      "downTime": new FormControl(),
      "travallId": this.currentTravall.id,
    });
  }

  onSubmit() {
    this.transportService.createTransport(this.createTransportForm.value);
    this.matDialogRef.close();
    this.router.navigate(['/travall']);
  }

}
