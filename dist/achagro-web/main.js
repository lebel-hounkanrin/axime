"use strict";
(self["webpackChunkachagro_web"] = self["webpackChunkachagro_web"] || []).push([["main"],{

/***/ 342:
/*!************************************************************!*\
  !*** ./src/app/after-payement/after-payement.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AfterPayementComponent": () => (/* binding */ AfterPayementComponent)
/* harmony export */ });
/* harmony import */ var _home_neil_achagro_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _store_basket_basket_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store/basket/basket.reducer */ 7905);
/* harmony import */ var _core_models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/models/product.model */ 670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_basket_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/basket-store.service */ 3769);







class AfterPayementComponent {
  constructor(formBuilder, activatedRroute, basketStoreService, router) {
    this.formBuilder = formBuilder;
    this.activatedRroute = activatedRroute;
    this.basketStoreService = basketStoreService;
    this.router = router;
    this.order = [];
    this.missedProductName = new _core_models_product_model__WEBPACK_IMPORTED_MODULE_2__.Product();
    this.missedQuantity = 0;
    this.showModal = false;
    this.missedProductMsg = "";
    this.messaageTitle = "";
    this.displayButton = true;
  }

  ngOnInit() {
    this.order = _store_basket_basket_reducer__WEBPACK_IMPORTED_MODULE_1__.basketInitialState.items;
    const total = this.activatedRroute.snapshot.paramMap.get("total");
    this.totalAmount = total ? +total : 0;
    this.timelineCtrl = this.formBuilder.control("");
    this.timelineForm = this.formBuilder.group({
      timelineCtrl: this.timelineCtrl
    });
    this.timelineCtrl.valueChanges.subscribe(val => this.timeLineMessage = this.dispalyPaymentMessage(val, this.totalAmount));
  }

  onSubmit() {
    this.basketStoreService.orderProduct(this.order).subscribe({
      next: data => {
        //this.router.navigateByUrl(`/paid/${this.price}`)
        this.router.navigateByUrl("/");
      },
      error: function () {
        var _ref = (0,_home_neil_achagro_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error) {});

        return function error(_x) {
          return _ref.apply(this, arguments);
        };
      }()
    });
  }

  computePrice(timeLine, total) {
    if (timeLine == 1) return [total];

    if (timeLine == 2) {
      const interestRate = total * 10 / 100;
      const firstPart = total / 4 + interestRate;
      return [firstPart, total / 4];
    }

    if (timeLine == 3) {
      const interestRate = total * 10 / 100;
      const firstPart = total / 3 + interestRate;
      return [firstPart, total / 3];
    }

    if (timeLine == 4) {
      const interestRate = total * 10 / 100;
      return [interestRate, total];
    }

    return [total];
  }

  dispalyPaymentMessage(timeline, total) {
    if (timeline == 1) {
      const prices = this.computePrice(timeline, total);
      return `Payez ${prices[0]} FCFA en une fois pour toute`;
    }

    if (timeline == 2) {
      const prices = this.computePrice(timeline, total);
      return `Payez ${prices[0]} FCFA maintenant et ${prices[1]} FCFA chaque semaine`;
    }

    if (timeline == 3) {
      const prices = this.computePrice(timeline, total);
      return `Payez ${prices[0]} FCFA maintenant et ${prices[1]} FCFA chaque 10 jours`;
    }

    if (timeline == 4) {
      const prices = this.computePrice(timeline, total);
      return `Payez  ${prices[0]} FCFA maintenant et ${prices[1]} FCFA à la fin du mois.`;
    }

    return "";
  }

  ngOnDestroy() {
    _store_basket_basket_reducer__WEBPACK_IMPORTED_MODULE_1__.basketInitialState.items = [];
  }

}

AfterPayementComponent.ɵfac = function AfterPayementComponent_Factory(t) {
  return new (t || AfterPayementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_basket_store_service__WEBPACK_IMPORTED_MODULE_3__.BasketStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

AfterPayementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AfterPayementComponent,
  selectors: [["app-after-payement"]],
  decls: 25,
  vars: 2,
  consts: [[1, "card", "card-box"], [3, "formGroup", "ngSubmit"], [1, "form-radio-group"], [1, "form-group"], ["type", "radio", "name", "timelineCtrl", "id", "oneTimeNow", "value", "1", "formControlName", "timelineCtrl"], ["for", "oneTimeNow", "payment", ""], ["type", "radio", "name", "timelineCtrl", "id", "fourTimeInWeek", "value", "2", "formControlName", "timelineCtrl"], ["for", "fourTimeInWeek"], ["type", "radio", "name", "timelineCtrl", "id", "threeTimeInWeek", "value", "3", "formControlName", "timelineCtrl"], ["for", "threeTimeInWeek"], ["type", "radio", "name", "timelineCtrl", "id", "oneTimeInWeek", "value", "4", "formControlName", "timelineCtrl"], ["for", "oneTimeInWeek"], [1, "displayMsg"], ["type", "submit", 1, "card-btn"]],
  template: function AfterPayementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Choisir son \u00E9ch\u00E9ancier");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AfterPayementComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Payer en une seule fois");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Payer en 04 tranches(01 tranche chaque semaine) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Payer en 03 tranches(01 tranche chaque 10 jours) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Payer la totalit\u00E9 dans 30 jours ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Payer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.timelineForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.timeLineMessage);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: [".card-box[_ngcontent-%COMP%]{\n    width: 50%;\n    margin: 50px auto;\n}\n.form-group[_ngcontent-%COMP%]{\n    display: flex;\n    margin: 5px;\n}\nlabel[_ngcontent-%COMP%]{\n    margin-left: 5px;\n}\nh4[_ngcontent-%COMP%]{\n    padding-top: 10px;\n    text-align: center;\n}\n.displayMsg[_ngcontent-%COMP%]{\n  margin-left: 20px;\n  color: #273c75;\n}\n.card-btn[_ngcontent-%COMP%]{\n    margin-top: 50px;\n    border: 2px solid #273c75;\n    color: white;\n    background-color: #273c75;\n    border-radius: 20px;\n    font-size: 0.8em;\n    padding: 8px;\n    position:relative;\n    margin-top: 10px;\n    margin-left: 25%;\n    margin-bottom: 10px;\n    width: 50%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmdGVyLXBheWVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7O0FBRWQiLCJmaWxlIjoiYWZ0ZXItcGF5ZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJveHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xufVxuLmZvcm0tZ3JvdXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDVweDtcbn1cbmxhYmVse1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5oNHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGlzcGxheU1zZ3tcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjMjczYzc1O1xufVxuLmNhcmQtYnRue1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzI3M2M3NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3M2M3NTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiA1MCU7XG5cbn0iXX0= */"]
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/components/login/login.component */ 9125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _auth_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/components/registration/registration.component */ 3287);
/* harmony import */ var _basket_basket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basket/basket.component */ 9849);
/* harmony import */ var _shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/helpers/auth.guard */ 3749);
/* harmony import */ var _after_payement_after_payement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./after-payement/after-payement.component */ 342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [
    { path: "", pathMatch: "full", component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent },
    { path: "signin", component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: "signup", component: _auth_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent },
    { path: "panier", component: _basket_basket_component__WEBPACK_IMPORTED_MODULE_3__.BasketComponent, /*canActivate: [AuthGuard]*/ },
    { path: "paid/:total", component: _after_payement_after_payement_component__WEBPACK_IMPORTED_MODULE_5__.AfterPayementComponent, canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'achagro-web';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _core_services_basket_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/basket.providers */ 3979);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categorie/categorie.component */ 9013);
/* harmony import */ var _categorie_list_categorie_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categorie-list/categorie-list.component */ 771);
/* harmony import */ var _basket_basket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basket/basket.component */ 9849);
/* harmony import */ var _shared_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/helpers/jwt-interceptor */ 8651);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _after_payement_after_payement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./after-payement/after-payement.component */ 342);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/products.module */ 8980);
/* harmony import */ var _recommendation_products_recommendation_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recommendation-products/recommendation-products.component */ 6850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        _core_services_basket_providers__WEBPACK_IMPORTED_MODULE_0__.BASKET_STORE_PROVIDERS,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HTTP_INTERCEPTORS, useClass: _shared_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__.JwtInterceptor, multi: true }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__.AuthModule,
        _products_products_module__WEBPACK_IMPORTED_MODULE_13__.ProductsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forRoot({}, {}),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsModule.forRoot([]),
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_12__.environment.production })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _main_main_component__WEBPACK_IMPORTED_MODULE_6__.MainComponent,
        _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_7__.CategorieComponent,
        _categorie_list_categorie_list_component__WEBPACK_IMPORTED_MODULE_8__.CategorieListComponent,
        _basket_basket_component__WEBPACK_IMPORTED_MODULE_9__.BasketComponent,
        _after_payement_after_payement_component__WEBPACK_IMPORTED_MODULE_11__.AfterPayementComponent,
        _recommendation_products_recommendation_products_component__WEBPACK_IMPORTED_MODULE_14__.RecommendationProductsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__.AuthModule,
        _products_products_module__WEBPACK_IMPORTED_MODULE_13__.ProductsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 9125);
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/registration/registration.component */ 3287);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 6518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_1__.RegistrationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule], exports: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent] }); })();


/***/ }),

/***/ 9125:
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 6518);





class LoginComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.loginForm = this.formBuilder.group({
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
    }
    onSubmitForm() {
        this.authService.login({
            phoneNumber: this.loginForm.get("phoneNumber")?.value,
            password: this.loginForm.get("password")?.value
        }).subscribe(data => {
            this.router.navigateByUrl("/");
        });
    }
    goToRegistrationPage() {
        this.router.navigateByUrl("signup");
    }
    goToHome() {
        this.router.navigateByUrl("/");
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 37, vars: 1, consts: [[1, "form", 3, "formGroup"], [1, "logo"], [1, "form-group"], ["for", "numero"], [1, "country-options"], ["name", "pays", "id", "id"], ["value", "benin"], ["value", "civ"], ["type", "tel", "id", "numero", "formControlName", "phoneNumber"], ["for", "password"], ["type", "password", "id", "password", "value", "passwordpassword", "formControlName", "password"], [1, "login-button", 3, "click"], ["href", ""], [1, "registration-card"], [1, "button-group"], [1, "registration-button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Connexion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Num\u00E9ro de telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "select", 5)(8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "(00229)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "(00225)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "(00226)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "(00227)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "(00228)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "(00221)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 2)(22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div")(26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() { return ctx.onSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p")(29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Mot de passe oubli\u00E9 ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 13)(32, "div", 14)(33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_33_listener() { return ctx.goToRegistrationPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "S'inscrire");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_35_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Retourner \u00E0 l'acceuil");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".form[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    margin: 50px auto 10px;\n    width: 30%;\n    border: none;\n    padding: 50px 0px;\n}\n.form-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    \n}\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{\n    width: 90%;\n    margin: 0 20px 20px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\n    border: 1px solid #b6c2cd;\n    background-color: #EFEFEF;\n    outline: 0;\n    height: 40px;\n    margin-left: 25px;\n    border-radius: 5px;\n}\ninput[_ngcontent-%COMP%]:hover, select[_ngcontent-%COMP%]:hover{\n    outline: #273c75;\n    border: 1px solid #273c75;\n}\nlabel[_ngcontent-%COMP%]{\n  margin-left: 25px;\n}\nbutton[_ngcontent-%COMP%]{\n    padding: 5px;\n    border-radius: 20px;\n    height: 50px;\n}\n.login-button[_ngcontent-%COMP%]{\n    background-color: #273c75;\n    color: white;\n    border: none;\n    margin-left: 25px;\n}\n.login-button[_ngcontent-%COMP%]:hover{\n    background-color: rgba(39, 60, 117,0.40);\n    color: white;\n    border: none;\n}\n.registration-button[_ngcontent-%COMP%] {\n    color: #273c75;\n    background-color: white;\n    border-color: #273c75;\n    border: 1px solid #273c75;\n}\n.registration-button[_ngcontent-%COMP%]:hover {\n    color: white;\n    background-color: #273c75;\n    border-color: white;\n}\np[_ngcontent-%COMP%] {\n    text-align: right;\n    margin-right: 10px;\n}\nlabel[_ngcontent-%COMP%]{\n    color: #273c75;\n    \n}\n.registration-card[_ngcontent-%COMP%]{\n    box-sizing: border-box;\n    background-color: #f7f7f7;\n    display: flex;\n    flex-direction: column;\n    margin: 10px auto 50px ; \n    width: 30%;\n    padding: 10px 0px;\n}\nh4[_ngcontent-%COMP%]{\n    margin-left: 25px;\n}\n.logo[_ngcontent-%COMP%] {\n    width: inherit;\n    margin: 0 auto 30px;\n    color: #273c75;\n    font-size: 30px;\n}\n.country-options[_ngcontent-%COMP%]{\n    display: flex;\n}\n.country-options[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 20%;\n    margin-right: 5px;\n}\n.country-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 66%;\n}\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #273c75;\n    margin-right: 15px;\n}\n.button-group[_ngcontent-%COMP%]{\n    padding-top: 15px;\n}\n@media (min-width: 768px) and (max-width:1200px){\n    .form[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        background-color: white;\n        display: flex;\n        flex-direction: column;\n        margin: 50px auto 10px;\n        width: 60%;\n        border: none;\n        padding: 50px 0px;\n    }\n    .registration-card[_ngcontent-%COMP%]{\n        width: 60%;\n    }\n}\n@media (max-width:992px){\n    .country-options[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n        width: 40%;\n    }\n    .country-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n        width: 60%;\n        margin-right: 6px;\n    }\n    .form[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        background-color: white;\n        display: flex;\n        flex-direction: column;\n        margin: 50px auto 10px;\n        width: 90%;\n        border: none;\n        padding: 50px 0px;\n    }\n    .registration-card[_ngcontent-%COMP%]{\n        width: 90%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYzs7QUFFbEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweDtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG59XG5pbnB1dCwgYnV0dG9ue1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIDIwcHggMjBweDtcbn1cbmlucHV0LCBzZWxlY3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2YzJjZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xuICAgIG91dGxpbmU6IDA7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlucHV0OmhvdmVyLCBzZWxlY3Q6aG92ZXJ7XG4gICAgb3V0bGluZTogIzI3M2M3NTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjczYzc1O1xufVxubGFiZWx7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuYnV0dG9ue1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5sb2dpbi1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3M2M3NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4ubG9naW4tYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDYwLCAxMTcsMC40MCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5yZWdpc3RyYXRpb24tYnV0dG9uIHtcbiAgICBjb2xvcjogIzI3M2M3NTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyNzNjNzU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI3M2M3NTtcbn1cblxuLnJlZ2lzdHJhdGlvbi1idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczYzc1O1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5wIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5sYWJlbHtcbiAgICBjb2xvcjogIzI3M2M3NTtcbiAgICBcbn1cbi5yZWdpc3RyYXRpb24tY2FyZHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDUwcHggOyBcbiAgICB3aWR0aDogMzAlO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuaDR7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG4ubG9nbyB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgICBjb2xvcjogIzI3M2M3NTtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4uY291bnRyeS1vcHRpb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uY291bnRyeS1vcHRpb25zIHNlbGVjdCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jb3VudHJ5LW9wdGlvbnMgaW5wdXR7XG4gICAgd2lkdGg6IDY2JTtcbn1cbnAgYSB7XG4gICAgY29sb3I6ICMyNzNjNzU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmJ1dHRvbi1ncm91cHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDoxMjAwcHgpe1xuICAgIC5mb3JtIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogNTBweCBhdXRvIDEwcHg7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNTBweCAwcHg7XG4gICAgfVxuICAgIC5yZWdpc3RyYXRpb24tY2FyZHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcbiAgICAuY291bnRyeS1vcHRpb25zIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuICAgIC5jb3VudHJ5LW9wdGlvbnMgaW5wdXR7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDUwcHggYXV0byAxMHB4O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMHB4O1xuICAgIH1cbiAgICAucmVnaXN0cmF0aW9uLWNhcmR7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 3287:
/*!************************************************************************!*\
  !*** ./src/app/auth/components/registration/registration.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 6518);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);







class RegistrationComponent {
    constructor(router, formBuilder, authService, http) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.http = http;
        this.piecedIdentiteMsg = "Une photo de votre piece d'identité";
    }
    ngOnInit() {
        this.initRegistrationForm();
        this.registrationForm.get("proprietaireCtrl")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)((val) => {
            if (val === "restaurant" || val === "comerçant") {
                this.piecedIdentiteMsg = "Charger les photos de la pièce d’identité du gérant";
            }
            else {
                this.piecedIdentiteMsg = "Une photo de votre piece d'identité";
            }
        })).subscribe();
    }
    initRegistrationForm() {
        this.registrationForm = this.formBuilder.group({
            countryId: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            proprietaireCtrl: [],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            confirmPswd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    onSubmitForm() {
        this.authService.register({
            "phoneNumber": this.registrationForm.get("phoneNumber")?.value,
            "typeCompte": this.registrationForm.get("proprietaireCtrl")?.value,
            "password": this.registrationForm.get("password")?.value,
            "confirmPassword": this.registrationForm.get("confirmPswd")?.value,
        }).subscribe(d => this.router.navigateByUrl("signin"));
    }
    goToLoginPage() {
        this.router.navigateByUrl("signin");
    }
    goToHome() {
        this.router.navigateByUrl("/");
    }
    displayElt(ev) {
        ev.preventDefault();
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...ev.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === 'file') {
                    const file = item.getAsFile();
                    console.log(`… file[${i}].name = ${file.name}`);
                    console.log(file);
                }
            });
        }
    }
    dragOverHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
RegistrationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 48, vars: 1, consts: [[1, "form", 3, "formGroup"], [1, "logo"], [1, "form-group"], ["for", "numero"], [1, "country-options"], ["name", "pays", "id", "id", "formControlName", "countryId"], ["value", "benin"], ["value", "civ"], ["type", "tel", "id", "numero", "formControlName", "phoneNumber"], ["for", "proprietaire"], ["name", "proprietaire", "id", "proprietaire", "formControlName", "proprietaireCtrl"], ["value", "particulier"], ["value", "restaurant"], ["value", "comer\u00E7ant"], ["for", "password"], ["type", "password", "id", "password", "value", "passwordpassword", "formControlName", "password"], ["for", "confirm-password"], ["type", "password", "id", "confirm-password", "value", "passwordpassword", "formControlName", "confirmPswd"], ["type", "submit", 1, "login-button", 3, "click"], [1, "registration-card"], [1, "button-group"], [1, "registration-button", 3, "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Inscription ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Num\u00E9ro de telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "select", 5)(8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "(00229)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "(00225)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "(00226)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "(00227)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "(00228)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "(00221)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 2)(22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Vous \u00EAtes un(e) ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 10)(25, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Particulier");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Restaurant");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Commer\u00E7ant");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 2)(32, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 2)(36, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Confirmer votre mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div")(40, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_40_listener() { return ctx.onSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Cr\u00E9er mon compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 19)(43, "div", 20)(44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_44_listener() { return ctx.goToLoginPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Se connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_46_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Retourner \u00E0 l'acceuil");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registrationForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["*[_ngcontent-%COMP%]{\n    box-sizing: border-box;\n}\n\n.logo[_ngcontent-%COMP%] {\n    margin-left: 155px;\n    color: #273c75;\n    font-size: 30px;\n}\n\n.form[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    margin: 50px auto 10px;\n    width: 30%;\n    border: none;\n    padding: 20px 0px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    \n}\n\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\n    width: 90%;\n    margin: 0 20px 20px;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\n    border: 1px solid #b6c2cd;\n    background-color: #EFEFEF;\n    outline: 0;\n    height: 40px;\n    margin-left: 25px;\n    border-radius: 5px;\n}\n\ninput[_ngcontent-%COMP%]:hover, select[_ngcontent-%COMP%]:hover{\n    outline: #273c75;\n    border: 1px solid #273c75;\n}\n\nlabel[_ngcontent-%COMP%]{\n  margin-left: 25px;\n  color: #273c75;\n}\n\nbutton[_ngcontent-%COMP%]{\n    padding: 5px;\n    border-radius: 20px;\n    height: 50px;\n}\n\n.login-button[_ngcontent-%COMP%]{\n    background-color: #273c75;\n    color: white;\n    border: none;\n}\n\n.login-button[_ngcontent-%COMP%]:hover{\n    background-color: rgba(39, 60, 117,0.40);\n    color: white;\n    border: none;\n}\n\n.registration-button[_ngcontent-%COMP%] {\n    color: #273c75;\n    background-color: white;\n    border-color: #273c75;\n    border: 1px solid #273c75;\n}\n\n.registration-button[_ngcontent-%COMP%]:hover {\n    color: white;\n    background-color: #273c75;\n    border-color: white;\n}\n\np[_ngcontent-%COMP%] {\n    \n    margin-right: 10px;\n}\n\n.registration-card[_ngcontent-%COMP%]{\n    box-sizing: border-box;\n    background-color: #f7f7f7;\n    display: flex;\n    flex-direction: column;\n    margin: 10px auto 10px ; \n    width: 30%;\n    border: none;\n    padding: 5px 0px;\n}\n\nh4[_ngcontent-%COMP%]{\n    margin-left: 25px;\n    font-size: 18px;\n}\n\n.drop[_ngcontent-%COMP%]{\n    margin: 30px auto 40px;\n    width: 400px;\n    height: 200px;\n    border: 5px dashed #273c75;\n    border-radius: 10%;\n    padding-bottom: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.drop[_ngcontent-%COMP%]:hover{\n    border: 5px dashed rgb(231, 223, 223);\n}\n\n.drop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #273c75;\n}\n\n.drop[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin: auto;\n    font-size: 50px;\n    color: #273c75;\n}\n\n.drop-button[_ngcontent-%COMP%]{\n    padding-bottom: 10px;\n    width: 70px;\n    margin-top: 40px;\n}\n\n.country-options[_ngcontent-%COMP%]{\n    display: flex;\n}\n\n.country-options[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 20%;\n    margin-right: 5px;\n}\n\n.country-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 66%;\n}\n\n.button-group[_ngcontent-%COMP%]{\n    padding-top: 20px;\n}\n\n@media (min-width: 768px) and (max-width:1200px){\n    .form[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        background-color: white;\n        display: flex;\n        flex-direction: column;\n        margin: 50px auto 10px;\n        width: 60%;\n        border: none;\n        padding: 50px 0px;\n    }\n    .registration-card[_ngcontent-%COMP%]{\n        width: 60%;\n    }\n}\n\n@media (max-width:992px){\n    .logo[_ngcontent-%COMP%]{\n        width: inherit;\n        margin-left: auto;\n    }\n    .form[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        background-color: white;\n        display: flex;\n        flex-direction: column;\n        margin: 50px auto 10px;\n        width: 90%;\n        border: none;\n        padding: 50px 0px;\n    }\n    .registration-card[_ngcontent-%COMP%]{\n        width: 90%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxxQ0FBcUM7QUFDekM7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubG9nbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1NXB4O1xuICAgIGNvbG9yOiAjMjczYzc1O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmZvcm0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogNTBweCBhdXRvIDEwcHg7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG59XG4uZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxufVxuaW5wdXQsIGJ1dHRvbiwgc2VsZWN0e1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIDIwcHggMjBweDtcbn1cbmlucHV0LCBzZWxlY3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2YzJjZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xuICAgIG91dGxpbmU6IDA7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlucHV0OmhvdmVyLCBzZWxlY3Q6aG92ZXJ7XG4gICAgb3V0bGluZTogIzI3M2M3NTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjczYzc1O1xufVxubGFiZWx7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBjb2xvcjogIzI3M2M3NTtcbn1cbmJ1dHRvbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4ubG9naW4tYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzNjNzU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmxvZ2luLWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCA2MCwgMTE3LDAuNDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cblxuLnJlZ2lzdHJhdGlvbi1idXR0b24ge1xuICAgIGNvbG9yOiAjMjczYzc1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogIzI3M2M3NTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjczYzc1O1xufVxuXG4ucmVnaXN0cmF0aW9uLWJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzNjNzU7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxucCB7XG4gICAgXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnJlZ2lzdHJhdGlvbi1jYXJke1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMTBweCA7IFxuICAgIHdpZHRoOiAzMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG59XG5cbmg0e1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmRyb3B7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gNDBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXI6IDVweCBkYXNoZWQgIzI3M2M3NTtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZHJvcDpob3ZlcntcbiAgICBib3JkZXI6IDVweCBkYXNoZWQgcmdiKDIzMSwgMjIzLCAyMjMpO1xufVxuLmRyb3AgcHtcbiAgICBjb2xvcjogIzI3M2M3NTtcbn1cbi5kcm9wIGkge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6ICMyNzNjNzU7XG59XG4uZHJvcC1idXR0b257XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5jb3VudHJ5LW9wdGlvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5jb3VudHJ5LW9wdGlvbnMgc2VsZWN0IHtcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvdW50cnktb3B0aW9ucyBpbnB1dHtcbiAgICB3aWR0aDogNjYlO1xufVxuLmJ1dHRvbi1ncm91cHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDoxMjAwcHgpe1xuICAgIC5mb3JtIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogNTBweCBhdXRvIDEwcHg7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNTBweCAwcHg7XG4gICAgfVxuICAgIC5yZWdpc3RyYXRpb24tY2FyZHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcbiAgICAubG9nb3tcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDUwcHggYXV0byAxMHB4O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMHB4O1xuICAgIH1cbiAgICAucmVnaXN0cmF0aW9uLWNhcmR7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 6518:
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




class AuthService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl;
        //this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem("access_token"));
        localStorage.getItem("access_token") !== null ? this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(localStorage.getItem("access_token"))
            : this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(localStorage.getItem("access_token"));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    register(userInput) {
        return this.http.post(`${this.url}/auth/register`, userInput);
    }
    login(userInput) {
        return this.http.post(`${this.url}/auth/login`, userInput).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(userInfo => {
            localStorage.setItem("token", userInfo["access_token"]);
            this.currentUserSubject.next(userInfo);
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ 9849:
/*!********************************************!*\
  !*** ./src/app/basket/basket.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketComponent": () => (/* binding */ BasketComponent)
/* harmony export */ });
/* harmony import */ var _core_models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/models/product.model */ 670);
/* harmony import */ var _core_services_basket_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/basket.providers */ 3979);
/* harmony import */ var _products_store_stocks_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/store/stocks.selector */ 3782);
/* harmony import */ var _store_basket_basket_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/basket/basket.reducer */ 7905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_basket_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/basket-store.service */ 3769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _recommendation_products_recommendation_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recommendation-products/recommendation-products.component */ 6850);
/* harmony import */ var _core_models_basket_store_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/models/basket-store.interface */ 2166);













function BasketComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BasketComponent_button_13_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.removeFromBasket(ctx_r3.missedProductName, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Retirer ce produit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function BasketComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BasketComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.onSubmitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Prendre la quantit\u00E9 disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function BasketComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 26)(6, "div", 27)(7, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 30)(14, "span", 31)(15, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BasketComponent_div_15_Template_a_click_15_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const product_r7 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.removeFromBasket(product_r7, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "form", 33)(18, "select", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BasketComponent_div_15_Template_select_change_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const product_r7 = restoredCtx.$implicit;

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);

      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.onQuantityChanges(+_r8.value, product_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", product_r7.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", product_r7.sell_price, " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", product_r7.quantity);
  }
}

class BasketComponent {
  constructor(basketStore, basketStoreService, formBuilder, store, router) {
    this.basketStore = basketStore;
    this.basketStoreService = basketStoreService;
    this.formBuilder = formBuilder;
    this.store = store;
    this.router = router;
    this.price = 0;
    this.missedProductName = new _core_models_product_model__WEBPACK_IMPORTED_MODULE_0__.Product();
    this.missedQuantity = 0;
    this.showModal = false;
    this.missedProductMsg = "";
    this.messaageTitle = "";
    this.displayButton = true;
    this.maxValues = {};
  }

  ngOnInit() {
    this.basketStore.products$.subscribe(products => {
      this.products = products;
    });
    this.store.select(_products_store_stocks_selector__WEBPACK_IMPORTED_MODULE_2__.selectStocks).subscribe(data => this.stocks = data);
    this.stocks.map(stock => this.maxValues[stock.product.id] = Array(stock.quantity));
    console.log(this.maxValues);
    this.updatePrice();
  }

  ngDoCheck() {
    if (this.products.length > 0) {
      this.updatePrice();
    }
  }

  removeFromBasket(p, e) {
    e?.preventDefault();
    this.products = this.products.filter(product => product.id !== p.id);
    this.basketStoreService.removeProductFromBasket(p);
    this.updatePrice();
  }

  updatePrice() {
    this.price = this.products.map(product => product.quantity * product.sell_price).reduce((a, b) => a + b, 0);
  }

  onQuantityChanges(quantity, product) {
    this.basketStoreService.updateQuantity(product, quantity);
    this.updatePrice();
  }

  onSubmitForm() {
    const order = [];
    this.products.map(prod => {
      order.push({
        productId: prod.id,
        product_quantity: prod.quantity
      });
      _store_basket_basket_reducer__WEBPACK_IMPORTED_MODULE_3__.basketInitialState.items.push({
        productId: prod.id,
        product_quantity: prod.quantity
      });
    });
    this.router.navigateByUrl(`/paid/${this.price}`);
    /*;
    this.basketStoreService.orderProduct(order).subscribe({
      next: (data) => {
        this.router.navigateByUrl(`/paid/${this.price}`)
      },
      error: async (error: any) => {
         console.log(error.status)
         console.log(error.error)
         const button = document.getElementById("initModal");
         if(error.error.errorType === "productNotExistInStock"){
            const productId = error.error.productId;
            this.missedProductName = this.products.filter(p => p.id == productId)[0];
            this.missedProductMsg = `Oups quelq'un vient de prendre toute la quantité de ${this.missedProductName.name} qui reste.`;
            this.messaageTitle = "Quantité insuffisante de produit"
            this.displayButton= false;
            this.removeFromBasket(this.missedProductName)
            button?.click();
         }
         if(error.error.errorType === "InsufficientAmountOfProduct"){
          const productId = error.error.productId;
          const quantity = error.error.quantityAvailable;
          this.missedProductName = this.products.filter(p => p.id == productId)[0];
          this.missedQuantity = quantity;
          this.onQuantityChanges(quantity, this.missedProductName);
          this.missedProductMsg = `Oups Le produit ${this.missedProductName.name} ne reste plus en quantitité suffisante. Vous pouvez en prendre ${this.missedQuantity}`;
          this.messaageTitle = "Produit indisponible"
          this.showModal = true;
          button?.click();
         }
      }
    });
    */
  }

  goBackHome() {
    this.router.navigateByUrl("/");
  }

}

BasketComponent.ɵfac = function BasketComponent_Factory(t) {
  return new (t || BasketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_basket_providers__WEBPACK_IMPORTED_MODULE_1__.BASKET_STORE), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_basket_store_service__WEBPACK_IMPORTED_MODULE_4__.BasketStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};

BasketComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: BasketComponent,
  selectors: [["app-basket"]],
  decls: 29,
  vars: 6,
  consts: [[1, "articles-panier-container"], ["id", "initModal", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#missProductModal", 1, "btn", "btn-primary", 2, "display", "none"], ["id", "missProductModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "class", "btn btn-secondary", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "articles-panier", 4, "ngFor", "ngForOf"], [1, "total-price", "card"], [1, "recap-text"], [1, "card-title"], [1, "card-btn", 3, "click"], [1, "back-box"], [1, "back-button", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "articles-panier"], [1, "card", "mb-1", "articles"], [1, "row", "g-0"], [1, "col-md-4", "p-4"], ["src", "../../assets/images/prod.jpg", "alt", "...", 1, "img-fluid", "rounded-start", "articles-img"], [1, "col-md-8"], [1, "card-body"], [1, "card-text"], [1, "card-text", "price"], [1, "card-link"], [1, "box"], ["href", "", 1, "removeArticleLink", 3, "click"], ["action", ""], ["name", "quantity", "id", "id", 1, "quantityInput", 3, "value", "change"], ["quantity", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "banner"]],
  template: function BasketComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, BasketComponent_button_13_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, BasketComponent_button_14_Template, 2, 0, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, BasketComponent_div_15_Template, 33, 4, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 13)(17, "h5", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "R\u00E9capitulatif");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Total: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BasketComponent_Template_button_click_23_listener() {
        return ctx.onSubmitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Aller au paiement");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 17)(26, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BasketComponent_Template_button_click_26_listener() {
        return ctx.goBackHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Retourner \u00E0 l'acceuil");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "app-recommendation-products");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.messaageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.missedProductMsg, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.displayButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.displayButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.price, " FCFA");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _recommendation_products_recommendation_products_component__WEBPACK_IMPORTED_MODULE_5__.RecommendationProductsComponent],
  styles: [".articles[_ngcontent-%COMP%] {\n    width: 90%;\n}\n.articles-panier-container[_ngcontent-%COMP%]{\n    margin-top: 50px;\n    margin-left: 100px;\n}\n.articles-panier[_ngcontent-%COMP%]{\n    width: 75%;\n}\n.total-price[_ngcontent-%COMP%]{\n    width: 25%;\n    position: absolute;\n    right: 50px;\n    top: 100px;\n    height: 200px;\n    padding: 20px;\n}\n.card-btn[_ngcontent-%COMP%]{\n    border: 2px solid #273c75;\n    color: white;\n    background-color: #273c75;\n    border-radius: 20px;\n    font-size: 0.8em;\n    padding: 8px;\n    position: absolute;\n    bottom:15px;\n    left:40px;\n    right: 40px;\n}\n.card-btn[_ngcontent-%COMP%]:hover{\n    color: white;\n    border: 2px solid #142c6e;\n    background-color: #142c6e;\n\n}\n.price[_ngcontent-%COMP%]{\n    color: red;\n    font-weight: 700;\n}\n.recap-text[_ngcontent-%COMP%]{\n   position: absolute;\n   top: -50px;\n    left: -5px;\n}\n.total-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: red;\n    font-weight: 700;\n    position: absolute;\n    right: 10px\n}\n.banner[_ngcontent-%COMP%]{\n    margin-top: 3px;\n    margin-bottom: 25px;\n    width: 90%;\n    height: 50px;\n    background-color: #fafafa;\n}\n.articles-img[_ngcontent-%COMP%]{\n    width: 250px;\n    height: 180px;\n}\n.card-link[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: flex-end;\n    width: inherit;\n    margin-right: 0px;\n}\n.quantityInput[_ngcontent-%COMP%]{\n    width: 50px;\n    margin-left: 50px;\n}\n.removeArticleLink[_ngcontent-%COMP%]{\n    color: #878787;\n    text-decoration: none;\n}\n.back-box[_ngcontent-%COMP%]{\n    width: 25%;\n    position: absolute;\n    right: 50px;top: 310px;\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    background-color: #fff;\n}\n.back-button[_ngcontent-%COMP%]{\n    border: 1px solid white;\n    border-radius: 15px;\n    width: 85%;\n    color: #273c75;\n    background-color: white;\n    border-color: #273c75;\n    border: 1px solid #273c75;\n    border-radius: 20px;\n    font-size: 0.8em;\n    padding: 8px;\n}\n.back-button[_ngcontent-%COMP%]:hover{\n    color: white;\n    background-color: #273c75;\n    border-color: white;\n}\n@media (min-width: 768px) and (max-width:992px){\n    .articles-panier-container[_ngcontent-%COMP%]{\n        margin-left: 10px;\n    }\n    .items[_ngcontent-%COMP%]{\n        width: 30%;\n        font-size: 0.8em;\n    }\n    .btn[_ngcontent-%COMP%]{\n        margin-left: 50%;\n    }\n}\n@media  (min-width:992px){\n    .articles-panier-container[_ngcontent-%COMP%]{\n        margin-left: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtHQUNHLGtCQUFrQjtHQUNsQixVQUFVO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVcsQ0FBQyxVQUFVO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJiYXNrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlcyB7XG4gICAgd2lkdGg6IDkwJTtcbn1cbi5hcnRpY2xlcy1wYW5pZXItY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4uYXJ0aWNsZXMtcGFuaWVye1xuICAgIHdpZHRoOiA3NSU7XG59XG4udG90YWwtcHJpY2V7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgdG9wOiAxMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jYXJkLWJ0bntcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjczYzc1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczYzc1O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbToxNXB4O1xuICAgIGxlZnQ6NDBweDtcbiAgICByaWdodDogNDBweDtcbn1cbi5jYXJkLWJ0bjpob3ZlcntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzE0MmM2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyYzZlO1xuXG59XG4ucHJpY2V7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLnJlY2FwLXRleHR7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IC01MHB4O1xuICAgIGxlZnQ6IC01cHg7XG59XG4udG90YWwtcHJpY2Ugc3BhbiB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweFxufVxuLmJhbm5lcntcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLmFydGljbGVzLWltZ3tcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbn1cbi5jYXJkLWxpbmt7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLnF1YW50aXR5SW5wdXR7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5yZW1vdmVBcnRpY2xlTGlua3tcbiAgICBjb2xvcjogIzg3ODc4NztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYmFjay1ib3h7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUwcHg7dG9wOiAzMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmJhY2stYnV0dG9ue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBjb2xvcjogIzI3M2M3NTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyNzNjNzU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI3M2M3NTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgcGFkZGluZzogOHB4O1xufVxuLmJhY2stYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczYzc1O1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkycHgpe1xuICAgIC5hcnRpY2xlcy1wYW5pZXItY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gICAgLml0ZW1ze1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbiAgICAuYnRue1xuICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgIH1cbn1cblxuQG1lZGlhICAobWluLXdpZHRoOjk5MnB4KXtcbiAgICAuYXJ0aWNsZXMtcGFuaWVyLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxufVxuXG5cbiJdfQ== */"]
});

/***/ }),

/***/ 771:
/*!************************************************************!*\
  !*** ./src/app/categorie-list/categorie-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategorieListComponent": () => (/* binding */ CategorieListComponent)
/* harmony export */ });
/* harmony import */ var _category_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.enum */ 8867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categorie/categorie.component */ 9013);




function CategorieListComponent_app_categorie_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-categorie", 2);
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("category_name", c_r1);
} }
class CategorieListComponent {
    constructor() { }
    ngOnInit() {
        this.categories = _category_enum__WEBPACK_IMPORTED_MODULE_0__.CategoryProductEnum;
    }
}
CategorieListComponent.ɵfac = function CategorieListComponent_Factory(t) { return new (t || CategorieListComponent)(); };
CategorieListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategorieListComponent, selectors: [["app-categorie-list"]], decls: 2, vars: 1, consts: [[1, "categories"], ["class", "categorie-item", 3, "category_name", 4, "ngFor", "ngForOf"], [1, "categorie-item", 3, "category_name"]], template: function CategorieListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CategorieListComponent_app_categorie_1_Template, 1, 1, "app-categorie", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_1__.CategorieComponent], styles: [".categories[_ngcontent-%COMP%]{\n    margin: 0 20px 120px 0;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n.categorie-item[_ngcontent-%COMP%]{\n    width: 200px;\n    height: 200px;\n}\n@media (max-width:992px){\n    .categories[_ngcontent-%COMP%]{\n        justify-content: flex-start;\n        display: flex;\n        gap: 15px;\n        flex-wrap: wrap;\n        margin: 10px;\n    }\n    .categorie-item[_ngcontent-%COMP%]{\n        width: 90px;\n        height: 90px;\n    }\n}\n@media (min-width: 768px){\n    .categories[_ngcontent-%COMP%]{\n        justify-content: space-evenly;\n        display: flex;\n        gap: 5px;\n        flex-wrap: wrap;\n        margin: 10px;\n    }\n    .categorie-item[_ngcontent-%COMP%]{\n        width: 200px;\n        height: 200px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7UUFDM0IsYUFBYTtRQUNiLFNBQVM7UUFDVCxlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7UUFDN0IsYUFBYTtRQUNiLFFBQVE7UUFDUixlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJjYXRlZ29yaWUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3JpZXN7XG4gICAgbWFyZ2luOiAwIDIwcHggMTIwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jYXRlZ29yaWUtaXRlbXtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn0gXG5cbkBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcbiAgICAuY2F0ZWdvcmllc3tcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDE1cHg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbiAgICAuY2F0ZWdvcmllLWl0ZW17XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xuICAgIC5jYXRlZ29yaWVze1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbiAgICAuY2F0ZWdvcmllLWl0ZW17XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 8867:
/*!*************************************************!*\
  !*** ./src/app/categorie-list/category.enum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryProductEnum": () => (/* binding */ CategoryProductEnum)
/* harmony export */ });
const CategoryProductEnum = [
    "cereales", "oleagineux", "fruits", "legumes", "tubercules", "produits speciaux"
];
/*    1: 'cereales',
    2 : "oleagineux",
    3 :"fruits",
    4 : "legumes",
    5 : "tubercules",
    6 : "produits speciaux"

*/


/***/ }),

/***/ 9013:
/*!**************************************************!*\
  !*** ./src/app/categorie/categorie.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategorieComponent": () => (/* binding */ CategorieComponent)
/* harmony export */ });
/* harmony import */ var _products_store_stocks_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/store/stocks.action */ 8620);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _products_store_stocks_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products/store/stocks.selector */ 3782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class CategorieComponent {
    constructor(store) {
        this.store = store;
        this.stocks$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_products_store_stocks_selector__WEBPACK_IMPORTED_MODULE_1__.selectStocks));
    }
    ngOnInit() {
    }
    getStocksByCategory(category_name) {
        if (category_name == "Tout les produits") {
            this.store.dispatch((0,_products_store_stocks_action__WEBPACK_IMPORTED_MODULE_0__.invokeStocksAPI)());
        }
        this.store.dispatch((0,_products_store_stocks_action__WEBPACK_IMPORTED_MODULE_0__.getStocksByCategoryAPI)({ category_name: category_name }));
        //this.stocks$.subscribe(data => console.log(data))
    }
}
CategorieComponent.ɵfac = function CategorieComponent_Factory(t) { return new (t || CategorieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
CategorieComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CategorieComponent, selectors: [["app-categorie"]], inputs: { category_name: "category_name" }, decls: 3, vars: 1, consts: [[1, "categorie", 3, "click"], [1, "categorie-name"]], template: function CategorieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategorieComponent_Template_div_click_0_listener() { return ctx.getStocksByCategory(ctx.category_name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.category_name, "");
    } }, styles: [".categorie[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    margin-top: 40px;\n    background-color: #273c75;\n    border-radius: 20px;\n    color: white;\n    font-size: 15px;\n    align-items: center;\n    justify-content: center;\n}\n.categorie[_ngcontent-%COMP%]:hover{\n    box-shadow: 0px 0px 10px 10px #d1d8e0;\n}\n@media (min-width: 768px) and (max-width:1200px){\n    .categorie[_ngcontent-%COMP%] {\n        display: flex;\n        width: 90px;\n        height: 90px;\n        margin-top: 40px;\n        background-color: #273c75;\n        border-radius: 20px;\n        color: white;\n        font-size: 15px;\n        align-items: center; \n        justify-content: center;\n        text-align: center;\n    }\n}\n@media (max-width:992px){\n    .categorie[_ngcontent-%COMP%]{\n        width: 100%;\n        margin: 0px;\n        font-size: 0.8em;\n        text-align: center;\n    }\n}\n@media (min-width: 768px){\n    .categorie[_ngcontent-%COMP%]{\n        margin: 5px;\n        font-size: 0.8em;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxxQ0FBcUM7QUFDekM7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtJQUN0QjtBQUNKO0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtBQUNKO0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoiY2F0ZWdvcmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmllIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzNjNzU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2F0ZWdvcmllOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxMHB4ICNkMWQ4ZTA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6MTIwMHB4KXtcbiAgICAuY2F0ZWdvcmllIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3M2M3NTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpe1xuICAgIC5jYXRlZ29yaWV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAuY2F0ZWdvcmlle1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH0gXG59XG4iXX0= */"] });


/***/ }),

/***/ 1862:
/*!******************************************************************!*\
  !*** ./src/app/core/components/carrousel/carrousel.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarrouselComponent": () => (/* binding */ CarrouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CarrouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarrouselComponent.ɵfac = function CarrouselComponent_Factory(t) { return new (t || CarrouselComponent)(); };
CarrouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarrouselComponent, selectors: [["app-carrousel"]], decls: 16, vars: 0, consts: [["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide", "mt-5"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../assets/images/s1.webp", "alt", "...", 1, "d-block", "w-100", "carousel-img"], [1, "carousel-item"], ["src", "../assets/images/s2.webp", "alt", "...", 1, "d-block", "w-100", "carousel-img"], ["src", "../assets/images/s3.webp", "alt", "...", 1, "d-block", "w-100", "carousel-img"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "false", 1, "bi", "bi-chevron-double-left", 2, "size", "500px"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "bi-chevron-double-right"]], template: function CarrouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".carousel-img[_ngcontent-%COMP%]{\n    height: 400px;\n    width: 100%;\n}\n.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%]{\n    color: white;\n}\n.bi-chevron-double-left[_ngcontent-%COMP%], .bi-chevron-double-right[_ngcontent-%COMP%]{\n    font-size: 70px;\n}\n@media (min-width: 768px) and (max-width:1200px){\n    .carousel-img[_ngcontent-%COMP%]{\n        height: 200px;\n    }\n}\n@media (max-width: 768px){\n    .carousel-img[_ngcontent-%COMP%]{\n        height: 100px;\n    }\n    .bi-chevron-double-left[_ngcontent-%COMP%], .bi-chevron-double-right[_ngcontent-%COMP%]{\n        font-size: 1.1em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiY2Fycm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaW1ne1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5iaS1jaGV2cm9uLWRvdWJsZS1sZWZ0LCAuYmktY2hldnJvbi1kb3VibGUtcmlnaHR7XG4gICAgZm9udC1zaXplOiA3MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjEyMDBweCl7XG4gICAgLmNhcm91c2VsLWltZ3tcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAgIC5jYXJvdXNlbC1pbWd7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgIC5iaS1jaGV2cm9uLWRvdWJsZS1sZWZ0LCAuYmktY2hldnJvbi1kb3VibGUtcmlnaHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 1583:
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 50, vars: 0, consts: [[1, "sub-footer"], [1, "social-media"], [1, "bi", "bi-instagram"], [1, "bi", "bi-meta"], [1, "bi", "bi-snapchat"], [1, "bi", "bi-tiktok"], [1, "footer"], [1, "title-infos-footer"], [1, "bloc-infos-footer"], ["href", "#"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2)(3, "i", 3)(4, "i", 4)(5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "ul")(8, "li")(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " SERVICES ET GARANTIES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Garanties et Assurances");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Qualit\u00E9 De Nos Produits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " LIVRAISON ET PAIEMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8)(22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Livraison \u00C0 Domicile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " M\u00E9thodes de paiements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " CONTACTEZ-NOUS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8)(31, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Service Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Devenir Notre Fournisseur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " FAQ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li")(40, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " INFORMATIONS LEGALES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8)(43, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Conditions G\u00E9n\u00E9rales de Vente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Mentions L\u00E9gales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A9 2022 Achagro. Tout droit reserv\u00E9s.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".social-media[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-left: 600px;\n    margin-right: 600px;\n}\n.sub-footer[_ngcontent-%COMP%]{\n    width: 100%;\n    background-color: rgba(39, 60, 117,0.75);\n}\n.sub-footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    font-size: 30px;\n    color: white;\n}\n.footer[_ngcontent-%COMP%]{\n    background-color: #273c75;\n}\n.title-infos-footer[_ngcontent-%COMP%]{\n    font-size: 16px;\n    font-weight: bold;\n}\n.bloc-infos-footer[_ngcontent-%COMP%]{\n    font-size: 14px;\n}\na[_ngcontent-%COMP%]{\n    color: white;\n}\na[_ngcontent-%COMP%]:link{\n    text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover{\n    text-decoration: underline;\n}\nul[_ngcontent-%COMP%]{\n    \n    padding-bottom: 0;\n    height: 200px;\n    display: flex;\n    justify-content: space-around;\n    list-style: none;\n}\nli[_ngcontent-%COMP%]{\n    margin-top: 30px;\n    color: white;\n}\np[_ngcontent-%COMP%]{\n    text-align: center;\n    color: gray;\n}\n@media (min-width: 768px) and (max-width:1200px){\n    .social-media[_ngcontent-%COMP%]{\n    width: 100%;\n    justify-content:center;\n    margin: auto;\n    }\n    .footer[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n    .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        margin-left: 25px;\n        margin-right: 25px;\n    }\n    .title-infos-footer[_ngcontent-%COMP%]{\n        font-size: 14px;\n    }\n}\n@media (max-width: 768px){\n    p[_ngcontent-%COMP%]{\n        font-size: 0.5em;\n    }\n    .bloc-infos-footer[_ngcontent-%COMP%]{\n        font-size: 0.6em;\n    }\n    .social-media[_ngcontent-%COMP%]{\n        width: 100%;\n        justify-content:center;\n        margin: auto;\n        }\n        .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n            margin-left: 3%;\n            margin-right: 3%;\n        }\n        .title-infos-footer[_ngcontent-%COMP%]{\n            font-size: 0.6em;\n        }\n}\n@media(min-width: 992px){\n    .social-media[_ngcontent-%COMP%]{\n        width: 100%;\n        justify-content:center;\n        margin: auto;\n        }\n        .footer[_ngcontent-%COMP%] {\n            font-size: 12px;\n        }\n        .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n            margin-left: 25px;\n            margin-right: 25px;\n        }\n        .title-infos-footer[_ngcontent-%COMP%]{\n            font-size: 14px;\n        }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0k7SUFDQSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWjtRQUNBO1lBQ0ksZUFBZTtZQUNmLGdCQUFnQjtRQUNwQjtRQUNBO1lBQ0ksZ0JBQWdCO1FBQ3BCO0FBQ1I7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1o7UUFDQTtZQUNJLGVBQWU7UUFDbkI7UUFDQTtZQUNJLGlCQUFpQjtZQUNqQixrQkFBa0I7UUFDdEI7UUFDQTtZQUNJLGVBQWU7UUFDbkI7QUFDUiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwtbWVkaWF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNjAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MDBweDtcbn1cbi5zdWItZm9vdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDYwLCAxMTcsMC43NSk7XG59XG4uc3ViLWZvb3RlciBpe1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzNjNzU7XG59XG5cbi50aXRsZS1pbmZvcy1mb290ZXJ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmxvYy1pbmZvcy1mb290ZXJ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5he1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmE6bGlua3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG51bHtcbiAgICBcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubGl7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59IFxucHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyYXk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjEyMDBweCl7XG4gICAgLnNvY2lhbC1tZWRpYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmZvb3RlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnNvY2lhbC1tZWRpYSBpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB9XG4gICAgLnRpdGxlLWluZm9zLWZvb3RlcntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIH1cbiAgICAuYmxvYy1pbmZvcy1mb290ZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgfVxuICAgIC5zb2NpYWwtbWVkaWF7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbC1tZWRpYSBpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLWluZm9zLWZvb3RlcntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgICAgIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xuICAgIC5zb2NpYWwtbWVkaWF7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbC1tZWRpYSBpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZS1pbmZvcy1mb290ZXJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 5123:
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _services_basket_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/basket.providers */ 3979);
/* harmony import */ var src_app_products_store_stocks_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/products/store/stocks.selector */ 3782);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_products_store_stocks_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/products/store/stocks.action */ 8620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_products_stocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/products/stocks.service */ 3185);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _models_basket_store_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/basket-store.interface */ 2166);











function HeaderComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.products.length);
} }
class HeaderComponent {
    constructor(basketStore, stocksService, store) {
        this.basketStore = basketStore;
        this.stocksService = stocksService;
        this.store = store;
        this.tag = "";
        this.stocks$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(src_app_products_store_stocks_selector__WEBPACK_IMPORTED_MODULE_1__.selectStocks));
    }
    ngOnInit() {
        this.basketStore.products$.subscribe((products) => { this.products = products; });
    }
    searchProduct() {
        this.store.dispatch((0,src_app_products_store_stocks_action__WEBPACK_IMPORTED_MODULE_2__.getProductByTagAPI)({ tag_name: this.tag }));
        this.tag = '';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_basket_providers__WEBPACK_IMPORTED_MODULE_0__.BASKET_STORE), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_products_stocks_service__WEBPACK_IMPORTED_MODULE_3__.StocksService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 2, consts: [[1, "header"], [1, "header-title"], ["id", "searchbar"], ["type", "text", "placeholder", "Qu'est ce qui vous ferait plaisir ?", 3, "ngModel", "ngModelChange"], [1, "btn", 3, "click"], [1, "bi", "bi-search"], [1, "header-link"], ["id", "header-link-elt-1"], ["href", "signin"], [1, "bi", "bi-person"], [1, "icon-text"], ["id", "header-link-elt-2"], ["class", "article-counter", 4, "ngIf"], ["routerLink", "panier"], [1, "bi", "bi-cart3"], [1, "article-counter"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Achagro");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_4_listener($event) { return ctx.tag = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() { return ctx.searchProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, HeaderComponent_span_14_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Panier");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel], styles: [".header[_ngcontent-%COMP%] {\n    display: flex;\n    background-color: #273c75; \n    height: 70px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: white;\n    font-size: 1.0em;\n}\n\n#searchbar[_ngcontent-%COMP%]{\n    display: flex;\n    padding: 10px;\n    width: calc(80% - 250px) ;\n    height: 64.5px;\n    border: none;\n    font-size: 1em;\n}\n\n#searchbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 40px;\n    background-color: white;\n    border-left: none;\n    padding-left: O ;\n    border-radius: 0px 10px 10px 0px;\n    border: 1px solid black;\n    border-left: none;\n}\n\n#searchbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\n    background-color: #d1d8e0;\n }\n\ninput[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 100%;\n    height: 90%;\n    border: 1px solid black;\n    border-radius: 10px 0px 0px 10px;\n    margin-right: 0;\n    border-right: none;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n    outline: none;\n}\n\n.header-title[_ngcontent-%COMP%]{\n    color: white;\n    margin-left: 15px;\n}\n\n.header-link[_ngcontent-%COMP%]{\n   display: flex;\n   justify-content: space-between; \n   margin-right: 20px;\n}\n\n#header-link-elt-1[_ngcontent-%COMP%] {\n    margin-right: 20px;\n}\n\n#header-link-elt-2[_ngcontent-%COMP%] {\n    margin-left: 50px;\n    position: relative;\n}\n\n.bi-search[_ngcontent-%COMP%]{\n   font-size: 21px;\n}\n\n.bi-cart3[_ngcontent-%COMP%]{\n    font-size: 28px;\n    color: white;\n}\n\n.bi-person[_ngcontent-%COMP%]{\n    font-size: 29px;\n    color: white;\n}\n\n.article-counter[_ngcontent-%COMP%]{\n    background-color: #e23a05;\n    border-radius: 60%;\n    color: white;\n    font-size: 8px;\n    text-align: center;\n    position: absolute;\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    left: -5px;\n    top: 15px;\n    font-weight: bold;\n}\n\n@media (max-width: 992px) {\n    #searchbar[_ngcontent-%COMP%]{\n        order: 2;\n        width: 100%;\n        margin-left: 0;\n    }\n    .icon-text[_ngcontent-%COMP%]{\n        width: 0;\n        display: none;\n    }\n    .header[_ngcontent-%COMP%]{\n        padding-top: 10px;\n        display: flex;\n        justify-content: flex-start;\n        flex-wrap: wrap;\n        height: min-content;\n    }\n    .header-title[_ngcontent-%COMP%]{\n        order: 0;\n        width: 50%;\n        margin-left: 5px;\n        font-size: medium;\n    }\n    .header-link[_ngcontent-%COMP%]{\n        order: 1;\n        margin-right: 0;\n        width: 45%;\n        display: flex;\n        justify-content: flex-end;\n    }\n    #header-link-elt-1[_ngcontent-%COMP%] {\n        margin-left: 25%;\n        margin-right: 0;\n        width: 50%;\n        text-align: right;\n    }\n    #header-link-elt-2[_ngcontent-%COMP%] {\n        margin-left: 5%;\n        width: 10%;\n        text-align: right;\n    }\n\n    .bi-search[_ngcontent-%COMP%]{\n        font-size: 11px;\n     }\n     \n     .bi-cart3[_ngcontent-%COMP%]{\n        margin-right: 0;\n         font-size: 18px;\n         color: white;\n     }\n     \n     .bi-person[_ngcontent-%COMP%]{\n         font-size: 19px;\n         color: white;\n     }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBQ0E7R0FDRyxhQUFhO0dBQ2IsOEJBQThCO0dBQzlCLGtCQUFrQjtBQUNyQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7R0FDRyxlQUFlO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxRQUFRO1FBQ1IsV0FBVztRQUNYLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFFBQVE7UUFDUixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxRQUFRO1FBQ1IsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFFBQVE7UUFDUixlQUFlO1FBQ2YsVUFBVTtRQUNWLGFBQWE7UUFDYix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO0tBQ2xCOztLQUVBO1FBQ0csZUFBZTtTQUNkLGVBQWU7U0FDZixZQUFZO0tBQ2hCOztLQUVBO1NBQ0ksZUFBZTtTQUNmLFlBQVk7S0FDaEI7QUFDTCIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3M2M3NTsgXG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMGVtO1xufVxuXG4jc2VhcmNoYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogY2FsYyg4MCUgLSAyNTBweCkgO1xuICAgIGhlaWdodDogNjQuNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDFlbTtcbn1cblxuI3NlYXJjaGJhciBidXR0b24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IE8gO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4jc2VhcmNoYmFyIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkOGUwO1xuIH1cblxuaW5wdXQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbmlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmhlYWRlci10aXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4uaGVhZGVyLWxpbmt7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiNoZWFkZXItbGluay1lbHQtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4jaGVhZGVyLWxpbmstZWx0LTIge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJpLXNlYXJjaHtcbiAgIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLmJpLWNhcnQze1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5iaS1wZXJzb257XG4gICAgZm9udC1zaXplOiAyOXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5hcnRpY2xlLWNvdW50ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyM2EwNTtcbiAgICBib3JkZXItcmFkaXVzOiA2MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBsZWZ0OiAtNXB4O1xuICAgIHRvcDogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgI3NlYXJjaGJhcntcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgLmljb24tdGV4dHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB9XG4gICAgLmhlYWRlci10aXRsZXtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIH1cbiAgICAuaGVhZGVyLWxpbmt7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICAgICNoZWFkZXItbGluay1lbHQtMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgICNoZWFkZXItbGluay1lbHQtMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmJpLXNlYXJjaHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICB9XG4gICAgIFxuICAgICAuYmktY2FydDN7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgfVxuICAgICBcbiAgICAgLmJpLXBlcnNvbntcbiAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 7809:
/*!******************************************************************!*\
  !*** ./src/app/core/components/publicite/publicite.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PubliciteComponent": () => (/* binding */ PubliciteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PubliciteComponent {
    constructor() { }
    ngOnInit() {
    }
}
PubliciteComponent.ɵfac = function PubliciteComponent_Factory(t) { return new (t || PubliciteComponent)(); };
PubliciteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PubliciteComponent, selectors: [["app-publicite"]], decls: 2, vars: 0, consts: [[1, "pub"], ["src", "../../../../assets/images/farmer.jpg", "alt", "", "srcset", ""]], template: function PubliciteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pub[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 500px;\n    margin-right: 20px;\n    margin-top: 10px;\n    color: white;\n    margin-left: 20px;\n    border-radius: 3px;\n}\nimg[_ngcontent-%COMP%]{\n    width: 100%;\n    height:min-content\n}\n@media (min-width: 768px) and (max-width:992px){\n    .pub[_ngcontent-%COMP%]{\n        width: 100%;\n        height:min-content\n    }\n\n    img[_ngcontent-%COMP%]{\n        width: 100%;\n        height:min-content\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2l0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1g7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1g7SUFDSjs7SUFFQTtRQUNJLFdBQVc7UUFDWDtJQUNKO0FBQ0oiLCJmaWxlIjoicHVibGljaXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVie1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbmltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6bWluLWNvbnRlbnRcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTJweCl7XG4gICAgLnB1YntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDptaW4tY29udGVudFxuICAgIH1cblxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDptaW4tY29udGVudFxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 5123);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 1583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/carrousel/carrousel.component */ 1862);
/* harmony import */ var _components_publicite_publicite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/publicite/publicite.component */ 7809);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/product.service */ 3560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _services_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService,
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _components_publicite_publicite_component__WEBPACK_IMPORTED_MODULE_4__.PubliciteComponent,
        _components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_3__.CarrouselComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_3__.CarrouselComponent, _components_publicite_publicite_component__WEBPACK_IMPORTED_MODULE_4__.PubliciteComponent] }); })();


/***/ }),

/***/ 2166:
/*!*******************************************************!*\
  !*** ./src/app/core/models/basket-store.interface.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketStore": () => (/* binding */ BasketStore)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 833);

class BasketStore {
    constructor() {
        this.products$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable;
    }
}


/***/ }),

/***/ 670:
/*!**********************************************!*\
  !*** ./src/app/core/models/product.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product),
/* harmony export */   "Stock": () => (/* binding */ Stock)
/* harmony export */ });
class Product {
    constructor() {
        this.quantity = 1;
    }
}
class Stock {
}


/***/ }),

/***/ 3769:
/*!*******************************************************!*\
  !*** ./src/app/core/services/basket-store.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketStoreService": () => (/* binding */ BasketStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class BasketStoreService {
    constructor(http, parent) {
        this.http = http;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/order`;
        this.productsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.initialState = {
            products$: this.productsSubject.asObservable()
        };
        if (parent) {
            throw Error("Trying to create mutliple instance. This service should be singleton");
        }
    }
    updateQuantity(product, quantity) {
        let existingProducts = [...this.productsSubject.value];
        product.quantity = quantity;
        //const prod = {...product, quantity: quantity}
        //existingProducts = [...existingProducts.filter(p => p !== product)].concat(prod);
        product.quantity = quantity;
        this.productsSubject.next(existingProducts);
    }
    addProductToBasket(product) {
        const existingProducts = [...this.productsSubject.value];
        const prod = { ...product, quantity: 1 };
        if ((existingProducts.filter(p => p.id === prod.id)).length !== 0) {
        }
        else {
            existingProducts.push(prod);
            this.productsSubject.next(existingProducts);
        }
        // else{
        //     existingProducts.push(product);
        //     this.productsSubject.next(existingProducts);
        // }
    }
    removeProductFromBasket(product) {
        let existingProducts = [...this.productsSubject.value];
        existingProducts = existingProducts.filter(p => p !== product);
        this.productsSubject.next(existingProducts);
    }
    orderProduct(prod) {
        return this.http.post(this.url, {
            orderItems: prod
        });
    }
}
BasketStoreService.ɵfac = function BasketStoreService_Factory(t) { return new (t || BasketStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](BasketStoreService, 12)); };
BasketStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BasketStoreService, factory: BasketStoreService.ɵfac });


/***/ }),

/***/ 3979:
/*!***************************************************!*\
  !*** ./src/app/core/services/basket.providers.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASKET_STORE": () => (/* binding */ BASKET_STORE),
/* harmony export */   "BASKET_STORE_PROVIDERS": () => (/* binding */ BASKET_STORE_PROVIDERS),
/* harmony export */   "basketStoreFactory": () => (/* binding */ basketStoreFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _basket_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket-store.service */ 3769);


const BASKET_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken("BasketStore");
const BASKET_STORE_PROVIDERS = [
    { provide: _basket_store_service__WEBPACK_IMPORTED_MODULE_0__.BasketStoreService },
    { provide: BASKET_STORE, deps: [_basket_store_service__WEBPACK_IMPORTED_MODULE_0__.BasketStoreService], useFactory: basketStoreFactory }
];
function basketStoreFactory(service) {
    return service.initialState;
}


/***/ }),

/***/ 3560:
/*!**************************************************!*\
  !*** ./src/app/core/services/product.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ProductService {
    constructor(http) {
        this.http = http;
        this.selectedProducts = [];
        this._url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/stock`;
    }
    getProduct() {
        return this.http.get(`${this._url}/6`);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac });


/***/ }),

/***/ 2284:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/components/header/header.component */ 5123);
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/components/footer/footer.component */ 1583);
/* harmony import */ var _core_components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/components/carrousel/carrousel.component */ 1862);
/* harmony import */ var _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/product-list/product-list.component */ 1759);
/* harmony import */ var _categorie_list_categorie_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categorie-list/categorie-list.component */ 771);






class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 7, vars: 0, consts: [[1, "separateur"], [1, "info"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header")(1, "app-carrousel")(2, "app-categorie-list")(3, "app-product-list")(4, "div", 0)(5, "div", 1)(6, "app-footer");
    } }, dependencies: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _core_components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_2__.CarrouselComponent, _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__.ProductListComponent, _categorie_list_categorie_list_component__WEBPACK_IMPORTED_MODULE_4__.CategorieListComponent], styles: [".separateur[_ngcontent-%COMP%]{\n    margin-top: 30px;\n    width: 100%;\n    height: 70px;\n    background-color: #273c75;\n}\n.info[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 700px;\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0IiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcGFyYXRldXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3M2M3NTtcbn1cbi5pbmZve1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"] });


/***/ }),

/***/ 1759:
/*!*****************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_stocks_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/stocks.selector */ 3782);
/* harmony import */ var _store_stocks_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/stocks.action */ 8620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/product.service */ 3560);
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../stocks.service */ 3185);
/* harmony import */ var src_app_core_services_basket_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/basket-store.service */ 3769);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _core_components_publicite_publicite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/publicite/publicite.component */ 7809);
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../single-product/single-product.component */ 9221);











