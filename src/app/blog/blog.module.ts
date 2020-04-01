import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostWriteComponent } from './post-write/post-write.component';

@NgModule({
  declarations: [
    BlogDashboardComponent,
    PostListComponent,
    PostDetailComponent,
    PostWriteComponent
  ],
  imports: [CommonModule, BlogRoutingModule]
})
export class BlogModule {}
