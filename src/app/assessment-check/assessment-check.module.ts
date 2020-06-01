import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AssessmentCheckPageRoutingModule } from "./assessment-check-routing.module";

import { AssessmentCheckPage } from "./assessment-check.page";
import { CheckStep1Component } from "./check-step1/check-step1.component";
import { CheckStep2Component } from "./check-step2/check-step2.component";
import { CheckStep3Component } from "./check-step3/check-step3.component";
import { CheckStep4Component } from "./check-step4/check-step4.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssessmentCheckPageRoutingModule,
  ],
  declarations: [
    AssessmentCheckPage,
    CheckStep1Component,
    CheckStep2Component,
    CheckStep3Component,
    CheckStep4Component,
  ],
})
export class AssessmentCheckPageModule {}
