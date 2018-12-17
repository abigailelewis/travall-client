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
  currentUser: any = JSON.parse(sessionStorage.getItem('currentUser')) || '';
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
    this.travalls = [];
    if (this.currentUser != '') {
      this.travallService.getTravalls(this.currentUser.user)
        .subscribe((data: any) => {
        return this.travalls = data;
      });
    } else {
      return
    }
  }

  setCurrentTravall(travall: any) {
    sessionStorage.setItem('currentTravall', JSON.stringify(travall));
    this.router.navigate(['/travall']);
  }

}