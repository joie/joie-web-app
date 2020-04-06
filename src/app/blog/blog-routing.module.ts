import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostWriteComponent } from './post-write/post-write.component';
// import { authorOnly } from '../common/claims-check';

const routes: Routes = [
  { path: '', component: BlogDashboardComponent },
  {
    path: 'write',
    component: PostWriteComponent
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: authorOnly }
  },
  { path: 'write/:id', component: PostWriteComponent },
  { path: ':id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
