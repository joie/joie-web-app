import { Component, OnInit } from '@angular/core';
import { TeacherFacadeService } from '../../service/teacher-facade.service';
import { Observable } from 'rxjs';
import { Teacher } from '../../../models/teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  tabs$: Observable<string[]>;
  teacher$: Observable<Teacher>;

  // todo add avatar

  constructor(private facadeService: TeacherFacadeService) {}
  ngOnInit(): void {
    this.tabs$ = this.facadeService.getMenuTabs();
    this.teacher$ = this.facadeService.getTeacher('user123');
  }

  onDeactivate(componentRef) {
    // todo in case i need acccess i can do it like dis
    // also the profile component uses TDF and this interface doesn't fit it. Is it a good practice to attach his ngModel  to fake formGroup so this interface can reach it? or to add some code here
    // console.log(componentRef);
    // let formGroup = componentRef.formGroup;
    // if (formGroup) {
    //   const key = Object.keys(formGroup.value)[0];
    //   switch (key) {
    //     case 'settings':
    //       console.log(formGroup.value[key]);
    //   }
    // }
  }
}
