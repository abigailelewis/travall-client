import { Component, OnInit } from '@angular/core';
import { CrewService } from '@/services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  members: any = [];
  tempTravallId: number;

  constructor(private crewService: CrewService) { }

  ngOnInit() {
    this.getCrew();
  }

  getCrew() {
    this.members = [];
    this.crewService.getCrew(this.tempTravallId).subscribe((data: {}) => {
      console.log(data);
      // this.members = data.users;
    });
  }

}