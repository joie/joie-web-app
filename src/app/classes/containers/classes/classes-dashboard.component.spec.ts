import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesDashboardComponent } from './classes-dashboard.component';

describe('ClassesComponent', () => {
  let component: ClassesDashboardComponent;
  let fixture: ComponentFixture<ClassesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
