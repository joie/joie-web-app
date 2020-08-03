import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionHeaderComponent } from './add-session-header.component';

describe('AddSessionHeaderComponent', () => {
  let component: AddSessionHeaderComponent;
  let fixture: ComponentFixture<AddSessionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSessionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSessionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
