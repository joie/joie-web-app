import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student';
import { AuthService } from '../../../../auth-state/services/auth/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-student-onboarding-stepper',
  templateUrl: './student-onboarding-stepper.component.html',
  styleUrls: ['./student-onboarding-stepper.component.scss'],
})
export class StudentOnboardingStepperComponent implements OnInit, AfterViewInit {
  student: Partial<Student> = {};
  displayName;
  public steps: string[];
  public selectedStep: number = 0;
  public selectedStepRef = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.steps = this.route.snapshot.routeConfig.children.map((child) => {
      return child.path;
    });

    this.authService.state$.subscribe((user) => (this.displayName = user.displayName));
  }

  ngAfterViewInit() {
    let step = this.steps[0];
    this.router.navigate([step], {
      relativeTo: this.route,
    });
  }

  onActivate(componentRef) {
    if (this.hasForm()) {
      this.selectedStepRef = componentRef;
    } else {
      this.selectedStepRef = null;
    }
  }

  hasForm() {
    return ![0, this.steps.length - 1].includes(this.selectedStep);
  }

  isCompleted() {
    return this.selectedStepRef ? this.selectedStepRef.isValid() : true;
  }
  selectionChanged(event: any) {
    if (this.selectedStepRef) {
      console.log(this.selectedStepRef);
      Object.assign(this.student, this.selectedStepRef.submit());
    }
    this.selectedStep = event.selectedIndex;
    this.router.navigate([this.steps[this.selectedStep]], {
      state: { displayName: this.displayName, student: this.student },
      relativeTo: this.route,
    });
  }
}
