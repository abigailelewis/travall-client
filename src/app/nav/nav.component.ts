
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TravallService } from '../services/travall.service';
import { User } from '../models/user';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // currentUser: User;
  currentUser: any = JSON.parse(localStorage.getItem('currentUser')) || '';
  travalls: any = [];

  constructor(private router: Router, private authService: AuthService, private travallService: TravallService) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.getTravalls();
  }

  getTravalls() {
    if (this.currentUser != '') {
      this.travalls = [];
      this.travallService.getTravalls(this.currentUser.user)
        .subscribe((data: any) => {
        this.travalls = data;
      });
    } else {
      console.log('no current user');
    }
  }

  setCurrentTravall(travall: any) {
    localStorage.setItem('currentTravall', JSON.stringify(travall));
  }

}