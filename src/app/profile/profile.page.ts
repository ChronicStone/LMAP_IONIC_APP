import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

import { ApiService } from "../services/api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  editMode: Boolean = false
  email:string
  last_name:string
  first_name:string
  phone_number:Number

  userId:Number
  constructor(
    private apiService: ApiService,
    private router: Router,
    private location: Location
  ) {}

  userData: {};

  ngOnInit() {
    if (!this.apiService.isLoggedIn()) {
      this.router.navigateByUrl("/");
    }
    this.userData = this.apiService.getUserData();
    console.log(this.userData);
    this.email = this.userData.email
    this.last_name = this.userData.last_name
    this.first_name= this.userData.first_name
    this.phone_number= this.userData.phone_number
    this.userId = this.userData.id
  }

  logOut() {
    this.apiService.logOut();
    this.router.navigateByUrl("/");
  }

  goBack() {
    this.location.back();
  }

  edit(){
    this.editMode = true
  }

  submit(){
    const user = {
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      phone_number: this.phone_number
    }

    console.log(user)
    this.apiService.updateUserData(this.userId, user).subscribe(
      res => {
        console.log(res)
        if(res['success'] != false) {
          this.apiService.setUserData(res.updatedData)
          this.userData = res.updatedData

        }
        else {

        }
      },
      err => {
       console.log(err.error.message);
      }
    )
    this.editMode =false
  }
}
