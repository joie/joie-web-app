import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesDashboardComponent } from './containers/classes/classes-dashboard.component';
import { ClassComponent } from './containers/class/class.component';
import { ClassListComponent } from './components/class-list/class-list.component';
import { MatCardModule } from '@angular/material/card';
import { EnrollDialogComponent } from './components/enroll-dialog/enroll-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ClassesDashboardComponent,
    ClassComponent,
    ClassListComponent,
    EnrollDialogComponent,
  ],
  imports: [SharedModule, ClassesRoutingModule, MatCardModule, MatDialog],
  exports: [ClassListComponent],
})
export class ClassesModule {}
