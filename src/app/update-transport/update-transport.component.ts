import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TransportationService } from '@/services/transportation.service';
import { Transport } from '../models/transport';

@Component({
  selector: 'app-update-transport',
  templateUrl: './update-transport.component.html',
  styleUrls: ['./update-transport.component.scss']
})
export class UpdateTransportComponent implements OnInit {
  updateTransportForm: FormGroup;
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';
  transportDetails: Transport;
  transportForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<UpdateTransportComponent>, public dialog: MatDialog,
    private transportService: TransportationService
  ) { }

  ngOnInit() {
    this.transportService.getTransport(this.data)
      .subscribe((transport: Transport) => {
        this.transportDetails = transport;
        return this.updateForm();
      });
  }

  updateForm() {
    this.updateTransportForm = this.formBuilder.group({
      "dOrA": this.transportDetails.dOrA,
      "type": this.transportDetails.type,
      "date": this.transportDetails.date,
      "upTime": this.transportDetails.upTime,
      "downTime": this.transportDetails.downTime,
      "participants": this.transportDetails.participants,
    });
  }

  onSubmit() {
    this.transportService.updateTransport(this.updateTransportForm.value, this.data);
    this.matDialogRef.close();
  }

}
