import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerUpComponent } from './partner-up.component';

describe('PartnerUpComponent', () => {
  let component: PartnerUpComponent;
  let fixture: ComponentFixture<PartnerUpComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PartnerUpComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
