import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormMetadataComponent } from './session-form-metadata.component';

describe('MetadataComponent', () => {
  let component: SessionFormMetadataComponent;
  let fixture: ComponentFixture<SessionFormMetadataComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SessionFormMetadataComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
