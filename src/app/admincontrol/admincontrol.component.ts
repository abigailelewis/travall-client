import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService} from '../services/admin.service'

@Component({
  selector: 'app-admincontrol',
  templateUrl: './admincontrol.component.html',
  styleUrls: ['./admincontrol.component.scss']
})
export class AdmincontrolComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService) { }

  logout() {
    this.adminService.logout();
    this.router.navigate(['/admin']);
  }
  ngOnInit() {}



}
