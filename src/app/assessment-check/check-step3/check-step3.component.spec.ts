import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckStep3Component } from './check-step3.component';

describe('CheckStep3Component', () => {
  let component: CheckStep3Component;
  let fixture: ComponentFixture<CheckStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStep3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
