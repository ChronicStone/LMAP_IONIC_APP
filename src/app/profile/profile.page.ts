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

  ngOnInit() {}

  logOut() {
    this.apiService.logOut();
    this.router.navigateByUrl("/");
  }

  goBack() {
    this.location.back();
  }
}
