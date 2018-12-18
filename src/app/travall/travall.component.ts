import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreatetravallComponent } from '@/createtravall/createtravall.component';

@Component({
  selector: 'app-travall',
  templateUrl: './travall.component.html',
  styleUrls: ['./travall.component.css']
})
export class TravallComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit() {
  }



openDialog() {
  this.dialog.open(CreatetravallComponent);
}

}
