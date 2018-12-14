
import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { User} from '../models/user';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentUser: User;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  logout() {

    this.authService.logout();
    this.router.navigate(['/login']);
}

  ngOnInit() {
  }

}


