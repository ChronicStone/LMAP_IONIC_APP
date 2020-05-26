import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

import { ApiService } from "../services/api.service";
@Component({
  selector: "app-sessions-list",
  templateUrl: "./sessions-list.page.html",
  styleUrls: ["./sessions-list.page.scss"],
})
export class SessionsListPage implements OnInit {
  sessionData: {};
  constructor(
    private apiService: ApiService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    if (!this.apiService.isLoggedIn()) {
      this.router.navigateByUrl("/");
    }
    this.apiService.getSessionsData().subscribe(
      (res) => {
        this.sessionData = res["data"][0];
        console.log(this.sessionData);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  logOut() {
    this.apiService.logOut();
    this.router.navigateByUrl("/");
  }

  toProfile() {
    this.router.navigateByUrl("/profile");
  }
}
