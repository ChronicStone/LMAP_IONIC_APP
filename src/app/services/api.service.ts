import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  signIn(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/session-manager/auth', authCredentials);
  }

  logOut() {
    localStorage.removeItem('userData')
  }

  setUserData(userData) {
    localStorage.setItem("userData", JSON.stringify(userData))
  }

  isLoggedIn() {
    if(localStorage.getItem('userData')) {
      return true;
    }
    return false;
  }

  getSessionsData() {
    const managerId = JSON.parse(localStorage.getItem("userData")).id
    return this.http.get(environment.apiBaseUrl + `/onsite-session/${managerId}`)
  }
}
