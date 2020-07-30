import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { canActivate, AngularFireAuthGuard } from '@angular/fire/auth-guard';
import {
  authorOnly,
  redirectUnauthorizedToLogin,
} from './common/guards/auth-guards-pipes';

import { PageNotFoundComponent } from './core/containers/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    outlet: 'popup',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  // {
  //   path: 'author',
  //   loadChildren: () =>
  //     import('./author/author.module').then((m) => m.AuthorModule),
  //   // ! angularfire doesn't support multiple guards
  //   canActivate: [AngularFireAuthGuard],
  //   data: {
  //     preload: false,
  //     authGuardPipe: redirectUnauthorizedToLogin,
  //   },
  //   // ! the following commented out approach probably overrides
  //   // ! the data property as it preloads this route even though
  //   // ! we defined it not to
  //   // ...canActivate(redirectUnauthorizedToLogin),
  //   // ...canActivate(authorOnly),
  // },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
    // TODO uncomment this when angularfire fixes their zone issue
    // https://github.com/angular/angularfire/issues/2367
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'sessions',
    loadChildren: () =>
      import('./sessions/sessions.module').then((m) => m.SessionsModule),
  },
  {
    path: 'onboarding',
    children: [
      {
        path: 'teacher',
        loadChildren: () =>
          import(
            './onboarding/onboarding-teacher/onboarding-teacher.module'
          ).then((m) => m.OnboardingTeacherModule),
      },
      {
        path: 'student',
        loadChildren: () =>
          import(
            './onboarding/onboarding-student/onboarding-student.module'
          ).then((m) => m.OnboardingStudentModule),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
