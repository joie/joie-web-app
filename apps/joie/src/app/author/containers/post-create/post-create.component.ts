import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Post } from 'src/app/posts/models/post';

@Component({
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  constructor(private db: DbService) {}

  ngOnInit(): void {}

  onSave(post: Post) {
    this.db.set$<Post>('posts', post);
  }
}
