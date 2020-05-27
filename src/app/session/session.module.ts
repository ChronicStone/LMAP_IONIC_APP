import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SessionPageRoutingModule } from "./session-routing.module";
import { SessionCardComponent } from "../sessions-list/session-card/session-card.component";
import { SessionPage } from "./session.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SessionPageRoutingModule],
  declarations: [SessionPage, SessionCardComponent],
})
export class SessionPageModule {}