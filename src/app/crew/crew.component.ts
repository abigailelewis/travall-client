 import { Component, OnInit } from '@angular/core';
 import { CrewService } from '@/services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  members: any = [];
  currentTravall: any = localStorage.getItem('currentTravall');



  getCrew() {
    this.members = [];
    this.crewService.getCrew(this.currentTravall.id).subscribe((data: {}) => {
      console.log(data);
      // this.members = data.users;
    });
  }


