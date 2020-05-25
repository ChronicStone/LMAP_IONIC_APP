import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    if(this.apiService.isLoggedIn()) {
      this.router.navigateByUrl("/sessions")
    }
  }
  toLogin(){
    this.router.navigateByUrl('login')
  }

}
