import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssessmentCheckPage } from './assessment-check.page';

describe('AssessmentCheckPage', () => {
  let component: AssessmentCheckPage;
  let fixture: ComponentFixture<AssessmentCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentCheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssessmentCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
