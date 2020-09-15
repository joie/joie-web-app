import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesDashboardComponent } from './sessions-dashboard.component';

describe('ClassesComponent', () => {
  let component: ClassesDashboardComponent;
  let fixture: ComponentFixture<ClassesDashboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ClassesDashboardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
