import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { take } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[fireStorageRef]',
})
export class FireStorageRefDirective implements OnInit {
  @Input('fireStorageRef') path: any;

  constructor(private storage: AngularFireStorage, private el: ElementRef) {}

  ngOnInit() {
    this.setUrl();
  }
  setUrl() {
    if (!this.path) {
      return;
    }
    const ref = this.storage.ref(this.path);
    ref
      .getDownloadURL()
      .pipe(take(1))
      .subscribe((url) => (this.el.nativeElement.src = url));
  }
}
