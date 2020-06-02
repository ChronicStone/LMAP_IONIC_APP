import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Form } from '@angular/forms';
@Injectable({
  providedIn: "root",
})
export class AssessmentCheckService {
  assessID: number;
  is_present: boolean;
  manager_comment: string;
  id_doc_type: string;
  id_doc_number: string;
  id_doc_file: FormData;
  candidate_photo: FormData;
  candidate_signature: FormData;

  constructor(private http: HttpClient) {}

  setAssessID(id) {
    this.assessID = id;
  }

  sendFileToAWS(formData) {
    return this.http.post(environment.apiBaseUrl + "/image-upload", formData)
  }

  saveStep1(data) {
    this.is_present = data.is_present;
    this.manager_comment = data.manager_comment;

    // return this.http.post( environment.apiBaseUrl + "/upload-image", {
    //   id: data.id,
    //   is_present: data.is_present,
    //   manager_comment: data.manager_commment
    // })
    console.log({ pres: this.is_present, comment: this.manager_comment });
  }

  saveStep2(data) {
    this.id_doc_number = data.id_doc_number;
    this.id_doc_type = data.id_doc_type;
    this.id_doc_file = data.id_doc_file;
    console.log({type: this.id_doc_type, number: this.id_doc_number, file: this.id_doc_file})
  }

  saveStep3(data) {
    this.candidate_photo = data.candidate_photo;
    console.log(this.candidate_photo)
  }

  saveStep4(data) {
    this.candidate_signature = data.candidate_signature;
  }

  setAssessAbsent(id) {
    return this.http.put(environment.apiBaseUrl + "/assessment/" + id, {
      onsite_session_status: 0,
    });
  }

  setAssessPresent(id) {
    return this.http.put(environment.apiBaseUrl + "/assessment/" + id, {
      onsite_session_status: 1,
    });
  }

}
