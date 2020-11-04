import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadSelectComponent } from './image-upload-select.component';

describe('ImageUploadSelectComponent', () => {
  let component: ImageUploadSelectComponent;
  let fixture: ComponentFixture<ImageUploadSelectComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ImageUploadSelectComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
