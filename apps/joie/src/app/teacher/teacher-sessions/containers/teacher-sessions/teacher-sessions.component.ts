import { SessionType, CourseType } from '../../../../sessions/models/session';
import { TeacherFacadeService } from '../../../service/teacher-facade.service';
import { AddSessionHeaderComponent } from '../../components/add-session-header/add-session-header.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryFn } from '@angular/fire/firestore';
import { SessionListComponent } from '../../../../session-list/components/session-list/session-list.component';

export const SAVE_DRAFT = 'SAVE_DRAFT';
export const CANCEL = 'CANCEL';
export const SUBMIT = 'SUBMIT';

@Component({
  selector: 'app-teacher-sessions',
  templateUrl: './teacher-sessions.component.html',
  styleUrls: ['./teacher-sessions.component.scss'],
})
export class TeacherSessionsComponent implements OnInit {
  public boundQueryFn: QueryFn;

  public ngOnInit() {
    this.boundQueryFn = this.queryFn.bind(this);
  }

  private queryFn(ref) {
    // TODO make sure to get user's own uid
    return ref.where('uid', '==', 'k95iNgrW8PP67NyPK2ii5AKHKeG2');
  }

  // @ViewChild('header') header: AddSessionHeaderComponent;
  // sessionDraft = null; // type as session model
  // constructor(
  //   private router: Router,
  //   private route: ActivatedRoute,
  //   private facadeService: TeacherFacadeService
  // ) {}

  // onHeaderToggle(e) {}

  // ngOnInit(): void {
  //   // todo open session list component is in the router-outlet, so we might want to navigate there with it's data fetched
  //   /*
  //   this.facadeService.getSessionsByTeacher(id).subscribe(response => {
  //   this.router.navigate('list', {relTo:this, state: response})
  //   })
  //   */
  //   const dashboardAction = history.state.action;
  //   if (dashboardAction) {
  //     this.sessionDraft = history.state.session;
  //     this.router.navigate([dashboardAction], {
  //       relativeTo: this.route,
  //     });
  //   } else {
  //     this.router.navigate(['list'], { relativeTo: this.route });
  //   }
  // }

  // formatFormData(value) {
  //   if (value.format === CourseType.OnDemand) {
  //     delete value['dateTimeDuration'];
  //     delete value['availableTimeSlots'];
  //     delete value['repeat'];
  //     delete value['maxStudents'];
  //   }
  //   if (value.format === CourseType.LiveStreaming) {
  //     if (value.type !== 'Course') {
  //       delete value['repeat'];
  //     }
  //     if (value.type !== SessionType.Coaching) {
  //       delete value['availableTimeSlots'];
  //       delete value['maxStudents'];
  //     }
  //   }
  //   return value;
  // }
  // onActivate(componentRef) {
  //   const formGroup = componentRef.formGroup;
  //   if (formGroup) {
  //     this.header.toggle();
  //     if (this.sessionDraft) {
  //       formGroup.patchValue(this.sessionDraft);
  //       this.sessionDraft = null; // todo maybe nulling isn't a must, let it be, why
  //     }
  //   }
  // }
  // onDeactivate(componentRef) {
  //   if (componentRef.formGroup) {
  //     let { operation } = history.state;
  //     switch (operation) {
  //       case SAVE_DRAFT:
  //         this.sessionDraft = componentRef.formGroup.value;
  //         // todo save draft to somewhere persistent
  //         this.header.toggle();
  //         break;
  //       case CANCEL:
  //         console.log('cancelling');
  //         this.header.toggle();
  //         break;
  //       case SUBMIT:
  //         this.facadeService.submitSession('user123', history.state.formData);
  //         this.header.toggle();
  //         break;
  //       default:
  //         console.log('operation is ', operation);
  //     }
  //   }
  // }
}
