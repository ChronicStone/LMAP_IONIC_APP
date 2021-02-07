import { Component, OnInit, Output, Input } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-session-card",
  templateUrl: "./session-card.component.html",
  styleUrls: ["./session-card.component.scss"],
})
export class SessionCardComponent implements OnInit {
  @Input() session: any;
  expand = false;
  id = Number;
  nbassessments: Number;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    if (!this.apiService.isLoggedIn()) {
      this.router.navigateByUrl("/");
    }
    this.nbassessments = this.session.assessments.length;
  }

  toSession(id) {
    this.apiService.setData(id, this.session);
    this.router.navigateByUrl("/session/" + id);
  }
}
