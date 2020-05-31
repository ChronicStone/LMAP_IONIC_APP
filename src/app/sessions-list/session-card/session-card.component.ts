import { Component, OnInit, Output, Input } from "@angular/core";

@Component({
  selector: "app-session-card",
  templateUrl: "./session-card.component.html",
  styleUrls: ["./session-card.component.scss"],
})
export class SessionCardComponent implements OnInit {
  @Input() session: any;
  expand = false;
  nbassessments: Number;

  constructor() {}

  ngOnInit() {
    this.nbassessments = this.session.assessments.length;
  }
}
