import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { canActivate, AngularFireAuthGuard } from '@angular/fire/auth-guard';
import {
  authorOnly,
  redirectUnauthorizedToLogin,
} from './common/auth-guards-pipes';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
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
    // TODO uncomment this when angularfire fixes their zone issue
    // https://github.com/angular/angularfire/issues/2367
    // ...canActivate(redirectUnauthorizedToLogin),
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
