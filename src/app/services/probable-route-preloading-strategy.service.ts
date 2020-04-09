import { Injectable } from '@angular/core';
import { customClaims } from '@angular/fire/auth-guard';
import { Router, PreloadingStrategy } from '@angular/router';
import { pipe } from 'rxjs';
// import { QuicklinkStrategy } from 'ngx-quicklink';
// import { PrefetchRegistry } from 'ngx-quicklink/src/prefetch-registry.service';

@Injectable({
  providedIn: 'root',
})
export class ProbableRoutePreloadingStrategy implements PreloadingStrategy {
  preload(
    route: import('@angular/router').Route,
    fn: () => import('rxjs').Observable<any>
  ): import('rxjs').Observable<any> {
    console.log(route);
    // return route.data && route.data.preload
    //   ? loadRoute(route.data.delay)
    //   : of(null);
    return null;
  }
  // constructor(queue: PrefetchRegistry, router: Router) {
  //   super(queue, router);
  //   console.log('ProbableRouteModuleLoaderService');
  //   const author$ = pipe(
  //     customClaims
  //     // map((claims) => claims[claim] === true || [''])
  //   );
  // }
}
