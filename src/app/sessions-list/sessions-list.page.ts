import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import * as moment from "moment";

import { ApiService } from "../services/api.service";
@Component({
  selector: "app-sessions-list",
  templateUrl: "./sessions-list.page.html",
  styleUrls: ["./sessions-list.page.scss"],
})
export class SessionsListPage implements OnInit {
  sessionData: {};
  mounted: boolean = false;

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
        this.sessionData = res["data"];
        for (var i = 0; i < res["data"].length; i++) {
          this.sessionData[i].date = this.sessionData[i].date.replace(
            new RegExp("/", "g"),
            "-"
          );
          console.log(this.sessionData[i].date);
          this.sessionData[i].date = moment(
            this.sessionData[i].date,
            "DD-MM-YYYY"
          ).format("dddd, MMMM Do YYYY");
        }
        console.log(this.sessionData);
        this.mounted = true;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  checkSessionDate(session, i) {
    if (!this.sessionData[i - 1]) {
      return true;
    } else {
      if (this.sessionData[i - 1].date != session.date) {
        return true;
      } else return false;
    }
  }

  logOut() {
    this.apiService.logOut();
    this.router.navigateByUrl("/");
  }

  toProfile() {
    this.router.navigateByUrl("/profile");
  }
}
