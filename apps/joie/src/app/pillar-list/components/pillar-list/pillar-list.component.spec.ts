import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillarListComponent } from './pillar-list.component';

describe('PillarListComponent', () => {
  let component: PillarListComponent;
  let fixture: ComponentFixture<PillarListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PillarListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PillarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
