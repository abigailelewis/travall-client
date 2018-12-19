import { Component, OnInit } from '@angular/core';
import { Travall } from '../models/travall';
import {TravallService } from '../services/travall.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';
  travall: any = [];

  constructor() { }

  ngOnInit() {
  }

  
}
