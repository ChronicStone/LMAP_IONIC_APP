import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckStep2Component } from './check-step2.component';

describe('CheckStep2Component', () => {
  let component: CheckStep2Component;
  let fixture: ComponentFixture<CheckStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStep2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
