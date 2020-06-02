import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AssessmentCheckService } from "../../services/assessment-check.service";
import { ToastController } from "@ionic/angular";

import { PhotoService } from "../../services/photo.service";
@Component({
  selector: 'app-check-step3',
  templateUrl: './check-step3.component.html',
  styleUrls: ['./check-step3.component.scss'],
})
export class CheckStep3Component implements OnInit {
  @Input() currentAssessment: any;
  @Output() nextStep = new EventEmitter();

  candidate_photo: any;
  candidate_photo_base64: string;
  constructor(    
    private assessmentCheckService: AssessmentCheckService,
    public toastController: ToastController,
    public photoService: PhotoService) { }

  ngOnInit() {}

  async newPhoto() {
    const resultPhoto = await this.photoService.addNewToGallery();
    this.candidate_photo = resultPhoto.formData;
    this.candidate_photo_base64 = resultPhoto.base64
    console.log(resultPhoto)
    // this.id_doc_file = 
    // console.log("file : " + this.id_doc_file)
  }

  async toNextStep() {
    const toast = await this.toastController.create({
      message: "Missing elements on this step",
      duration: 2500,
    });
    if (!this.candidate_photo) {
      toast.present();
    } else {
      var data = {
        candidate_photo: this.candidate_photo,
      };
      this.assessmentCheckService.saveStep3(data);
      this.nextStep.emit();
    }
  }

}
