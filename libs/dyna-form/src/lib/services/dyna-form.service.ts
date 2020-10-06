import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class DynaFormService implements OnDestroy {
  form?: FormGroup;
  session?: any;

  constructor(private fb: FormBuilder) {
    console.log('service constructed');
    this.form = this.fb.group({});
  }
  ngOnDestroy() {
    console.log('SERVICE DESTROYED');
  }
}
