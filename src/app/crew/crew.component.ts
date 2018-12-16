import { Component, OnInit } from '@angular/core';
import { CrewService } from '@/services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall'));
  members: any = [];

  constructor(private crewService: CrewService) { }

  ngOnInit() {
    this.getCrew();

  }

  getCrew() {
    this.members = [];
    this.crewService.getCrew(this.currentTravall.id)
      .subscribe((data: any) => {
        this.members = data.members.users;
      });
  }

}

