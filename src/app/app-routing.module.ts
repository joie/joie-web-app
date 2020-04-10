import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { canActivate } from '@angular/fire/auth-guard';
import {
  authorOnly,
  redirectUnauthorizedToLogin,
} from './common/auth-guards-pipes';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'author',
    loadChildren: () =>
      import('./author/author.module').then((m) => m.AuthorModule),
    data: { preload: false },
    ...canActivate(redirectUnauthorizedToLogin),
    ...canActivate(authorOnly),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
