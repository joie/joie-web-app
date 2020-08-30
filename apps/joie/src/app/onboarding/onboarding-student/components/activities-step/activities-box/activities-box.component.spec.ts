import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGoalsBoxComponent } from './activities-box.component';

describe('SubGoalsBoxComponent', () => {
  let component: SubGoalsBoxComponent;
  let fixture: ComponentFixture<SubGoalsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubGoalsBoxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGoalsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
