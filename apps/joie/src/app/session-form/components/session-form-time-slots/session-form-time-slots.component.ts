import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  SessionFormService,
  ControlTuple,
} from '../../services/session-form.service';

@Component({
  selector: 'app-session-form-time-slots',
  templateUrl: './session-form-time-slots.component.html',
  styleUrls: ['./session-form-time-slots.component.scss'],
})
export class SessionFormTimeSlotsComponent implements OnInit, OnDestroy {
  controls: ControlTuple[] = [['time-slot', new FormControl(null)]];

  myFilter(d: Date | null): boolean {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(private sessionFormService: SessionFormService) {}

  get form(): FormGroup {
    return this.sessionFormService.sessionForm;
  }

  ngOnInit(): void {
    this.sessionFormService.addControls(this.controls);
  }

  ngOnDestroy(): void {
    this.sessionFormService.removeControls(this.controls);
  }
}

// const measure = (
//   target: Object,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) => {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args) {
//     const start = performance.now();
//     const result = originalMethod.apply(this, args);
//     const finish = performance.now();
//     console.log(`Execution time: ${finish - start} milliseconds`);
//     return result;
//   };

//   return descriptor;
// };

// function formControlModifier(name: string, control: FormControl) {
//   return (target: any) => {
//     const onInit = target.ngOnInit;
//     const onDestroy = target.ngOnDestroy;

//     target.ngOnInit = () => {
//       console.log(19347);
//       console.log(1, this.form.get(name));
//       this.form.addControl(name, control);
//       onInit();
//     };

//     target.ngOnDestroy = () => {
//       control.disable();
//       onDestroy();
//     };
//     console.log(typeof target, name, control);
//   };
// }

// <T extends { new (...args: any[]): {} }>(
//   constructor: T
// ) {
//   const originalOnDestroy = this.ngOnDestroy.bind(this);
//   console.log(class extends constructor)
//   return class extends constructor {
//     newProperty = 'new property';
//     // this.ngOnDestroy = ()=>{originalOnDestroy();};
//   };
// }
