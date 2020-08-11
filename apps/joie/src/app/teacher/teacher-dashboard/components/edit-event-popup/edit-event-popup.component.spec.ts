import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventPopupComponent } from './edit-event-popup.component';

describe('EditEventPopupComponent', () => {
  let component: EditEventPopupComponent;
  let fixture: ComponentFixture<EditEventPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
