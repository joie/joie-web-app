import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDateTimePickerComponent } from './recurring-date-time-picker.component';

describe('RecurringDateTimePickerComponent', () => {
  let component: RecurringDateTimePickerComponent;
  let fixture: ComponentFixture<RecurringDateTimePickerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RecurringDateTimePickerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
