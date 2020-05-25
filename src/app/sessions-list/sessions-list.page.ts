import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.page.html',
  styleUrls: ['./sessions-list.page.scss'],
})
export class SessionsListPage implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private location: Location) { }

  ngOnInit() {
    if(!this.apiService.isLoggedIn()) {
      this.router.navigateByUrl("/")
    }
  }

  logOut() {
    this.apiService.logOut()
    this.router.navigateByUrl('/')
  }

}
