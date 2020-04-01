import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-write',
  templateUrl: './post-write.component.html',
  styleUrls: ['./post-write.component.scss']
})
export class PostWriteComponent {
  postForm = this.fb.group({
    // company: null,
    title: [null, Validators.required]
    // lastName: [null, Validators.required],
    // address: [null, Validators.required],
    // address2: null,c
    // city: [null, Validators.required],
    // state: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
    // shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private db: DbService) {}

  onSubmit() {
    // alert('Thanks!');
    const { value } = this.postForm;
    this.db.set<Post>('posts', value);
  }
}
