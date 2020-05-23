import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Class } from '../models/class.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassesFacade {
  constructor(private db: DbService) {}

  getClasses() {
    return this.db.get$<Class>('classes') as Observable<Class[]>;
  }
}
