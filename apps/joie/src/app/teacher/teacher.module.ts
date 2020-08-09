import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './container/teacher/teacher.component';
import { SideNavComponent } from './container/side-nav/side-nav.component';
import { HeaderComponent } from './container/header/header.component';

@NgModule({
  declarations: [TeacherComponent, SideNavComponent, HeaderComponent],
  imports: [SharedModule, TeacherRoutingModule, MatListModule],
})
export class TeacherModule {}
