import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

import { ApiService } from "../services/api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private location: Location
  ) {}

  userData: {};

  ngOnInit() {
    if (!this.apiService.isLoggedIn()) {
      this.router.navigateByUrl("/");
    }
    this.userData = this.apiService.getUserData();
    console.log(this.userData);
  }

  logOut() {
    this.apiService.logOut();
    this.router.navigateByUrl("/");
  }

  goBack() {
    this.location.back();
  }
}
