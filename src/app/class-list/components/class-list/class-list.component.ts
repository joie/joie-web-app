import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassesFacade } from 'src/app/services/classes.facade';
import { Class } from 'src/app/models/class.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
  classes$: Observable<Class[]>;

  constructor(private classesFacade: ClassesFacade) {
    this.classes$ = this.classesFacade.getClasses();
  }

  ngOnInit(): void {}
}
