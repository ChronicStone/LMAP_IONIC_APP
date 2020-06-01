import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckStep1Component } from './check-step1.component';

describe('CheckStep1Component', () => {
  let component: CheckStep1Component;
  let fixture: ComponentFixture<CheckStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStep1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
