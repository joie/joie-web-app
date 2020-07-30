import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRouterComponent } from './dialog-router.component';

describe('DialogRouterComponent', () => {
  let component: DialogRouterComponent;
  let fixture: ComponentFixture<DialogRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
