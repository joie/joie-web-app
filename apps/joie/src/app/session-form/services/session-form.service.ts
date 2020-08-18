import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class SessionFormService {
  sessionForm = this.fb.group({
    title: ['lorem ipsum', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  getControl(name: string) {
    return this.sessionForm.get(name)?.value;
  }
}
