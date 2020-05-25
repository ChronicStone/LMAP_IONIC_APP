import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsListPage } from './sessions-list.page';

const routes: Routes = [
  {
    path: '',
    component: SessionsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsListPageRoutingModule {}
