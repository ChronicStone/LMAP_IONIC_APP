import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-check-step4",
  templateUrl: "./check-step4.component.html",
  styleUrls: ["./check-step4.component.scss"],
})
export class CheckStep4Component implements OnInit {
  @Input() currentAssessment: any;

  constructor() {}

  ngOnInit() {}
}
