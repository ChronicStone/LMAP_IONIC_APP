import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckStep4Component } from './check-step4.component';

describe('CheckStep4Component', () => {
  let component: CheckStep4Component;
  let fixture: ComponentFixture<CheckStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStep4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
