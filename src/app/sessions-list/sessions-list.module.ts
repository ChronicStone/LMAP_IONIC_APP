import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SessionCardComponent } from './session-card/session-card.component'
import { SessionsListPageRoutingModule } from './sessions-list-routing.module';

import { SessionsListPage } from './sessions-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionsListPageRoutingModule,
  ],
  declarations: [SessionsListPage, SessionCardComponent]
})
export class SessionsListPageModule {}
