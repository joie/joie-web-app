import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureImageComponent } from './figure-image.component';

describe('FigureImageComponent', () => {
  let component: FigureImageComponent;
  let fixture: ComponentFixture<FigureImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigureImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
