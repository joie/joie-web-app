import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsDashboardComponent } from './containers/posts-dashboard/posts-dashboard.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';

@NgModule({
  declarations: [
    PostsDashboardComponent,
    PostListComponent,
    PostDetailComponent,
  ],
  imports: [SharedModule, PostsRoutingModule],
})
export class PostsModule {}
