import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

import { ApiService } from "./api.service";
import { AssessmentCheckService } from "./assessment-check.service";

@Injectable({
  providedIn: "root",
})
export class DataResolverService implements Resolve<any> {
  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get("id");
    return this.apiService.getData(id);
  }
}
