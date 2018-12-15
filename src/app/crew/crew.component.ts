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

  constructor(private crewService: CrewService) { }

  ngOnInit() {
    this.getCrew();
  }
  
  getCrew() {
    console.log(this.currentTravall)
    this.members = [];
    this.crewService.getCrew(this.currentTravall.currentTravall.id).subscribe((data: any) => {
      console.log(data);
      // this.members = data.users;
    });
  }

}

