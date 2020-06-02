import { Component, OnInit } from "@angular/core";
import { AssessmentCheckService } from "../services/assessment-check.service";
import { Location } from "@angular/common";
import { ActivatedRoute, Resolve, Router } from "@angular/router";
import { ApiService } from "../services/api.service";
@Component({
  selector: "app-assessment-check",
  templateUrl: "./assessment-check.page.html",
  styleUrls: ["./assessment-check.page.scss"],
})
export class AssessmentCheckPage implements OnInit {
  currentAssessment: any;
  formStep: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private apiService: ApiService,
    private assessmentCheckService: AssessmentCheckService
  ) {}

  ngOnInit() {
    this.formStep = 1;
    console.log(this.formStep);
    if (this.route.snapshot.data["special"]) {
      this.currentAssessment = this.route.snapshot.data["special"];
      console.log(this.currentAssessment);
      this.assessmentCheckService.setAssessID(this.currentAssessment.id);
    }
  }

  nextStep(event) {
    if (typeof event !== "undefined") {
      if ("isPresent" in event) {
        this.setAbsent(event);
      }
    }
    this.formStep++;
  }

  setAbsent(event) {
    if (event.isPresent != true)
      this.assessmentCheckService
        .setAssessAbsent(this.currentAssessment.id)
        .subscribe(
          (res) => {
            this.router.navigate(
              ["/session/" + this.currentAssessment.onsite_session_id],
              {
                queryParams: {
                  updateData: true,
                  isPresent: event.isPresent,
                  assessID: this.currentAssessment.id,
                },
              }
            );
          },
          (err) => {
            console.log(err);
          }
        );
  }

  startExam() {
    this.assessmentCheckService
        .setAssessPresent(this.currentAssessment.id)
        .subscribe(
          (res) => {
            this.router.navigate(
              ["/session/" + this.currentAssessment.onsite_session_id],
              {
                queryParams: {
                  updateData: true,
                  isPresent: "true",
                  assessID: this.currentAssessment.id,
                },
              }
            );
          },
          (err) => {
            console.log(err);
          }
        );
  }

  prevStep() {
    this.formStep;
  }

  checkFirstStep() {}

  checkSecondStep() {}

  checkThirdStep() {}

  checkFifthStep() {}
}
