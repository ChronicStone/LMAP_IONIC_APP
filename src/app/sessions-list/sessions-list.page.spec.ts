import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionsListPage } from './sessions-list.page';

describe('SessionsListPage', () => {
  let component: SessionsListPage;
  let fixture: ComponentFixture<SessionsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
