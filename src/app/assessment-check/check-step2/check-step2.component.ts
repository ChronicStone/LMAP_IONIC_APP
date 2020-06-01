import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AssessmentCheckService } from "../../services/assessment-check.service";
import { ToastController } from "@ionic/angular";

import { PhotoService } from "../../services/photo.service";

@Component({
  selector: "app-check-step2",
  templateUrl: "./check-step2.component.html",
  styleUrls: ["./check-step2.component.scss"],
})
export class CheckStep2Component implements OnInit {
  @Input() currentAssessment: any;
  @Output() nextStep = new EventEmitter();

  id_doc_type: string;
  id_doc_number: string;
  id_doc_file: any;

  constructor(
    private assessmentCheckService: AssessmentCheckService,
    public toastController: ToastController,
    public photoService: PhotoService
  ) {}

  ngOnInit() {
    this.id_doc_number = this.currentAssessment.id_number;
    this.id_doc_type = this.currentAssessment.id_type;
  }

  newPhoto() {
    this.photoService.addNewToGallery();
  }

  async toNextStep() {
    const toast = await this.toastController.create({
      message: "Missing elements on this step",
      duration: 2500,
    });
    if (!this.id_doc_type || !this.id_doc_file || this.id_doc_number) {
      toast.present();
    } else {
      var data = {
        id_doc_number: this.id_doc_number,
        id_doc_type: this.id_doc_type,
        id_doc_file: this.id_doc_file,
      };
      this.assessmentCheckService.saveStep2(data);
      this.nextStep.emit();
    }
  }
}
