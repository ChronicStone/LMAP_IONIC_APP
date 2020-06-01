import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AssessmentCheckService } from "../../services/assessment-check.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-check-step1",
  templateUrl: "./check-step1.component.html",
  styleUrls: ["./check-step1.component.scss"],
})
export class CheckStep1Component implements OnInit {
  @Input() currentAssessment: any;
  @Output() nextStep = new EventEmitter();

  isPresent: boolean;
  managerComment: string;
  presenceCheck: boolean = false;

  fillPresent: string = "outline";
  fillAbsent: string = "outline";
  emptyPresent: boolean = false;
  constructor(
    private assessmentCheckService: AssessmentCheckService,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  async toNextStep() {
    const toast = await this.toastController.create({
      message: "You have to choose presence state",
      duration: 2500,
    });
    if (!this.emptyPresent) {
      toast.present();
    } else {
      var data = {
        is_present: this.isPresent,
        manager_commment: this.managerComment,
      };
      this.assessmentCheckService.saveStep1(data);
      this.nextStep.emit();
    }
  }

  buttonApparence(button) {
    this.emptyPresent = true;
    this.fillPresent = "outline";
    this.fillAbsent = "outline";
    if (button === "present") {
      this.isPresent = true;
      this.fillPresent = "solid";
    }
    if (button === "absent") {
      this.isPresent = false;
      this.fillAbsent = "solid";
    }
  }
}
