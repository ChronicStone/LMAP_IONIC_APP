import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PhotoService } from "../../services/photo.service";
import { AssessmentCheckService } from "../../services/assessment-check.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-check-step4",
  templateUrl: "./check-step4.component.html",
  styleUrls: ["./check-step4.component.scss"],
})
export class CheckStep4Component implements OnInit {
  @Input() currentAssessment: any;
  @Output() nextStep = new EventEmitter();

  signaturePad:any;
  candidate_signature:any;
  base64file:any;

  constructor(
    private photoService: PhotoService, 
    private toastController: ToastController,
    private assessmentCheckService: AssessmentCheckService
    ) {}

  ngOnInit() {
    this.signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      penColor: 'rgb(0, 0, 0)'
    });
  }

  onSave() {
    this.base64file = this.signaturePad.toDataURL('image/png');
    this.candidate_signature = this.photoService.base64ToFormData(this.base64file)
  }    

  onClear() {
    this.signaturePad.clear();
  }

  async toNextStep() {
    const toast = await this.toastController.create({
      message: "Missing elements on this step",
      duration: 2500,
    });
    if (!this.candidate_signature) {
      toast.present();
    } else {
      var data = {
        candidate_signature: this.candidate_signature,
      };
      this.assessmentCheckService.saveStep4(data);
      this.nextStep.emit();
    }
  }

}
