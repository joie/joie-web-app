import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class DynaFormService {
  form = this.fb.group({});

  constructor(private fb: FormBuilder) {}
}
