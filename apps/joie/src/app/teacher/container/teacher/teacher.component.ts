import { Component, OnInit } from '@angular/core';
import { TeacherFacadeService } from '../../service/teacher-facade.service';
import { Observable } from 'rxjs';
import { Teacher } from '../../models/teacher';

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
    this.teacher$ = this.facadeService.getTeacher();
  }

  onDeactivate(componentRef) {
    // todo in case i need acccess i can do it like dis
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
