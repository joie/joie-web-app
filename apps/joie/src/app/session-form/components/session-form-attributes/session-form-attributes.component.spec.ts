import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormAttributesComponent } from './session-form-attributes.component';

describe('SessionFormAttributesComponent', () => {
  let component: SessionFormAttributesComponent;
  let fixture: ComponentFixture<SessionFormAttributesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SessionFormAttributesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
