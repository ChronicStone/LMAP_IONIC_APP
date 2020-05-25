import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  isError = false;
  loginErr = "";
  user = {
    email : "",
    password : "",
  }

  constructor(private apiService: ApiService, private router: Router, private location: Location) {}

  ngOnInit() {}

  logForm() {
    const md5 = new Md5();
    const signInData =  {
      email : this.user.email,
      password: md5.appendStr(this.user.password).end() 
    }
    this.apiService.signIn(signInData).subscribe(
      res => {
        console.log(res)
        if(res['success'] != false) {
          this.isError = false
          this.loginErr = ""
          this.apiService.setUserData(res['data']);
          this.router.navigateByUrl('/sessions');
        }
        else {
          this.isError = true
          this.loginErr = res['message']
        }
      },
      err => {
       console.log(err.error.message);
      }
    );
  }
}
