import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayTableComponent } from './form-array-table.component';

describe('FormArrayTableComponent', () => {
  let component: FormArrayTableComponent;
  let fixture: ComponentFixture<FormArrayTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormArrayTableComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
