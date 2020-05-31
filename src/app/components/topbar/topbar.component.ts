import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  managerData: {};
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.managerData = this.apiService.getUserData();
  }

  toProfile() {
    this.router.navigateByUrl("/profile");
  }
}
