(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-method-form-payment-method-form-component"],{

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/*! exports provided: loadStripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStripe", function() { return loadStripe; });
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var V3_URL = 'https://js.stripe.com/v3';

var injectScript = function injectScript() {
  var script = document.createElement('script');
  script.src = V3_URL;
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.3.2"
  });
};

var stripePromise = null;
var loadScript = function loadScript() {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    var script = document.querySelector("script[src=\"".concat(V3_URL, "\"], script[src=\"").concat(V3_URL, "/\"]")) || injectScript();
    script.addEventListener('load', function () {
      if (window.Stripe) {
        resolve(window.Stripe);
      } else {
        reject(new Error('Stripe.js not available'));
      }
    });
    script.addEventListener('error', function () {
      reject(new Error('Failed to load Stripe.js'));
    });
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(void 0, _toConsumableArray(args));
  registerWrapper(stripe);
  return stripe;
};

// own script injection.

var stripePromise$1 = Promise.resolve().then(loadScript);
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args);
  });
};




/***/ }),

/***/ "./src/app/shared/components/payment-method-form/payment-method-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/payment-method-form/payment-method-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PaymentMethodFormComponent, PaymentSourceFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodFormComponent", function() { return PaymentMethodFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSourceFormModule", function() { return PaymentSourceFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_elements_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stripe-elements.style */ "./src/app/shared/components/payment-method-form/stripe-elements.style.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-functions.js");








const _c0 = ["cardElement"];
function PaymentMethodFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "LOADING...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const STRIPE_KEY = 'pk_test_2iuUrsVhJB1IVAhu1KnRYSFA00elnKh57f';
// declare var Stripe: stripe.StripeStatic;
class PaymentMethodFormComponent {
    constructor(fns) {
        this.fns = fns;
        this.isLoading = true;
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.card = yield this.mountCard();
            // Handle real-time validation errors from the card Element.
            this.cardValidate();
            yield this.cardAvailable();
            this.isLoading = false;
            this.card.focus();
        });
    }
    cardAvailable() {
        const promise = new Promise((resolve) => {
            this.card.on('ready', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return resolve();
            }));
        });
        return promise;
    }
    cardValidate() {
        this.card.on('change', ({ error }) => {
            this.cardErrors = error === null || error === void 0 ? void 0 : error.message;
        });
    }
    mountCard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.stripe = yield Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__["loadStripe"])(STRIPE_KEY);
            const elements = this.stripe.elements();
            const card = elements.create('card', { style: _stripe_elements_style__WEBPACK_IMPORTED_MODULE_3__["style"] });
            card.mount(this.cardElement.nativeElement);
            return card;
        });
    }
    onSubmit(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            const { source, error } = yield this.stripe.createSource(this.card, null);
            if (error) {
                // Inform the customer that there was an error.
                this.cardErrors = error.message;
            }
            else {
                this.isLoading = true;
                // Send the token to your server.
                const callable = this.fns.httpsCallable('stripeAttachSource');
                const res = yield callable({ sourceId: source.id }).toPromise();
                console.log(res);
                this.isLoading = false;
            }
        });
    }
}
PaymentMethodFormComponent.ɵfac = function PaymentMethodFormComponent_Factory(t) { return new (t || PaymentMethodFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctions"])); };
PaymentMethodFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentMethodFormComponent, selectors: [["ng-component"]], viewQuery: function PaymentMethodFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cardElement = _t.first);
    } }, decls: 8, vars: 4, consts: [[4, "ngIf"], [1, "form-grid", 3, "submit"], [1, "stripe-card"], ["cardElement", ""], ["type", "submit"]], template: function PaymentMethodFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PaymentMethodFormComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function PaymentMethodFormComponent_Template_form_submit_1_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fieldset", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Submit Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("loading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cardErrors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  margin: 0;\n}\n\n.isLoading[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: minmax(auto, 100%) auto;\n}\n\n\n\n.StripeElement[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 40px;\n  padding: 10px 12px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid[_ngcontent-%COMP%] {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill[_ngcontent-%COMP%] {\n  background-color: #fefde5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3ZlZC9SZXBvcy9qb2llL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QtZm9ybS9wYXltZW50LW1ldGhvZC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC1mb3JtL3BheW1lbnQtbWV0aG9kLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0FDQ0Y7O0FERUE7OztFQUFBOztBQUlBO0VBQ0Usc0JBQUE7RUFFQSxZQUFBO0VBRUEsa0JBQUE7RUFFQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFFQSwrQkFBQTtFQUVBLGlDQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7QUNIRjs7QURNQTtFQUNFLG9DQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC1mb3JtL3BheW1lbnQtbWV0aG9kLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaXNMb2FkaW5nIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb3JtLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywgMTAwJSkgYXV0bztcbn1cblxuLyoqXG4gKiBUaGUgQ1NTIHNob3duIGhlcmUgd2lsbCBub3QgYmUgaW50cm9kdWNlZCBpbiB0aGUgUXVpY2tzdGFydCBndWlkZSwgYnV0IHNob3dzXG4gKiBob3cgeW91IGNhbiB1c2UgQ1NTIHRvIHN0eWxlIHlvdXIgRWxlbWVudCdzIGNvbnRhaW5lci5cbiAqL1xuLlN0cmlwZUVsZW1lbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGhlaWdodDogNDBweDtcblxuICBwYWRkaW5nOiAxMHB4IDEycHg7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2U2ZWJmMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZTtcbn1cblxuLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2NmZDdkZjtcbn1cblxuLlN0cmlwZUVsZW1lbnQtLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNmYTc1NWE7XG59XG5cbi5TdHJpcGVFbGVtZW50LS13ZWJraXQtYXV0b2ZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGU1ICFpbXBvcnRhbnQ7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaXNMb2FkaW5nIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb3JtLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoYXV0bywgMTAwJSkgYXV0bztcbn1cblxuLyoqXG4gKiBUaGUgQ1NTIHNob3duIGhlcmUgd2lsbCBub3QgYmUgaW50cm9kdWNlZCBpbiB0aGUgUXVpY2tzdGFydCBndWlkZSwgYnV0IHNob3dzXG4gKiBob3cgeW91IGNhbiB1c2UgQ1NTIHRvIHN0eWxlIHlvdXIgRWxlbWVudCdzIGNvbnRhaW5lci5cbiAqL1xuLlN0cmlwZUVsZW1lbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmE3NTVhO1xufVxuXG4uU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaymentMethodFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './payment-method-form.component.html',
                styleUrls: ['./payment-method-form.component.scss'],
            }]
    }], function () { return [{ type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctions"] }]; }, { cardElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['cardElement', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }] }); })();
class PaymentSourceFormModule {
}
PaymentSourceFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaymentSourceFormModule });
PaymentSourceFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PaymentSourceFormModule_Factory(t) { return new (t || PaymentSourceFormModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentSourceFormModule, { declarations: [PaymentMethodFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaymentSourceFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [PaymentMethodFormComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/payment-method-form/stripe-elements.style.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/payment-method-form/stripe-elements.style.ts ***!
  \********************************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
const style = {
    base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#aab7c4',
        },
    },
    invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
    },
};


/***/ })

}]);
//# sourceMappingURL=payment-method-form-payment-method-form-component-es2015.js.map