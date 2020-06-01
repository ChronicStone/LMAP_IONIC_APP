import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssessmentCheckPage } from './assessment-check.page';

const routes: Routes = [
  {
    path: '',
    component: AssessmentCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentCheckPageRoutingModule {}
