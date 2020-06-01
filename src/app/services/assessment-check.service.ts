import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
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
  candidate_photo: any;
  candidate_signature: any;

  constructor(private http: HttpClient) {}

  setAssessID(id) {
    this.assessID = id;
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
  }

  saveStep3(data) {
    this.candidate_photo = data.candidate_photo;
  }

  saveStep4(data) {
    this.candidate_signature = data.candidate_signature;
  }

  setAssessAbsent(id) {
    var newData = this.buildDataArray();
    console.log(newData);
    return this.http.put(environment.apiBaseUrl + "/assessment/" + id, {
      onsite_session_status: 0,
    });
  }

  buildDataArray() {
    var data: Object;
    if (this.is_present) data["is_present"] = this.is_present;
    if (this.manager_comment) data["manager_comment"] = this.manager_comment;
    if (this.id_doc_type) data["id_doc_type"] = this.id_doc_type;
    if (this.id_doc_number) data["id_doc_number"] = this.id_doc_number;
    if (this.id_doc_type) data["id_doc_type"] = this.id_doc_type;
    if (this.id_doc_file) data["id_doc_file"] = this.id_doc_file;
    if (this.candidate_photo) data["candidate_photo"] = this.candidate_photo;
    if (this.candidate_signature)
      data["candidate_signature"] = this.candidate_signature;

    console.log(data);
    return data;
  }
}
