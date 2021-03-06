// import { Component } from '@angular/core';

// @Component({
//   selector: 'app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'travallClient';
// }

// import { Component } from '@angular/core';

// @Component({
//     selector: 'app',
//     templateUrl: 'app.component.html'
// })

// export class AppComponent { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';
import { User } from './models/user';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: any = JSON.parse(sessionStorage.getItem('currentUser')) || '';
    currentAdmin: any = JSON.parse(sessionStorage.getItem('currentAdmin')) || '';

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        
    }


}