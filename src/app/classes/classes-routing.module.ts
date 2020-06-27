import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesDashboardComponent } from './containers/classes/classes-dashboard.component';
import { ClassComponent } from './containers/class/class.component';

const routes: Routes = [
  { path: '', component: ClassesDashboardComponent },
  { path: ':classId', component: ClassComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassesRoutingModule {}
