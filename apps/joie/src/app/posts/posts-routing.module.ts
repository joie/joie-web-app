import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsDashboardComponent } from './containers/posts-dashboard/posts-dashboard.component';
import { PostDetailComponent } from './containers/post-detail/post-detail.component';
// import { PostWriteComponent } from './post-write/post-write.component';
// import { authorOnly } from '../common/claims-check';

const routes: Routes = [
  { path: '', component: PostsDashboardComponent },
  { path: ':postId', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
