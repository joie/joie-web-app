import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorDashboardComponent } from './containers/author-dashboard/author-dashboard.component';
import { PostCreateComponent } from './containers/post-create/post-create.component';
import { PostUpdateComponent } from './containers/post-update/post-update.component';

const routes: Routes = [
  {
    path: 'dshboard',
    component: AuthorDashboardComponent,
  },
  {
    path: 'draft',
    component: PostCreateComponent,
  },
  { path: 'update:postId', component: PostUpdateComponent },
  { path: '', redirectTo: 'dshboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}
