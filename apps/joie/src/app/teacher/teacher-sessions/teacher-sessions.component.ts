import { SessionType, CourseType } from './../../sessions/models/session';
import { TeacherFacadeService } from './../service/teacher-facade.service';
import { AddSessionHeaderComponent } from './components/add-session-header/add-session-header.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

export const SAVE_DRAFT = 'SAVE_DRAFT';
export const CANCEL = 'CANCEL';
export const SUBMIT = 'SUBMIT';

@Component({
  selector: 'app-teacher-sessions',
  templateUrl: './teacher-sessions.component.html',
  styleUrls: ['./teacher-sessions.component.scss'],
})
export class TeacherSessionsComponent implements OnInit {
  @ViewChild('header') header: AddSessionHeaderComponent;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private facadeService: TeacherFacadeService
  ) {}

  onHeaderToggle(e) {}

  ngOnInit(): void {
    const dashboardAction = history.state.action; // todo unclear yet if we gonna move session form to root so leaving the navigation like this yet, later it will change; Removing the patch value logic here and onActivate - resolver will handle
    if (dashboardAction) {
      this.router.navigate([dashboardAction], {
        relativeTo: this.route,
      });
    } else {
      this.router.navigate(['list'], { relativeTo: this.route });
    }
  }

  formatFormData(value) {
    if (value.format === CourseType.OnDemand) {
      delete value['dateTimeDuration'];
      delete value['availableTimeSlots'];
      delete value['repeat'];
      delete value['maxStudents'];
    }
    if (value.format === CourseType.LiveStreaming) {
      if (value.type !== 'Course') {
        delete value['repeat'];
      }
      if (value.type !== SessionType.Coaching) {
        delete value['availableTimeSlots'];
        delete value['maxStudents'];
      }
    }
    return value;
  }
  onActivate(componentRef) {
    const formGroup = componentRef.formGroup;
    if (formGroup) {
      this.header.toggle();
    }
  }
  onDeactivate(componentRef) {
    if (componentRef.formGroup) {
      let { operation } = history.state;
      switch (operation) {
        case SAVE_DRAFT:
          // todo saved to localStorage from form. this 'reducer' can be removed after switching to tdf
          this.header.toggle();
          break;
        case CANCEL:
          console.log('cancelling');
          this.header.toggle();
          break;
        case SUBMIT:
          this.facadeService.submitSession('user123', history.state.formData);
          this.header.toggle();
          break;
        default:
          console.log('operation is ', operation);
      }
    }
  }
}
