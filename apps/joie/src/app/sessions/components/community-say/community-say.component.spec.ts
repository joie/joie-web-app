import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySayComponent } from './community-say.component';

describe('CommunitySayComponent', () => {
  let component: CommunitySayComponent;
  let fixture: ComponentFixture<CommunitySayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitySayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitySayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
