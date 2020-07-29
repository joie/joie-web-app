import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeToNewsletterComponent } from './subscribe-to-newsletter.component';

describe('SubscribeToNewsletterComponent', () => {
  let component: SubscribeToNewsletterComponent;
  let fixture: ComponentFixture<SubscribeToNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeToNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeToNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
