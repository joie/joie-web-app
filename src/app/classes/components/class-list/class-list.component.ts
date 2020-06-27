import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassesFacade } from 'src/app/services/classes.facade';
import { Class } from 'src/app/models/class.model';
import { MatDialog } from '@angular/material/dialog';
import { EnrollDialogComponent } from '../enroll-dialog/enroll-dialog.component';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent {
  classes$: Observable<Class[]>;

  constructor(private classesFacade: ClassesFacade, public dialog: MatDialog) {
    this.classes$ = this.classesFacade.getClasses();
  }

  openDialog() {
    this.dialog.open(EnrollDialogComponent);
  }
}
