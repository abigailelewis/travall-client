import { Component, OnInit } from '@angular/core';
import { TransportationService } from '@/services/transportation.service';
import { CreateTransportComponent } from '../create-transport/create-transport.component';
import { MatDialog } from '@angular/material';
import { Transport } from '../models/transport';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';
  transports: any = [];

  constructor(private transportService: TransportationService, private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.getTransports();
  }

  getTransports() {
    this.transports = [];
    if (this.currentTravall != '') {
      this.transportService.getTransports(this.currentTravall.id)
        .subscribe((data: any) => {
          console.log(data);
          this.transports = data;
        })
    }
  }

  openDialog() {
    this.dialog.open(CreateTransportComponent);
  }

}
