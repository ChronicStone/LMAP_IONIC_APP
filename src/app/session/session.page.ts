import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Resolve, Router } from "@angular/router";

import { ApiService } from "../services/api.service";

@Component({
  selector: "app-session",
  templateUrl: "./session.page.html",
  styleUrls: ["./session.page.scss"],
})
export class SessionPage implements OnInit {
  session: any;
  sessionData: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    if (!this.apiService.isLoggedIn()) {
      this.router.navigateByUrl("/");
    }
    if (this.route.snapshot.data["special"]) {
      this.session = this.route.snapshot.data["special"];
      console.log(this.session);
    }
  }

  goBack() {
    console.log("bb");
    this.location.back();
  }
}
