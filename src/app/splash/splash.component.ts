import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  getUrl() {
    return "url('logo_transparent.png')";
  }

  constructor() { }

  ngOnInit() {
  }

}
