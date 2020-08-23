import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormInputComponent } from './simple-form-input.component';

describe('SimpleFormInputComponent', () => {
  let component: SimpleFormInputComponent;
  let fixture: ComponentFixture<SimpleFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
