import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AssessmentCheckService {
  is_present: boolean
  manager_comment: string
  id_doc_type: string
  id_doc_number: string
  id_doc_file: FormData
  candidate_photo: any
  candidate_signature: any

  constructor(private http: HttpClient) { }

  saveStep1(data) {
    this.is_present = data.is_present;
    this.manager_comment = data.manager_comment;

    return this.http.post( environment.apiBaseUrl + "/upload-image", {
      id: data.id,
      is_present: data.is_present,
      manager_comment: data.manager_commment
    })
  }

  saveStep2(data) {
    this.id_doc_number = data.id_doc_number
    this.id_doc_type = data.id_doc_type
    this.id_doc_file = data.id_doc_file
  }

  saveStep3(data) {
    this.candidate_photo = data.candidate_photo
  }

  saveStep4(data) {
    this.candidate_signature = data.candidate_signature
  }

  sendDataToApi() {
  }
}
