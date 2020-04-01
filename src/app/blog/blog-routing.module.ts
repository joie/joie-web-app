import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostWriteComponent } from './post-write/post-write.component';

const routes: Routes = [
  { path: '', component: BlogDashboardComponent },
  { path: 'write', component: PostWriteComponent },
  { path: 'write/:id', component: PostWriteComponent },
  { path: ':id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
