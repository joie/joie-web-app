import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormMarketingComponent } from './session-form-marketing.component';

describe('SessionFormMarketingComponent', () => {
  let component: SessionFormMarketingComponent;
  let fixture: ComponentFixture<SessionFormMarketingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SessionFormMarketingComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
