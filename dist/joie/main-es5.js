function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-quicklink */
    "./node_modules/ngx-quicklink/__ivy_ngcc__/fesm2015/ngx-quicklink.js");
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
    /* harmony import */


    var _common_auth_guards_pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./common/auth-guards-pipes */
    "./src/app/common/auth-guards-pipes.ts");
    /* harmony import */


    var _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/page-not-found/page-not-found.component */
    "./src/app/core/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: 'posts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | posts-posts-module */
        "posts-posts-module").then(__webpack_require__.bind(null,
        /*! ./posts/posts.module */
        "./src/app/posts/posts.module.ts")).then(function (m) {
          return m.PostsModule;
        });
      }
    }, Object.assign(Object.assign({
      path: 'author',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | author-author-module */
        "author-author-module").then(__webpack_require__.bind(null,
        /*! ./author/author.module */
        "./src/app/author/author.module.ts")).then(function (m) {
          return m.AuthorModule;
        });
      },
      data: {
        preload: false
      }
    }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["canActivate"])(_common_auth_guards_pipes__WEBPACK_IMPORTED_MODULE_4__["redirectUnauthorizedToLogin"])), Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["canActivate"])(_common_auth_guards_pipes__WEBPACK_IMPORTED_MODULE_4__["authorOnly"])), {
      path: 'account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | account-account-module */
        "account-account-module").then(__webpack_require__.bind(null,
        /*! ./account/account.module */
        "./src/app/account/account.module.ts")).then(function (m) {
          return m.AccountModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'posts',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__["QuicklinkStrategy"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__["QuicklinkStrategy"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_user_control_user_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./core/user-control/user-control.component */
    "./src/app/core/user-control/user-control.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-quicklink */
    "./node_modules/ngx-quicklink/__ivy_ngcc__/fesm2015/ngx-quicklink.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 0,
      consts: [["routerLink", "posts"], ["routerLink", "author"], ["routerLink", "account"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        }
      },
      directives: [_core_user_control_user_control_component__WEBPACK_IMPORTED_MODULE_1__["UserControlComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__["ɵɵLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/functions */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-functions.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"].enablePersistence(), _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctionsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"], _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctionsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"].enablePersistence(), _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctionsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
          }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]],
          // providers: [
          //   {
          //     provide: SETTINGS,
          //     useValue: environment.production
          //       ? undefined
          //       : {
          //           host: 'localhost:8081',
          //           ssl: false,
          //         },
          //   },
          //   {
          //     provide: ORIGIN,
          //     useValue: environment.production ? undefined : 'http://localhost:5001',
          //   },
          // ],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth-state/+state/auth/actions/auth.actions.ts":
  /*!****************************************************************!*\
    !*** ./src/app/auth-state/+state/auth/actions/auth.actions.ts ***!
    \****************************************************************/

  /*! exports provided: authStateChange, authStateAuthenticated, authStateNotAuthenticated */

  /***/
  function srcAppAuthStateStateAuthActionsAuthActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authStateChange", function () {
      return authStateChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authStateAuthenticated", function () {
      return authStateAuthenticated;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authStateNotAuthenticated", function () {
      return authStateNotAuthenticated;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"); // export const loadAuth = createAction('[Auth] Load Auth');
    // export const loadAuthSuccess = createAction(
    //   '[Auth] Load Auth Success',
    //   props<Pick<fromReducer.State, 'user'>>()
    // );
    // export const loadAuthFailure = createAction(
    //   '[Auth] Load Auth Failure',
    //   props<Pick<fromReducer.State, 'error'>>()
    // );


    var authStateChange = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] State Change', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var authStateAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] State Authenticated', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var authStateNotAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] State Not Authenticated'); // export const signOut = createAction('[Auth] Sign Out');

    /***/
  },

  /***/
  "./src/app/auth-state/+state/auth/effects/auth.effects.ts":
  /*!****************************************************************!*\
    !*** ./src/app/auth-state/+state/auth/effects/auth.effects.ts ***!
    \****************************************************************/

  /*! exports provided: AuthEffects */

  /***/
  function srcAppAuthStateStateAuthEffectsAuthEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
      return AuthEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/auth.actions */
    "./src/app/auth-state/+state/auth/actions/auth.actions.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/auth/auth.service */
    "./src/app/auth-state/services/auth/auth.service.ts");

    var AuthEffects = function AuthEffects(actions$, authService) {
      var _this = this;

      _classCallCheck(this, AuthEffects);

      this.actions$ = actions$;
      this.authService = authService;
      this.authStateChange$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["authStateChange"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('uid'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (uid) {
          return uid ? _this.authService.getUser$(uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["authStateAuthenticated"]({
              user: user
            });
          } // catchError(() => AuthActions.authStateNotAuthenticated())
          )) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["authStateNotAuthenticated"]());
        } // this.authService.getUser$(uid).pipe(
        //   switchMap<typeof AuthActions.authStateNotAuthenticated>((user: User) => AuthActions.authStateNotAuthenticated())
        // )
        ) // map(uid => {
        //   console.log(1, uid);
        //   AuthActions.authStateAuthenticated({} as User);
        // }),
        // map((uid: User['uid']) =>
        //   uid
        //     ? this.authService
        //         .getUser$(uid)
        //         .pipe(
        //           switchMap((user: User) =>
        //             AuthActions.authStateAuthenticated(user)
        //           )
        //         )
        //     : AuthActions.authStateNotAuthenticated()
        // ),
        // map((fbUser: User) =>
        //   fbUser
        //     ? this.authService
        //         .getUser$(fbUser.uid)
        //         .pipe(switchMap(user => AuthActions.authStateAuthenticated(user)))
        //     : AuthActions.authStateNotAuthenticated()
        // ),
        // tap(console.log)
        );
      });
      authService.observeAuthState();
    };

    AuthEffects.ɵfac = function AuthEffects_Factory(t) {
      return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthEffects,
      factory: AuthEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth-state/+state/auth/facades/auth.facade.ts":
  /*!***************************************************************!*\
    !*** ./src/app/auth-state/+state/auth/facades/auth.facade.ts ***!
    \***************************************************************/

  /*! exports provided: AuthFacade */

  /***/
  function srcAppAuthStateStateAuthFacadesAuthFacadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthFacade", function () {
      return AuthFacade;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/auth.actions */
    "./src/app/auth-state/+state/auth/actions/auth.actions.ts");
    /* harmony import */


    var _selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../selectors/auth.selectors */
    "./src/app/auth-state/+state/auth/selectors/auth.selectors.ts");

    var AuthFacade = /*#__PURE__*/function () {
      function AuthFacade(store) {
        _classCallCheck(this, AuthFacade);

        this.store = store;
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["getAuthUser"]));
        this.loaded$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["getAuthLoaded"]));
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["getAuthError"]));
      }

      _createClass(AuthFacade, [{
        key: "dispatch",
        value: function dispatch(action) {
          this.store.dispatch(action);
        }
      }, {
        key: "dispatchStateChange",
        value: function dispatchStateChange(payload) {
          this.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["authStateChange"](payload));
        }
      }]);

      return AuthFacade;
    }();

    AuthFacade.ɵfac = function AuthFacade_Factory(t) {
      return new (t || AuthFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    AuthFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthFacade,
      factory: AuthFacade.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth-state/+state/auth/reducers/auth.reducer.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/auth-state/+state/auth/reducers/auth.reducer.ts ***!
    \*****************************************************************/

  /*! exports provided: AUTH_FEATURE_KEY, initialState, reducer */

  /***/
  function srcAppAuthStateStateAuthReducersAuthReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTH_FEATURE_KEY", function () {
      return AUTH_FEATURE_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/auth.actions */
    "./src/app/auth-state/+state/auth/actions/auth.actions.ts");

    var AUTH_FEATURE_KEY = 'auth';
    var initialState = {
      user: undefined,
      loaded: false
    };
    var authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, // on(AuthActions.loadAuth, (state): State => ({ ...state, loaded: false })),
    // on(
    //   AuthActions.loadAuthSuccess,
    //   (state, { user }): State => ({ ...state, user, loaded: true })
    // ),
    // on(
    //   AuthActions.loadAuthFailure,
    //   (state, { error }): State => ({ ...state, error, loaded: true })
    //   ),
    Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["authStateChange"], function () {
      return initialState;
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["authStateAuthenticated"], function (state, _ref) {
      var user = _ref.user;
      return Object.assign(Object.assign({}, state), {
        user: user,
        loaded: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["authStateNotAuthenticated"], function (state) {
      return Object.assign(Object.assign({}, state), {
        user: null,
        loaded: true
      });
    }));

    function reducer(state, action) {
      return authReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/auth-state/+state/auth/selectors/auth.selectors.ts":
  /*!********************************************************************!*\
    !*** ./src/app/auth-state/+state/auth/selectors/auth.selectors.ts ***!
    \********************************************************************/

  /*! exports provided: getAuthState, getAuthUser, getAuthLoaded, getAuthError */

  /***/
  function srcAppAuthStateStateAuthSelectorsAuthSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAuthState", function () {
      return getAuthState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAuthUser", function () {
      return getAuthUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAuthLoaded", function () {
      return getAuthLoaded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAuthError", function () {
      return getAuthError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../reducers/auth.reducer */
    "./src/app/auth-state/+state/auth/reducers/auth.reducer.ts"); // Lookup the 'Auth' feature state managed by NgRx


    var getAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["AUTH_FEATURE_KEY"]);
    var getAuthUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (state) {
      return state.user;
    });
    var getAuthLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (state) {
      return state.loaded;
    });
    var getAuthError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (state) {
      return state.error;
    });
    /***/
  },

  /***/
  "./src/app/auth-state/auth-state.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth-state/auth-state.module.ts ***!
    \*************************************************/

  /*! exports provided: AuthStateModule */

  /***/
  function srcAppAuthStateAuthStateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthStateModule", function () {
      return AuthStateModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _state_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./+state/auth/reducers/auth.reducer */
    "./src/app/auth-state/+state/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var _state_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./+state/auth/effects/auth.effects */
    "./src/app/auth-state/+state/auth/effects/auth.effects.ts");
    /* harmony import */


    var _state_auth_facades_auth_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./+state/auth/facades/auth.facade */
    "./src/app/auth-state/+state/auth/facades/auth.facade.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/auth/auth.service */
    "./src/app/auth-state/services/auth/auth.service.ts");

    var AuthStateModule = function AuthStateModule() {
      _classCallCheck(this, AuthStateModule);
    };

    AuthStateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthStateModule
    });
    AuthStateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthStateModule_Factory(t) {
        return new (t || AuthStateModule)();
      },
      providers: [_state_auth_facades_auth_facade__WEBPACK_IMPORTED_MODULE_6__["AuthFacade"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_state_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_4__["AUTH_FEATURE_KEY"], _state_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_state_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_5__["AuthEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthStateModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthStateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_state_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_4__["AUTH_FEATURE_KEY"], _state_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_state_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_5__["AuthEffects"]])],
          providers: [_state_auth_facades_auth_facade__WEBPACK_IMPORTED_MODULE_6__["AuthFacade"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth-state/services/auth/auth.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/auth-state/services/auth/auth.service.ts ***!
    \**********************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthStateServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var src_app_services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/db.service */
    "./src/app/services/db.service.ts");
    /* harmony import */


    var _state_auth_facades_auth_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../+state/auth/facades/auth.facade */
    "./src/app/auth-state/+state/auth/facades/auth.facade.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afAuth, db, authFacade) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.db = db;
        this.authFacade = authFacade;
      }

      _createClass(AuthService, [{
        key: "getUser$",
        value: function getUser$(uid) {
          return this.db.get$("users/".concat(uid));
        }
      }, {
        key: "observeAuthState",
        value: function observeAuthState() {
          var _this2 = this;

          this.state$.subscribe(function (user) {
            var payload = user ? {
              uid: user.uid
            } : null;

            _this2.authFacade.dispatchStateChange(payload);
          });
        }
      }, {
        key: "state$",
        get: function get() {
          // this.afAuth.authState.subscribe(console.log);
          return this.afAuth.authState;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_auth_facades_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }, {
          type: src_app_services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"]
        }, {
          type: _state_auth_facades_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/auth-guards-pipes.ts":
  /*!*********************************************!*\
    !*** ./src/app/common/auth-guards-pipes.ts ***!
    \*********************************************/

  /*! exports provided: adminOnly, authorOnly, redirectUnauthorizedToLogin, redirectLoggedInToItems, belongsToAccount */

  /***/
  function srcAppCommonAuthGuardsPipesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adminOnly", function () {
      return adminOnly;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authorOnly", function () {
      return authorOnly;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "redirectUnauthorizedToLogin", function () {
      return redirectUnauthorizedToLogin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "redirectLoggedInToItems", function () {
      return redirectLoggedInToItems;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "belongsToAccount", function () {
      return belongsToAccount;
    });
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js"); // import { customClaims } from '@angular/fire/auth-guard';
    // import { pipe } from 'rxjs';
    // import { map, tap, pluck } from 'rxjs/operators';
    // type Claim = 'admin' | 'author'; // etc'...
    // export const claimCheck = (claim: Claim, alternatePath = ['']) => () =>
    //   pipe(
    //     customClaims,
    //     pluck(claim),
    //     tap((hasClaim: boolean) => {
    //       !hasClaim && console.warn(`user must be ${claim}`);
    //     }),
    //     map((hasClaim) => hasClaim || alternatePath)
    //   );


    var adminOnly = function adminOnly() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__["hasCustomClaim"])('admin');
    };

    var authorOnly = function authorOnly() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__["hasCustomClaim"])('author');
    };

    var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__["redirectUnauthorizedTo"])(['login']);
    };

    var redirectLoggedInToItems = function redirectLoggedInToItems() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__["redirectLoggedInTo"])(['items']);
    };

    var belongsToAccount = function belongsToAccount(next) {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__["hasCustomClaim"])("account-".concat(next.params.id));
    };
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _auth_state_auth_state_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth-state/auth-state.module */
    "./src/app/auth-state/auth-state.module.ts");
    /* harmony import */


    var _user_control_user_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-control/user-control.component */
    "./src/app/core/user-control/user-control.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/core/page-not-found/page-not-found.component.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}, {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([]), !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument() : [], _auth_state_auth_state_module__WEBPACK_IMPORTED_MODULE_6__["AuthStateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_user_control_user_control_component__WEBPACK_IMPORTED_MODULE_7__["UserControlComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"], _auth_state_auth_state_module__WEBPACK_IMPORTED_MODULE_6__["AuthStateModule"]],
        exports: [_user_control_user_control_component__WEBPACK_IMPORTED_MODULE_7__["UserControlComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_user_control_user_control_component__WEBPACK_IMPORTED_MODULE_7__["UserControlComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}, {
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true
            }
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([]), !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument() : [], _auth_state_auth_state_module__WEBPACK_IMPORTED_MODULE_6__["AuthStateModule"]],
          exports: [_user_control_user_control_component__WEBPACK_IMPORTED_MODULE_7__["UserControlComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/page-not-found/page-not-found.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/page-not-found/page-not-found.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppCorePageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["ng-component"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found 404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3ZlZC9SZXBvcy9qb2llL3NyYy9hcHAvY29yZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/user-control/user-control.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/user-control/user-control.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserControlComponent */

  /***/
  function srcAppCoreUserControlUserControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserControlComponent", function () {
      return UserControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _auth_state_state_auth_facades_auth_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth-state/+state/auth/facades/auth.facade */
    "./src/app/auth-state/+state/auth/facades/auth.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserControlComponent_ng_container_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserControlComponent_ng_container_0_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r7 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", user_r7.displayName, "!");
      }
    }

    function UserControlComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserControlComponent_ng_container_0_div_1_Template, 5, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r3.authFacade.user$))("ngIfElse", _r4);
      }
    }

    function UserControlComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please login.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserControlComponent_ng_template_2_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login with Google");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UserControlComponent = /*#__PURE__*/function () {
      function UserControlComponent(afAuth, authFacade) {
        _classCallCheck(this, UserControlComponent);

        this.afAuth = afAuth;
        this.authFacade = authFacade;
      }

      _createClass(UserControlComponent, [{
        key: "login",
        value: function login() {
          this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
        }
      }, {
        key: "logout",
        value: function logout() {
          this.afAuth.signOut();
        }
      }]);

      return UserControlComponent;
    }();

    UserControlComponent.ɵfac = function UserControlComponent_Factory(t) {
      return new (t || UserControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_state_state_auth_facades_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"]));
    };

    UserControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserControlComponent,
      selectors: [["app-user-control"]],
      decls: 4,
      vars: 3,
      consts: [[4, "ngIf"], ["showLogin", ""], [4, "ngIf", "ngIfElse"], [3, "click"]],
      template: function UserControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserControlComponent_ng_container_0_Template, 3, 4, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserControlComponent_ng_template_2_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.authFacade.loaded$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3ZlZC9SZXBvcy9qb2llL3NyYy9hcHAvY29yZS91c2VyLWNvbnRyb2wvdXNlci1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3VzZXItY29udHJvbC91c2VyLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3VzZXItY29udHJvbC91c2VyLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-control',
          templateUrl: './user-control.component.html',
          styleUrls: ['./user-control.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _auth_state_state_auth_facades_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/db.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/db.service.ts ***!
    \****************************************/

  /*! exports provided: DbService */

  /***/
  function srcAppServicesDbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DbService", function () {
      return DbService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var DbService = /*#__PURE__*/function () {
      // private itemDoc: AngularFirestoreDocument<Item>;
      // item: Observable<Item>;
      function DbService(afs) {
        _classCallCheck(this, DbService);

        this.afs = afs; // this.itemDoc = afs.doc<Item>('items/1');
        // this.item = this.itemDoc.valueChanges();
      } // update(item: Item) {
      //   this.itemDoc.update(item);
      // }


      _createClass(DbService, [{
        key: "get$",
        value: function get$(path) {
          return (this.isCollection(path) ? this.afs.doc(path) : this.afs.collection(path)).valueChanges(); // return this.afs.doc<T>(path).valueChanges();
          // return this.afs.collection<T>(path).valueChanges();
        }
      }, {
        key: "set$",
        value: function set$(path, data) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.isCollection(path) ? this.afs.doc(path).set(data) : this.afs.collection(path).add(data));
        }
      }, {
        key: "isCollection",
        get: function get() {
          // ! throw error if empty string
          var isOdd = Object(ramda__WEBPACK_IMPORTED_MODULE_3__["modulo"])(ramda__WEBPACK_IMPORTED_MODULE_3__["__"], 2);
          return Object(ramda__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(ramda__WEBPACK_IMPORTED_MODULE_3__["split"])('/'), ramda__WEBPACK_IMPORTED_MODULE_3__["length"], isOdd, Object(ramda__WEBPACK_IMPORTED_MODULE_3__["equals"])(0));
        }
      }]);

      return DbService;
    }();

    DbService.ɵfac = function DbService_Factory(t) {
      return new (t || DbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]));
    };

    DbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DbService,
      factory: DbService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/payment-source/payment-source.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/payment-source/payment-source.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PaymentSourceComponent */

  /***/
  function srcAppSharedComponentsPaymentSourcePaymentSourceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentSourceComponent", function () {
      return PaymentSourceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["paymentSourceFormContainer"];

    var PaymentSourceComponent = /*#__PURE__*/function () {
      function PaymentSourceComponent(cfr, injector) {
        _classCallCheck(this, PaymentSourceComponent);

        this.cfr = cfr;
        this.injector = injector;
      } // TODO move to a dedicated service


      _createClass(PaymentSourceComponent, [{
        key: "loadPaymentSourceForm",
        value: function loadPaymentSourceForm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _yield$__webpack_requ, component, paymentSourceFormFactory, _this$paymentSourceFo, instance;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return __webpack_require__.e(
                    /*! import() | payment-method-form-payment-method-form-component */
                    "payment-method-form-payment-method-form-component").then(__webpack_require__.bind(null,
                    /*! ../payment-method-form/payment-method-form.component */
                    "./src/app/shared/components/payment-method-form/payment-method-form.component.ts"));

                  case 2:
                    _yield$__webpack_requ = _context.sent;
                    component = _yield$__webpack_requ.PaymentMethodFormComponent;
                    paymentSourceFormFactory = this.cfr.resolveComponentFactory(component);
                    _this$paymentSourceFo = this.paymentSourceFormContainer.createComponent(paymentSourceFormFactory, null, this.injector), instance = _this$paymentSourceFo.instance; // instance.ngOnInit();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return PaymentSourceComponent;
    }();

    PaymentSourceComponent.ɵfac = function PaymentSourceComponent_Factory(t) {
      return new (t || PaymentSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]));
    };

    PaymentSourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PaymentSourceComponent,
      selectors: [["app-payment-source"]],
      viewQuery: function PaymentSourceComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paymentSourceFormContainer = _t.first);
        }
      },
      decls: 4,
      vars: 0,
      consts: [[3, "click"], ["paymentSourceFormContainer", ""]],
      template: function PaymentSourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentSourceComponent_Template_button_click_0_listener() {
            return ctx.loadPaymentSourceForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " open payment source form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](2, null, 1);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaymentSourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-payment-source',
          template: "\n    <button (click)=\"loadPaymentSourceForm()\">\n      open payment source form\n    </button>\n    <ng-container #paymentSourceFormContainer></ng-container>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }];
      }, {
        paymentSourceFormContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['paymentSourceFormContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-quicklink */
    "./node_modules/ngx-quicklink/__ivy_ngcc__/fesm2015/ngx-quicklink.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_payment_source_payment_source_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/payment-source/payment-source.component */
    "./src/app/shared/components/payment-source/payment-source.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__["QuicklinkModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__["QuicklinkModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_payment_source_payment_source_component__WEBPACK_IMPORTED_MODULE_4__["PaymentSourceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__["QuicklinkModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__["QuicklinkModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components_payment_source_payment_source_component__WEBPACK_IMPORTED_MODULE_4__["PaymentSourceComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_payment_source_payment_source_component__WEBPACK_IMPORTED_MODULE_4__["PaymentSourceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__["QuicklinkModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__["QuicklinkModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components_payment_source_payment_source_component__WEBPACK_IMPORTED_MODULE_4__["PaymentSourceComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./firebase */
    "./src/environments/firebase.ts"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: _firebase__WEBPACK_IMPORTED_MODULE_0__["firebase"]
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/environments/firebase.ts":
  /*!**************************************!*\
    !*** ./src/environments/firebase.ts ***!
    \**************************************/

  /*! exports provided: firebase */

  /***/
  function srcEnvironmentsFirebaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebase", function () {
      return firebase;
    });

    var firebase = {
      apiKey: 'AIzaSyDDdA9HiFEBsGGxcG1xfbJHKEr7LkziaQM',
      authDomain: 'joie-app.firebaseapp.com',
      databaseURL: 'https://joie-app.firebaseio.com',
      projectId: 'joie-app',
      storageBucket: 'joie-app.appspot.com',
      messagingSenderId: '999974863094',
      appId: '1:999974863094:web:37ae6deb807f3a8d206cd7',
      measurementId: 'G-4L534VZ3CD'
    }; // Stripe.setPublishableKey('pk_test_2iuUrsVhJB1IVAhu1KnRYSFA00elnKh57f');

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/yoved/Repos/joie/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map