function ProductListComponent_app_single_product_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-single-product", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("addToCart", function ProductListComponent_app_single_product_3_Template_app_single_product_addToCart_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const product_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onAddToCart(product_r1.product)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1.product);
} }
class ProductListComponent {
    constructor(productService, stocksService, basketStoreService, store) {
        this.productService = productService;
        this.stocksService = stocksService;
        this.basketStoreService = basketStoreService;
        this.store = store;
        this.stocks$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_stocks_selector__WEBPACK_IMPORTED_MODULE_0__.selectStocks));
        this.moreStocks$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_stocks_selector__WEBPACK_IMPORTED_MODULE_0__.selectMoreStocks));
        this.categorie$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(_store_stocks_selector__WEBPACK_IMPORTED_MODULE_0__.selctProductByTag));
    }
    ngOnInit() {
        this.store.dispatch((0,_store_stocks_action__WEBPACK_IMPORTED_MODULE_1__.invokeStocksAPI)());
        this.stocks$.subscribe(data => {
            this.products = data;
        });
    }
    ngDoCheck() {
        let data = [];
        this.categorie$.subscribe(cataegories => data = cataegories);
        if (data.length > 0) {
            this.categorie$.subscribe(data => {
                this.products = data;
            });
        }
    }
    onAddToCart(product) {
        this.basketStoreService.addProductToBasket(product);
    }
    getMore() {
        this.store.dispatch((0,_store_stocks_action__WEBPACK_IMPORTED_MODULE_1__.invokeMoreStocksAPI)());
        //this.moreStocks$.subscribe(data => console.log(data))
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_stocks_service__WEBPACK_IMPORTED_MODULE_3__.StocksService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_basket_store_service__WEBPACK_IMPORTED_MODULE_4__.BasketStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
ProductListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 6, vars: 1, consts: [[1, "publicite"], [1, "pub-component"], [1, "product-list"], ["class", "items", 3, "product", "addToCart", 4, "ngFor", "ngForOf"], [1, "btn", 3, "click"], [1, "items", 3, "product", "addToCart"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-publicite", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ProductListComponent_app_single_product_3_Template, 1, 1, "app-single-product", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_4_listener() { return ctx.getMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Voir plus d'offres");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _core_components_publicite_publicite_component__WEBPACK_IMPORTED_MODULE_5__.PubliciteComponent, _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_6__.SingleProductComponent], styles: [".product-list[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    width: 75%;\n    justify-content: space-evenly;\n    margin-right: 0;\n    padding-right: 0;\n}\n.pub-component[_ngcontent-%COMP%]{\n    width: 25%;\n}\n.publicite[_ngcontent-%COMP%]{\n    display: flex;\n    margin-top: 40px;\n    margin-right: 0;\n    padding-right: 0;\n}\n.btn[_ngcontent-%COMP%]{\n    margin-left: 50%;\n    margin-top: 20px;\n    border: 1px solid #273c75;\n    color: #273c75;\n    background-color: white;\n    border-radius: 20px;\n    font-size: 1em;\n    padding: 10px;\n}\n.btn[_ngcontent-%COMP%]:hover{\n    color: white;\n    border: 1px solid #273c75 ;\n    background-color: #273c75;\n}\n@media (max-width: 768px){\n    .product-list[_ngcontent-%COMP%]{\n        width: 100%;\n        justify-content:center;\n    }\n    .items[_ngcontent-%COMP%]{\n        width: 50%;\n    }\n    .pub-component[_ngcontent-%COMP%]{\n        width: 0%;\n    }\n    .btn[_ngcontent-%COMP%]{\n        width: inherit;\n        margin-left: 25%;\n    }\n}\n@media (min-width: 768px) and (max-width:992px){\n    .items[_ngcontent-%COMP%]{\n        width: 30%;\n        font-size: 0.8em;\n    }\n    .btn[_ngcontent-%COMP%]{\n        margin-left: 50%;\n    }\n}\n@media(min-width: 992px){\n    .items[_ngcontent-%COMP%]{\n        width: 30%;\n        font-size: 1.1em;\n    }\n    .btn[_ngcontent-%COMP%]{\n        margin-left: 50%;\n    }\n    .product-list[_ngcontent-%COMP%]{\n        justify-content: space-evenly;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKIiwiZmlsZSI6InByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogNzUlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLnB1Yi1jb21wb25lbnR7XG4gICAgd2lkdGg6IDI1JTtcbn1cbi5wdWJsaWNpdGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLmJ0bntcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI3M2M3NTtcbiAgICBjb2xvcjogIzI3M2M3NTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uYnRuOmhvdmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjczYzc1IDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczYzc1O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAucHJvZHVjdC1saXN0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICB9XG4gICAgLml0ZW1ze1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAucHViLWNvbXBvbmVudHtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICAuYnRue1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MnB4KXtcbiAgICAuaXRlbXN7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICAgIC5idG57XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgfVxufVxuXG5AbWVkaWEobWluLXdpZHRoOiA5OTJweCl7XG4gICAgLml0ZW1ze1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIH1cbiAgICAuYnRue1xuICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgIH1cbiAgICAucHJvZHVjdC1saXN0e1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 8980:
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _store_stocks_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/stocks.effect */ 1426);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-product/single-product.component */ 9221);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ 1759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ 294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_stocks_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/stocks.reducer */ 1245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);












class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreModule.forFeature("stocks", _store_stocks_reducer__WEBPACK_IMPORTED_MODULE_5__.stocksReducer),
        _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreModule.forFeature("productCategory", _store_stocks_reducer__WEBPACK_IMPORTED_MODULE_5__.getProductsByCategory),
        _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreModule.forFeature("getProductByTag", _store_stocks_reducer__WEBPACK_IMPORTED_MODULE_5__.getProductsByTags),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsModule.forFeature([_store_stocks_effect__WEBPACK_IMPORTED_MODULE_0__.StocksEffect,]),
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent,
        _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_1__.SingleProductComponent], imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsFeatureModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule], exports: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent,
        _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_1__.SingleProductComponent] }); })();


/***/ }),

/***/ 9221:
/*!*********************************************************************!*\
  !*** ./src/app/products/single-product/single-product.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleProductComponent": () => (/* binding */ SingleProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/product.service */ 3560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function SingleProductComponent_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.baseImageUrl + ctx_r2.product.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function SingleProductComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SingleProductComponent_div_1_img_1_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.product.productImage);
} }
function SingleProductComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SingleProductComponent {
    constructor(productService) {
        this.productService = productService;
        this.baseImageUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}`;
        this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    addProductToBasket(product) {
        this.addToCart.emit(product);
    }
}
SingleProductComponent.ɵfac = function SingleProductComponent_Factory(t) { return new (t || SingleProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
SingleProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SingleProductComponent, selectors: [["app-single-product"]], inputs: { product: "product" }, outputs: { addToCart: "addToCart" }, decls: 13, vars: 5, consts: [[1, "card"], ["class", "card-img", 4, "ngIf"], [1, "card-title"], [1, "card-text", "text-description"], [1, "card-text", "price", "pb-2"], [1, "product-price"], [1, "addProductBtn", 3, "click"], [1, "card-img"], ["class", "card-img", "alt", "...", 3, "src", 4, "ngIf"], ["alt", "...", 1, "card-img", 3, "src"], ["src", "../../../assets/images/1.png", "alt", "...", 1, "card-img"]], template: function SingleProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SingleProductComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SingleProductComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 4)(8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span")(11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SingleProductComponent_Template_button_click_11_listener() { return ctx.addProductToBasket(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Ajouter au panier");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.product.productImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.product.sell_price, " FCFA");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".addProductBtn[_ngcontent-%COMP%]{\n    border: 1px solid #273c75;\n    color: #273c75;\n    background-color: white;\n    border-radius: 20px;\n    font-size: 0.6em;\n    padding: 10px;\n    margin-left: 100px;\n}\n.addProductBtn[_ngcontent-%COMP%]:hover{\n    color: white;\n    border: 1px solid #273c75;\n    background-color: #273c75;\n}\n.card-title[_ngcontent-%COMP%]{\n    margin-left: 10px;\n    font-size: 25px;\n    color: #273c75;\n    \n}\n.card-text[_ngcontent-%COMP%]{\n    margin-left: 10px;\n    color: black; \n}\n.price[_ngcontent-%COMP%] {\n    color: red;\n    font-weight: 700;\n    font-size: 20px;\n    width: auto;\n    display: flex;\n    flex-direction: column;\n}\n.text-description[_ngcontent-%COMP%]{\n    text-align: justify;\n    padding-right: 15px;\n}\n.card-img[_ngcontent-%COMP%]{\n    margin-top: 30px;\n    margin-left: 30px;\n    margin-bottom: 30px;\n    width: 80%;\n    height: 80%;\n}\n.card[_ngcontent-%COMP%]{\n    width: 320px;\n    margin: 10px;\n    border: none;\n    border-radius: 3px;\n}\n.card[_ngcontent-%COMP%]:hover{\n    box-shadow: 0px 0px 5px 5px #dcdde1;\n}\n@media (min-width: 768px) and (max-width:992px){\n    .card[_ngcontent-%COMP%]{\n        width: 100%;\n        margin: 10px;\n        border: none;\n        border-radius: 3px;\n    }\n\n    .addProductBtn[_ngcontent-%COMP%]{\n        width: 70%;\n        margin-left: 15%;\n        font-size: 0.7em;\n        margin-top: 20px;\n    }\n\n    .price[_ngcontent-%COMP%] {\n        font-weight: 700;\n        font-size: 15px;    \n    }\n    .card-title[_ngcontent-%COMP%]{\n        font-size: 20px;\n    }\n\n    .card-img[_ngcontent-%COMP%]{\n        margin-top: 30px;\n        margin-left: 10%;\n        margin-bottom: 30px;\n        width: 80%;\n        height: 80%;\n    }\n       \n}\n@media (min-width:992px){\n    .card[_ngcontent-%COMP%]{\n        width: 100%;\n        margin: 10px;\n        border: none;\n        border-radius: 3px;\n    }\n\n    .addProductBtn[_ngcontent-%COMP%]{\n        width: 70%;\n        margin-left: 15%;\n        font-size: 0.7em;\n        margin-top: 20px;\n    }\n}\n@media (max-width: 768px){\n    .card[_ngcontent-%COMP%]{\n        font-size: 0.7em;\n        width: 90%;\n        margin-left: 5%;\n        margin-right: 5%;\n        border: none;\n        border-radius: 3px;\n    }\n    .card-title[_ngcontent-%COMP%]{\n        font-size: 1em;\n    }\n    .addProductBtn[_ngcontent-%COMP%]{\n        width: 70%;\n        margin: auto 14%;\n        font-size: 1em;\n        margin-top: 20px;\n    }\n    .price[_ngcontent-%COMP%] {\n        font-weight: 700;\n        font-size: 0.7em;    \n    }\n    .card-img[_ngcontent-%COMP%]{\n        margin-top: 30px;\n        margin-left: 10%;\n        margin-bottom: 30px;\n        width: 80%;\n        height: 80%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7O0FBRWxCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLFdBQVc7SUFDZjs7QUFFSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRQcm9kdWN0QnRue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNzNjNzU7XG4gICAgY29sb3I6ICMyNzNjNzU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDAuNmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuLmFkZFByb2R1Y3RCdG46aG92ZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNzNjNzU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3M2M3NTtcbn1cblxuLmNhcmQtdGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjMjczYzc1O1xuICAgIFxufVxuXG4uY2FyZC10ZXh0e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiBibGFjazsgXG59XG5cbi5wcmljZSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udGV4dC1kZXNjcmlwdGlvbntcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uY2FyZC1pbWd7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG4uY2FyZHtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5jYXJkOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjZGNkZGUxO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTJweCl7XG4gICAgLmNhcmR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgIC5hZGRQcm9kdWN0QnRue1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5wcmljZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDsgICAgXG4gICAgfVxuICAgIC5jYXJkLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLmNhcmQtaW1ne1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICB9XG4gICAgICAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXtcbiAgICAuY2FyZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuXG4gICAgLmFkZFByb2R1Y3RCdG57XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAgIC5jYXJke1xuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAuY2FyZC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICAgIC5hZGRQcm9kdWN0QnRue1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW46IGF1dG8gMTQlO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgLnByaWNlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTsgICAgXG4gICAgfVxuICAgIC5jYXJkLWltZ3tcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 3185:
/*!********************************************!*\
  !*** ./src/app/products/stocks.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StocksService": () => (/* binding */ StocksService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class StocksService {
    constructor(http) {
        this.http = http;
        this._url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}`;
        this.limit = 6;
        this.skip = 0;
    }
    get() {
        return this.http.get(`${this._url}/stock/${this.limit}`);
    }
    getMoreProducts(skip = 3) {
        this.limit += skip;
        return this.http.get(`${this._url}/stock/${this.limit}`);
    }
    getProductsInStockByCategory(category_name) {
        return this.http.get(`${this._url}/stock/?category=${category_name}`);
    }
    getProductsByTag(tag_name) {
        return this.http.get(`${this._url}/stock/tag?tag_name=${tag_name}`);
    }
    getRandom() {
        return this.http.get(`${this._url}/stock/4`);
    }
}
StocksService.ɵfac = function StocksService_Factory(t) { return new (t || StocksService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
StocksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StocksService, factory: StocksService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 8620:
/*!*************************************************!*\
  !*** ./src/app/products/store/stocks.action.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMoreStocksSuccess": () => (/* binding */ getMoreStocksSuccess),
/* harmony export */   "getProductByTagAPI": () => (/* binding */ getProductByTagAPI),
/* harmony export */   "getProductByTagSuccess": () => (/* binding */ getProductByTagSuccess),
/* harmony export */   "getStocksByCategoryAPI": () => (/* binding */ getStocksByCategoryAPI),
/* harmony export */   "getStocksByCategorySucess": () => (/* binding */ getStocksByCategorySucess),
/* harmony export */   "invokeMoreStocksAPI": () => (/* binding */ invokeMoreStocksAPI),
/* harmony export */   "invokeStocksAPI": () => (/* binding */ invokeStocksAPI),
/* harmony export */   "stocksFetchAPISuccess": () => (/* binding */ stocksFetchAPISuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const invokeStocksAPI = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Stocks API] Invoke Stocks Fetch API');
const stocksFetchAPISuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Stocks API] Fetch API Succes", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const invokeMoreStocksAPI = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Stocks API] Get more products from stocks');
const getMoreStocksSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Stocks API] Fetch API Succes", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getStocksByCategoryAPI = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Stocks API] Get products in stocks by category', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getStocksByCategorySucess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Stocks API] Fetch API Succes", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProductByTagAPI = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Stocks API] Get products by tag name", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProductByTagSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Stocks API] Fetch API success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 1426:
/*!*************************************************!*\
  !*** ./src/app/products/store/stocks.effect.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StocksEffect": () => (/* binding */ StocksEffect)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 538);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _stocks_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks.action */ 8620);
