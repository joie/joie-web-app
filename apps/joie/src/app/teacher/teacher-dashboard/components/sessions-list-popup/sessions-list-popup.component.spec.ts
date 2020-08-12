import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsListPopupComponent } from './sessions-list-popup.component';

describe('SessionsListPopupComponent', () => {
  let component: SessionsListPopupComponent;
  let fixture: ComponentFixture<SessionsListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
