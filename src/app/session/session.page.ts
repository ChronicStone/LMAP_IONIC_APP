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
  users: any = [];
  statut: state = null;
  filterArgs: { statut: "1" };
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
      for (let t = 0; t < this.session.assessments.length; t++) {
        this.users.push(this.session.assessments[t]);
      }

      for (let i = 0; i < this.users.length; i++) {
        this.users[i].statut = this.statut = "2";
      }
      console.log(this.users);
    }
  }

  goBack() {
    this.location.back();
  }
}

interface state {
  statut: statut;
}

enum statut {
  absent = 0,
  present = 1,
  nonValide = 2,
}
