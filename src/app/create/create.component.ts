import { Component, OnInit, NgZone } from '@angular/core';
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: string = '';
  lng: string = '';

  public addrKeys: string[];
  public addr: object;
  

  location: Object;

  setAddress(addrObj) {
    this.zone.run(() => {
      this.addr = addrObj;
      this.addrKeys = Object.keys(addrObj);
    });
  }

  constructor(private map: MapsService, private zone: NgZone) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data =>{
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
  }

}