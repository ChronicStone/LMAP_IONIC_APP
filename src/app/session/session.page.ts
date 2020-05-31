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
  filter: any = { statut: "1" };
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
      for (let t = 0; t < this.session.assessments.length; t++) {
        this.users.push(this.session.assessments[t]);
      }
      console.log(this.users);
    }
  }

  goBack() {
    this.location.back();
  }

  seeDone() {
    this.filter = { statut: 1 };
  }

  seeEdit() {
    this.filter = { statut: 2 };
  }

  seeAbsent() {
    this.filter = { statut: 0 };
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
