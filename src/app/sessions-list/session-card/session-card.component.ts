import { Component, OnInit, Output, Input } from "@angular/core";

@Component({
  selector: "app-session-card",
  templateUrl: "./session-card.component.html",
  styleUrls: ["./session-card.component.scss"],
})
export class SessionCardComponent implements OnInit {
  @Input() session: Object;
  expand = false;

  constructor() {}

  ngOnInit() {
    console.log();
  }
}
