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
  sessionDraft = null; // type as session model
  constructor(private router: Router, private route: ActivatedRoute) {}

  onHeaderToggle(e) {}

  ngOnInit(): void {
    this.router.navigate(['list'], { relativeTo: this.route });
  }
  onActivate(componentRef) {
    const formGroup = componentRef.formGroup;
    if (formGroup) {
      this.header.toggle();
      if (this.sessionDraft) {
        formGroup.setValue(this.sessionDraft);
        this.sessionDraft = null;
      }
    }
  }
  onDeactivate(componentRef) {
    if (componentRef.formGroup) {
      let { operation } = history.state;
      switch (operation) {
        case SAVE_DRAFT:
          console.log('saving draft', componentRef.formGroup);
          this.sessionDraft = componentRef.formGroup.value;
          // todo save draft to somewhere persistent
          this.header.toggle();
          break;
        case CANCEL:
          console.log('cancelling');
          this.header.toggle();
          break;
        case SUBMIT:
          // TODO facadeService.submit(history.state.formData)
          this.header.toggle();
          break;
        default:
          console.log('operation is ', operation);
      }
    }
  }
}
