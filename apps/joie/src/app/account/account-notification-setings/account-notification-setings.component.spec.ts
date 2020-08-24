import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNotificationSetingsComponent } from './account-notification-setings.component';

describe('ProfileNotificationSetingsComponent', () => {
  let component: ProfileNotificationSetingsComponent;
  let fixture: ComponentFixture<ProfileNotificationSetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileNotificationSetingsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNotificationSetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