/* harmony import */ var _stocks_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stocks.selector */ 3782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stocks.service */ 3185);









class StocksEffect {
    constructor(action$, stocksService, store) {
        this.action$ = action$;
        this.stocksService = stocksService;
        this.store = store;
        this.loadStocks$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_stocks_action__WEBPACK_IMPORTED_MODULE_0__.invokeStocksAPI), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_stocks_selector__WEBPACK_IMPORTED_MODULE_1__.selectStocks))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(([, stock]) => {
            if (stock.length > 0)
                return rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY;
            return this.stocksService.get()
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((data) => (0,_stocks_action__WEBPACK_IMPORTED_MODULE_0__.stocksFetchAPISuccess)({ stocks: data })));
        })));
        this.loadMoreProduct$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_stocks_action__WEBPACK_IMPORTED_MODULE_0__.invokeMoreStocksAPI), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_stocks_selector__WEBPACK_IMPORTED_MODULE_1__.selectMoreStocks))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(([, stock]) => {
            return this.stocksService.getMoreProducts()
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((data) => (0,_stocks_action__WEBPACK_IMPORTED_MODULE_0__.stocksFetchAPISuccess)({ stocks: data })));
        })));
        this.getStocksByCategory$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_stocks_action__WEBPACK_IMPORTED_MODULE_0__.getStocksByCategoryAPI), 
        //withLatestFrom(this.store.pipe(select(selectStocks))),
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)((action) => {
            return this.stocksService.getProductsInStockByCategory(action.category_name)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((data) => (0,_stocks_action__WEBPACK_IMPORTED_MODULE_0__.getStocksByCategorySucess)({ stocks: data })));
        })));
        this.getProductsByTagName$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_stocks_action__WEBPACK_IMPORTED_MODULE_0__.getProductByTagAPI), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)((action) => {
            return this.stocksService.getProductsByTag(action.tag_name)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((data) => (0,_stocks_action__WEBPACK_IMPORTED_MODULE_0__.getProductByTagSuccess)({ stocks: data })));
        })));
    }
}
StocksEffect.ɵfac = function StocksEffect_Factory(t) { return new (t || StocksEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_stocks_service__WEBPACK_IMPORTED_MODULE_2__.StocksService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
StocksEffect.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: StocksEffect, factory: StocksEffect.ɵfac });


/***/ }),

/***/ 1245:
/*!**************************************************!*\
  !*** ./src/app/products/store/stocks.reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMoreProduct": () => (/* binding */ getMoreProduct),
/* harmony export */   "getProductsByCategory": () => (/* binding */ getProductsByCategory),
/* harmony export */   "getProductsByTags": () => (/* binding */ getProductsByTags),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "stocksReducer": () => (/* binding */ stocksReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _stocks_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks.action */ 8620);


const initialState = [];
const stocksReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_stocks_action__WEBPACK_IMPORTED_MODULE_0__.stocksFetchAPISuccess, (state, { stocks }) => {
    return stocks;
}));
const getMoreProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_stocks_action__WEBPACK_IMPORTED_MODULE_0__.getMoreStocksSuccess, (state, { stocks }) => {
    return stocks;
}));
const getProductsByCategory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_stocks_action__WEBPACK_IMPORTED_MODULE_0__.getStocksByCategorySucess, (state, { stocks }) => {
    return stocks;
}));
const getProductsByTags = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_stocks_action__WEBPACK_IMPORTED_MODULE_0__.getProductByTagSuccess, (state, { stocks }) => {
    return stocks;
}));


/***/ }),

/***/ 3782:
/*!***************************************************!*\
  !*** ./src/app/products/store/stocks.selector.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selctProductByTag": () => (/* binding */ selctProductByTag),
/* harmony export */   "selectMoreStocks": () => (/* binding */ selectMoreStocks),
/* harmony export */   "selectProductByCategory": () => (/* binding */ selectProductByCategory),
/* harmony export */   "selectRecommendationProducts": () => (/* binding */ selectRecommendationProducts),
/* harmony export */   "selectStocks": () => (/* binding */ selectStocks)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const selectStocks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('stocks');
const selectMoreStocks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('stocks');
const selectProductByCategory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)("productCategory");
const selctProductByTag = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)("getProductByTag");
const selectRecommendationProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)("getProducts");


/***/ }),

/***/ 6850:
/*!******************************************************************************!*\
  !*** ./src/app/recommendation-products/recommendation-products.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendationProductsComponent": () => (/* binding */ RecommendationProductsComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _products_store_stocks_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/store/stocks.selector */ 3782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_basket_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/services/basket-store.service */ 3769);
/* harmony import */ var _products_stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../products/stocks.service */ 3185);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/components/footer/footer.component */ 1583);
/* harmony import */ var _products_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products/single-product/single-product.component */ 9221);









function RecommendationProductsComponent_app_single_product_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-single-product", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("addToCart", function RecommendationProductsComponent_app_single_product_4_Template_app_single_product_addToCart_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const product_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onAddToCart(product_r1.product)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("product", product_r1.product);
} }
class RecommendationProductsComponent {
    constructor(store, basketStoreService, stockService) {
        this.store = store;
        this.basketStoreService = basketStoreService;
        this.stockService = stockService;
        this.stocks$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_products_store_stocks_selector__WEBPACK_IMPORTED_MODULE_0__.selectStocks));
    }
    ngOnInit() {
        this.stockService.getRandom().subscribe(data => this.products = data);
    }
    onAddToCart(product) {
        this.basketStoreService.addProductToBasket(product);
    }
}
RecommendationProductsComponent.ɵfac = function RecommendationProductsComponent_Factory(t) { return new (t || RecommendationProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_basket_store_service__WEBPACK_IMPORTED_MODULE_1__.BasketStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_products_stocks_service__WEBPACK_IMPORTED_MODULE_2__.StocksService)); };
RecommendationProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RecommendationProductsComponent, selectors: [["app-recommendation-products"]], decls: 6, vars: 1, consts: [[1, "recommendation"], [1, "product-list"], ["class", "items", 3, "product", "addToCart", 4, "ngFor", "ngForOf"], [1, "items", 3, "product", "addToCart"]], template: function RecommendationProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Ces produits pourraient vous int\u00E9resser");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RecommendationProductsComponent_app_single_product_4_Template, 1, 1, "app-single-product", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _products_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_4__.SingleProductComponent], styles: [".product-list[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 50px;\n    margin-left: 50px;\n    margin-right: 50px;\n    margin-bottom: 50px;\n    justify-content:flex-start;\n}\n.recommendation[_ngcontent-%COMP%] {\n    margin-top: 50px;\n}\n@media (min-width: 768px) and (max-width:992px){\n    .items[_ngcontent-%COMP%]{\n        width: 30%;\n        font-size: 0.8em;\n    }\n    .btn[_ngcontent-%COMP%]{\n        margin-left: 50%;\n    }\n}\n@media (min-width: 768px){\n    .items[_ngcontent-%COMP%]{\n        width: 30%;\n        font-size: 0.8em;\n    }  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZGF0aW9uLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoicmVjb21tZW5kYXRpb24tcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcbn1cbi5yZWNvbW1lbmRhdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkycHgpe1xuICAgIC5pdGVtc3tcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9XG4gICAgLmJ0bntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xuICAgIC5pdGVtc3tcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9ICBcbn0iXX0= */"] });


/***/ }),

/***/ 3749:
/*!**********************************************!*\
  !*** ./src/app/shared/helpers/auth.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/services/auth.service */ 6518);




class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        console.log(currentUser);
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8651:
/*!***************************************************!*\
  !*** ./src/app/shared/helpers/jwt-interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/services/auth.service */ 6518);



class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let token = this.authService.currentUserValue;
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token["access_token"]}`
                }
            });
            console.log(token["access_token"]);
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule] }); })();


/***/ }),

/***/ 7905:
/*!************************************************!*\
  !*** ./src/app/store/basket/basket.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basketInitialState": () => (/* binding */ basketInitialState),
/* harmony export */   "basketReducer": () => (/* binding */ basketReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const basketInitialState = {
    items: []
};
const basketReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(basketInitialState);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseApiUrl: "http://127.0.0.1:3000"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map