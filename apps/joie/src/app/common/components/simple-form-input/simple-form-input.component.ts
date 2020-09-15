import { Component, ElementRef, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form-input',
  templateUrl: './simple-form-input.component.html',
  styleUrls: ['./simple-form-input.component.scss'],
})
export class SimpleFormInputComponent {
  // @ViewChild('documentEditForm') private documentEditForm: FormGroupDirective;
  @ViewChild('textInput') textInput: ElementRef;

  @Input() validators: Validators[];
  @Output() submission = new EventEmitter<string>();

  form = this.fb.group({
    text: ['', Validators.minLength(5)],
  });

  constructor(private fb: FormBuilder) {}

  get textControl() {
    return this.form.get('text');
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const { value } = this.textControl;
    this.submission.emit(value);
    this.form.reset();
    this.textInput.nativeElement.focus();
  }
}
