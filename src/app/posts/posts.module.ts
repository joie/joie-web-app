import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsDashboardComponent } from './containers/posts-dashboard/posts-dashboard.component';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostsDashboardComponent,
    PostListComponent,
    PostDetailComponent,
  ],
  imports: [PostsRoutingModule],
})
export class PostsModule {}
