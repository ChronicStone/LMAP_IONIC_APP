import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { AssessmentCheckService } from './assessment-check.service';

describe('AssessmentCheckService', () => {
  let service: AssessmentCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
