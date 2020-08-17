import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './containers/teacher/teacher.component';
import { TeacherHeaderComponent } from './components/teacher-header/teacher-header.component';
import { TeacherSidenavComponent } from './components/teacher-sidenav/teacher-sidenav.component';
import { MainLayoutComponent } from '../common/components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    TeacherComponent,
    TeacherHeaderComponent,
    TeacherSidenavComponent,
    MainLayoutComponent,
  ],
  imports: [SharedModule, TeacherRoutingModule, MatListModule],
})
export class TeacherModule {}
