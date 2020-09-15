import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTypesComponent } from './session-types.component';

describe('SessionTypesComponent', () => {
  let component: SessionTypesComponent;
  let fixture: ComponentFixture<SessionTypesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SessionTypesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
