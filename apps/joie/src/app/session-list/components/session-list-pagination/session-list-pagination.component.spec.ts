import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListPaginationComponent } from './session-list-pagination.component';

describe('SessionListPaginationComponent', () => {
  let component: SessionListPaginationComponent;
  let fixture: ComponentFixture<SessionListPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionListPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
