(self["webpackChunketh_app"] = self["webpackChunketh_app"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 34356:
/*!*****************************************!*\
  !*** ./src/app/app-bootstrap.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBootstrapModule": () => (/* binding */ AppBootstrapModule)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class AppBootstrapModule {
}
AppBootstrapModule.ɵfac = function AppBootstrapModule_Factory(t) { return new (t || AppBootstrapModule)(); };
AppBootstrapModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppBootstrapModule });
AppBootstrapModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAlertModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbButtonsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCollapseModule
        ], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAlertModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbButtonsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCollapseModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppBootstrapModule, { imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAlertModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbButtonsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCollapseModule], exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAlertModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbButtonsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCollapseModule] }); })();


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/error/error.component */ 58449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    // { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then(m => m.PagesModule) },
    { path: '404', component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent },
    { path: '**', redirectTo: '/404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _pages_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/components/alert/alert.component */ 31525);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pages_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/top-bar/top-bar.component */ 82402);








function AppComponent_app_top_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-top-bar");
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(titleService, router, route) {
        this.titleService = titleService;
        this.router = router;
        this.route = route;
        this.isShare = false;
        router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe((event) => {
            console.log(event.url);
            let url = decodeURI(event.url).replace(/\s{2,}/g, ' ').toLocaleLowerCase();
            const urlArray = url.split('/');
            const title = urlArray[1];
            const shareReg = new RegExp("(.o|.v)$");
            if (title === 'detail') {
                const land = urlArray[2];
                if (shareReg.test(land)) {
                    this.isShare = true;
                }
                else {
                    this.isShare = false;
                }
            }
            else if (shareReg.test(title)) {
                this.isShare = true;
            }
            else {
                this.isShare = false;
            }
            this.titleService.setTitle('OLand ' + title);
        });
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[1, "fixed-top"], [1, "bg"], [4, "ngIf"], ["class", "footer d-none d-md-flex", 4, "ngIf"], [1, "footer", "d-none", "d-md-flex"], ["href", "https://mobile.twitter.com/olandbox", "target", "_blank", 1, "footer-item", "text-white", "nav-link"], ["src", "./assets/images/twitter.png"], ["href", "https://discord.gg/2pgsTcfyDH", "target", "_blank", 1, "footer-item", "text-white", "nav-link"], ["src", "./assets/images/discord.png"], ["href", "https://t.me/ontologyLand2022", "target", "_blank", 1, "footer-item", "text-white", "nav-link"], ["src", "./assets/images/bxl-telegram.png"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_app_top_bar_2_Template, 1, 0, "app-top-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_div_4_Template, 7, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isShare);
    } }, directives: [_pages_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _pages_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #09101A;\n  min-height: 100%;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #050A0F;\n  height: 5rem;\n  color: #fff;\n  font-size: 1.25rem;\n  text-align: center;\n  padding-top: 1.875rem;\n  padding-bottom: 1.875rem;\n  display: flex;\n  justify-content: center;\n}\n.footer[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%] {\n  width: 4.25rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2.3125rem;\n  margin-right: 0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUNBLFdBQVc7QUFHWDtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQURKO0FBR0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0E7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBREoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTEwMUE7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLyogZm9vdGVyICovXG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwQTBGO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxLjg3NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS44NzVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb290ZXIgLmZvb3Rlci1pdGVtIHtcbiAgICB3aWR0aDogNC4yNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvb3RlciAuZm9vdGVyLWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogMi4zMTI1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLjYyNXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/clipboard */ 13841);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-bootstrap.module */ 34356);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ 18950);
/* harmony import */ var _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/app-pipes.module */ 44315);
/* harmony import */ var _app_pages_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/pages/components/alert/alert.module */ 99010);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/directives.module */ 78434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);

// import zh from '@angular/common/locales/zh';
// import { registerLocaleData } from '@angular/common';
















// registerLocaleData(zh);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_2__.AppBootstrapModule,
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__.NgxSkeletonLoaderModule,
            _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__.AppPipesModule,
            _app_pages_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_5__.AlertModule,
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule,
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__.ClipboardModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.DragDropModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_2__.AppBootstrapModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__.NgxSkeletonLoaderModule,
        _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_4__.AppPipesModule,
        _app_pages_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_5__.AlertModule,
        _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__.ClipboardModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.DragDropModule] }); })();


/***/ }),

/***/ 31876:
/*!*******************************************!*\
  !*** ./src/app/contracts/addresses_v2.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WHITELIST": () => (/* binding */ WHITELIST)
/* harmony export */ });
const WHITELIST = {
    "1": ["0x439a0a0006594C164AedE617CFAec6d4Cf1649d2",
        "0x5B075F97BA44eD89939e0dC248c65491D9CacCef",
        "0x5Ed507F070eDbb76b8240224f3C5Ab3CB23D9638",
        "0xd2245A838D2aBaF8c28dC3b73457a5DE6201DF80",
        "0x30130CBEf55352A50c8F8916e53F10f47C78b719",
        "0xE817e1fa4e209cd71473969a416983E163Fa1C10",
        "0xdc80f49783d75cf8a5215Aba844070F869D9DF46",
        "0x85a84F9E9a347A3B209C7404D27c7384A7e73289",
        "0x353108CA322DFd799B12cB02f96B287fDE6fFAB9",
        "0x47672Ba9281906302B6c55400122349A8c69212E",
        "0xDF4055a129C8276ff8D1e2103ff65C664D00038f",
        "0x72902dBFEef83404CB8332D114348A0A74b76eF6",
        "0x3814ba765bC002b61CFC53B539d9D30f15c55223",
        "0xA3d14B62e5C9f8FF6FA0911B742A1767C24fca8C",
        "0xb3874fEfB9D699E4534E0763557706Af385244d0",
        "0x94eF1c05De3A0A788356d782E46C5E85235412e3",
        "0x1A1947bd343f331C6624a43cdEFa16BbD3D02C07",
        "0x4F6ed318A228818e5a948F0D6FCe08Ac0Bd8EFCA",
        "0xcE9AA9D3025a314B9a72541bCb45594ea65Dd28B",
        "0x3Cf748ba2909659031811c86AC6f6Df811f56BE7",
        "0x23290eb3732c5F0533b7c2a76679B5A4c4043c52",
        "0x8f9de7144b8c251cA62c9428b83B267b0995A500",
        "0x5E27C91aeF5BdE3fadcd83BB6d21236E074D5F5e",
        "0x82E8EE899f3D3D13ed1C2867695a61254EED1fEb",
        "0x8a9B756a6d4FF8363539Ee776934E690f40A10cA",
        "0x0be725eBb95967aCfaE6aA5A4C63c38F90633b8b",
        "0x67Be1af112498F084Ea2A7fa6c1a7E60F6799194",
        "0xc717C125bd9013db9434b0A369652aAf6Af7B962",
        "0x810a13d540460D611c4fC51104f5e3a702251b17",
        "0x40e34C9Fc353F3a4632597D8502F7f710161fE91",
        "0xa9033E08e9Ba106665993b767c381702ABF15168",
        "0x916a9336885e31C13703f74C26e24Ef694329234",
        "0x7215BA86b0CE05ab285cFF6FC5Be65Bf1b5CAD13",
        "0x1dE83EDB92B69d240152Cc39C4098cc6e0715770",
        "0xCac1B043C6Ab512AC39650170B5ef583e771fDDE",
        "0xFeCeb672f2406E0B98ba9C6c39Fd64cC557AC9be",
        "0x9dBEbf024B895BBa0875b01a6013579D2fF65650",
        "0xC83aa72A3aeE06a42d91514c8C188EeEF19A1ea9",
        "0x6eD10570cB062f6026d50bC756c3812b6EF2CA98",
        "0x80783BCA66e2001C6f4cfD629e93ec786C4fBEb5",
        "0x07662935fDcA7c65dEc7cd8D595459d8Bc5CB901",
        "0x66a64f87410A3146E364C908642E13c469A8e5A7",
        "0x5ADff18D7b4b4BCcd37b6F28556AcbeFeE4444F1",
        "0x52Db87C7B47522cf00fE5E3fc9172abA5D40C4cC",
        "0xfeba9539dD0A206a4c0B3fcd26ddA8d8730E3b14",
        "0x3733df6390124b1395C160FC3f746d8d9C7995F5",
        "0x7fF9BaF9e8c81d61aB7Df0b07A74A13299115F4B",
        "0x8255d5Ef35a8575a4a711c27bFd919c76a79A904",
        "0xf015ED54f5a809EEC1BEEC10CA091dCA81770C08",
        "0x933c5DAB39b6c8143934a62F5794309C72105A3d",
        "0x25551dE8777FDeD08c9dD1E7CF4082F6E57E8B36",
        "0xe55B41bd8BEbAd0d11Ae0e172F4aca470cdB5C37",
        "0x8C9A7b25AcE032939771dAa54dD2ccD0A6256654",
        "0xC388e53225e86E933c67095EC89902c4Cfc218D0",
        "0xD8892DFb98fcd060067E52a2fcbF1088Ae817b0d",
        "0xaC4945013e5A3878c0246FA6936049E0F3997A77",
        "0x0e0A2A984C69f480F7F9a012f6a6e026560c074b",
        "0xc0B6a6a9B3bFe082c0f136f1FE80EC7444B412c0",
        "0xA181eDb7FcD74DAED5bbA4364f07677112e42cc9",
        "0x822C1719fD5DfF034608ecCFb7BF0F395AF98726",
        "0x02F93123e7204f620A4e583AdbbeF21Cf953598C",
        "0x3C44258CA2a07b4d13e072981e08C33700Be2687",
        "0x3A79e9F3e30917F159D57e8Fd2835722e53975B0",
        "0x64a6954c3fC9516B948be58E061141b0CE8a61F1",
        "0x970046A052cCCA6Cb1C91664ab24Bf7473bd275e",
        "0xcc065C36196c54C1B544e3B4de824119F006924e",
        "0xFc37c3f3C469B2D3184E4F007AaF745e14Adf399",
        "0x8ee4d8bB74dF51f8cA1D04a5f3999816489c88A6",
        "0xC7A8F67a015a6b3c12e53B779959B8FEe95B3CE3",
        "0xCab84D730EDCDCAd459Fb17A29eB4de3355D7989",
        "0xAbA34C2702100DAaE3591c3C8E73AAC1AA19338a",
        "0xb8EE742889eED7Df21DceCd5869dc95140a4F132",
        "0x7fD8f7F393A668Dd3D0D466D589b68334C25a962",
        "0x72E763c37c168A8B87EbDf6DD83d3CbD94949C1E",
        "0x4bcA81f0DB34cC79C01a0615A6e5b48f934A2033",
        "0x1B64ed82a91535aA0Dd6984F262Ec949334e6B55",
        "0xa11D2964030DeC004f36F14C8b7118613c0D4E1f",
        "0x7b07706e2A061d9EC19daF53D6AEdE50Ecb8E85B",
        "0xBC582045B3f5F8209Db4D9eCE2235FEEeeb52b0f",
        "0x2aeD82A706D103CCAf4B4D7a90B5E94453B91c39",
        "0xF03A6E9B64FB5C036231dc207D06A989b71A2585",
        "0x16854f3ea68dd5Da257707Cc024C891ddf37d08F",
        "0xC594a0fAe0AfA13127678dBEd7f2456C90843a67",
        "0xAc83C801Dc9009968e68ddD19B03bd85997CA6c8",
        "0x3BAdfc1Aa4Fa46ce96e6e521eAfBC977d5B44c92",
        "0xaEbc44E1A2b8CaFfdDDf9B1aF796fB0523480020",
        "0xFb552465e75b4D668DF17cC6C6F7734607174d3B",
        "0xE6BA2DD8d64eB4bb59eA527e3D60aA3061c36Da7",
        "0x520d20c54098D5B80a06cb00A7e90BD2B00C735a",
        "0xc09e9E2633CCc03b7349f468E0487636F7e2d6ec",
        "0x7D3C38Dfd6C0B75C7d15a470D63b8Fe6B8E0d8B0",
        "0xDd0eC55CFb59cc2048740216E1928fc370be243d",
        "0x50F28ce94E270b674dc242Ea32AB3218732adf96",
        "0xd8B689820bA96D55D147612D02cE1CB6DE5770dd",
        "0x427cCeecaF7C73e21139A0d7C7077ca6D8a93f2e",
        "0x3380a5363c3FeD055F86e677869a5f0C1c4144C5",
        "0x104cC3b6F5EfEB761d204e3068d3e8e2a4b42e14",
        "0x942Da88b67914921a40f748817af2c5FD3f80637",
        "0xAcBf8ae0c429E07a5BAca939cc6F5129AB69985A",
        "0x8906d13DeF06c555D794A925a63A42B5135C4C89",
        "0x582636034C83996d3793F0C7E47e194AE4ADB4bB"
    ],
    "2": ["0x70cE654F0650C29ef2881E80a8132C9E6fAf2Ff9",
        "0x8230Cabf69EA649494d8B6Af748DD8Fbf08dF938",
        "0x1ea55490Ea58118aa54eF310a951E91044B7289F",
        "0x7a2Df90a36c1aBa0464F1dE4829d2EbD732faAa7",
        "0x3e24529BC7B6e78802a35e59F501916aA115bC6b",
        "0xB48eCFe2128151c238E1c1A6e76b91937a2F34DF",
        "0x2129E949ccEb57A21a9e7bC488a5dd1E86e523a4",
        "0xddc568Cd7dbed2d693600D3b7faeC060176aB98e",
        "0xCbC36a2180894e7b01DD75A4A5F2556b3638489f",
        "0xA82D0337894ff8C0aB7C911e2CeA22A33B4A4990",
        "0xd925749AEa0fa4363F2930D0240fc7697587CB0f",
        "0xdcD11eF7B92e2a055A36c8B66DbB7E80009ac970",
        "0x12fcA8dB609621b5Ab009859712aa72A6686B58D",
        "0x87a8B838523F3288C36E639Fa87c7babe49e3207",
        "0x8A000E0de0A025457390353A74166126E7200D71",
        "0xe48b4CF73Ae31b7913886f35ecA166C50DeA7646",
        "0x70Aa3906E450bCb3a5D698ce8bdc96eFdeECdd71",
        "0x7F48f8E0922c50c6398EB6aA148DFe9a7cececA8",
        "0xC0B4E7c54989dd2C112fD5161c494ECF71866fA8",
        "0x63F536dCB817a3F6aA5095b097b5E05FEd2812f6",
        "0x08B3013F270CF6758b534aCFe5326fCFD597Bcae",
        "0x187210AB44BbED539240D443E53Bc6Df5A0eAccA",
        "0x3137Dc2793BE79680890caD3AdDCb03BB33b448C",
        "0xDcbD73E760Bc0646aCae6bfb3A9Fd460BC4AdC0a",
        "0x292CD4d644CE4F08275C31ca2c87472A43c9a817",
        "0x54036C221774911eD6Bbae4156834341C7D4E0f5",
        "0xED26ce7a7ac2d8c277f862caf47f781E8d7dEF59",
        "0x530D75c5d68d44C80C48cC67a54aEc52726ffaDc",
        "0xc6e2Bee77Ae9145b1Ed170222c7567acE86aE499",
        "0xd8bA56133273D2b33b7dA390a54ac88f3bD214ec",
        "0xed94E24e71B11CBb040e74F736148FB637cbfB78",
        "0x18EB459a9E78daD12FeB666A38571314E5560eDa",
        "0x095072AB7D185B8D15ad98cfD3f19855407f7D71",
        "0xa7cBb697c4dB1dC606Ee30903411C91F809a5C05",
        "0x04fc89b36f8C58B510c389E8974bF27718e2CDA4",
        "0x738c359b5A0122C0F91b5B491A944B3DA53d25a7",
        "0x3Eb72F18eD05F8d95C5dCc505161Ce1012a07B32",
        "0x8FFc102FF466eE2e695974f2EE031D76356ca6fb",
        "0xce637c5f5976e7c4fEfB33378632399fc9bb5A06",
        "0xd9ECfb3D2da555b942CD4532aAB696F6Cd454bAF",
        "0x42B5c1dBDbDe6b7F68a1d8b91af1aED9621b94E5",
        "0x5F184A08986b280657eEB5dDD6eFAF92291172dA",
        "0xe348112D2673dC20CD88Bb2A9AA909d6119DCfb9",
        "0x92F75539e43307E8483C836C63A52D0E988a6d4f",
        "0xc75fc284987c3C7812A132eD5dce50608b369BDD",
        "0xD574f95848A06bc36bB7C50152a395c888760F27",
        "0x06BE5B2B5cCA2E935C6CAe1b3E90727Cb0B878aD",
        "0x535b3F79A0594F5a536b8D7dfFB8C6E6e236063C",
        "0x57B114Dc75574FA3030237fA7ef56c96e68669CF",
        "0x36cACb92ae815ff785a6eFEAB5718A6C44E16386",
        "0x16C2f523eC92c9c2921e123A20e657405022d1d2",
        "0x86e760706672061de9804F6Ab686f134dD9F4434",
        "0x326Bf52a146152f7D1a07063ECbB207be24c271D",
        "0xAf50BffA09790300DA33918E241aC7ae97cf61cB",
        "0x91Fe4A151fACc0A332D380c53c62634C54fdfA45",
        "0xf42558183fB04617539FE94eA3Aa4737148a496B",
        "0x819c5155a24221d0DBa900363Aa60BA54bdf905c",
        "0x7D8b370DD0b09CE6656b711a18CC2e29D3Af1C58",
        "0x38a71E323b9D3427ECdcDBc624f7AF061B37B93E",
        "0x87BbC43a26874328C822C57BF2f4E55052ef08bC",
        "0xbA9F51A92330FC5eB53F5681Ef3dA25bC240196D",
        "0x9635F1b7576E6E7F338397d7B69c7ba4cbbd7A31",
        "0x76058627Fb5721db87E543f2E2d24e486aEbC043",
        "0x222ca9B2058645908901E76C2399d623dAfA93F4",
        "0xCb8c64E51E75Ac95fAdE89C6C47901a556765D51",
        "0x2316e793fCbF473b953A7dff5065D4609154b597",
        "0x7C83f6E86C96753dFFAd48dCFdD1b8cdF4bc0398",
        "0x817c75e9f5e8A00A3fDEc3442a580C23ABc79530",
        "0x55F3f90BC62f7eDA872dD87D401C09aef616d496",
        "0xa380A6DDE568B982df96f483978fD1dE05288B7f",
        "0x7487c47Ba145164AfC8EB08b627F9eB21771e5A9",
        "0x8ac54E265841B36291e8d6Fe86De67F1887CB38a",
        "0xA92272c26F08a3F77a44B073EEAB4fc805B9C10B",
        "0x3894E530Fd5ba0A05B73846Ffdfd2E4dA045Bc5d",
        "0xa9E425DeC005d54c3D8FA8179fcf8988aA493498",
        "0x5a577C0d57569a042103738f1236CC37C069D1b8",
        "0xc4Cc5eAEde004D84A89942f702984684677734f5",
        "0x7807774e10FbB59752C3BBf395336Ad4E2819be5",
        "0xeCd0514D6b3e43D8B93ab18d5D3ea9f3c0fc6C47",
        "0x44FF864E3F8C531b01468DEf4F2Cda96DC21eEb0",
        "0xeF6fBD3Ac7D622DBDF0Ba85D152412302d7cB621",
        "0xa812A8521382c0964153F23cB37751C0a2beD806",
        "0x6317927e53D7BC8BC6928585e376998395d66992",
        "0xa50674C95f8CE3eFCa39aECb5847842B777a8a8E",
        "0x815A5937b19c929a4593Ef222E291F6884039770",
        "0x055F7cB24D7f5BD6BD77927d2De94B2C725B95c0",
        "0xE4c5110802e64BB248c87485848D7f9E1D870666",
        "0x2cE146456303ecBa5b73847df8e5E6AeD7fd8991",
        "0x7d5273291154654A285F4c4904dD252628ac5834",
        "0x11c70fEE145e9E2101d61D125B10E043FDb1e300",
        "0x53777cA621849Bd38Eb1693FDE3fE73AaD4E5AC5",
        "0x27EDEeb3528a6B030f85EAEAB7d642e2c636ECb7",
        "0x09907D240f0EEc9fa3aE90428174F55116d06255",
        "0x1062bf4f5De93deaA3393ddB74dF522f7459d00c",
        "0x2aDAaAAf724d384F24691c6BA9d5ae1A626d81de",
        "0x92324368669a519D329b699E18741E704e5C97fd",
        "0x256A94E084596b987F737560Cc853eFB32aAF663",
        "0x7EAD6730eC5Fe442C564b959D2dC007A4E2568fe",
        "0x2D3F5731f0606Eee767C475224112385BA193a7A"
    ],
    "3": ["0x24dAB0854Ee09116A7F9517D86F577BAd3B7CCC1",
        "0x7db91742e65FF8c115356f73776CDB37f0B20D85",
        "0x931dc784B588BB8d95fA76b8291cEdcCc6b2Ff20",
        "0x9615562EC84887B5e3729884617988770CFA8256",
        "0xBb533B1c263d2e7a69eb994684baA0Ed7492Df9D",
        "0x865E36F6f637B70C42c917B764875aF2D04b206f",
        "0x8B51BA614382319bf67D3744ECC6e4C13DEED0A9",
        "0x9Bad3EE50c7c88bE04bcD17E7153766fA6c16FD6",
        "0xE7bEb6A4139E9Cd3DaDAE5B0eD787ef0B27Bd75a",
        "0x9A5867A7612b2977d01CF3D7F2b91EA98e77eFab",
        "0xf5B849eEa1BbBeDf4B1120a07837Ab1203682136",
        "0x4b5A46aa5932C7Be1f966646F8aa0bb38b10DB1B",
        "0x57a9ba82A8a0e3A53F8154f7A019eda01aD2FD47",
        "0x6a9273D8C761a72ab0dF46a42Bf6640BC35C460d",
        "0x17acC7E1A2f14A52245139b8B4bfcb7D55244938",
        "0x8f1fbDa504708fa76f8c2C8023a81979f573a667",
        "0x4D4EC7ad13Bd448335C8d3c705E1f0a9F3fE6124",
        "0x8d89135556CF739b423a696FfCb19CeB2f615e78",
        "0x5c0d25F70913ebEb3D9e587B873ED15C2D936dC1",
        "0xb6B5B8037f5d1188D1A29c048E650F4c5ed49977",
        "0x6Ef0C5883B0a300BaF0e2f29329eeE2A131139a5",
        "0x7853122AfBb330b464311F1906dFbb6aa75e9A17",
        "0x81435142f75Da35BBBbd24C1E84f8877979a0e69",
        "0x322a59af3F6cA50d8fc8754DcB392c8EDeBF4331",
        "0x15c3291F85570790C1c4e8B1a9f57f803158508d",
        "0x3a5f0E5DC8eBf91FBcAE979b9A9b93628852Da80",
        "0x1D060Cf0cF5f7ef7a68713e5a77474665A1F30F8",
        "0x3cCe891382AEEE96854e62294a195476e0B7AEBA",
        "0x7CfA2CDE7F9e16B88Da5F441eb0a34257b6c82CF",
        "0x311320FF37B93379FD0DaA157eFB63a575431384",
        "0x2425502082BDF2BB2aff85DB1E59381d09caCa4f",
        "0x6D3cFD2646808613D256e914cA1319FECDfa4CD4",
        "0xc846A5fEA6Ac1b85D5f0f9F1d8a5a9b4aC8Df16f",
        "0xa072851a8f54D173f1612700aFF6b6Bb265D01aC",
        "0x73DF806A845499132B020163A4e726140C2b5E62",
        "0xF23328A9C3593499Cbc68fd3EB176C97D442535e",
        "0x18BafBd6C52D194fC5907DbAeC0bafc0b62eDfE8",
        "0xD3b4f36A463CeAEf78Bad7A43e5d0d9488E6F8B2",
        "0x147895250Ae91AB6C1a111c82C1CbAE67EAE6E4A",
        "0x6De1b925dC189D647ADC2274C2b60a8d26AB39F8",
        "0xB860d14FfA4435E5B3A135Eb58B4eFA3F61ddb50",
        "0xb6FF9350b617aA096a5B99bcaa6c0e6266C434C8",
        "0x872c6bDB310366cA148246ECdd57231994F5Ef6b",
        "0x848306295d884DCb095B93Ed2b8043174AC24acc",
        "0x5a086A73dbD1bBF5A6e8d2D2AD45c05B65b7C290",
        "0xc9dDb524207FcdB20BB5F3C075424131d382611d",
        "0x2B84BC925434f9986E80b1f1A922dc1Aa8aa5108",
        "0x4733800A48f4360D9253a2ADf362dBfF134E5362",
        "0xdeDC42e961782e1fda5E3472AE3c88BA713861c5",
        "0x211001707aDBd2a4Bf59CA4a057C403720aAAe15",
        "0x2336ac0E8bac0e94E4069E2Ece436FcF87C7D3e1",
        "0x3321aB49090d59dD7C7cFc7C157e7cE24182D9FD",
        "0x4031a60898D43b73f68903Fcd685b10052eeBe3d",
        "0x3700e844D3a0F7ECbe970f7096baf9C236ac5443",
        "0x650565C7EEe7F21520e4E65ae50CC551147986EE",
        "0x1505a6C23BFEaF419b6C2eEc86d098899fE80e21",
        "0xa2cE8E548921C5DF3BbF70b8Ebf080EF636973DC",
        "0x655C96E6BFc78e286645f5E7e334c8180c5c5576",
        "0xcE632560316CE2CeB82C2aC97Fc14bA2F5Dfd1A8",
        "0xE65f903Aa182BBF6fB66126e93027B9A5CF4DAcf",
        "0xb1032DCdA9bE1b87E55c20BdD3eacd5BcCAA64bB",
        "0x1e179F0131fBD32E127Fe0bD9D1c62288D37C020",
        "0x17BfA357eAa9c8D154BFBaB28bC91D9b131e0bd6",
        "0x4888c30DA8649153Ddf38B4BaD3083f4E78D77C8",
        "0xb19d42C1a604A4241c6EAF625D134eA698dAa239",
        "0x459F6d61C50D2d1c74545fCb00b114AA5FB507c5",
        "0x0be767Bbb8C885ea1c267E20670936c24eE2AAaC",
        "0xc0ac4950F18A4bFbEe0B8e2f126801C56527eD5d",
        "0x64475adF350617a236E9FB05B45126a716070e94",
        "0x0a18F9BdECAdcE84Ad3DC12A52FCB68BC176a0C3",
        "0xB74746fa1B7c7cd61225082Ec40Ad3590ac76633",
        "0xBd373960863DBC29cc35C16Fb9962369d6a543ab",
        "0xA09213E245A8361108FC5482bF7372fB30d5E11a",
        "0xE72939777F17f3DDC6434B28b6F345e2a15fC3e2",
        "0xEbF1534c1F2Eb9bc1c304a73F1943db92735fe30",
        "0xbE3Ff8c373B02695889E14BD3AD21eFB0EDd59F9",
        "0x661BABa7ea1e86d6b95B965fe4c4Fc5E231Ba13D",
        "0x8BCCb2BA74A2cc4B44cF1fE8CE4A4bfFAfAd8597",
        "0x85EdF4C63cF8ad5f91EC46A383B54FA86D6e8958",
        "0x798FA700c42433B9a6881786FCD479082AE8B9A0",
        "0xd95c8d191EBAe6ABAb6273a0eD800fFEC72E5Be4",
        "0xd81c0B0108ae5CE49ba0930f78fe79B306a0CEBC",
        "0x491cad93006E0E151C957f89759c5cCE39439502",
        "0x4253f01262119Fb1969b6bd00fb8f6Be9e1075BE",
        "0xb3A72977f41CB3a2D57752CE2AF8f9224f2109B0",
        "0x73f35cE4F9494F9500f3bb9054d509e9209bC672",
        "0x41Fadf57053Cc456C118D172266AEA1547865561",
        "0x6f78c08333dCF8D92C7E9D94f86c879DB58a3ddB",
        "0xd9Be0f554368273fE289b60E4cAAa6F527aAA9B7",
        "0x985641b00a969743015a409D92891Aa55fc0F24A",
        "0xfa7AD0358258623FF794a416425AB7f12cc21C1e",
        "0x8F5E7df4870442E14C1bB1620b4dc77C60BA2911",
        "0xE172816927788EF1aA91C439e254B66e8b04c1F8",
        "0x5AF360662Ca30a38Bd24f103bB34CA05a5c3f3E9",
        "0x0f2635F94feb535ab87777ccEd18Ef3707C9a33F",
        "0x8A10bD84F7F35022528d21D8909c14dBbe6fe55F",
        "0x35A4e14f969DA8A2593FC3de24AE434E23c96a5B",
        "0x4E3d75F8Cd3309Cc61758acfa4aCf7EBF6B7971c",
        "0x5d8636C0a4dB8B3D6ec0315B29F4A0767A7304A3",
        "0xAC0CF7D49048d6648113654F515f83b90e278EEa",
        "0xFA22F2Bf7F3fd1C3d355456d7FE2598bD3a8Ef38"
    ],
    "4": ["0x871E7512d584846D45259dED8bafE0751ec90b78",
        "0xB6c9609419B39375248f11D518eeaAd1DB59057E",
        "0xd6F4fE046f1Eb6C08cF74c93E3f746F8626f0775",
        "0x2dd0294843b05a0A9a4c8bCA631675E67b5Dff91",
        "0x45803e65da03B57Baec211cDE8781A3EF1094f01",
        "0xE7D97Bf85656D761e8775e63011440c8Bcc94AD0",
        "0x8a1ec481ae1Eea88770933f42D3749c2aef5B6B4",
        "0x3f2da59ff04cC53b85262BE72e9a5FfC7a3BaB0C",
        "0x10Ca79155207346699Bd689510DF2794cf930bC4",
        "0x120cfb5497c34B9100834Da94550E99e03D22D1d",
        "0x6717ce49C2B169FC4E0a586CB4a526Ea32041730",
        "0x9B38Eb25F10986028479Afdf7DaA571B022f8FD2",
        "0x9d30C7A06534DeDBb4ec6E6bFc07734a9f9b5798",
        "0xba639A6DC6d9bc54dB77F0f1E9D39e7e6334B7Eb",
        "0xea6F584687444758dBBb1b23F967eF9E9b32Da2c",
        "0xf76E38c06e630694f308c8cFc34BB0d6c5421Bb1",
        "0x48314EC98BbFBc83C5D0F215579fdCdB5e3F3d8f",
        "0xb3c03BE3b78dFA4a694f1D5f133033EBC7f5FF25",
        "0x4a104dC5cB9FEf12F347963bbF1de8eC9C067C6a",
        "0x9DCd9B2Af2d658bCB424349D122130aCcfD2262d",
        "0x51c3C182590Ac8D264271036C6340989f7D58AC4",
        "0xB71372B74BC6466E375C8AC7c01DF4882e2b6E22",
        "0xDA42f9e18d2106C3748BB9053ae29C53eE8BE308",
        "0xE95fa4b54aB2a52C0707e8c8545923d4cc204F8C",
        "0xF98677587C93D0297271B90eF91f58A5FbBad98b",
        "0xfd78F8aF11D54318911243333ba6AE80eB773c8B",
        "0x5c12791d04a2C3e93a8AcAF5a22224d8982F7e64",
        "0xdA8D6007265b7402398DA7492D3DC116355AcEF3",
        "0x3b295C740358cc80CC3cc2785FfeB1b305AA5E02",
        "0x080033db2e63Da2c220736743c624Bc8f0eaB411",
        "0x5fC5697F5cbA4b02287f0fE9b288522a4F6f7050",
        "0xF6517Ea4702DF94ad4348CA299a2cB7C441492aC",
        "0xD3c1b996d0B461e9c6f67d907784387e7fEb8E2b",
        "0x40144d0EA7665Df7Cc8270E4Dba296Ad566f8422",
        "0xF1eE25699C5c67Ee186DfAbA1D0dBdc0c2Cc42B4",
        "0x13f9d53f8A9CAcAbB928E539c44dA091bC54C2dB",
        "0xc47e26F1bbE39D9cEDf1b5F6f38f8b9DEe0af99f",
        "0x7d133d0b077F2dC575f06040b7d1710C6B7ddd9e",
        "0x4c2AAef1A05c647230e4296B987137e29baB9B45",
        "0x0eA848b003CB058d9bA599f68874e27142CDE4c1",
        "0x89E9F170735Dad3454D936009D7718CD608bBc92",
        "0x759C0d6Db776Ce3C85eB4c24578d9afE141a4FB6",
        "0x4458EeC67fC340B3C06194C772d50e647DE0c0ae",
        "0x56A176A38c59F802b916F1F3d0499825Fb393D7d",
        "0x87C18A7439cbD877119A55592C344784e51a5024",
        "0x8A4fbA6f9C14b53Fb20A37105AA839a23fD481A7",
        "0x4E7210091359eD80A73bA192B7B1A647C6c30FaE",
        "0xbE111dc29679a6735FE5544a8e455025618075D1",
        "0xB0e197b76332523494b083D1CFF97Ae66555E481",
        "0x1280F7A5609824488ca886b04590681AF3B5c094",
        "0xB3fAbDb9C48E7d59c48B74c661EDc674D09805dC",
        "0xb59Ad7C1c523efF66405B1ec2D5F9e063eCb437F",
        "0xd82DFf58d8C1f5456A471b20c6d998e8135d53D8",
        "0x0C81f07774d62882643C5A0876578A38502483f0",
        "0x05283B12e0DF39b01550cBA3c17172c43e7b7b45",
        "0x5F531A34A2B7F20D4994ab66c7eEFC935e7A8dae",
        "0x8743D4EcfDFDA5D395564eA65285C3B0B436aF60",
        "0xbD5F855057a18e69b841AAE32B47A18FB23D78B1",
        "0xe95992CC2A9607273f0Ae3791b6C432176F5aA09",
        "0x943D9cF48af31d9204671214980000FE42e3371a",
        "0x570E736738cBaF6005CB42912BF2B53337D4FD4A",
        "0xAa0468fBfd406B80912991f0Cb3298abFd8a1122",
        "0x5aCD13023233b197B1e6857e31577CbD5855D436",
        "0x87A4916848cEB28C8F98006CD98CEc7a304dFac1",
        "0x86Cf32D0aa045B02B0aC6Bd8654019CCb413bcE3",
        "0xf77174C28a2C8B67a82bE8FA80D2C4Cc0136046a",
        "0x3b2f266c502D97252CA6D0E8505705f820a17BA0",
        "0xe6D7a2a6cA1d5C2D5AE9A3001220F5E23134D69B",
        "0xa32ABD436F50cb0BcB2221884871Ec508f6b7B7D",
        "0xacc63A53b3BCFC26C5A5dAF2178a4254A4Ecbd3b",
        "0x355a7B455CD1b599A2189FB08F1144C7aE6d9276",
        "0xca832c1fb3bD936a9bd10F2126024d3280129229",
        "0xf97Babe293aC358a21862E79ab6649E38e4eb22C",
        "0xc258115339369C76d7ec4CC0d8dF812aA1F1c888",
        "0xee8134810f935D6834FD508A25B1fe6924C581EF",
        "0x3da8FE7729775C20eacC746Eaf467044d2295190",
        "0xE37E838a56c62f8c6566E6762CCED8Dfa4C74666",
        "0x703514c22B440DD7ED1F9B5536504d180d4e71B5",
        "0x55E13d71699C40B32bf8f4c0b497BD4500211F72",
        "0x6463b170458A7cc2A9307C604Fa3bB5B3CC19404",
        "0x70F28188a6444B4BF7aB0FaCdd2CB57deB89F5B9",
        "0x8177633e9e701812E7987Ac0770E8D9b49FD8498",
        "0xaFDCA7Ca765b5A5Ff102d9BFE3C0F947a3421eAb",
        "0x7954633902AA33d0FFb98F31580841909425e269",
        "0x47e85c9d100Bd61EDbcB70088A7fA4CDBabbc2a9",
        "0xa9b4E21888a7AfCF5837ef51edAC6D026B6688ba",
        "0x1B8BA290573E002638Cd9bD718741d89a5634e22",
        "0x104cbA97219D9AA82aFc0E3Bc513E75dB684842d",
        "0x27DB82bd7Aa04E168eBF63d299623A3bE621216f",
        "0x9155dfdAAF262B34d567AEEC834229C535CaA6d6",
        "0xC7950341990297cfdc56B0C0029500C4a10748a9",
        "0xF3d9f6419A98166435b225075AA3DAF4367A527D",
        "0x3c56A5bfE9e111Ae3e0216C8a5A3910F1d79f523",
        "0xB0f4FAecec3cCe6B5C8961d0230881F5cB5af609",
        "0xac9fAC2DddC784cF3925B9305d04eb9fFff790B0",
        "0x4e6B4B6BE3d83ade0bb6baa7778BdA2663daA6EF",
        "0xc1eDf4809B81EE4B4C2f7DB42d62dc3F5211e4b3",
        "0xf52E685679343b079e2a73350743f39B96c9dC0c",
        "0x7486D9B1a930a632E85abAc3284a65186B2703d4"
    ],
    "5": ["0x018EddD28353e5F07A6A7ec97ac1589fDe28f01B",
        "0xe1cfA68A8608d8F62408D5C253Aa984063f87D57",
        "0x39570C168E4f4b133eE263485ffFBBC8Cd149F95",
        "0x9F9B368AC2E7261D3A8bEa37Af6c3A4D2Cd6E2F0",
        "0x5C88f760cA1c896d8091Df01D5306cDC8c5869A8",
        "0x5145C1F0f1ECc3B79b5512821c5b4D25D8A2F22a",
        "0x33c4F3b38330aB192b1EcD56C9bF20e8e66b8B1E",
        "0x58F7E970C960335aAAE261AD48b7E455fc89BcaC",
        "0x5941E67e56F12bb64d2731C4e5dddb46923caD57",
        "0x87D369dBC6e3874436e9C9845A2099b4318533DA",
        "0x09335f7ecCca716a709eEF0F20E1A7C79a446d32",
        "0x341BFECB85eAd1656ff33700FfA4146f497AFF92",
        "0x40788f2Fd7928f4F5080337ff64245bC14cEfB52",
        "0xc722c3df1180aE6338796FA8931C18ae21521a9e",
        "0x9d33d26fAAf6E8239f0A7880a9701136Bdeac193",
        "0xAEA71043d20dA7f14A3253f99C2e1748740e1e38",
        "0x23e97334E5b02d0a9C624aAD277c996C5D1AeFd6",
        "0xD211377c0dcCa99683Ca53cD5554421FE1D3E1AB",
        "0x9B1a165E73A5Ba32B4a2C273bF993D16E5648196",
        "0xBe2732bEFFFB322b908C0842e6EE65D74e1e3A97",
        "0xAc3F1e1fab84a1F75E311Fa3aAe61823E5af6Ea7",
        "0x8D4cE3aB701E58d7664c40dd81e405F4e07794ec",
        "0x36Cb63C02B9a4465FE76C243C3E239f489266679",
        "0xa673f9230EAa114feEab6A0a6f5121B7d18c2BD6",
        "0x3eFB040164a2af537f80D034327ff2303Da3c5fF",
        "0x2A9109a2FE2586a66b97a9813A768Dd534785213",
        "0xF4cFb44046bed9167F69E8a8201dE90350313827",
        "0xF2c2c473b409195C46C11f72ceBa7D8B96dE0Eed",
        "0xCd85B391aAcd6d87295072F1E334F007236B8CF0",
        "0x03871132C1250707635c583cd25825E419ffD85E",
        "0x1cBb7e47b3efb5e05789ADfb5E4F4D32d3f8c104",
        "0xAF26281A28f44001cEeB6c36808177C25aDF4b46",
        "0x7462043ff2f447542498c857EcDC26776500607D",
        "0x078d0356835Cf9b9963678Ff2C6C76e11356A824",
        "0xDA6Ee3c7C114aAe659dac65F6fC85952A812e762",
        "0x0a72e77A9fB66F4F33A4B668a61470899dce7111",
        "0x06448975958c6471DD92e3Ee69cd2C8C5EF90b62",
        "0xEDeA382E7cA2d3c7Bc3A76aF70c4c14e8a0B3FF5",
        "0xd6230EBc2cB72C1Ca78eCAA6D00EA7E563F48563",
        "0x40ba65dea2f1d6d0318C9fEEAad844C58462D61f",
        "0x9949B54D5Ef65306E5772beCFDCb340e9498620b",
        "0x43e20a8730Bd4f7cdbC828F571EF579E0E842F70",
        "0x1013728921A07C40aE282fc8f9F8D619F7ED8ebB",
        "0x2A2771EbbAd62657c5A9e262a5a6b971aA51Fe7B",
        "0xF8B4dB50C2cd4f6797acDdD8043dC31adC58F4c5",
        "0xDb7404438844e0A7A3E94F8C561f9901aeE4DDB1",
        "0xc247eB6192C5eac8Fcb1f67dE360E94b93a7c993",
        "0xb7546883785Ef6dc643cb65EDD357526C99FE8ab",
        "0x424bd30Bc46341725663608bdeb6346b20199c8D",
        "0x2F57a638D1399f1646520599176c2ed6370E3694",
        "0xc322edD443f3B10cE76e5724EEc2547206182cAe",
        "0x5889C3fdF41c74Fd98AD99cc84d44d957390EFAf",
        "0xC5227A5F3602B00C2CE0BB0a6D4eA29703BdF4a7",
        "0xd99877Ba1bB172651f5503e2Ed626c20C97442e2",
        "0x956412E2E98003dca2282Be0915303D5A318885F",
        "0x9826F501d97e1adF26062C6F6B8556796B5A4EAC",
        "0x579478eE9CA60C97C629624b5dd2DEbcd84E5c5d",
        "0xE2566832fEd60027513e90c01660C9A9Efeb2efA",
        "0x07fEaB22bA8Ef0DE32dc2DCEC5dCa26b3Fe49AB4",
        "0x56b259955fF578ed9E19B91af7b45654b8406387",
        "0x17DB2213D73331C56078F62FECBe782dF40fFf89",
        "0x2a41e1e7E5F580c0703b8f629Bb1bD7c9d012754",
        "0x22611aeb6acf1643583Be476043e09A7894b4cDB",
        "0x2A77a9A65B7533ef4F841f6fA44463a66796Ff0a",
        "0xB7cAe5875129124e6717Ba2C9cE7B090635afB2B",
        "0x283Ed516B6c7E65F6967237b80f3b886C2A16248",
        "0x64DE0F2a7319108038E56C2672C4c137BA9910D7",
        "0x37eD6B4768E9027D7Ac4a0B294883B9499aa78f1",
        "0xe185C2294caa94Ca5152E8d09d69150dAeC9c56A",
        "0x29Bf391A42a66D334AF09B8B83553B96c1631Cf1",
        "0x877016A2E98e1500887C13672A2EbFd8848884Ec",
        "0x0bD5e6d35C937Bda96da478314A8A941Db337572",
        "0xec1BFD2eFD27ba2B2D39AedF9ff3408AE80B4f15",
        "0x95e994eFe27b615b0551aB4c581065E25cd525bD",
        "0x704892A79C0A7d080650736cE17bc17Ae358Ee3E",
        "0x50272032c8395adC9B60f9516073E1E249399837",
        "0x21878d8eEca58074b77eA635d414c86888078679",
        "0xcD6E3763572eC54D10DC662628a12A662aFBCD55",
        "0xceE7cFAe01A4F2A1654c5c39cEF996f8492636D9",
        "0x0ab327d0533b26095d02cBf715F3A47F29a84aCE",
        "0x5167437C069015d1Cb928E4FEc5056E8C95958C4",
        "0x74Cb54a42a1f7988876Fd605c609d147b52e1B14",
        "0xFED62c792927Bf53150488B9FB18e120453E5E56",
        "0x4579CE7BE401709c6189D09c8642B98e314F233c",
        "0xa2790BC9EF61E6c9c9D09a545e207Ca98579b215",
        "0xc015D5715604Feb7E3dfd5A2fd0E84D7B9D6c4B0",
        "0x38Dee78984F4a652688B4C48735dD44e4d398b23",
        "0x8be79B80A0Eec7e38153E918D7a866e3b94424E6",
        "0x9E4923C8d7acc81C982303b5829997c52ad5e126",
        "0x33C1EDEA51a76e4F86D6Ac82258CfD7de44d424C",
        "0xE1668D9E811f807f471b7EC629719FF27165DEb0",
        "0x35DF17CC46798F29709C6Aa9E00C8092B929FBB7",
        "0xe283BeEEceDE3670bf3BBb94F56f906ee9Af49fB",
        "0xFC3725D1823156A08E120b8E0593EBc855e3D940",
        "0xE9415cf8c11D9D3522CCe41cdFf019bcCe4620Bf",
        "0xB8077842284ceCC142E0D23638C6c6fAC0489bAb",
        "0xDaa870184e8060d9251C5f48Fe1236eFf0cF9a49",
        "0x5dc1D4cbC1b2aa87E7Bb75a9EF621523A80A31b8",
        "0x6330824b8be396109B694e0a58B95CDAd8B53FB2"
    ],
    "6": ["0x98085FDD27d568B7735E466e82F228345F666c2c",
        "0xB185CEad960c0F0528f2CB3832C7567ffD02960F",
        "0x3E6E93d43FeE62ebf14CeA42d1bD002Efc33C5A4",
        "0xfAb3b7f208b60563b8867201656d142fBA214DE6",
        "0x58C3DFef5466A34c52096a05Da754b0D4A2Ae17d",
        "0x487bD1b1da92d785421A7d3Bca79563331de0e7C",
        "0xc1Cfbf5357aB66E1b64432bcd3f496938C3d2861",
        "0x63447ae4f3bb5679e1E8D85284ee671ebc70dc64",
        "0x3EC463a36B14130D2F473460d530A0cA82C2DC29",
        "0xa4c29f3dF059B546eb2FD28162FC841B75E39BEB",
        "0xDCBD3002a2C6a143057E3625f5528A5e5F69b318",
        "0xd9aC9Df3982Fc84311C22012B3EBaCcBc6Da85cc",
        "0x6c9E2Dd235bEC65A65B64cfD922B41d17B2d1B90",
        "0x76525E7D689cd8b3e99203ee4Af15814eEB2d691",
        "0xb55CDC69B96A3537Af347BA10799C5A73fd2a0BA",
        "0x9fDcDc89CEffF532b8f03FB3b808D0B7D436935E",
        "0xEf7d6A936C7898f3d8218c0D986a308527CcE44a",
        "0x195F156Ad7928600EB53120f3dc79D1F1f687254",
        "0xb839Fb73e12A6C6e0a9C88573cf0Bfc021064361",
        "0xDb9a57e4307A9F29441e22364485AEfb3F48fB20",
        "0xe73c7b0be4d2EF35b43139F2bf8545BF57A3Ac52",
        "0xc67C5BDd46b115C42EF3FcC3a1133c4d102ec39B",
        "0x447Fe3Be6F884A624A2094175118895bA78a286E",
        "0xC626210f9FbeD2e05Ff635c62C7aa12527F04B38",
        "0x721f00728Bb9a4010883bB5c6F9eC4271b64Ac56",
        "0x061cfE75681e6138660575B8A7E9ffcBE5A39eeb",
        "0x153dd3e801Ad19122210C33f44E1985dAD92bC5f",
        "0xc82608F3841d3CF4f774AEdd230FD25335375DA9",
        "0x606C0e87B9eA3b2dB6d7883e2Fc6eA8Cea31360A",
        "0x77795F5A25817648beE225C8E0DbbFCa054EC885",
        "0x6Ba6449322501c0684D9D1DB310f705EF83d3a9c",
        "0xd654Ba89348BC6C3BAaf4E0C22CB566c82b3a71D",
        "0xF159d84485e1cc8cbeA05657eD6C8591EE035DAC",
        "0x8795ba86Ec2cFA85Ed3aD06624A8B01f0C3054DE",
        "0x1e4539532De41789D1Bf7826ccD780B5A101D100",
        "0x39D493E2347a2C1BF463a6DF79a559f240881D16",
        "0x39e61ED9b829E500703453bfEcE8D580cCdb0756",
        "0x2238B3e52cEf03DB724558b2d49Cc763900b88d5",
        "0x3669D4DBe694011e586bC6D8bda760162AF1B838",
        "0x219Df043e3cedCaaD5Be6cE27e8f0385F5F21393",
        "0xDe0Cb1339e47B66b9C3b584296dCe2439Aa33f59",
        "0x5D3fF47Cd7D8543D13FBf9C8227910f7C1957dF6",
        "0x28D172c4f9249e373093A5684f62Aa0728dbAf4D",
        "0x92893836C0C1E8Fd1B8e971fD6d3fCa3527c924c",
        "0xea760777F8d00878A06848abD335Ce9759CC893B",
        "0x7338E8Abe2cffB9e3EFfeCA7d86edcef65D308D0",
        "0x7864fb13BdcE7257157f447Dc4eA8d49B6739CA0",
        "0xe8488C5C57325EA2bc84C5c12fB1598d5b516152",
        "0xdc7E9bd1e87E10D129E1616626531fb5faCb7F43",
        "0x37e7635F298c4620BCB8983aC71a1418b64b32d6",
        "0x1a0564Bc6b454ea0B544728175c19D47eB97b37B",
        "0x5E030BC586C53AA4aAfeB438f64F6F8475a512f0",
        "0x09EDFb2B3aA93B2907C011e89a90aB2D4D36D649",
        "0x22384953A8AdE3D6872a79Cbc421E1a569D21487",
        "0x204036feCF3c94FB8015d8782E646f5AE25e2475",
        "0xa5E0EdD0bb9127DE906554bbcB11dB2Bdf44e68c",
        "0x7f9b810a019F33dc5a8E6Bfc96d1FaD7465e9666",
        "0xCEa4D74e0922958799D13c346aB8ecbb84CA0b85",
        "0x9dC6132B295e5384881B69778cA36d41d54C8411",
        "0xC39944619D2eD6De0369674D7fdA15316011e2d5",
        "0xF1f4BD16D0afE412E34B12551e3F56dd3f65db48",
        "0x0a0013E747A6bfF2fe260983ECFAe4A7ba712585",
        "0x6ea94888CaD032cD0dB48D78D1e8C52eDCf553ea",
        "0x0FCd72860645F8A4bA3aF055893F3fDE54F5ED37",
        "0x7CF1e4CF01ED7D1e6198AAe102D8B70655Af881e",
        "0x53Ef75FB61eE24757c34F9186fE131f9AFBFcb45",
        "0x57263683d2B74e49BD492d49c6fb4f0e55fCd519",
        "0x68D3031B0d5BdcAc249eda1544CDD9FA76E8B14f",
        "0x24e6F0f41Fc5b5128F7a2d91c6CD27F65941F300",
        "0x1484d47D304b178A168602Ba460dDb3D844254cb",
        "0x6393C14eB13bE5045a3d6001b4f8A6A973142Abd",
        "0x833d15dB59548a75060675BF7f5fdD897B2A3EED",
        "0x63dCe2abb707c3E05039EFD24afE42822E8ab1d7",
        "0x49fE00BBd99a0b84176d0593882B67d5016291dA",
        "0xbDC9737709471370FAeB2d36F43ceb89F145210D",
        "0x822910fbf785FA391B3198c1C69513cEac40617A",
        "0x70fE46950E4e6516F40F73fBf019f71667F66ED7",
        "0xB0A76928a1C87696E32aCA29c7cbf737B39Ac2CF",
        "0xB30B83f9da29FC0a10CdA88e70124E70e726a43C",
        "0x427f0cae5c7c95aC854287EC26a298e2dA72D810",
        "0x0Ad31334E2A219d3291e4c4Be2c85C86a4497b0a",
        "0xC5a6952Fa92753f321EE100cba3AC8F885a46Edb",
        "0x6be9eB4A9E8350f01120bC008A437edfCdD74405",
        "0xcA76DbDAcc23324DEFF297b545418554fe3d4C2a",
        "0x0422E23a037Cdba6fEFA59816D7690D47890CE56",
        "0x032bcAC0DA04645cDDD49c20E427823a1E7e4359",
        "0xa00F4d87A9DB98844825Ac48e4a2bB411F856ED8",
        "0x643ca73c67CaD5cafEfF45bd777593c6C678D399",
        "0x935b6dd7b29CcbDE36a7119Ec6835f3304e52953",
        "0x37b3D28538c002D215F78bec0E3267eCa01f71C5",
        "0x0C2C1763d76Ca24A7326C4adBe038c2778a7921f",
        "0x3376831C2b0B7Ec800a736C5168A1BA633F0C61B",
        "0xDdC78A51DB090BE90b8D2f0d2973215f3a463382",
        "0xfe91Cbc8E7cCeaB613D7Dc5039d07ad7872bb4bc",
        "0x5B90aDafDB499FEDc789B6AbCe88589eFF61d930",
        "0x8e30A07C10dA4C0fBDaDE1bd80f5b4AfbdD5f84c",
        "0x128933802b3de63994c169f133d6bAb524844C1e",
        "0x583172120f5E9B80F86AACD8F1828E10D205f3aC",
        "0x531EDEC5Dad304Ad5152130389AfFb17a1036897",
        "0xEE9f725040019acf1dD7De9FB17bECC0b7C3303e",
        "0xFb1A2C92456858d4725C5C51f78D682Ae25c9F6B"
    ],
};


/***/ }),

/***/ 73185:
/*!***************************************************!*\
  !*** ./src/app/directives/autofocus.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoFocusDirective": () => (/* binding */ AutoFocusDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AutoFocusDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.inputElement = this.elementRef.nativeElement;
    }
    ngOnInit() {
        this.inputElement.focus();
    }
}
AutoFocusDirective.ɵfac = function AutoFocusDirective_Factory(t) { return new (t || AutoFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
AutoFocusDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutoFocusDirective, selectors: [["", "autoFocus", ""]] });


/***/ }),

/***/ 78434:
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autofocus.directive */ 73185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class DirectivesModule {
}
DirectivesModule.ɵfac = function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); };
DirectivesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DirectivesModule, { declarations: [_autofocus_directive__WEBPACK_IMPORTED_MODULE_0__.AutoFocusDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_autofocus_directive__WEBPACK_IMPORTED_MODULE_0__.AutoFocusDirective] }); })();


/***/ }),

/***/ 73794:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "fs-1", "my-5", "fw-bold", "font-title", "px-4"], [1, "p-4", "text-white", "bg-gray", "fs-5"], [1, "pb-4"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ontology land (OLAND) is the entrance of Web3. It replaces \"domain name access\" by \"content access\". Each OLAND is an NFT. Anyone can edit the content and relationship corresponding to OLAND, and finally build it into a semantic web, complete the underlying framework of knowledge + reasoning, and become a \"The Human Brain\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The owner of OLAND can permanently own the display area of the corresponding content and the incentive share equity generated by future content editing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 31525:
/*!***********************************************************!*\
  !*** ./src/app/pages/components/alert/alert.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/alert.service */ 43833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);



function AlertComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_div_0_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r2.resolve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AlertComponent_div_0_button_4_Template, 3, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.color ? "alert-" + ctx_r0.color : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.body, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.haveClose);
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertService.alertSetting$.subscribe(data => {
            if (data === null) {
                this.alertStatus = false;
                return;
            }
            this.title = data.title ? data.title : '';
            this.body = data.body;
            this.color = data.color ? data.color : 'primary';
            this.time = data.time ? data.time : null;
            this.haveClose = data.haveClose ? data.haveClose : false;
            this.alertStatus = true;
            if (this.time) {
                setTimeout(() => {
                    this.alertStatus = false;
                }, this.time);
            }
        });
    }
    resolve() {
        this.alertStatus = false;
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService)); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], decls: 1, vars: 1, consts: [["class", "alert", 3, "ngClass", 4, "ngIf"], [1, "alert", 3, "ngClass"], ["type", "button", "class", "close", 3, "click", 4, "ngIf"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.alertStatus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".alert[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0rem;\n  width: 100vw;\n  z-index: 1051;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  border: 1px solid transparent;\n  border-radius: 0.25remrem;\n}\n.alert-primary[_ngcontent-%COMP%] {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n.alert-secondary[_ngcontent-%COMP%] {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n.alert-success[_ngcontent-%COMP%] {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.alert-info[_ngcontent-%COMP%] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n.alert-light[_ngcontent-%COMP%] {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-dark[_ngcontent-%COMP%] {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcmVtO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICB6LWluZGV4OiAxMDUxO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW1yZW07XG59XG4uYWxlcnQtcHJpbWFyeSB7XG4gICAgY29sb3I6ICMwMDQwODU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZTVmZjtcbiAgICBib3JkZXItY29sb3I6ICNiOGRhZmY7XG59XG4uYWxlcnQtc2Vjb25kYXJ5IHtcbiAgICBjb2xvcjogIzM4M2Q0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlM2U1O1xuICAgIGJvcmRlci1jb2xvcjogI2Q2ZDhkYjtcbn1cbi5hbGVydC1zdWNjZXNzIHtcbiAgICBjb2xvcjogIzE1NTcyNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICAgIGJvcmRlci1jb2xvcjogI2MzZTZjYjtcbn1cbi5hbGVydC1kYW5nZXIge1xuICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xufVxuLmFsZXJ0LXdhcm5pbmcge1xuICAgIGNvbG9yOiAjODU2NDA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlZWJhO1xufVxuLmFsZXJ0LWluZm8ge1xuICAgIGNvbG9yOiAjMGM1NDYwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xufVxuLmFsZXJ0LWxpZ2h0IHtcbiAgICBjb2xvcjogIzgxODE4MjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIGJvcmRlci1jb2xvcjogI2ZkZmRmZTtcbn1cbi5hbGVydC1kYXJrIHtcbiAgICBjb2xvcjogIzFiMWUyMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkOGQ5O1xuICAgIGJvcmRlci1jb2xvcjogI2M2YzhjYTtcbn0iXX0= */"] });


/***/ }),

/***/ 99010:
/*!********************************************************!*\
  !*** ./src/app/pages/components/alert/alert.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModule": () => (/* binding */ AlertModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ 31525);
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/alert.service */ 43833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class AlertModule {
}
AlertModule.ɵfac = function AlertModule_Factory(t) { return new (t || AlertModule)(); };
AlertModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AlertModule });
AlertModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AlertModule, { declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent] }); })();


/***/ }),

/***/ 48194:
/*!***********************************************************!*\
  !*** ./src/app/pages/components/cards/cards.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsComponent": () => (/* binding */ CardsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/contract.service */ 7533);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);






function CardsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CardsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.openVoucher(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Please choose and use your land vouchers, then you can get the discounts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CardsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.isVoucher = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "matic");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.landInfo.logicLength !== ctx_r2.landInfo.selectedCardLength ? "voucher-group-disable" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.landInfo.voucherBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "../../../assets/images/voucher", ctx_r2.landInfo.selectedCardLength, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.landInfo.selectedCardLength, "L voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Mint character length is ", ctx_r2.landInfo.selectedCardLength, ", and the price is reduced by ", 100 - ctx_r2.landInfo.selectedCardPercent, "%.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.priceSub(ctx_r2.landInfo.offPrice, ctx_r2.landInfo.originPrice));
} }
function CardsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.isVoucher = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "matic");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.landInfo.logicLength !== ctx_r3.landInfo.selectedCardLength ? "voucher-group-sm-disable" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.landInfo.voucherBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "../../../assets/images/voucher", ctx_r3.landInfo.logicLength, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r3.landInfo.logicLength, "L voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Mint character length is ", ctx_r3.landInfo.logicLength, ", and the price is reduced by ", 100 - ctx_r3.landInfo.selectedCardPercent, "%.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.priceSub(ctx_r3.landInfo.offPrice, ctx_r3.landInfo.originPrice));
} }
function CardsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " The Land voucher is unavailable: The land voucher you selected does not match the character length of mint land\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CardsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Please connect first");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "To get land vouchers, you can follow our Twitter and join our irregular activities or buy in our Opensea flagships store.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_5_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.isLogin = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_5_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.isLogin = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CardsComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No Vouchers yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "To get land vouchers, you can follow our Twitter and join our irregular activities or buy in our Opensea flagships store.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r16.openseaVoucher, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CardsComponent_div_6_ng_container_5_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " The Land voucher is unavailable: The land voucher you selected does not match the character length of mint land ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CardsComponent_div_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_6_ng_container_5_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const card_r20 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.cancelCard(card_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CardsComponent_div_6_ng_container_5_Template_input_change_17_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const card_r20 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.setCardInfoSelection($event, card_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CardsComponent_div_6_ng_container_5_div_19_Template, 5, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r20 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r17.landInfo.logicLength !== card_r20.length ? "voucher-group-disable" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r20.balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("for", card_r20.cardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "../../../assets/images/voucher", card_r20.length, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", card_r20.length, "L voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Mint character length is ", card_r20.length, ", and the price is reduced by ", 100 - card_r20.priceOff, "%.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", card_r20.priceOff, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", card_r20.cardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", card_r20.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx_r17.landInfo.logicLength !== card_r20.length ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.landInfo.logicLength !== card_r20.length);
} }
function CardsComponent_div_6_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No Vouchers yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "To get land vouchers, you can follow our Twitter and join our irregular activities or buy in our Opensea flagships store.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r18.openseaVoucher, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CardsComponent_div_6_ng_container_15_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " The Land voucher is unavailable: The land voucher you selected does not match the character length of mint land ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CardsComponent_div_6_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_6_ng_container_15_Template_input_click_16_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const card_r26 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r29.setCardInfoSelection($event, card_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CardsComponent_div_6_ng_container_15_div_18_Template, 5, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r26 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r19.landInfo.logicLength !== card_r26.length ? "voucher-group-sm-disable" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r26.balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "../../../assets/images/voucher", card_r26.length, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", card_r26.length, "L voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Mint character length is ", card_r26.length, ", and the price is reduced by ", 100 - card_r26.priceOff, "%.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", card_r26.priceOff, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", card_r26.cardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", card_r26.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx_r19.landInfo.logicLength !== card_r26.length ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.landInfo.logicLength !== card_r26.length);
} }
function CardsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.cardSelectConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_6_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Land Voucher List");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CardsComponent_div_6_div_4_Template, 13, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CardsComponent_div_6_ng_container_5_Template, 20, 12, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.cardSelectCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.cardSelectConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_6_Template_div_click_11_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Land Voucher List");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CardsComponent_div_6_div_14_Template, 13, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CardsComponent_div_6_ng_container_15_Template, 19, 11, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_6_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r37.cardSelectCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardsComponent_div_6_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.cardSelectConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r6.haveVoucher);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.cardInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r6.haveVoucher);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.cardInfo);
} }
class CardsComponent {
    constructor(contractService, router) {
        this.contractService = contractService;
        this.router = router;
        this.isSearching = false;
        this.account = '';
        this.cardInfo = [];
        this.cardLoaded = true;
        this.isVoucher = false;
        this.haveVoucher = true;
        this.isLogin = true;
        this.openseaVoucher = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.openseaVoucher;
        this.contractService.account$.subscribe(account => {
            this.account = account;
            if (this.account) {
                this.getCards();
            }
        });
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.landInfo && !changes.landInfo.firstChange) {
            console.log(changes);
            this.haveVoucher = this.cardInfo.some(card => card.length === changes.landInfo.currentValue.logicLength);
        }
    }
    getCards() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.cardLoaded = false;
            this.cardInfo = [];
            const cardIds = yield this.contractService.getCardIds();
            const balances = yield this.contractService.getBalanceOfBatch(this.account, cardIds);
            const cards = yield this.contractService.getCards();
            this.cardInfo = cards.map((card, index) => {
                return {
                    cardId: +card[0],
                    name: card[1],
                    length: +card[2],
                    priceOff: +card[3],
                    selected: +this.landInfo.selectedCardId === +card[0],
                    balance: +balances[index]
                };
            });
            this.cardInfo = this.cardInfo.filter(card => card.balance > 0);
            this.haveVoucher = this.cardInfo.some(card => card.length === this.landInfo.logicLength);
            this.cardLoaded = true;
        });
    }
    openVoucher() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.account) {
                this.isLogin = false;
                return;
            }
            if (this.isSearching) {
                return;
            }
            if (!this.cardLoaded) {
                return;
            }
            this.isVoucher = true;
        });
    }
    setCardInfoSelection(evt, card) {
        if (card.length !== this.landInfo.logicLength) {
            console.log('card.length', card.length, 'logicLength', this.landInfo.logicLength);
            return;
        }
        this.cardInfo.map(item => {
            if (item.cardId === card.cardId) {
                item.selected = evt.target.checked;
            }
            else {
                item.selected = false;
            }
        });
    }
    cardSelectCancel() {
        this.cardInfo.forEach(card => card.selected = false);
        this.isVoucher = false;
        const url = this.router.url.split('?')[0];
        this.router.navigate([url]);
    }
    cardSelectConfirm() {
        const card = this.cardInfo.find((card) => card.selected === true);
        this.isVoucher = false;
        const url = this.router.url.split('?')[0];
        if (card && card.cardId) {
            this.router.navigate([url], { queryParams: { voucher: card.cardId } });
        }
        else {
            this.router.navigate([url]);
        }
    }
    cancelCard(card) {
        if (card.selected && this.landInfo.logicLength !== card.length) {
            card.selected = false;
        }
    }
    // 精度减法
    priceSub(num1, num2) {
        var baseNum, baseNum1, baseNum2;
        var precision; // 精度
        try {
            baseNum1 = num1.toString().split(".")[1].length;
        }
        catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split(".")[1].length;
        }
        catch (e) {
            baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
        return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_1__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
CardsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], inputs: { landInfo: "landInfo", isSearching: "isSearching" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 7, consts: [["class", "voucher-loader d-flex justify-content-center align-items-center py-4 py-lg-5", 4, "ngIf"], ["class", "voucher d-flex justify-content-between align-items-center mb-4", 3, "click", 4, "ngIf"], ["class", "voucher-group d-none d-md-flex", 3, "ngClass", "click", 4, "ngIf"], ["class", "voucher-group-sm d-md-none", 3, "ngClass", "click", 4, "ngIf"], ["class", "voucher-disable-tip", 4, "ngIf"], ["class", "mask", 4, "ngIf"], ["class", "mask", 3, "click", 4, "ngIf"], [1, "voucher-loader", "d-flex", "justify-content-center", "align-items-center", "py-4", "py-lg-5"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "2rem", "height", "2rem"], [1, "visually-hidden"], [1, "voucher", "d-flex", "justify-content-between", "align-items-center", "mb-4", 3, "click"], ["src", "../../../assets/images/voucher.png", "alt", "", 1, ""], [1, "flex-grow-1", "mx-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-right"], ["fill-rule", "evenodd", "d", "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"], [1, "voucher-group", "d-none", "d-md-flex", 3, "ngClass", "click"], [1, "quantity"], [1, "info"], ["alt", "", 3, "src"], [1, "len"], [1, "reduce-price"], [1, "voucher-group-sm", "d-md-none", 3, "ngClass", "click"], [1, "voucher-disable-tip"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-circle"], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"], [1, "mask"], [1, "voucher-modal", "d-none", "d-md-block"], [1, "failed-text", "mr-3"], [1, "text-white"], [1, "d-flex", "justify-content-center", "align-items-center", "pt-3"], [1, "btn", "btn-outline-secondary", "mr-5", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "mask", 3, "click"], [1, "voucher-modal", "d-none", "d-md-block", 3, "click"], [1, "text-white", "mb-5"], ["class", "failed", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "voucher-modal-sm", "d-md-none", 3, "click"], [1, "text-white", "mb-3"], [1, "btn", "btn-outline-secondary", "mr-3", 3, "click"], [1, "failed"], [1, "failed-btn"], [1, "d-flex", "justify-content-center", "align-items-center"], ["target", "_blank", 1, "btn", "btn-opensea", "mr-3", 3, "href"], ["src", "../../../../assets/images/opensea.png", 2, "width", "16px"], ["href", "https://mobile.twitter.com/olandbox", "target", "_blank", 1, "btn", "btn-primary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-twitter"], ["d", "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"], [1, "voucher-group", 3, "ngClass", "click"], [1, "info", 3, "for"], [1, "percent"], [1, "label"], ["type", "checkbox", 3, "id", "checked", "change"], [1, "checkmark"], [1, "voucher-group-sm", 3, "ngClass"], [1, "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", 3, "id", "checked", "click"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CardsComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CardsComponent_div_1_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CardsComponent_div_2_Template, 19, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CardsComponent_div_3_Template, 17, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CardsComponent_div_4_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CardsComponent_div_5_Template, 12, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CardsComponent_div_6_Template, 21, 4, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.cardLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.landInfo.selectedCardId && ctx.cardLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.landInfo.selectedCardId && ctx.cardLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.landInfo.selectedCardId && ctx.cardLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.landInfo.selectedCardId && ctx.cardLoaded && ctx.landInfo.logicLength !== ctx.landInfo.selectedCardLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isVoucher);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: [".mask[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.voucher-loader[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  background: #0D1926;\n  border-radius: 10px;\n}\n.voucher[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-right: 50px;\n  margin-bottom: 30px;\n  background: #0D1926;\n  border-radius: 80px 10px 10px 10px;\n  font-size: 20px;\n  font-family: Aileron;\n}\n.voucher[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.voucher[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 40px;\n  font-size: 20px;\n}\n.voucher[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n}\n.voucher-modal[_ngcontent-%COMP%] {\n  padding: 60px 40px 30px 40px;\n  max-width: 96%;\n  max-height: 99%;\n  overflow-y: auto;\n  background: #06111E;\n  border: 0;\n  border-radius: 10px;\n}\n.voucher-modal[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 16px;\n  height: 16px;\n  background-color: #030a13;\n}\n.voucher-modal[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #0e1f35;\n}\n.voucher-modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #051c38;\n}\n.voucher-modal[_ngcontent-%COMP%]   .failed[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  margin-bottom: 30px;\n  background: #0D1926;\n  border-radius: 10px;\n  color: #666D80;\n}\n.voucher-modal[_ngcontent-%COMP%]   .failed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.voucher-modal[_ngcontent-%COMP%]   .failed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.voucher-group[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #0D1926;\n  border-radius: 10px;\n}\n.voucher-group[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  min-width: 6em;\n  text-align: center;\n}\n.voucher-group[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 42px;\n  color: #3257B4;\n}\n.voucher-group[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666D80;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1 1 auto;\n  padding: 10px 40px;\n  margin-bottom: 0;\n  border-radius: 60px 10px 10px 60px;\n  background-color: #0D2440;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .len[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 0 40px;\n  color: #fff;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .len[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .len[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666D80;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  padding: 0 40px;\n  background: #0D1926;\n  border-radius: 10px;\n  color: #4298F4;\n  font-size: 42px;\n  line-height: 80px;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n  width: 40px;\n  height: 40px;\n  margin-left: 40px;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 40px;\n  width: 40px;\n  border: 1px solid #1B3859;\n  border-radius: 5px;\n  background-color: #0D1926;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #182b3f;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #3257B4;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 12px;\n  top: 5px;\n  width: 14px;\n  height: 22px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .reduce-price[_ngcontent-%COMP%] {\n  color: #10BAE5;\n  font-size: 24px;\n}\n.voucher-group[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.voucher-group-disable[_ngcontent-%COMP%] {\n  background-color: #333333;\n}\n.voucher-group-disable[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #B3B3B3;\n}\n.voucher-group-disable[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: #666D7F;\n}\n.voucher-group-disable[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  background-color: #1A1A1A;\n}\n.voucher-group-disable[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n}\n.voucher-group-disable[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n  background: #333333;\n  color: #B3B3B3;\n}\n.voucher-group-disable[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  border: 1px solid #333333;\n  background-color: #0D0D0D;\n}\n.voucher-group-disable[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #333333;\n}\n.voucher-group-disable[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #B3B3B3;\n}\n.voucher-group-disable[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .reduce-price[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: #0D0D0D;\n  color: #CCCCCC;\n  font-size: 24px;\n}\n.voucher-modal-sm[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  max-height: 99%;\n  max-width: 96%;\n  background: #06111E;\n  border: 1px solid #666D80;\n  border-radius: 10px;\n}\n.voucher-modal-sm[_ngcontent-%COMP%]   .failed[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 20px;\n  margin-bottom: 30px;\n  background: #0D1926;\n  border-radius: 10px;\n  color: #666D80;\n}\n.voucher-modal-sm[_ngcontent-%COMP%]   .failed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.voucher-modal-sm[_ngcontent-%COMP%]   .failed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.voucher-group-sm[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px;\n  margin-top: 25px;\n  margin-bottom: 20px;\n  background-color: #0D2440;\n  box-shadow: -4px 0px 8px 0px rgba(9, 16, 26, 0.3);\n  border-radius: 0 10px 10px 10px;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -25px;\n  left: 0;\n  background-color: #0D1926;\n  border-radius: 10px 10px 0px 0px;\n  height: 25px;\n  padding: 0 20px;\n  color: #666D80;\n  font-size: 10px;\n  line-height: 25px;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #3257B4;\n  font-size: 12px;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80px;\n  top: -25px;\n  right: 0;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .len[_ngcontent-%COMP%] {\n  margin: 0 110px 10px 0;\n  color: #666D80;\n  font-size: 10px;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .len[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n  padding: 8px 26px;\n  border-radius: 5px;\n  background-color: #0D1926;\n  color: #4298F4;\n  font-size: 21px;\n  font-weight: bolder;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n  width: 20px;\n  height: 20px;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 20px;\n  width: 20px;\n  border: 1px solid #1B3859;\n  border-radius: 5px;\n  background-color: #0D1926;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #182b3f;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #3257B4;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 6px;\n  top: 3px;\n  width: 7px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n.voucher-group-sm[_ngcontent-%COMP%]   .reduce-price[_ngcontent-%COMP%] {\n  color: #10BAE5;\n  font-size: 12px;\n}\n.voucher-group-sm[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.voucher-group-sm-disable[_ngcontent-%COMP%] {\n  background-color: #333333;\n}\n.voucher-group-sm-disable[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n}\n.voucher-group-sm-disable[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  background-color: #0D1926;\n  color: #666D7F;\n}\n.voucher-group-sm-disable[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #B3B3B3;\n}\n.voucher-group-sm-disable[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n  background-color: #1A1A1A;\n  color: #B3B3B3;\n}\n.voucher-group-sm-disable[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  border: 1px solid #333333;\n  background-color: #0D0D0D;\n}\n.voucher-group-sm-disable[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #0D0D0D;\n}\n.voucher-group-sm-disable[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #0D0D0D;\n}\n.voucher-group-sm-disable[_ngcontent-%COMP%]   .reduce-price[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background-color: #0D0D0D;\n  color: #CCCCCC;\n}\n.voucher-disable-tip[_ngcontent-%COMP%] {\n  margin: -30px 0 30px 0;\n  padding: 10px 20px;\n  background: #0D1926;\n  border-radius: 10px;\n  color: #666D80;\n  font-size: 14px;\n}\n.voucher-disable-tip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #B22424;\n}\n.btn.btn-opensea[_ngcontent-%COMP%] {\n  background: #1B3859;\n  color: #fff;\n}\n.btn.btn-cancel[_ngcontent-%COMP%] {\n  background: inherit;\n  border-color: #666D80;\n  color: #666D80;\n}\n@media (max-width: 767.98px) {\n  .voucher[_ngcontent-%COMP%] {\n    padding-right: 10px;\n    font-size: 16px;\n  }\n  .voucher[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .voucher[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: 0 20px;\n    font-size: 10px;\n  }\n  .voucher[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .voucher-modal[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .voucher-modal[_ngcontent-%COMP%]   .failed[_ngcontent-%COMP%] {\n    padding: 50px 25px;\n    border-radius: 5px;\n  }\n  .voucher-disable-tip[_ngcontent-%COMP%] {\n    margin: -1.5rem 0 1.5rem 0;\n    font-size: 10px;\n  }\n  .voucher-disable-tip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFSQTtFQVNRLFlBQUE7QUFFUjtBQVhBO0VBWVEsY0FBQTtFQUNBLGVBQUE7QUFFUjtBQWZBO0VBZ0JRLHNCQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQUVBO0VBQ0ksNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUFSO0FBRUk7RUFFSSxvREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFEUjtBQUdJO0VBRUksbUJBQUE7RUFDQSxvREFBQTtFQUNBLHlCQUFBO0FBRlI7QUF0QkE7RUEyQlEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFGUjtBQS9CQTtFQWtDWSxlQUFBO0FBQVo7QUFsQ0E7RUFvQ1ksZUFBQTtBQUNaO0FBR0E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQU5BO0VBU1EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFSO0FBWEE7RUFZZ0IsZUFBQTtFQUFpQixjQUFBO0FBR2pDO0FBZkE7RUFhYSxlQUFBO0VBQWlCLGNBQUE7QUFNOUI7QUFuQkE7RUFnQlEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUFNUjtBQTdCQTtFQXlCWSxZQUFBO0VBQ0EsYUFBQTtBQU9aO0FBakNBO0VBNkJZLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU9aO0FBdENBO0VBZ0NvQixlQUFBO0FBU3BCO0FBekNBO0VBaUNpQixlQUFBO0VBQWdCLGNBQUE7QUFZakM7QUE3Q0E7RUFvQ1ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFZWjtBQXREQTtFQTZDWSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVlaO0FBOURBO0VBb0RnQixrQkFBQTtFQUNBLFVBQUE7RUFFQSxTQUFBO0VBQ0EsUUFBQTtBQVloQjtBQXBFQTtFQTJEZ0Isa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBWWhCO0FBOUVBO0VBcUVnQixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBWWhCO0FBbkZBO0VBMkVZLHlCQUFBO0FBV1o7QUF0RkE7RUE4RVkseUJBQUE7QUFXWjtBQXpGQTtFQWlGWSxjQUFBO0FBV1o7QUE1RkE7RUFvRlksVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQVdaO0FBdkdBO0VBK0ZZLGNBQUE7RUFDQSxlQUFBO0FBV1o7QUEzR0E7RUFtR1ksV0FBQTtFQUNBLFlBQUE7QUFXWjtBQVBBO0VBQ0kseUJBQUE7QUFTSjtBQVZBO0VBR2dCLGNBQUE7QUFVaEI7QUFiQTtFQUlhLGNBQUE7QUFZYjtBQWhCQTtFQU9RLHlCQUFBO0FBWVI7QUFuQkE7RUFTWSx1QkFBQTtBQWFaO0FBdEJBO0VBWVksbUJBQUE7RUFDQSxjQUFBO0FBYVo7QUExQkE7RUFpQmdCLHlCQUFBO0VBQ0EseUJBQUE7QUFZaEI7QUE5QkE7RUFzQlkseUJBQUE7QUFXWjtBQWpDQTtFQXlCWSx5QkFBQTtBQVdaO0FBcENBO0VBNEJZLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBV1o7QUFQQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBU0o7QUFoQkE7RUFVUSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBU1I7QUF4QkE7RUFnQlksZUFBQTtBQVdaO0FBM0JBO0VBa0JZLGVBQUE7QUFZWjtBQVJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaURBQUE7RUFDQSwrQkFBQTtBQVVKO0FBakJBO0VBU1Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFXUjtBQTdCQTtFQW9CWSxjQUFBO0VBQ0EsZUFBQTtBQVlaO0FBakNBO0VBeUJRLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBV1I7QUF2Q0E7RUErQlEsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVdSO0FBNUNBO0VBbUNZLFdBQUE7RUFDQSxlQUFBO0FBWVo7QUFoREE7RUF3Q1EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVdSO0FBeERBO0VBZ0RRLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVdSO0FBL0RBO0VBc0RZLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBWVo7QUFyRUE7RUE0RFksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBWVo7QUEvRUE7RUFzRVksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQVlaO0FBcEZBO0VBNEVRLHlCQUFBO0FBV1I7QUF2RkE7RUErRVEseUJBQUE7QUFXUjtBQTFGQTtFQWtGUSxjQUFBO0FBV1I7QUE3RkE7RUFxRlEsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQVdSO0FBeEdBO0VBZ0dRLGNBQUE7RUFDQSxlQUFBO0FBV1I7QUE1R0E7RUFvR1EsV0FBQTtFQUNBLFlBQUE7QUFXUjtBQVJBO0VBQ0kseUJBQUE7QUFVSjtBQVhBO0VBR1EsdUJBQUE7QUFXUjtBQWRBO0VBTVEseUJBQUE7RUFDQSxjQUFBO0FBV1I7QUFsQkE7RUFTWSxjQUFBO0FBWVo7QUFyQkE7RUFhUSx5QkFBQTtFQUNBLGNBQUE7QUFXUjtBQXpCQTtFQWtCWSx5QkFBQTtFQUNBLHlCQUFBO0FBVVo7QUE3QkE7RUF1QlEseUJBQUE7QUFTUjtBQWhDQTtFQTBCUSx5QkFBQTtBQVNSO0FBbkNBO0VBNkJRLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFTUjtBQU5BO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVFKO0FBZEE7RUFRUSxjQUFBO0FBU1I7QUFOQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQVFKO0FBTkE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQVFKO0FBTEE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFQU9OO0VBVEU7SUFJUSxXQUFBO0VBUVY7RUFaRTtJQU9RLGNBQUE7SUFDQSxlQUFBO0VBUVY7RUFoQkU7SUFXUSxlQUFBO0VBUVY7RUFMRTtJQUNJLGtCQUFBO0VBT047RUFSRTtJQUdRLGtCQUFBO0lBQ0Esa0JBQUE7RUFRVjtFQUxFO0lBQ0ksMEJBQUE7SUFDQSxlQUFBO0VBT047RUFURTtJQUlRLFdBQUE7SUFDQSxZQUFBO0VBUVY7QUFDRiIsImZpbGUiOiJjYXJkcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXNrIHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgLjgpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZvdWNoZXItbG9hZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwRDE5MjY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi52b3VjaGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwRDE5MjY7XG4gICAgYm9yZGVyLXJhZGl1czogODBweCAxMHB4IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFpbGVyb247XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgICBtYXJnaW46IDAgNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi52b3VjaGVyLW1vZGFsIHtcbiAgICBwYWRkaW5nOiA2MHB4IDQwcHggMzBweCA0MHB4O1xuICAgIG1heC13aWR0aDogOTYlO1xuICAgIG1heC1oZWlnaHQ6IDk5JTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICMwNjExMUU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXJcbiAgICB7XG4gICAgICAgIHdpZHRoOjE2cHg7XG4gICAgICAgIGhlaWdodDoxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMzBhMTM7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXG4gICAge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMGUxZjM1O1xuICAgIH1cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxuICAgIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDUxYzM4O1xuICAgIH1cbiAgICAuZmFpbGVkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzBEMTkyNjsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjNjY2RDgwO1xuICAgICAgICBoMiB7Zm9udC1zaXplOiAyNHB4O31cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4udm91Y2hlci1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDE5MjY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAucXVhbnRpdHkge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHN0cm9uZyB7Zm9udC1zaXplOiA0MnB4OyBjb2xvcjogIzMyNTdCNDt9XG4gICAgICAgIGRpdiB7Zm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzY2NkQ4MDt9XG4gICAgfVxuICAgIC5pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2MHB4IDEwcHggMTBweCA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQyNDQwO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDExMHB4OyBcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxlbiB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgc3Ryb25nIHtmb250LXNpemU6IDI4cHg7fVxuICAgICAgICAgICAgZGl2IHtmb250LXNpemU6IDE0cHg7Y29sb3I6ICM2NjZEODA7fVxuICAgICAgICB9XG4gICAgICAgIC5wZXJjZW50IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEQxOTI2O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDI5OEY0O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGVja21hcmsge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQjM4NTk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDE5MjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5sYWJlbDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MmIzZjtcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNTdCNDtcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsIC5jaGVja21hcms6YWZ0ZXIge1xuICAgICAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAucmVkdWNlLXByaWNlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMTBCQUU1O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi52b3VjaGVyLWdyb3VwLWRpc2FibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgLnF1YW50aXR5IHtcbiAgICAgICAgc3Ryb25nIHtjb2xvcjogI0IzQjNCMzt9XG4gICAgICAgIGRpdiB7Y29sb3I6ICM2NjZEN0Y7fVxuICAgIH1cbiAgICAuaW5mbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgfVxuICAgICAgICAucGVyY2VudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgICAgICAgICAgY29sb3I6ICNCM0IzQjM7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIC5jaGVja21hcmsge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMEQwRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGFiZWw6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCM0IzQjM7XG4gICAgICAgIH1cbiAgICAgICAgLnJlZHVjZS1wcmljZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDBEMEQ7XG4gICAgICAgICAgICBjb2xvcjogI0NDQ0NDQztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi52b3VjaGVyLW1vZGFsLXNtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWF4LWhlaWdodDogOTklO1xuICAgIG1heC13aWR0aDogOTYlO1xuICAgIGJhY2tncm91bmQ6ICMwNjExMUU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NkQ4MDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5mYWlsZWQge1xuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMEQxOTI2OyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgIGgyIHtmb250LXNpemU6IDE2cHg7fVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi52b3VjaGVyLWdyb3VwLXNtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMjQ0MDtcbiAgICBib3gtc2hhZG93OiAtNHB4IDBweCA4cHggMHB4IHJnYmEoOSwgMTYsIDI2LCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgLnF1YW50aXR5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0yNXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxOTI2O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIGNvbG9yOiAjNjY2RDgwO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgY29sb3I6ICMzMjU3QjQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgdG9wOiAtMjVweDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5sZW4ge1xuICAgICAgICBtYXJnaW46IDAgMTEwcHggMTBweCAwO1xuICAgICAgICBjb2xvcjogIzY2NkQ4MDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBlcmNlbnQge1xuICAgICAgICBwYWRkaW5nOiA4cHggMjZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxOTI2O1xuICAgICAgICBjb2xvcjogIzQyOThGNDtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cbiAgICAubGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jaGVja21hcmsge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQjM4NTk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxOTI2O1xuICAgICAgICB9XG4gICAgICAgIC5jaGVja21hcms6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxhYmVsOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODJiM2Y7XG4gICAgfVxuICAgIC5sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjU3QjQ7XG4gICAgfVxuICAgIC5sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubGFiZWwgLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgIGxlZnQ6IDZweDtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgIHdpZHRoOiA3cHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgLnJlZHVjZS1wcmljZSB7XG4gICAgICAgIGNvbG9yOiAjMTBCQUU1O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgfVxufVxuLnZvdWNoZXItZ3JvdXAtc20tZGlzYWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICBpbWcge1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICB9XG4gICAgLnF1YW50aXR5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTkyNjtcbiAgICAgICAgY29sb3I6ICM2NjZEN0Y7XG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICBjb2xvcjogI0IzQjNCMztcbiAgICAgICAgfVxuICAgIH1cbiAgICAucGVyY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XG4gICAgICAgIGNvbG9yOiAjQjNCM0IzO1xuICAgIH1cbiAgICAubGFiZWwge1xuICAgICAgICAuY2hlY2ttYXJrIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQwRDBEO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sYWJlbDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQwRDBEO1xuICAgIH1cbiAgICAubGFiZWwgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQwRDBEO1xuICAgIH1cbiAgICAucmVkdWNlLXByaWNlIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMEQwRDtcbiAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XG4gICAgfVxufVxuLnZvdWNoZXItZGlzYWJsZS10aXAge1xuICAgIG1hcmdpbjogLTMwcHggMCAzMHB4IDA7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwRDE5MjY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogIzY2NkQ4MDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgc3ZnIHtcbiAgICAgICAgY29sb3I6ICNCMjI0MjRcbiAgICB9XG59XG4uYnRuLmJ0bi1vcGVuc2VhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMUIzODU5O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi5idG4tY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGJvcmRlci1jb2xvcjogIzY2NkQ4MDtcbiAgICBjb2xvcjogIzY2NkQ4MDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLnZvdWNoZXIge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYS5idG4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC52b3VjaGVyLW1vZGFsIHtcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICAuZmFpbGVkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMjVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudm91Y2hlci1kaXNhYmxlLXRpcCB7XG4gICAgICAgIG1hcmdpbjogLTEuNXJlbSAwIDEuNXJlbSAwO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 84249:
/*!***************************************************************************!*\
  !*** ./src/app/pages/components/confirm-modal/confirm-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmModalComponent": () => (/* binding */ ConfirmModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);



class ConfirmModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.title = 'Delete';
        this.message = "Are you sure you want to delete it?";
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    delete() {
        this.deleteEvent.emit(true);
        this.activeModal.close('Close click');
    }
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
ConfirmModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmModalComponent, selectors: [["app-confirm-modal"]], inputs: { title: "title", message: "message" }, outputs: { deleteEvent: "deleteEvent" }, decls: 10, vars: 2, consts: [[1, "modal-header"], [1, "modal-title", "fw-bold", "fs-1"], [1, "modal-body", "fs-5", "text-break"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-lg", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_6_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_8_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, encapsulation: 2 });


/***/ }),

/***/ 55927:
/*!*********************************************************************!*\
  !*** ./src/app/pages/components/fail-modal/fail-modal.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FailModalComponent": () => (/* binding */ FailModalComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);



class FailModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.title = 'FAILED MINT';
        this.message = 'Sorry, the operation failed.  Please click the link below to view details.';
        this.tx = '';
        this.link = '';
    }
    ngOnInit() {
        this.link = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.polygonscanURI}${this.tx}`;
    }
}
FailModalComponent.ɵfac = function FailModalComponent_Factory(t) { return new (t || FailModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal)); };
FailModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FailModalComponent, selectors: [["app-fail-modal"]], inputs: { title: "title", message: "message", tx: "tx" }, decls: 12, vars: 4, consts: [[1, "modal-header"], [1, "modal-title", "fw-bold", "fs-1", "font-second"], [1, "modal-body", "fs-5", "text-break", "text-white"], [1, "text-center"], [1, "text-center", "bg-gray", "py-2", "text-truncate", "font-second"], [1, "font-second", 3, "href"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", 3, "click"]], template: function FailModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FailModalComponent_Template_button_click_10_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.link);
    } }, encapsulation: 2 });


/***/ }),

/***/ 28178:
/*!***************************************************************!*\
  !*** ./src/app/pages/components/loading/loading.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);


function LoadingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoadingComponent {
    constructor() {
        this.isLoading = false;
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], inputs: { isLoading: "isLoading" }, decls: 1, vars: 1, consts: [["class", "d-flex justify-content-center my-5", 4, "ngIf"], [1, "d-flex", "justify-content-center", "my-5"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "5rem", "height", "5rem"], [1, "visually-hidden"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 25308:
/*!*************************************************************************!*\
  !*** ./src/app/pages/components/mint-history/mint-history.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "History": () => (/* binding */ History),
/* harmony export */   "MintHistoryComponent": () => (/* binding */ MintHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pipes_time_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/time.pipe */ 98017);





function MintHistoryComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Congratulations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "get");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "timeSince");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const history_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", history_r1.registrant.slice(0, 2), "...", history_r1.registrant.slice(38), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", history_r1.originalName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](history_r1.originalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 7, history_r1.time));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", history_r1.originalName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](history_r1.originalName);
} }
class History {
}
class MintHistoryComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.lengthLimit = 5;
        this.pollTimer = null;
        this.historyList = [];
        this.pollHistoryList = [];
    }
    ngOnInit() {
        this.initList();
    }
    ngOnDestroy() {
        this.clearPolling();
    }
    initList() {
        this.httpService.getMintHistory().then(res => {
            this.historyList = res.reverse();
            this.polling();
        });
    }
    polling() {
        this.pollTimer = setInterval(() => {
            this.httpService.getMintHistory().then(res => {
                this.historyList = res.reverse();
            });
        }, 10000);
    }
    clearPolling() {
        console.log('clear');
        clearInterval(this.pollTimer);
    }
}
MintHistoryComponent.ɵfac = function MintHistoryComponent_Factory(t) { return new (t || MintHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); };
MintHistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MintHistoryComponent, selectors: [["app-mint-history"]], inputs: { lengthLimit: "lengthLimit" }, decls: 3, vars: 5, consts: [[1, "list-group", "list-group-dark", "rounded-0"], ["class", "list-group-item list-group-item-action rounded px-3 py-md-4 py-3 mb-3 ", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", "rounded", "px-3", "py-md-4", "py-3", "mb-3"], [1, "d-flex", "w-100", "justify-content-between"], [1, "second"], [1, "primary", "px-2"], [1, "second", "d-none", "d-md-inline"], [1, "d-none", "d-md-inline", "text-truncate", "px-1", 3, "routerLink"], [1, "d-none", "d-md-inline", "second"], [1, "primary", "time", 2, "flex", "0 0 auto"], [1, "d-md-none"], [1, "d-inline-block", "text-truncate", 3, "routerLink"]], template: function MintHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MintHistoryComponent_li_1_Template, 25, 9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, ctx.historyList, 0, ctx.lengthLimit));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _pipes_time_pipe__WEBPACK_IMPORTED_MODULE_1__.TimeSincePipe], styles: [".list-group-dark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #0F1926;\n  border-radius: 5px;\n  font-size: 16px;\n}\n.list-group-dark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.list-group-dark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n  color: #5F6578;\n}\n.list-group-dark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1A8CFF;\n  text-decoration: none;\n}\n.list-group-dark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0f80f0;\n}\n@media (max-width: 767.98px) {\n  .list-group-dark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .list-group-dark[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    background-color: #666D80;\n    color: #09101A;\n    padding: 0 4px;\n  }\n  .btn-view[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    padding-right: 40px;\n    height: 30px;\n    background: linear-gradient(-90deg, rgba(32, 80, 203, 0.8), #2E62E6);\n    border-radius: 150px;\n    font-size: 10px;\n    color: #fff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbnQtaGlzdG9yeS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQVI7QUFKQTtFQU1ZLFdBQUE7QUFDWjtBQVBBO0VBU1ksY0FBQTtBQUNaO0FBVkE7RUFZWSxjQUFBO0VBQ0EscUJBQUE7QUFDWjtBQUFZO0VBQ0ksY0FBQTtBQUVoQjtBQUtBO0VBQ0k7SUFFUSxlQUFBO0VBSlY7RUFFRTtJQUlZLHlCQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUFIZDtFQU9FO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxvRUFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUFMTjtBQUNGIiwiZmlsZSI6Im1pbnQtaGlzdG9yeS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWRhcmsge1xuICAgIGxpIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzBGMTkyNjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIC5wcmltYXJ5IHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5zZWNvbmQge1xuICAgICAgICAgICAgY29sb3I6ICM1RjY1Nzg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzFBOENGRjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMGY4MGYwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkgeyBcbiAgICAubGlzdC1ncm91cC1kYXJrIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgLnRpbWUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjZEODA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwOTEwMUE7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIHJnYmEoMzIsIDgwLCAyMDMsIDAuOCksICMyRTYyRTYpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 98532:
/*!*************************************************************************!*\
  !*** ./src/app/pages/components/sucess-modal/sucess-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SucessModalComponent": () => (/* binding */ SucessModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);


class SucessModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.title = 'MINT SUCCESS';
        this.message = "Congratulations! U have successfully obtained the land. And once you mint it, you can own it forever.  Not only can u trade the land in Opensea, but also has the editing rights of it. What's more, you can have opportunities to receive oland incentive shares in the future.";
    }
    ngOnInit() {
    }
}
SucessModalComponent.ɵfac = function SucessModalComponent_Factory(t) { return new (t || SucessModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
SucessModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SucessModalComponent, selectors: [["app-sucess-modal"]], inputs: { title: "title", message: "message" }, decls: 8, vars: 2, consts: [[1, "modal-header"], [1, "modal-title", "fw-bold", "fs-1"], [1, "modal-body", "fs-5", "text-break"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", 3, "click"]], template: function SucessModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SucessModalComponent_Template_button_click_6_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, encapsulation: 2 });


/***/ }),

/***/ 50244:
/*!*************************************************************************!*\
  !*** ./src/app/pages/components/upload-image/upload-image.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadImageComponent": () => (/* binding */ UploadImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/alert.service */ 43833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);







function UploadImageComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function UploadImageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class UploadImageComponent {
    constructor(activeModal, httpService, alertService) {
        this.activeModal = activeModal;
        this.httpService = httpService;
        this.alertService = alertService;
        this.maxSize = 1024 * 1000 * 2; // 2MB
        this.maxWidth = 300;
        this.maxHeight = 300;
        this.urlEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.url = '';
        this.isUploading = false;
    }
    ngOnInit() {
    }
    upload(files) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.isUploading = true;
            const fileToUpload = files.item(0);
            // 大小限制
            if (fileToUpload.size >= this.maxSize) {
                const size = Math.floor(this.maxSize / 1024000);
                this.alertService.create({
                    body: `The image size is over ${size}MB`,
                    color: 'danger',
                    time: 2000
                });
                this.isUploading = false;
                return;
            }
            this.httpService.uploadImg(fileToUpload).subscribe((res) => {
                this.url = res.data.url || '';
                this.urlEvent.emit(this.url);
                this.isUploading = false;
            });
            // 宽高限制
            // const reader = new FileReader();
            // reader.onload = (e: any) => {
            //     const image = new Image();
            //     image.src = e.target.result;
            //     image.onload = rs => {
            //       const img_height = rs.currentTarget['height'];
            //       const img_width = rs.currentTarget['width'];
            //       if (img_height > this.maxHeight && img_width > this.maxWidth) {
            //           this.alertService.create({
            //             body: `Maximum dimentions allowed ${this.maxWidth} * ${this.maxHeight} px`,
            //             color: 'danger',
            //             time: 4000
            //           })
            //           return false;
            //       } else {
            //         this.httpService.uploadImg(fileToUpload).subscribe((res: any) => {
            //           this.url = res.data.url || '';
            //           this.urlEvent.emit(this.url);
            //         })
            //       }
            //     };
            // };
            // reader.readAsDataURL(fileToUpload);
        });
    }
}
UploadImageComponent.ɵfac = function UploadImageComponent_Factory(t) { return new (t || UploadImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService)); };
UploadImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UploadImageComponent, selectors: [["app-upload-image"]], inputs: { maxSize: "maxSize", maxWidth: "maxWidth", maxHeight: "maxHeight" }, outputs: { urlEvent: "urlEvent" }, decls: 20, vars: 3, consts: [[1, "modal-header"], [1, "modal-title", "fw-bold", "fs-1"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "fs-5", "text-break"], [1, "row"], [1, "col-5"], [1, "image-content", 3, "ngClass"], [1, "image-cover", 3, "click"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "image-loader", 4, "ngIf"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["file", ""], [1, "col-7"], [1, "fs-4", "text-white"], ["alt", "", 3, "src"], [1, "image-loader"], ["role", "status", 1, "spinner-border"], [1, "sr-only"]], template: function UploadImageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select your images");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UploadImageComponent_Template_button_click_3_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UploadImageComponent_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14); return _r2.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, UploadImageComponent_img_11_Template, 1, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, UploadImageComponent_div_12_Template, 4, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UploadImageComponent_Template_input_change_13_listener($event) { return ctx.upload($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Upload your images");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "The recommended size of your images is 300*300px, and the format of jpg, png, and gif is limited in 2mb.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.url ? "image-content-full" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.url && !ctx.isUploading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUploading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".image-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  background-color: #0D2440;\n  padding-bottom: 100%;\n  overflow: hidden;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-image' viewBox='0 0 16 16'%3E%3Cpath d='M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'/%3E%3Cpath d='M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-size: 40px;\n  background-position: center;\n  cursor: pointer;\n}\n.image-content[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150%;\n  height: 150%;\n  border: 56px solid rgba(0, 0, 0, 0.7);\n  inset: -25%;\n  border-radius: 50%;\n  z-index: 1;\n  overflow: hidden;\n}\n.image-content[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]   .image-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #0D2440;\n  text-align: center;\n}\n.image-content[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]   .image-loader[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  position: relative;\n  top: calc(50% - 1.5rem);\n}\n.image-content[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n.image-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n.image-content-full[_ngcontent-%COMP%] {\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1pbWFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Y0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFDSjtBQVpBO0VBYVEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRVI7QUF0QkE7RUFzQlksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR1o7QUE1QkE7RUEyQmdCLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUloQjtBQWxDQTtFQWtDWSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUdaO0FBNUNBO0VBNkNRLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBRVI7QUFDQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoidXBsb2FkLWltYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMjQ0MDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGZpbGw9J3doaXRlJyBjbGFzcz0nYmkgYmktaW1hZ2UnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J002LjAwMiA1LjVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDB6Jy8lM0UlM0NwYXRoIGQ9J00yLjAwMiAxYTIgMiAwIDAgMC0yIDJ2MTBhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjNhMiAyIDAgMCAwLTItMmgtMTJ6bTEyIDFhMSAxIDAgMCAxIDEgMXY2LjVsLTMuNzc3LTEuOTQ3YS41LjUgMCAwIDAtLjU3Ny4wOTNsLTMuNzEgMy43MS0yLjY2LTEuNzcyYS41LjUgMCAwIDAtLjYzLjA2MkwxLjAwMiAxMlYzYTEgMSAwIDAgMSAxLTFoMTJ6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmltYWdlLWNvdmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTUwJTtcbiAgICAgICAgaGVpZ2h0OiAxNTAlO1xuICAgICAgICBib3JkZXI6IDU2cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICBpbnNldDogLTI1JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAuaW1hZ2UtbG9hZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBEMjQ0MDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC5zcGlubmVyLWJvcmRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMS41cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4uaW1hZ2UtY29udGVudC1mdWxsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ 21371:
/*!**************************************************!*\
  !*** ./src/app/pages/detail/detail.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/contract.service */ 7533);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);






function DetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailComponent_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.goOpensea(ctx_r2.landData.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " opensea ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.landData.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.landData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("gene: ", ctx_r0.landData.gene, "");
} }
function DetailComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "owner: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.landOwner);
} }
class DetailComponent {
    constructor(activedRoute, contractService, httpService) {
        this.activedRoute = activedRoute;
        this.contractService = contractService;
        this.httpService = httpService;
        this.landName = '';
        this.landOwner = '';
        this.landName = activedRoute.snapshot.paramMap.get('name');
        contractService.mainContract$.subscribe(isOk => {
            if (isOk) {
                this.initData();
            }
        });
    }
    ngOnInit() {
        global.window.scrollTo(0, 0);
    }
    initData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const standardName = yield this.contractService.convertToStandard(this.landName);
            console.log(standardName);
            this.getMetaData(standardName);
            this.getOwner(standardName);
        });
    }
    getMetaData(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!name)
                return;
            try {
                const urlStr = yield this.contractService.getMetadataUrl(name);
                const url = new URL(urlStr);
                const path = `/meta${url.pathname}`;
                this.landData = yield this.httpService.getMetadata(path);
            }
            catch (e) {
                console.log('land not exist');
            }
        });
    }
    getOwner(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!name)
                return;
            try {
                this.landOwner = yield this.contractService.getOwner(name);
            }
            catch (e) {
                console.log('have no owner');
            }
        });
    }
    goOpensea(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const standardName = yield this.contractService.convertToStandard(this.landName);
            let uri = yield this.contractService.getOpenseaUriByName(standardName);
            global.window.open(uri);
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 55, vars: 2, consts: [[1, "detail-bg"], ["class", "detail-card card", 4, "ngIf"], [1, "container"], [1, "detail-intro"], ["src", "../../../assets/images/detail-title-l.png", "alt", ""], [1, "mx-3", "mx-lg-5"], ["src", "../../../assets/images/detail-title-r.png", "alt", ""], [1, "row", "space"], [1, "col-lg"], [1, "space-item"], ["src", "../../../assets/images/space1.png", "alt", ""], ["src", "../../../assets/images/space2.png", "alt", ""], ["src", "../../../assets/images/space3.png", "alt", ""], [1, "row", "model"], [1, "col-12", "col-md-5", "pic"], [1, "col-12", "col-md-7", "card"], [1, "row", "align-items-center", "virtual"], [1, "col-12", "col-md-5", "order-md-last", "pic"], [1, "detail-soon"], [1, "btn"], ["class", "detail-owner", 4, "ngIf"], [1, "detail-card", "card"], [1, "row", "no-gutters"], [1, "card-img"], ["alt", "", 3, "src"], [1, "col-md-auto"], [1, "col-md", "d-flex", "align-items-center", "justify-content-end"], [1, "btn", "btn-opensea", 3, "click"], ["src", "../../../assets/images/opensea.png", "alt", ""], [1, "detail-owner"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailComponent_div_1_Template, 14, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Space Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Public space");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "The public space is similar to Wiki,edited and maintained publicly, and belongs to the public space of all humanity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Official space");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "The official space is reserved for official institutions to issue staffs like announcements and manufacture services, which is corresponding to the real world.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " OLandServer space");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "OLandServer space is the owner of the land, which can build its own content and services in a similar way to a domain name.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Business Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "There are several types of income that can be expected in OlandBox, one is the initial income of Mint; the other is the commission income of the future Oland exchange; the third is the income sharing of the incentive layer; the fourth is the content and services charged; The DApp ecosystem is divided into. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "This part of the income is divided into two parts,one part is the owner of the token the owner of Oland; the other part is the community fund. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "The community fund includes the R&D team, the operations team, the official certification of OlandBox, the community ecology, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Virtual image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "In the future, each landowner can generate different 2D / 3D images according to their genes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "The space of olandbox is coming soon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "To be continued");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, DetailComponent_div_54_Template, 6, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.landData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.landOwner);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".detail-bg[_ngcontent-%COMP%] {\n  background: url('beijing.png') center top no-repeat #09101A;\n}\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: 'Aileron';\n  font-weight: bolder;\n}\np[_ngcontent-%COMP%] {\n  font-family: 'Aileron-Thin';\n}\n.detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  vertical-align: middle;\n  padding: 40px 0;\n  background: linear-gradient(90deg, rgba(13, 25, 38, 0.6), rgba(9, 16, 26, 0.6));\n}\n.detail-card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n}\n.detail-card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n.detail-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #fff;\n}\n.detail-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #8F98B3;\n}\n.detail-card[_ngcontent-%COMP%]   .btn.btn-opensea[_ngcontent-%COMP%] {\n  padding: 18px 50px;\n  background: #1B3859;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 16px;\n}\n.detail-card[_ngcontent-%COMP%]   .btn.btn-opensea[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n}\n.detail-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 80px 0;\n  font-size: 56px;\n  color: #1073FB;\n  text-align: center;\n}\n.detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%] {\n  margin-bottom: 170px;\n}\n.detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%]   .space-item[_ngcontent-%COMP%] {\n  padding: 30px;\n  height: 100%;\n  background: rgba(15, 25, 38, 0.6);\n  border: 1px solid #192F4C;\n  border-radius: 10px;\n}\n.detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%]   .space-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #fff;\n  font-size: 23px;\n}\n.detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%]   .space-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  vertical-align: middle;\n}\n.detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%]   .space-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #8F98B3;\n}\n.detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%], .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 120px;\n  padding: 0 20px;\n  z-index: 2;\n}\n.detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: rgba(15, 25, 38, 0.6);\n  border-radius: 10px;\n  padding: 60px;\n}\n.detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 36px;\n  margin-bottom: 30px;\n}\n.detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #8F98B3;\n  font-size: 16px;\n}\n.detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  min-height: 380px;\n  background: url('detail1.png') left center no-repeat;\n}\n.detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: url('detail1.png') left center no-repeat;\n  filter: blur(80px);\n  z-index: -1;\n}\n.detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  min-height: 538px;\n  background: url('detail2.png') right center no-repeat;\n}\n.detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: url('detail2.png') right center no-repeat;\n  filter: brightness(4) drop-shadow(0px 0px 10px #000000) blur(56px);\n  z-index: -1;\n}\n.detail-soon[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n  background: rgba(4, 8, 13, 0.6);\n  border-radius: 20px;\n  text-align: center;\n  padding: 157px 0;\n}\n.detail-soon[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 36px;\n  font-weight: bold;\n  color: #FFFFFF;\n}\n.detail-soon[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 20px 60px;\n  background: #0E192E;\n  border-radius: 10px;\n  font-size: 30px;\n  color: #2563D9;\n}\n.detail-owner[_ngcontent-%COMP%] {\n  background: rgba(15, 27, 51, 0.6);\n}\n.detail-owner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  font-size: 16px;\n}\n.detail-owner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n}\n.detail-owner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  padding: 13px 40px;\n  background: #09101A;\n  border-radius: 5px;\n  color: #7C859D;\n}\n@media (max-width: 1199.98px) {\n  .detail-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media (max-width: 991.98px) {\n  .detail-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 767.98px) {\n  .detail-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n}\n@media (max-width: 575.98px) {\n  .detail-card[_ngcontent-%COMP%] {\n    padding: 20px 0;\n  }\n  .detail-card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    margin-right: 10px;\n  }\n  .detail-card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .detail-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .detail-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .detail-card[_ngcontent-%COMP%]   .btn.btn-opensea[_ngcontent-%COMP%] {\n    padding: 9px 25px;\n    border-radius: 5px;\n    font-size: 8px;\n  }\n  .detail-card[_ngcontent-%COMP%]   .btn.btn-opensea[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 12px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding: 40px 0;\n    font-size: 20px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 20px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%] {\n    margin-bottom: 85px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%]   .space-item[_ngcontent-%COMP%] {\n    padding: 15px;\n    border-radius: 5px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%]   .space-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%]   .space-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 25px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   .col-lg[_ngcontent-%COMP%]   .space-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%], .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%] {\n    margin-bottom: 60px;\n    padding: 0 10px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    padding: 30px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 15px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 12px;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n    min-height: 246px;\n    background: url('detail1.png') center center / 50% no-repeat;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]::after {\n    background: url('detail1.png') center center / 50% no-repeat;\n    filter: blur(40px);\n  }\n  .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n    min-height: 317px;\n    background: url('detail2.png') center center / 50% no-repeat;\n  }\n  .detail-intro[_ngcontent-%COMP%]   .virtual[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]::after {\n    background: url('detail2.png') center center / 50% no-repeat;\n    filter: brightness(4) drop-shadow(0px 0px 10px #000000) blur(56px);\n  }\n  .detail-soon[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n    border-radius: 10px;\n    padding: 80px 0;\n  }\n  .detail-soon[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    font-size: 18px;\n  }\n  .detail-soon[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 10px 30px;\n    border-radius: 5px;\n    font-size: 15px;\n  }\n  .detail-owner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    font-size: 10px;\n  }\n  .detail-owner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    padding: 8px 20px;\n    border-radius: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJEQUFBO0FBQ0o7QUFDQTs7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBQTtFQUNJLDJCQUFBO0FBRUo7QUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSwrRUFBQTtBQUVKO0FBTkE7RUFNTyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR1A7QUFYQTtFQVVRLFdBQUE7RUFDQSxZQUFBO0FBSVI7QUFmQTtFQWVRLGVBQUE7RUFDQSxXQUFBO0FBR1I7QUFuQkE7RUFtQlEsZUFBQTtFQUNBLGNBQUE7QUFHUjtBQXZCQTtFQXVCUSxrQkFBQTtFQUlBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFSO0FBOUJBO0VBeUJZLFdBQUE7QUFRWjtBQUFBO0VBRVEsU0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ1I7QUFQQTtFQVNRLG9CQUFBO0FBQ1I7QUFWQTtFQVdZLGFBQUE7QUFFWjtBQWJBO0VBYWdCLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBR2hCO0FBcEJBO0VBbUJvQixtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSXBCO0FBekJBO0VBdUJ3QixXQUFBO0VBQ0Esc0JBQUE7QUFLeEI7QUE3QkE7RUE0Qm9CLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUlwQjtBQWxDQTs7RUFzQ1Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQVI7QUF6Q0E7O0VBMkNZLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRVo7QUEvQ0E7O0VBK0NnQixXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSWhCO0FBckRBOztFQW9EZ0IsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUtoQjtBQTNEQTs7RUF5RGdCLGdCQUFBO0FBTWhCO0FBL0RBO0VBK0RZLGlCQUFBO0VBQ0Esb0RBQUE7QUFHWjtBQW5FQTtFQW1FWSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBR1o7QUE1RUE7RUE4RVksaUJBQUE7RUFDQSxxREFBQTtBQUNaO0FBaEZBO0VBa0ZZLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxrRUFBQTtFQUNBLFdBQUE7QUFDWjtBQUlBO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSEE7RUFPUSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFEUjtBQVRBO0VBYVEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFEUjtBQUlBO0VBQ0ksaUNBQUE7QUFGSjtBQUNBO0VBR1EsZUFBQTtFQUNBLGVBQUE7QUFEUjtBQUhBO0VBTVksU0FBQTtFQUNBLFdBQUE7QUFBWjtBQVBBO0VBU2dCLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNoQjtBQVdBO0VBQ0k7SUFFUSxlQUFBO0VBVlY7QUFDRjtBQWNBO0VBQ0k7SUFFUSxlQUFBO0VBYlY7QUFDRjtBQWlCQTtFQUNJO0lBRVEsZUFBQTtFQWhCVjtFQWNFO0lBSVksWUFBQTtFQWZkO0FBQ0Y7QUFvQkE7RUFDSTtJQUNJLGVBQUE7RUFsQk47RUFpQkU7SUFHTyxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBakJUO0VBWUU7SUFPUSxXQUFBO0lBQ0EsWUFBQTtFQWhCVjtFQVFFO0lBWVEsZUFBQTtFQWpCVjtFQUtFO0lBZVEsZUFBQTtFQWpCVjtFQUVFO0lBa0JRLGlCQUFBO0lBSUEsa0JBQUE7SUFDQSxjQUFBO0VBcEJWO0VBSEU7SUFvQlksV0FBQTtFQWRkO0VBb0JFO0lBRVEsZUFBQTtJQUNBLGVBQUE7RUFuQlY7RUFnQkU7SUFLWSxZQUFBO0VBbEJkO0VBYUU7SUFTUSxtQkFBQTtFQW5CVjtFQVVFO0lBV1ksYUFBQTtFQWxCZDtFQU9FO0lBYWdCLGFBQUE7SUFDQSxrQkFBQTtFQWpCbEI7RUFHRTtJQWdCb0IsbUJBQUE7SUFDQSxlQUFBO0VBaEJ0QjtFQURFO0lBbUJ3QixXQUFBO0VBZjFCO0VBSkU7SUF1Qm9CLGVBQUE7RUFoQnRCO0VBUEU7O0lBNkJRLG1CQUFBO0lBQ0EsZUFBQTtFQWxCVjtFQVpFOztJQWdDWSxrQkFBQTtJQUNBLGFBQUE7RUFoQmQ7RUFqQkU7O0lBbUNnQixlQUFBO0lBQ0EsbUJBQUE7RUFkbEI7RUF0QkU7O0lBdUNnQixtQkFBQTtJQUNBLGVBQUE7RUFibEI7RUEzQkU7SUE4Q1ksaUJBQUE7SUFDQSw0REFBQTtFQWhCZDtFQS9CRTtJQWtEWSw0REFBQTtJQUNBLGtCQUFBO0VBaEJkO0VBbkNFO0lBd0RZLGlCQUFBO0lBQ0EsNERBQUE7RUFsQmQ7RUF2Q0U7SUE0RFksNERBQUE7SUFDQSxrRUFBQTtFQWxCZDtFQXNCRTtJQUNJLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBcEJOO0VBaUJFO0lBS1EsbUJBQUE7SUFDQSxlQUFBO0VBbkJWO0VBYUU7SUFTUSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQW5CVjtFQXNCRTtJQUVRLGVBQUE7SUFDQSxlQUFBO0VBckJWO0VBa0JFO0lBTWdCLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQXJCbEI7QUFDRiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZWlqaW5nLnBuZykgY2VudGVyIHRvcCBuby1yZXBlYXQgIzA5MTAxQTtcbn1cbmgyLCBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdBaWxlcm9uJztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxucCB7XG4gICAgZm9udC1mYW1pbHk6ICdBaWxlcm9uLVRoaW4nO1xufVxuLmRldGFpbC1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogNDBweCAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMywgMjUsIDM4LCAwLjYpLCByZ2JhKDksIDE2LCAyNiwgMC42KSk7XG4gICAuY2FyZC1pbWcge1xuICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICB9XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICM4Rjk4QjM7XG4gICAgfVxuICAgIC5idG4uYnRuLW9wZW5zZWEge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDUwcHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgfVxuICAgICAgICBiYWNrZ3JvdW5kOiAjMUIzODU5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cbi5kZXRhaWwtaW50cm8ge1xuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiA4MHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICAgICAgY29sb3I6ICMxMDczRkI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnNwYWNlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTcwcHg7XG4gICAgICAgIC5jb2wtbGcge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDsgICBcbiAgICAgICAgICAgIC5zcGFjZS1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyNSwgMzgsIDAuNik7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE5MkY0QztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOEY5OEIzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1vZGVsLCAudmlydHVhbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjUsIDM4LCAwLjYpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOEY5OEIzO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubW9kZWwge1xuICAgICAgICAucGljIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kZXRhaWwxLnBuZ1wiKSBsZWZ0IGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLnBpYzo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kZXRhaWwxLnBuZ1wiKSBsZWZ0IGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoODBweCk7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgLnZpcnR1YWwge1xuICAgICAgICAucGljIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUzOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kZXRhaWwyLnBuZ1wiKSByaWdodCBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC5waWM6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGV0YWlsMi5wbmdcIikgcmlnaHQgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg0KSAgZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMSkpIGJsdXIoNTZweCk7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgXG59XG4uZGV0YWlsLXNvb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSg0LCA4LCAxMywgMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNTdweCAwO1xuICAgIGgzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwRTE5MkU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgY29sb3I6ICMyNTYzRDk7XG4gICAgfVxufVxuLmRldGFpbC1vd25lciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjcsIDUxLCAwLjYpO1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTNweCA0MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwOTEwMUE7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjN0M4NTlEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5cblxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgeyBcbiAgICAuZGV0YWlsLWludHJvIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxuIH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7IFxuICAgIC5kZXRhaWwtaW50cm8ge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHsgXG4gICAgLmRldGFpbC1pbnRybyB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7IFxuICAgIC5kZXRhaWwtY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAuY2FyZC1pbWcge1xuICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLmJ0bi1vcGVuc2VhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweCAyNXB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kZXRhaWwtaW50cm8ge1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3BhY2Uge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogODVweDtcbiAgICAgICAgICAgIC5jb2wtbGcge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7ICAgXG4gICAgICAgICAgICAgICAgLnNwYWNlLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tb2RlbCwgLnZpcnR1YWwge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGVsIHtcbiAgICAgICAgICAgIC5waWMge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0NnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGV0YWlsMS5wbmdcIikgY2VudGVyIGNlbnRlciAvIDUwJSBuby1yZXBlYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGljOjphZnRlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kZXRhaWwxLnBuZ1wiKSBjZW50ZXIgY2VudGVyIC8gNTAlIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoNDBweCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIC52aXJ0dWFsIHtcbiAgICAgICAgICAgIC5waWMge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMxN3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGV0YWlsMi5wbmdcIikgY2VudGVyIGNlbnRlciAvIDUwJSBuby1yZXBlYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGljOjphZnRlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kZXRhaWwyLnBuZ1wiKSBjZW50ZXIgY2VudGVyIC8gNTAlIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNCkgIGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDEpKSBibHVyKDU2cHgpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGV0YWlsLXNvb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiA4MHB4IDA7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRldGFpbC1vd25lciB7XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiB9Il19 */"] });


/***/ }),

/***/ 58449:
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 24824:
/*!****************************************************!*\
  !*** ./src/app/pages/history/history.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_mint_history_mint_history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/mint-history/mint-history.component */ 25308);


class HistoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(); };
HistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], decls: 5, vars: 0, consts: [[1, "history"], [1, "container"], [1, "history-title"], ["lengthLimit", "100"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "MINT HISTORY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-mint-history", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_components_mint_history_mint_history_component__WEBPACK_IMPORTED_MODULE_0__.MintHistoryComponent], styles: [".history[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 150px);\n  background-color: #09101A;\n}\n.history[_ngcontent-%COMP%]   .history-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: bold;\n  color: #FFFFFF;\n  padding: 40px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFIQTtFQUlRLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRVIiLCJmaWxlIjoiaGlzdG9yeS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5IHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTEwMUE7XG4gICAgLmhpc3RvcnktdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgcGFkZGluZzogNDBweCAwO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 25245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.model */ 8442);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _service_caculate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/caculate.service */ 5815);
/* harmony import */ var src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/contract.service */ 7533);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/alert.service */ 43833);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _logout_board_logout_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logout-board/logout-board.component */ 25811);
/* harmony import */ var _components_mint_history_mint_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/mint-history/mint-history.component */ 25308);
/* harmony import */ var _search_tip_search_tip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-tip/search-tip.component */ 1088);
/* harmony import */ var _minted_minted_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./minted/minted.component */ 99562);
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/cards/cards.component */ 48194);

















function HomeComponent__svg_svg_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function HomeComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "span", 16);
} }
function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Input between 6 and 50 characters and alphabets only");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function HomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Minting");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function HomeComponent_app_logout_board_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-logout-board");
} }
function HomeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-mint-history");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function HomeComponent_div_18_app_minted_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-minted", 26);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("landInfo", ctx_r7.landInfo);
} }
function HomeComponent_div_18_div_3_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "matic");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Land Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.landInfo.originPrice);
} }
function HomeComponent_div_18_div_3_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "matic");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Favorable Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r10.landInfo.offPrice);
} }
function HomeComponent_div_18_div_3_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_div_18_div_3_div_28_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r15.mintSlipToggle = !ctx_r15.mintSlipToggle; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Because of the rise price of land floors, it is necessary for you to pay 10% more to prevent the purchase from failing. And the excess payment amount will be returned after the transaction. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function HomeComponent_div_18_div_3_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_div_18_div_3_div_33_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r17.mintSlipToggle = !ctx_r17.mintSlipToggle; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Because of the rise price of land floors, it is necessary for you to pay 10% more to prevent the purchase from failing. And the excess payment amount will be returned after the transaction. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function HomeComponent_div_18_div_3_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "matic");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Land Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r13.landInfo.originPrice);
} }
function HomeComponent_div_18_div_3_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "matic");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Favorable Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r14.landInfo.offPrice);
} }
const _c0 = function (a0) { return { "toggle": a0 }; };
function HomeComponent_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_div_18_div_3_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r19.goDetail(ctx_r19.landInfo.standardName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " length");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_div_18_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r21.goDetail(ctx_r21.landInfo.standardName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " View land ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "app-cards", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HomeComponent_div_18_div_3_div_16_Template, 7, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, HomeComponent_div_18_div_3_div_17_Template, 7, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_div_18_div_3_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r22.mintSlipToggle = !ctx_r22.mintSlipToggle; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "+10% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_div_18_div_3_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r23.mint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Click to mint");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, HomeComponent_div_18_div_3_div_28_Template, 6, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, HomeComponent_div_18_div_3_div_33_Template, 6, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, HomeComponent_div_18_div_3_div_35_Template, 7, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_div_18_div_3_Template_div_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r24.mintSlipToggle = !ctx_r24.mintSlipToggle; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "+10% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, HomeComponent_div_18_div_3_div_40_Template, 7, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_div_18_div_3_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r25.mint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Click to mint");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r8.landInfo.standardName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r8.landInfo.logicLength, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("landInfo", ctx_r8.landInfo)("isSearching", ctx_r8.isSearching);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r8.landInfo.selectedCardId || ctx_r8.landInfo.selectedCardId && ctx_r8.landInfo.selectedCardLength !== ctx_r8.landInfo.logicLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.landInfo.selectedCardId && ctx_r8.landInfo.selectedCardLength === ctx_r8.landInfo.logicLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](16, _c0, ctx_r8.mintSlipToggle));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Sell out 10, and the price rises by ", ctx_r8.rise, "matic.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r8.landInfo.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.mintSlipToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Sell out 10, and the price rises by ", ctx_r8.rise, "matic. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.mintSlipToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r8.landInfo.selectedCardId || ctx_r8.landInfo.selectedCardId && ctx_r8.landInfo.selectedCardLength !== ctx_r8.landInfo.logicLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c0, ctx_r8.mintSlipToggle));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.landInfo.selectedCardId && ctx_r8.landInfo.selectedCardLength === ctx_r8.landInfo.logicLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r8.landInfo.disabled);
} }
function HomeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-search-tip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HomeComponent_div_18_app_minted_2_Template, 1, 1, "app-minted", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HomeComponent_div_18_div_3_Template, 43, 20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("landInfo", ctx_r6.landInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.landInfo.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r6.landInfo.owner);
} }
// export class LandInfo {
//   name: string = '';
//   price: string = '';
//   owner: string = '';
//   img: string = '';
//   disabled: boolean = true;
//   selectedCard: Card = null;
//   cardPrice: string = '';
//   logicLength: number = null;
//   constructor() {}
// }
class HomeComponent {
    constructor(router, modalService, caculateService, contractService, httpService, alertService, activatedRoute) {
        this.router = router;
        this.modalService = modalService;
        this.caculateService = caculateService;
        this.contractService = contractService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.activatedRoute = activatedRoute;
        this.statuEnum = _home_model__WEBPACK_IMPORTED_MODULE_0__.BoardStatus;
        this.boardStatus = _home_model__WEBPACK_IMPORTED_MODULE_0__.BoardStatus.offLine;
        this.isSearching = false;
        this.isSubmitting = false;
        this.isMinting = false;
        this.rise = '0.1';
        this.landInfo = new _home_model__WEBPACK_IMPORTED_MODULE_0__.LandInfo();
        this.verifyTip = false;
        this.mintSlipToggle = false;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    }
    ngOnInit() {
        this.contractService.chainStatus$.subscribe(status => {
            this.chainStatus = status;
            if (status) {
                if (this.landInfo.standardName !== '') {
                    this.boardStatus = this.statuEnum.search;
                }
                else {
                    this.boardStatus = this.statuEnum.default;
                }
            }
            else {
                this.boardStatus = this.statuEnum.offLine;
            }
        });
        this.contractService.account$.subscribe(account => {
            this.account = account;
            if (!this.account) {
                this.landName = '';
                if (this.chainStatus) {
                    this.boardStatus = this.statuEnum.default;
                }
                else {
                    this.boardStatus = this.statuEnum.offLine;
                }
            }
            else {
                this.getVoucherByUrl();
            }
        });
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.unsubscribe();
    }
    // 通过url获取已选择voucher
    getVoucherByUrl() {
        this.activatedRoute.queryParams.subscribe((queryParams) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (queryParams.voucher) {
                const cardIds = yield this.contractService.getCardIds();
                const isOwnCard = cardIds.indexOf(queryParams.voucher);
                console.log(isOwnCard);
                if (isOwnCard > -1) {
                    this.landInfo.selectedCardId = queryParams.voucher;
                    this.landInfo.selectedCardLength = +this.landInfo.selectedCardId.slice(0, -2);
                    this.landInfo.selectedCardPercent = +this.landInfo.selectedCardId.slice(this.landInfo.selectedCardId.length - 2);
                }
                else {
                    this.landInfo.selectedCardId = '';
                    this.landInfo.selectedCardLength = null;
                    this.landInfo.selectedCardPercent = null;
                }
            }
            else {
                this.landInfo.selectedCardId = '';
                this.landInfo.selectedCardLength = null;
                this.landInfo.selectedCardPercent = null;
            }
            this.isDisabled();
            this.getOffPrice();
            this.getBalance();
        }));
    }
    search(landName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (landName.trim() === '') {
                this.boardStatus = _home_model__WEBPACK_IMPORTED_MODULE_0__.BoardStatus.default;
                return;
            }
            this.isSearching = true;
            const standardName = yield this.contractService.convertToStandard(landName);
            if (!this.caculateService.verifyLenth(standardName)) {
                this.verifyTip = true;
                this.isSearching = false;
                return;
            }
            this.landInfo.standardName = '';
            this.landInfo.logicLength = null;
            this.landInfo.originPrice = '';
            this.landInfo.owner = '';
            this.landInfo.img = '';
            this.landInfo.disabled = true;
            this.landInfo.offPrice = '';
            this.landInfo.voucherBalance = 0;
            this.landInfo = Object.assign({}, this.landInfo);
            try {
                this.landInfo.standardName = standardName;
                this.landInfo.logicLength = +(yield this.contractService.getLogicLength(standardName));
                if (this.landInfo.logicLength == 6) {
                    this.rise = '0.5';
                }
                if (this.landInfo.logicLength == 7) {
                    this.rise = '0.3';
                }
                const isExist = yield this.contractService.isExist(standardName);
                if (isExist) {
                    this.landInfo.owner = yield this.contractService.getOwner(standardName);
                    this.landInfo.img = yield this.getMetaImage(standardName);
                }
                else {
                    this.landInfo.originPrice = yield this.contractService.getPriceByStr(standardName);
                    this.isDisabled();
                    this.getOffPrice();
                    this.getBalance();
                }
                this.boardStatus = _home_model__WEBPACK_IMPORTED_MODULE_0__.BoardStatus.search;
            }
            catch (error) {
                this.alertService.create({
                    body: error,
                    color: 'warning',
                    time: 3000
                });
            }
            finally {
                this.isSearching = false;
            }
        });
    }
    // 计算land是否不可mint
    isDisabled() {
        if (this.landInfo.logicLength >= 8) {
            this.landInfo.disabled = false;
        }
        else if (this.landInfo.logicLength >= 6 && this.landInfo.logicLength < 8) {
            if (this.landInfo.selectedCardId) {
                if (this.landInfo.selectedCardLength === this.landInfo.logicLength) {
                    this.landInfo.disabled = false;
                }
                else {
                    this.landInfo.disabled = true;
                }
            }
            else {
                this.landInfo.disabled = true;
            }
        }
    }
    getOffPrice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.landInfo.selectedCardId) {
                this.landInfo.offPrice = yield this.contractService.getPriceByCard(+this.landInfo.selectedCardId);
            }
            else {
                this.landInfo.offPrice = this.landInfo.originPrice;
            }
        });
    }
    getBalance() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.landInfo.selectedCardId) {
                this.landInfo.voucherBalance = yield this.contractService.getBalanceOf(this.account, +this.landInfo.selectedCardId);
            }
            else {
                this.landInfo.voucherBalance = 0;
            }
        });
    }
    // 元数据
    getMetaData(standardName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const urlStr = yield this.contractService.getMetadataUrl(standardName);
            const url = new URL(urlStr);
            const path = `/meta${url.pathname}`;
            return yield this.httpService.getMetadata(path);
        });
    }
    // 元数据绕开http跨域问题
    getMetaImage(standardName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const urlStr = yield this.contractService.getMetadataUrl(standardName);
            return urlStr.replace('data.json', 'image.png');
        });
    }
    mint() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.account) {
                yield this.contractService.connectAccount();
                this.mint();
            }
            else {
                this.isSubmitting = true;
                this.isMinting = true;
                try {
                    // 判断是否授权
                    const isApproved = yield this.contractService.isApproved(this.account);
                    console.log('isApproved', isApproved);
                    if (!isApproved) {
                        const setApproved = yield this.contractService.setApprove(true);
                        if (!setApproved.status)
                            return;
                    }
                    // mint 
                    // TODO 判断应该用什么价格mint
                    let mint;
                    if (!!this.landInfo.selectedCardId && this.landInfo.selectedCardLength === this.landInfo.logicLength) {
                        const nowPrice = yield this.contractService.getPriceByCard(+this.landInfo.selectedCardId);
                        const nowSlipPrice = yield this.contractService.getSlipPriceWei(nowPrice);
                        mint = yield this.contractService.mintByCard(this.landInfo.standardName, nowSlipPrice, +this.landInfo.selectedCardId);
                    }
                    else {
                        const nowPrice = yield this.contractService.getPriceByStr(this.landInfo.standardName);
                        const nowSlipPrice = yield this.contractService.getSlipPriceWei(nowPrice);
                        mint = yield this.contractService.mint(this.landInfo.standardName, nowSlipPrice);
                    }
                    if (mint.status) {
                        this.clearSearch();
                    }
                }
                catch (error) {
                    this.alertService.create({
                        body: 'Mint Failed',
                        color: 'danger',
                        time: 5000
                    });
                }
                finally {
                    this.isSubmitting = false;
                    this.isMinting = false;
                }
            }
        });
    }
    clearSearch() {
        this.landName = '';
        this.landInfo = new _home_model__WEBPACK_IMPORTED_MODULE_0__.LandInfo();
        this.boardStatus = _home_model__WEBPACK_IMPORTED_MODULE_0__.BoardStatus.default;
        const url = this.router.url.split('?')[0];
        this.router.navigate([url]);
    }
    goDetail(landName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/detail', landName + '.verify']);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_caculate_service__WEBPACK_IMPORTED_MODULE_1__.CaculateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_2__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 19, vars: 10, consts: [[1, "mint-bg", "main"], [1, "container"], [1, "title-text"], [1, "name-search", "position-relative"], [1, "mb-3"], [1, "input-group"], ["type", "text", "name", "land", "placeholder", "Support English letters and numbers", 1, "form-control", "form-control-lg", "py-3", 3, "disabled", "ngModel", "ngModelChange", "keyup.enter", "keyup"], ["type", "submit", "name", "land", 1, "btn", "btn-primary", "px-4", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "class", "bi bi-search", "viewBox", "0 0 16 16", 4, "ngIf"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "position-absolute name-search-tip", 4, "ngIf"], ["class", "mask", 4, "ngIf"], [4, "ngIf"], ["class", "section", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-search"], ["d", "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "position-absolute", "name-search-tip"], [1, "mask"], [1, "d-flex", "flex-column", "align-items-center"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "5rem", "height", "5rem"], [1, "visually-hidden"], [1, "text-primary", "mt-3"], [1, "text-center", "mb-3"], ["routerLink", "/past", 1, "btn", "btn-view"], [1, "section"], [3, "landInfo"], [3, "landInfo", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-45"], [1, "font-importent", "fs-1", "text-truncate", "w-auto", 3, "click"], [1, "d-flex", "justify-content-end", "align-items-stretch", "w-land"], [1, "land-length"], [1, "btn", "btn-dark", "mr-0", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-right"], ["fill-rule", "evenodd", "d", "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"], [3, "landInfo", "isSearching"], [1, "mint", "d-none", "d-md-flex", "justify-content-start", "align-items-center"], ["class", "mint-price", 4, "ngIf"], [1, "mint-slip", 3, "ngClass", "click"], ["xmlns", "http://www.wS.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-info-circle-fill"], ["d", "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"], [1, "mint-tip"], ["src", "../../../assets/images/arrow-up.svg", 1, "svg-importent"], [1, "btn", 3, "disabled", "click"], ["class", "mint-slip-tip d-none d-md-flex", 4, "ngIf"], [1, "d-md-none", "mint-sm"], ["class", "mint-slip-tip", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], ["class", "text-center", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-info-circle-fill"], [1, "btn", "ml-1", 3, "disabled", "click"], [1, "mint-price"], [1, "font-importent"], [1, "font-second"], [1, "mint-slip-tip", "d-none", "d-md-flex"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-up"], ["fill-rule", "evenodd", "d", "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"], [1, "mint-slip-tip"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-up"], [1, "text-center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "ONE LAND ONE WORLD");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_8_listener($event) { return ctx.landName = $event; })("keyup.enter", function HomeComponent_Template_input_keyup_enter_8_listener() { return ctx.search(ctx.landName); })("keyup", function HomeComponent_Template_input_keyup_8_listener() { return ctx.verifyTip = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.search(ctx.landName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, HomeComponent__svg_svg_10_Template, 2, 0, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, HomeComponent_span_11_Template, 1, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, HomeComponent_div_15_Template, 6, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HomeComponent_app_logout_board_16_Template, 1, 0, "app-logout-board", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, HomeComponent_div_17_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, HomeComponent_div_18_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.chainStatus || ctx.isSearching)("ngModel", ctx.landName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.chainStatus || ctx.isSearching);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isSearching);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isSearching);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.verifyTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isMinting);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.boardStatus === ctx.statuEnum.default);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.boardStatus === ctx.statuEnum.default);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.boardStatus === ctx.statuEnum.search);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _logout_board_logout_board_component__WEBPACK_IMPORTED_MODULE_5__.LogoutBoardComponent, _components_mint_history_mint_history_component__WEBPACK_IMPORTED_MODULE_6__.MintHistoryComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _search_tip_search_tip_component__WEBPACK_IMPORTED_MODULE_7__.SearchTipComponent, _minted_minted_component__WEBPACK_IMPORTED_MODULE_8__.MintedComponent, _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_9__.CardsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass], styles: [".mint-bg[_ngcontent-%COMP%] {\n  background: url('bg-new.jpg') no-repeat center;\n  background-size: cover;\n}\n.mask[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.title-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4rem 0 0 0;\n  display: inline-block;\n  height: 4rem;\n  line-height: 4rem;\n  font-size: 4rem;\n  font-weight: 900;\n  background: linear-gradient(180deg, #2153D3 0%, #0B1622 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.name-search[_ngcontent-%COMP%] {\n  padding: 8rem 0 0 0;\n  margin-bottom: 4rem;\n  color: #fff;\n}\n.name-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #3F6BD7;\n  border-radius: 0.625rem !important;\n  height: 4rem;\n}\n.name-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 10rem;\n  background: linear-gradient(90deg, #2153D3, #4866B0);\n}\n.name-search[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  margin-right: 0.6rem;\n}\n.name-search[_ngcontent-%COMP%]   .name-search-tip[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  font-size: 12px;\n  color: #5F6677;\n  bottom: -24px;\n}\n.name-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .name-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 0.625rem;\n  margin-right: 1rem;\n  color: #fff;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n  padding: 2.5rem;\n  color: #fff;\n  border: 1px solid #666D80;\n  border-radius: 0.625rem;\n  background: #080F17;\n}\n.section[_ngcontent-%COMP%]   .searching[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.section[_ngcontent-%COMP%]   .land-length[_ngcontent-%COMP%] {\n  background: #0D1926;\n  color: #666D80;\n  padding: 1rem 1.875rem;\n  border-radius: 5px;\n  line-height: 1;\n  text-align: center;\n  font-size: 14px;\n}\n.section[_ngcontent-%COMP%]   .w-land[_ngcontent-%COMP%] {\n  width: auto;\n}\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.mb-45[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.border-gray[_ngcontent-%COMP%] {\n  color: #666D80;\n}\n.land-owner[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  margin: 2.5rem 0 1.875rem 0;\n  background: #0D1926;\n  border-radius: 10px;\n  font-size: 16px;\n  font-family: Aileron;\n  font-weight: 100;\n  color: #666D80;\n}\n.land-img[_ngcontent-%COMP%] {\n  width: 12.5rem;\n  height: 12.5rem;\n}\n.btn-dark[_ngcontent-%COMP%] {\n  padding: 0 1.875rem;\n  color: #fff;\n  background: #1B3859;\n  border-radius: 5px;\n  margin-right: 2.4rem;\n  line-height: 3.75rem;\n}\n.btn-nomal[_ngcontent-%COMP%] {\n  padding: 0 1.875rem;\n  color: #fff;\n  background: linear-gradient(90deg, #2153D3, #4866B0);\n  border-radius: 5px;\n  border: none;\n  line-height: 3.75rem;\n}\n.btn-nomal[_ngcontent-%COMP%]:disabled {\n  background: #26374D;\n}\n.mint[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  background: #122133;\n  border-radius: 10px;\n}\n.mint[_ngcontent-%COMP%]   .font-importent[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.mint[_ngcontent-%COMP%]   .font-importent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.mint[_ngcontent-%COMP%]   .font-second[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.mint[_ngcontent-%COMP%]   .mint-price[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mint[_ngcontent-%COMP%]   .mint-slip[_ngcontent-%COMP%] {\n  flex: auto 0 0;\n  background: #26374D;\n  padding: 8px 10px;\n  border-radius: 5px;\n  margin-left: 10px;\n  margin-right: auto;\n  color: #666D80;\n  cursor: pointer;\n}\n.mint[_ngcontent-%COMP%]   .mint-slip.toggle[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mint[_ngcontent-%COMP%]   .mint-tip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 40px;\n  background: #0D1926;\n  border-radius: 10px;\n  font-size: 1rem;\n  color: #666D80;\n  height: 60px;\n}\n.mint[_ngcontent-%COMP%]   .mint-tip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n.mint[_ngcontent-%COMP%]   .mint-tip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: auto 0 0;\n  place-self: stretch;\n  margin-left: 40px;\n  padding: 0 38px;\n  color: #fff;\n  background: linear-gradient(90deg, #2153D3, #4866B0);\n  border-radius: 10px;\n}\n.mint[_ngcontent-%COMP%]   .mint-tip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background: #26374D;\n}\n.mint-slip-tip[_ngcontent-%COMP%] {\n  justify-content: left;\n  align-items: center;\n  padding: 30px;\n  background-color: #0D1926;\n  color: #666D80;\n}\n.mint-slip-tip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 0;\n  margin-right: 10px;\n  text-align: center;\n  cursor: pointer;\n  flex: 24px 1 0;\n  height: 24px;\n  background: #fff;\n  color: #0D1926;\n  flex-grow: 0;\n}\n.mint-slip-tip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mint-sm[_ngcontent-%COMP%]   .mint-slip[_ngcontent-%COMP%] {\n  flex: auto 0 0;\n  background: #26374D;\n  padding: 8px 10px;\n  border-radius: 5px;\n  margin-left: 10px;\n  margin-right: auto;\n  color: #666D80;\n  cursor: pointer;\n}\n.mint-sm[_ngcontent-%COMP%]   .mint-slip.toggle[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mint-sm[_ngcontent-%COMP%]   .mint-tip[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-bottom: 10px;\n  background: #0D1926;\n  border-radius: 5px;\n  font-size: 10px;\n  color: #666D80;\n}\n.mint-sm[_ngcontent-%COMP%]   .mint-slip-tip[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 15px;\n  background-color: #0D1926;\n  color: #666D80;\n}\n.mint-sm[_ngcontent-%COMP%]   .mint-slip-tip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 0;\n  margin-right: 5px;\n  text-align: center;\n  cursor: pointer;\n  flex: 16px 1 0;\n  height: 16px;\n  background: #fff;\n  color: #0D1926;\n}\n.mint-sm[_ngcontent-%COMP%]   .mint-slip-tip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n.mint-sm[_ngcontent-%COMP%]   .mint-slip-tip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.mint-sm[_ngcontent-%COMP%]   .font-importent[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.mint-sm[_ngcontent-%COMP%]   .font-importent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.mint-sm[_ngcontent-%COMP%]   .font-second[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n}\n.mint-sm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: auto 0 0;\n  padding: 10px 10px;\n  color: #fff;\n  background: linear-gradient(90deg, #2153D3, #4866B0);\n  border-radius: 5px;\n}\n.mint-sm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background: #26374D;\n}\n.btn-view[_ngcontent-%COMP%] {\n  padding-left: 80px;\n  padding-right: 80px;\n  height: 60px;\n  background: linear-gradient(-90deg, rgba(32, 80, 203, 0.8), #2E62E6);\n  border-radius: 30px;\n  font-size: 20px;\n  color: #fff;\n}\n@media (max-width: 1199.98px) {\n  .mint[_ngcontent-%COMP%]   .mint-tip[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    height: 60px;\n  }\n  .mint[_ngcontent-%COMP%]   .mint-tip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    padding: 0 5px;\n  }\n}\n@media (max-width: 767.98px) {\n  .title-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 2.5rem 0 0 0;\n    font-size: 2.5rem;\n  }\n  .name-search[_ngcontent-%COMP%] {\n    padding: 4rem 0 0 0;\n    margin-bottom: 2rem;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .section[_ngcontent-%COMP%]   .land-length[_ngcontent-%COMP%] {\n    padding: 0.5rem 1.875rem;\n    text-align: center;\n    font-size: 12px;\n  }\n  .section[_ngcontent-%COMP%]   .w-land[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  hr[_ngcontent-%COMP%] {\n    margin-bottom: 1.25rem;\n  }\n  .mb-45[_ngcontent-%COMP%] {\n    margin-bottom: 1.25rem;\n  }\n  .btn-view[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    padding-right: 40px;\n    height: 30px;\n    background: linear-gradient(-90deg, rgba(32, 80, 203, 0.8), #2E62E6);\n    border-radius: 150px;\n    font-size: 10px;\n    color: #fff;\n  }\n  .btn-dark[_ngcontent-%COMP%] {\n    line-height: 2.75rem;\n  }\n  .btn-nomal[_ngcontent-%COMP%] {\n    line-height: 2.75rem;\n  }\n}\n@media (max-width: 575.98px) {\n  .title-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 2rem;\n  }\n  .name-search[_ngcontent-%COMP%] {\n    padding: 1rem 0 0 0;\n  }\n  .name-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding-left: 1.25rem !important;\n    height: 3.5rem;\n  }\n  .name-search[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    max-width: 6.1875rem;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n  .badge-sail[_ngcontent-%COMP%] {\n    width: 12rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNBLE9BQU87QUFHUDtFQUNJLGtCQUFBO0FBREo7QUFBQTtFQUdRLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2REFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQUFSO0FBQ0EsV0FBVztBQUlYO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFGSjtBQURBO0VBS1EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUFEUjtBQU5BO0VBVVEsWUFBQTtFQUNBLG9EQUFBO0FBRFI7QUFWQTtFQWNRLGFBQUE7RUFDQSxvQkFBQTtBQURSO0FBZEE7RUFrQlEsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQURSO0FBSUE7O0VBR0ksb0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhKO0FBTUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSko7QUFGQTtFQVFRLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFYQTtFQWlCUSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBcEJBO0VBMEJRLFdBQUE7QUFIUjtBQU1BO0VBQ0kscUJBQUE7QUFKSjtBQU1BO0VBQ0kscUJBQUE7QUFKSjtBQU1BO0VBQ0ksY0FBQTtBQUpKO0FBTUE7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSko7QUFPQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBTEo7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBTEo7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFMSjtBQU9BO0VBQ0ksbUJBQUE7QUFMSjtBQVdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFNQTtFQUtRLGlCQUFBO0FBUlI7QUFHQTtFQU1jLGVBQUE7QUFOZDtBQUFBO0VBU1EsbUJBQUE7QUFOUjtBQUhBO0VBWVEsa0JBQUE7QUFOUjtBQU5BO0VBZVEsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU5SO0FBaEJBO0VBeUJRLFdBQUE7QUFOUjtBQW5CQTtFQTRCUSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFOUjtBQTdCQTtFQXFDWSxtQkFBQTtBQUxaO0FBaENBO0VBd0NZLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FBTFo7QUF6Q0E7RUFpRFksbUJBQUE7QUFMWjtBQVVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFSSjtBQUdBO0VBT1Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFQUjtBQVRBO0VBbUJRLGVBQUE7QUFQUjtBQVdBO0VBRVEsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVZSO0FBQ0E7RUFZUSxXQUFBO0FBVlI7QUFGQTtFQWVRLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVZSO0FBVkE7RUF1QlEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFWUjtBQW5CQTtFQStCWSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVFo7QUE5QkE7RUF3Q2lCLHdCQUFBO0FBUGpCO0FBakNBO0VBMkNZLGVBQUE7QUFQWjtBQXBDQTtFQStDUSxlQUFBO0FBUlI7QUF2Q0E7RUFnRGMsbUJBQUE7QUFOZDtBQTFDQTtFQW1EUSxtQkFBQTtBQU5SO0FBN0NBO0VBc0RRLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvREFBQTtFQUNBLGtCQUFBO0FBTlI7QUFwREE7RUE2RFEsbUJBQUE7QUFOUjtBQVVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvRUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFSSjtBQVVBO0VBQ0k7SUFFUSxrQkFBQTtJQUNBLFlBQUE7RUFUVjtFQU1FO0lBS1ksaUJBQUE7SUFDQSxjQUFBO0VBUmQ7QUFDRjtBQWFBO0VBQ0k7SUFDSSxvQkFBQTtJQUNBLGlCQUFBO0VBWE47RUFjRTtJQUNJLG1CQUFBO0lBQ0EsbUJBQUE7RUFaTjtFQWNFO0lBQ0ksZ0JBQUE7RUFaTjtFQVdFO0lBR1Esd0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUFYVjtFQU1FO0lBUVEsV0FBQTtFQVhWO0VBY0U7SUFDSSxzQkFBQTtFQVpOO0VBY0U7SUFDSSxzQkFBQTtFQVpOO0VBY0U7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLG9FQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQVpOO0VBY0U7SUFDSSxvQkFBQTtFQVpOO0VBY0U7SUFDSSxvQkFBQTtFQVpOO0FBQ0Y7QUFnQkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxlQUFBO0VBZE47RUFpQkU7SUFDSSxtQkFBQTtFQWZOO0VBaUJFO0lBQ0ksa0JBQUE7SUFDQSxnQ0FBQTtJQUNBLGNBQUE7RUFmTjtFQWlCRTtJQUNJLG9CQUFBO0lBQ0EsMEJBQUE7SUFDQSwyQkFBQTtFQWZOO0VBaUJFO0lBQ0ksWUFBQTtFQWZOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW50LWJnIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctbmV3LmpwZycpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYXNrIHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgLjgpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi8qIGgxICovXG4udGl0bGUtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGgxIHtcbiAgICAgICAgbWFyZ2luOiA0cmVtIDAgMCAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzIxNTNEMyAwJSwgIzBCMTYyMiAxMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLyogc2VhcmNoICovXG4ubmFtZS1zZWFyY2gge1xuICAgIHBhZGRpbmc6IDhyZW0gMCAwIDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBpbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRjZCRDc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyMTUzRDMsICM0ODY2QjApO1xuICAgIH1cbiAgICAuYnRuIGltZyB7XG4gICAgICAgIHdpZHRoOiAxLjJyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xuICAgIH1cbiAgICAubmFtZS1zZWFyY2gtdGlwIHtcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM1RjY2Nzc7XG4gICAgICAgIGJvdHRvbTogLTI0cHg7XG4gICAgfVxufVxuLm5hbWUtc2VhcmNoIGlucHV0LFxuLm5hbWUtc2VhcmNoIGlucHV0OmZvY3VzXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIGNvbG9yOiAjZmZmXG59XG5cbi5zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgIHBhZGRpbmc6IDIuNXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2RDgwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICAgIGJhY2tncm91bmQ6ICMwODBGMTc7XG4gICAgLnNlYXJjaGluZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmxhbmQtbGVuZ3RoIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzBEMTkyNjtcbiAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS44NzVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAudy1sYW5kIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuaHIge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbi5tYi00NSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuLmJvcmRlci1ncmF5IHtcbiAgICBjb2xvcjogIzY2NkQ4MDtcbn1cbi5sYW5kLW93bmVyIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgbWFyZ2luOiAyLjVyZW0gMCAxLjg3NXJlbSAwO1xuICAgIGJhY2tncm91bmQ6ICMwRDE5MjY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IEFpbGVyb247XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBjb2xvcjogIzY2NkQ4MDtcbn1cblxuLmxhbmQtaW1nIHtcbiAgICB3aWR0aDogMTIuNXJlbTtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG59XG4uYnRuLWRhcmsge1xuICAgIHBhZGRpbmc6IDAgMS44NzVyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzFCMzg1OTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjRyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMuNzVyZW07XG59XG4uYnRuLW5vbWFsIHtcbiAgICBwYWRkaW5nOiAwIDEuODc1cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzIxNTNEMywgIzQ4NjZCMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMy43NXJlbTtcbn1cbi5idG4tbm9tYWw6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICMyNjM3NEQ7XG59XG5cblxuXG5cbi5taW50IHtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgYmFja2dyb3VuZDogIzEyMjEzMztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5mb250LWltcG9ydGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBzcGFuIHtmb250LXNpemU6IDFyZW07fVxuICAgIH1cbiAgICAuZm9udC1zZWNvbmQge1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIH1cbiAgICAubWludC1wcmljZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLm1pbnQtc2xpcCB7XG4gICAgICAgIGZsZXg6IGF1dG8gMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjYzNzREO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBjb2xvcjogIzY2NkQ4MDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAubWludC1zbGlwLnRvZ2dsZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAubWludC10aXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwRDE5MjY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZsZXg6IGF1dG8gMCAwO1xuICAgICAgICAgICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAzOHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyMTUzRDMsICM0ODY2QjApO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246ZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2Mzc0RDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4ubWludC1zbGlwLXRpcCB7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxOTI2O1xuICAgIGNvbG9yOiAjNjY2RDgwO1xuICAgIGRpdiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZmxleDogMjRweCAxIDA7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMwRDE5MjY7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5cbi5taW50LXNtIHtcbiAgICAubWludC1zbGlwIHtcbiAgICAgICAgZmxleDogYXV0byAwIDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNjM3NEQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGNvbG9yOiAjNjY2RDgwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5taW50LXNsaXAudG9nZ2xlIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5taW50LXRpcCB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwRDE5MjY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogIzY2NkQ4MDtcbiAgICB9XG4gICAgLm1pbnQtc2xpcC10aXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTkyNjtcbiAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmbGV4OiAxNnB4IDEgMDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBjb2xvcjogIzBEMTkyNjtcbiAgICAgICAgICAgIHN2ZyB7dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO31cbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZm9udC1pbXBvcnRlbnQge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHNwYW4ge2ZvbnQtc2l6ZTogMC44NzVyZW07fVxuICAgIH1cbiAgICAuZm9udC1zZWNvbmQge1xuICAgICAgICBmb250LXNpemU6IDAuNjI1cmVtO1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBmbGV4OiBhdXRvIDAgMDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjE1M0QzLCAjNDg2NkIwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICBidXR0b246ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjYzNzREO1xuICAgIH1cbn1cblxuLmJ0bi12aWV3IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgcmdiYSgzMiwgODAsIDIwMywgMC44KSwgIzJFNjJFNik7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gICAgLm1pbnQge1xuICAgICAgICAubWludC10aXAge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgIC50aXRsZS10ZXh0IGgxIHtcbiAgICAgICAgbWFyZ2luOiAyLjVyZW0gMCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIH1cblxuICAgIC5uYW1lLXNlYXJjaCB7XG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMCAwIDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuICAgIC5zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICAgICAgLmxhbmQtbGVuZ3RoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjg3NXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAudy1sYW5kIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICB9XG4gICAgLm1iLTQ1IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICB9XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIHJnYmEoMzIsIDgwLCAyMDMsIDAuOCksICMyRTYyRTYpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmJ0bi1kYXJrIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNzVyZW07XG4gICAgfVxuICAgIC5idG4tbm9tYWwge1xuICAgICAgICBsaW5lLWhlaWdodDogMi43NXJlbTtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gICAgLnRpdGxlLXRleHQgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICAubmFtZS1zZWFyY2gge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xuICAgIH1cbiAgICAubmFtZS1zZWFyY2ggaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgIH1cbiAgICAubmFtZS1zZWFyY2ggLmJ0biB7XG4gICAgICAgIG1heC13aWR0aDogNi4xODc1cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYmFkZ2Utc2FpbCB7XG4gICAgICAgIHdpZHRoOiAxMnJlbTtcbiAgICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 8442:
/*!******************************************!*\
  !*** ./src/app/pages/home/home.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardStatus": () => (/* binding */ BoardStatus),
/* harmony export */   "LandInfo": () => (/* binding */ LandInfo)
/* harmony export */ });
var BoardStatus;
(function (BoardStatus) {
    BoardStatus[BoardStatus["default"] = 0] = "default";
    BoardStatus[BoardStatus["search"] = 1] = "search";
    BoardStatus[BoardStatus["offLine"] = 2] = "offLine";
})(BoardStatus || (BoardStatus = {}));
class LandInfo {
    constructor() {
        this.standardName = ''; // 转化后的land名
        this.logicLength = null; // land逻辑长度
        this.originPrice = ''; // 原价
        this.owner = ''; // mint所有人
        this.img = ''; // mint图片
        this.disabled = true; // 是否不可mint
        this.selectedCardId = ''; // 已选voucher的ID
        this.offPrice = ''; // 优惠价
        this.voucherBalance = null; // 已选voucher的数量
        this.selectedCardLength = null; // 已选voucher的长度
        this.selectedCardPercent = null; // 已选voucher的优惠百分比 
    }
}


/***/ }),

/***/ 99562:
/*!*******************************************************!*\
  !*** ./src/app/pages/home/minted/minted.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MintedComponent": () => (/* binding */ MintedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/contract.service */ 7533);




class MintedComponent {
    constructor(router, contractService) {
        this.router = router;
        this.contractService = contractService;
    }
    ngOnInit() {
    }
    goDetail(standardName) {
        this.router.navigate(['/detail', standardName + '.verify']);
    }
    goOpensea() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let uri = yield this.contractService.getOpenseaUriByName(this.landInfo.standardName);
            global.window.open(uri);
        });
    }
}
MintedComponent.ɵfac = function MintedComponent_Factory(t) { return new (t || MintedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService)); };
MintedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MintedComponent, selectors: [["app-minted"]], inputs: { landInfo: "landInfo" }, decls: 21, vars: 5, consts: [[1, "clearfix"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-45", 3, "click"], [1, "d-flex", "justify-content-start", "align-items-center", "w-land"], [1, "rounded", "float-left", "border", "border-gray", 2, "width", "5rem", "height", "5rem", 3, "src", "alt"], [1, "font-importent", "fs-1", "ml-5", "text-truncate", "w-auto"], [1, "d-flex", "justify-content-end", "align-items-stretch", "w-land"], [1, "land-length"], [1, "btn", "btn-dark", "mr-0", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-right"], ["fill-rule", "evenodd", "d", "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"], [1, "text-truncate", "w-auto", "land-owner"], [1, "float-right"], ["src", "../../../../assets/images/opensea.png", "alt", "", 2, "height", "14px"]], template: function MintedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintedComponent_Template_div_click_1_listener() { return ctx.goDetail(ctx.landInfo.standardName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " length");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintedComponent_Template_button_click_11_listener() { return ctx.goDetail(ctx.landInfo.standardName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " View land ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintedComponent_Template_button_click_18_listener() { return ctx.goOpensea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " opensea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.landInfo.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.landInfo.standardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.landInfo.standardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.landInfo.logicLength, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Holder: ", ctx.landInfo.owner, "");
    } }, styles: [".land-length[_ngcontent-%COMP%] {\n  background: #0D1926;\n  color: #666D80;\n  padding: 1rem 1.875rem;\n  border-radius: 5px;\n  line-height: 1;\n  text-align: center;\n  font-size: 14px;\n}\n.land-owner[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  margin: 2.5rem 0 1.875rem 0;\n  background: #0D1926;\n  border-radius: 10px;\n  font-size: 16px;\n  font-family: Aileron;\n  font-weight: 100;\n  color: #666D80;\n}\n.btn-dark[_ngcontent-%COMP%] {\n  padding: 0 1.875rem;\n  color: #fff;\n  background: #1B3859;\n  border-radius: 5px;\n  margin-right: 2.4rem;\n  line-height: 3.75rem;\n}\n.w-land[_ngcontent-%COMP%] {\n  width: auto;\n}\n@media (max-width: 767.98px) {\n  .land-length[_ngcontent-%COMP%] {\n    padding: 0.5rem 1.875rem;\n    text-align: center;\n    font-size: 12px;\n  }\n  .btn-dark[_ngcontent-%COMP%] {\n    line-height: 2.75rem;\n  }\n  .w-land[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbnRlZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFFQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUVBO0VBQ0ksV0FBQTtBQUFKO0FBR0E7RUFDSTtJQUNJLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VBRE47RUFHRTtJQUNJLG9CQUFBO0VBRE47RUFHRTtJQUNJLFdBQUE7RUFETjtBQUNGIiwiZmlsZSI6Im1pbnRlZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxhbmQtbGVuZ3RoIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEQxOTI2O1xuICAgIGNvbG9yOiAjNjY2RDgwO1xuICAgIHBhZGRpbmc6IDFyZW0gMS44NzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubGFuZC1vd25lciB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIG1hcmdpbjogMi41cmVtIDAgMS44NzVyZW0gMDtcbiAgICBiYWNrZ3JvdW5kOiAjMEQxOTI2O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBBaWxlcm9uO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgY29sb3I6ICM2NjZEODA7XG59XG4uYnRuLWRhcmsge1xuICAgIHBhZGRpbmc6IDAgMS44NzVyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzFCMzg1OTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjRyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMuNzVyZW07XG59XG4udy1sYW5kIHtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLmxhbmQtbGVuZ3RoIHtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDEuODc1cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmJ0bi1kYXJrIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNzVyZW07XG4gICAgfVxuICAgIC53LWxhbmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbn0iXX0= */"] });


/***/ }),

/***/ 1088:
/*!***************************************************************!*\
  !*** ./src/app/pages/home/search-tip/search-tip.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchTipComponent": () => (/* binding */ SearchTipComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);


function SearchTipComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry, the oland has already been mint. Please search for other content to mint.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchTipComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Congratulations! \"", ctx_r1.landInfo.standardName, "\" hasn't been mint yet, you can mint it.");
} }
function SearchTipComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please mint this land after choosing ", ctx_r2.landInfo.logicLength, " L land voucher ");
} }
class SearchTipComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchTipComponent.ɵfac = function SearchTipComponent_Factory(t) { return new (t || SearchTipComponent)(); };
SearchTipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchTipComponent, selectors: [["app-search-tip"]], inputs: { landInfo: "landInfo" }, decls: 6, vars: 3, consts: [[1, "row"], [1, "col-12"], ["class", "text-white fw-bold mb-4", 4, "ngIf"], [1, "text-white", "fw-bold", "mb-4"]], template: function SearchTipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchTipComponent_p_2_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchTipComponent_p_3_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchTipComponent_p_4_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.landInfo.owner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.landInfo.owner && ctx.landInfo.logicLength > 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.landInfo.owner && ctx.landInfo.logicLength >= 6 && ctx.landInfo.logicLength < 8);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtdGlwLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 6698:
/*!**************************************************************!*\
  !*** ./src/app/pages/lands/community/community.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunityComponent": () => (/* binding */ CommunityComponent)
/* harmony export */ });
/* harmony import */ var _pages_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pages/components/confirm-modal/confirm-modal.component */ 84249);
/* harmony import */ var _components_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/upload-image/upload-image.component */ 50244);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/alert.service */ 43833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/autofocus.directive */ 73185);













function CommunityComponent_div_0_div_3_ng_container_1_div_1_ng_container_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", item_r6.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CommunityComponent_div_0_div_3_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CommunityComponent_div_0_div_3_ng_container_1_div_1_ng_container_1_img_3_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r6.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.name);
} }
function CommunityComponent_div_0_div_3_ng_container_1_div_1_ng_template_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", item_r6.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CommunityComponent_div_0_div_3_ng_container_1_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CommunityComponent_div_0_div_3_ng_container_1_div_1_ng_template_2_img_2_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", item_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r6.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.name);
} }
function CommunityComponent_div_0_div_3_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommunityComponent_div_0_div_3_ng_container_1_div_1_ng_container_1_Template, 7, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CommunityComponent_div_0_div_3_ng_container_1_div_1_ng_template_2_Template, 6, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r7.validateUrl(item_r6.url))("ngIfElse", _r9);
} }
function CommunityComponent_div_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommunityComponent_div_0_div_3_ng_container_1_div_1_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r6.status);
} }
function CommunityComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommunityComponent_div_0_div_3_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.communitiesShow);
} }
function CommunityComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " There is no content for the time being. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "background-color": "#09101A" }; };
const _c1 = function () { return { "background-color": "#112233" }; };
function CommunityComponent_div_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function () { return [0, 1]; };
function CommunityComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommunityComponent_div_0_div_5_div_1_Template, 4, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function (a0) { return { "block-none": a0 }; };
function CommunityComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CommunityComponent_div_0_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CommunityComponent_div_0_div_4_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CommunityComponent_div_0_div_5_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c3, ctx_r0.communitiesShow && ctx_r0.communitiesShow.length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.communitiesShow && ctx_r0.communitiesShow.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.communitiesShow && ctx_r0.communitiesShow.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.communitiesShow === null);
} }
function CommunityComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ngx-skeleton-loader", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
} }
function CommunityComponent_div_1_div_4_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 50);
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", item_r22.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CommunityComponent_div_1_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommunityComponent_div_1_div_4_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r34.upload(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CommunityComponent_div_1_div_4_input_13_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CommunityComponent_div_1_div_4_input_13_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return item_r22.name = $event; })("blur", function CommunityComponent_div_1_div_4_input_13_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r40.blurName(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r22.name);
} }
function CommunityComponent_div_1_div_4_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommunityComponent_div_1_div_4_span_14_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r43.editName(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r22.name);
} }
function CommunityComponent_div_1_div_4_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommunityComponent_div_1_div_4_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r47.editName(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CommunityComponent_div_1_div_4_input_22_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CommunityComponent_div_1_div_4_input_22_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52); const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return item_r22.url = $event; })("blur", function CommunityComponent_div_1_div_4_input_22_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r53.blurLink(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r22.url);
} }
function CommunityComponent_div_1_div_4_span_23_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommunityComponent_div_1_div_4_span_23_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r56.editLink(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r22.url);
} }
function CommunityComponent_div_1_div_4_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommunityComponent_div_1_div_4_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r62); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r60.editLink(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CommunityComponent_div_1_div_4_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommunityComponent_div_1_div_4_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r63.delete(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CommunityComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CommunityComponent_div_1_div_4_img_7_Template, 1, 1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CommunityComponent_div_1_div_4_div_8_Template, 4, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CommunityComponent_div_1_div_4_input_13_Template, 1, 1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CommunityComponent_div_1_div_4_span_14_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CommunityComponent_div_1_div_4_button_15_Template, 3, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CommunityComponent_div_1_div_4_Template_input_change_17_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r67); const i_r23 = restoredCtx.index; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r66.changeCommunityStatud($event, i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CommunityComponent_div_1_div_4_input_22_Template, 1, 1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, CommunityComponent_div_1_div_4_span_23_Template, 2, 1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, CommunityComponent_div_1_div_4_button_24_Template, 3, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CommunityComponent_div_1_div_4_button_25_Template, 3, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkDragData", item_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r22.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r21.edit && item_r22.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r22.nameEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r22.nameEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r22.nameEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "communitySwitch", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r22.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("for", "communitySwitch", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r22.urlEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r22.urlEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r22.urlEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r22.editable);
} }
function CommunityComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cdkDropListDropped", function CommunityComponent_div_1_Template_div_cdkDropListDropped_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r68.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CommunityComponent_div_1_div_3_Template, 2, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CommunityComponent_div_1_div_4_Template, 26, 13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.communities === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.communities);
} }
class Community {
    constructor(data) {
        this.status = false;
        this.editable = true;
        this.nameEditing = false;
        this.urlEditing = false;
        Object.assign(this, data);
    }
}
class CommunityComponent {
    constructor(router, modalService, httpService, alertService) {
        this.router = router;
        this.modalService = modalService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loader = false;
        this.communities = null;
        this.communitiesShow = null;
        this.isAdding = false;
    }
    ngOnInit() {
        this.serviceCommunityListen = this.httpService.communityListen.subscribe(value => {
            if (value === 1) {
                this.add();
            }
        });
    }
    ngOnDestroy() {
        this.serviceCommunityListen.unsubscribe();
    }
    ngOnChanges(changes) {
        var _a;
        if ((_a = changes.baseData) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.getLandCommunites();
        }
    }
    getLandCommunites() {
        const matchQuery = this.httpService.getLinks(this.baseData.id);
        this.httpService.getDatabase(matchQuery).subscribe(res => {
            this.communities = [];
            res.forEach((element, i) => {
                let itemStatus;
                if (!element[0].properties.hasOwnProperty('status')) {
                    itemStatus = true;
                }
                else {
                    itemStatus = +element[0].properties.status ? true : false;
                }
                const params = {
                    id: element[0].id,
                    name: element[0].properties.name || 'name',
                    logo: element[0].properties.logo,
                    url: element[0].properties.url || 'url',
                    status: itemStatus,
                    editable: +element[0].properties.editable ? true : false,
                    sort: element[0].properties.sort || res.length - i
                };
                this.communities.push(new Community(params));
            });
            this.communitiesShow = [];
            this.communitiesShow = this.communities.filter(element => element.status);
            setTimeout(() => {
                this.httpService.emitData(true);
            });
        });
    }
    drop(event) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.moveItemInArray)(this.communities, event.previousIndex, event.currentIndex);
        this.communities.map((element, i) => {
            element.sort = this.communities.length - i;
        });
        let batch = [];
        this.communities.forEach((element) => {
            const item = {
                id: element.id,
                sort: element.sort
            };
            batch.push(item);
        });
        const matchQuery = this.httpService.updateLinkSort(batch);
        this.httpService.updateDatabase(matchQuery).subscribe(res => {
            if (res.length === this.communities.length) {
                this.alertService.create({
                    body: 'The sequence has been adjusted successfully.',
                    color: 'success',
                    time: 2000
                });
            }
            else {
                this.alertService.create({
                    body: 'Changing failed.',
                    color: 'danger',
                    time: 2000
                });
            }
        });
    }
    validateUrl(str) {
        if (str.indexOf("http://") == 0 || str.indexOf("https://") == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    upload(index) {
        const modalRef = this.modalService.open(_components_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_1__.UploadImageComponent, { backdropClass: 'modal-mask', windowClass: 'dark', size: 'md', centered: true });
        modalRef.componentInstance.urlEvent.subscribe((url) => {
            const matchQuery = this.httpService.updateLand(this.communities[index].id, 'logo', url);
            this.httpService.updateDatabase(matchQuery).subscribe(res => {
                this.communities[index].logo = url;
                if (res.length > 0) {
                    this.alertService.create({
                        body: 'Upload image successfully.',
                        time: 2000,
                        color: 'success'
                    });
                }
                else {
                    this.alertService.create({
                        body: 'Changing failed.',
                        time: 2000,
                        color: 'danger'
                    });
                }
            });
        });
    }
    editName(index) {
        this.communities[index].nameEditing = true;
        if (this.communities[index].name === 'name') {
            this.communities[index].name = '';
        }
    }
    blurName(index) {
        this.communities[index].nameEditing = false;
        if (this.communities[index].name === '') {
            this.communities[index].name = 'name';
        }
        if (this.communities[index].name === 'name') {
            this.communities[index].status = false;
            const matchQuery = this.httpService.updateLand(this.communities[index].id, 'status', this.communities[index].status ? 1 : 0, true);
            this.httpService.updateDatabase(matchQuery).subscribe(res => {
                console.log(res);
            });
        }
        const matchQuery = this.httpService.updateLand(this.communities[index].id, 'name', this.communities[index].name);
        this.httpService.updateDatabase(matchQuery).subscribe(res => {
            if (res.length > 0) {
                this.alertService.create({
                    body: 'Changing successfully.',
                    color: 'success',
                    time: 2000
                });
            }
            else {
                this.alertService.create({
                    body: 'Changing failed.',
                    color: 'danger',
                    time: 2000
                });
            }
        });
    }
    editLink(index) {
        this.communities[index].urlEditing = true;
        if (this.communities[index].url === 'url') {
            this.communities[index].url = '';
        }
    }
    blurLink(index) {
        this.communities[index].urlEditing = false;
        if (this.communities[index].url === '') {
            this.communities[index].url = 'url';
        }
        if (this.communities[index].url === 'url') {
            this.communities[index].status = false;
            const matchQuery = this.httpService.updateLand(this.communities[index].id, 'status', this.communities[index].status ? 1 : 0, true);
            this.httpService.updateDatabase(matchQuery).subscribe(res => {
                console.log(res);
            });
        }
        const matchQuery = this.httpService.updateLand(this.communities[index].id, 'url', this.communities[index].url);
        this.httpService.updateDatabase(matchQuery).subscribe(res => {
            if (res.length > 0) {
                this.alertService.create({
                    body: 'Changing successfully.',
                    color: 'success',
                    time: 2000
                });
            }
            else {
                this.alertService.create({
                    body: 'Changing failed.',
                    color: 'danger',
                    time: 2000
                });
            }
        });
    }
    changeCommunityStatud(e, index) {
        // if ((this.communities[index].name === 'name' || this.communities[index].url === 'url') && e.currentTarget.checked === true) {
        //   e.currentTarget.checked = false;
        //   return;
        // }
        this.communities[index].status = e.currentTarget.checked;
        const status = e.currentTarget.checked ? 1 : 0;
        const matchQuery = this.httpService.updateLand(this.communities[index].id, 'status', status, true);
        this.httpService.updateDatabase(matchQuery).subscribe(res => {
            if (res.length > 0) {
                this.alertService.create({
                    body: status ? 'Allowed to display on Profile.' : 'Prohibited from displaying on Profile.',
                    color: 'success',
                    time: 2000
                });
            }
            else {
                this.alertService.create({
                    body: 'Changing failed.',
                    time: 2000,
                    color: 'danger'
                });
            }
        });
    }
    delete(index) {
        const modalRef = this.modalService.open(_pages_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmModalComponent, { backdropClass: 'modal-mask', windowClass: 'dark', size: 'lg', centered: true });
        modalRef.componentInstance.deleteEvent.subscribe($event => {
            if ($event) {
                const matchQuery = this.httpService.deleteNodeById(this.communities[index].id);
                this.httpService.updateDatabase(matchQuery).subscribe(res => {
                    if (res.length === 0) {
                        this.communities.splice(index, 1);
                        this.alertService.create({
                            body: 'Changing successfully.',
                            time: 2000,
                            color: 'success'
                        });
                    }
                    else {
                        this.alertService.create({
                            body: 'Changing failed.',
                            time: 2000,
                            color: 'danger'
                        });
                    }
                });
            }
        });
    }
    add() {
        if (this.communities.length < 12) {
            let maxSort = 0;
            this.communities.forEach(item => {
                if (item.sort > maxSort) {
                    maxSort = item.sort + 1;
                }
            });
            const params = {
                id: this.baseData.id,
                relationType: 'LinkTo',
                cNodeProperties: {
                    url: 'url',
                    name: 'name',
                    logo: '',
                    status: 1,
                    editable: true,
                    sort: maxSort
                }
            };
            const matchQuery = this.httpService.createCNodeById(params);
            this.httpService.updateDatabase(matchQuery).subscribe(res => {
                const params = {
                    id: res[0][0].id,
                    name: res[0][0].properties.name,
                    logo: res[0][0].properties.logo,
                    url: res[0][0].properties.url,
                    status: res[0][0].properties.status,
                    editable: res[0][0].properties.editable,
                    sort: res[0][0].properties.sort
                };
                this.communities.unshift(new Community(params));
            });
        }
        else {
            this.alertService.create({
                body: 'Up to six custom links can be added.',
                color: 'warning',
                time: 2000
            });
        }
        this.httpService.emitCommunity(0);
    }
}
CommunityComponent.ɵfac = function CommunityComponent_Factory(t) { return new (t || CommunityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService)); };
CommunityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CommunityComponent, selectors: [["app-community"]], inputs: { loader: "loader", suffix: "suffix", edit: "edit", baseData: "baseData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "lands-community"], [1, "col", "col-lg-6", "block", 3, "ngClass"], ["class", "row", 4, "ngIf"], [1, "row"], [4, "ngFor", "ngForOf"], ["class", "col-6 col-md-4 pr-0", 4, "ngIf"], [1, "col-6", "col-md-4", "pr-0"], [4, "ngIf", "ngIfElse"], ["link", ""], [1, "card", "my-2"], [1, "flex-shrink-0", "img"], ["alt", "...", 3, "src", 4, "ngIf"], [1, "card-body", "text-truncate"], [1, "card-title", "text-truncate", "mb-1"], ["alt", "...", 3, "src"], [1, "card", "my-2", 3, "href"], [1, "col", "no-community"], ["class", "col col-lg-6", 4, "ngFor", "ngForOf"], [1, "col", "col-lg-6"], [1, "card"], ["count", "1", "appearance", "circle", "animation", "pulse", 3, "theme"], ["count", "2", "appearance", "line", "animation", "pulse", 2, "width", "100%", 3, "theme"], [1, "lands-community-editor"], ["cdkDropList", "", 1, "list-group", "pb-5", 3, "cdkDropListDropped"], ["class", "list-group-item", 4, "ngIf"], ["class", "list-group-item d-flex", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "list-group-item", "d-flex"], ["cdkDrag", "", "cdkDragHandle", "", "cdkDragRootElement", ".list-group-item", 1, "list-drag", 3, "cdkDragData"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-three-dots-vertical"], ["d", "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"], [1, "image", "flex-shrink-0"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "upload", 3, "click", 4, "ngIf"], [1, "infos", "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2", "mb-2", "mb-md-3"], [1, "list-title", "d-flex", "flex-grow-1"], [1, "editor"], ["type", "text", "class", "form-control form-control-edit", "autoFocus", "", 3, "ngModel", "ngModelChange", "blur", 4, "ngIf"], ["class", "d-inline-block text-truncate font-weight-bold", "style", "max-width: calc(95%)", 3, "click", 4, "ngIf"], ["class", "btn-edit", 3, "click", 4, "ngIf"], [1, "custom-control", "custom-switch", "custom-switch-md"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "id", "change"], [1, "custom-control-label", 3, "for"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "link", "d-flex", "flex-grow-1"], ["class", "d-inline-block text-truncate font-weight-light", "style", "max-width: calc(95%)", 3, "click", 4, "ngIf"], ["class", "btn-edit", "style", "top: 5px;position: relative;", 3, "click", 4, "ngIf"], ["alt", "", 3, "src"], [1, "upload", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-image"], ["d", "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"], ["d", "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"], ["type", "text", "autoFocus", "", 1, "form-control", "form-control-edit", 3, "ngModel", "ngModelChange", "blur"], [1, "d-inline-block", "text-truncate", "font-weight-bold", 2, "max-width", "calc(95%)", 3, "click"], [1, "btn-edit", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pencil-fill"], ["d", "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"], [1, "d-inline-block", "text-truncate", "font-weight-light", 2, "max-width", "calc(95%)", 3, "click"], [1, "btn-edit", 2, "top", "5px", "position", "relative", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-trash-fill"], ["d", "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"]], template: function CommunityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CommunityComponent_div_0_Template, 6, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommunityComponent_div_1_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_10__.NgxSkeletonLoaderComponent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.CdkDragHandle, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_4__.AutoFocusDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel], styles: [".lands-community[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #0F1926;\n  border: 1px solid #192F4C;\n  border-radius: 5px;\n}\n.lands-community[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  margin-bottom: 40px;\n  background: #09101A;\n  border: 1px solid #192F4C;\n  border-radius: 5px;\n  font-size: 20px;\n  line-height: 60px;\n  height: 60px;\n  color: #666D80;\n}\n.lands-community[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  flex-direction: row;\n  text-decoration: none;\n  align-items: center;\n}\n.lands-community[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #112233;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.lands-community[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.lands-community[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0 0 0 5px;\n}\n.lands-community[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FFFFFF;\n}\n.lands-community[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666D80;\n}\n.lands-community[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%], .lands-community[_ngcontent-%COMP%]   .block-none[_ngcontent-%COMP%] {\n  border: 0 none;\n}\n.lands-community[_ngcontent-%COMP%]   .no-community[_ngcontent-%COMP%] {\n  background: #0D1926;\n  border-radius: 10px;\n  padding: 20px 30px;\n  color: #8F98B3;\n}\n.lands-community-editor[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  padding: 0 30px;\n  background: #09101A;\n  border: 1px solid #192F4C;\n  border-radius: 5px;\n  color: #666D80;\n  font-size: 24px;\n  line-height: 80px;\n  height: 80px;\n}\n.lands-community-editor[_ngcontent-%COMP%]   .form-control-edit[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 24px;\n  background: #0f1926;\n  color: #fff;\n  font-weight: bold;\n  border: 0;\n  outline: none;\n}\n.lands-community-editor[_ngcontent-%COMP%]   .form-control-edit[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.lands-community-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  margin: 0 ;\n}\n.lands-community-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%] {\n  width: 0;\n  flex: 1 1 100%;\n  display: flex;\n  align-content: center;\n}\n.lands-community-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0;\n  color: #666D80;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  padding: 0.75rem 1.25rem 0.75rem 2.5rem;\n  background: #0F1926;\n  border: 1px solid #192F4C;\n  border-radius: 5px;\n  color: #fff;\n}\n.list-group-item[_ngcontent-%COMP%]   .list-drag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 40px;\n  cursor: move;\n}\n.list-group-item[_ngcontent-%COMP%]   .list-drag[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: calc(50% - 10px);\n}\n.list-group-item[_ngcontent-%COMP%]   .list-drag[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:first-child {\n  left: 5px;\n}\n.list-group-item[_ngcontent-%COMP%]   .list-drag[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:last-child {\n  left: 13px;\n}\n.list-group-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:focus-visible {\n  outline: 0;\n  background-color: #212529;\n}\n.list-group-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 30px;\n  width: 90px;\n  height: 90px;\n  background: #09101A;\n  border: 1px solid #182D48;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.list-group-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.list-group-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 30px;\n  height: 30px;\n  background: #DCDDDE;\n  box-shadow: 0px 0px 8px 0px rgba(9, 16, 26, 0.3);\n  border-radius: 30px;\n  color: #4F545C;\n  line-height: 28px;\n  text-align: center;\n  cursor: pointer;\n}\n.list-group-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: #666D80;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n@media (max-width: 767.98px) {\n  .lands-community[_ngcontent-%COMP%]   .no-community[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .lands-community[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    padding: 0 15px;\n    font-size: 16px;\n    line-height: 50px;\n    height: 50px;\n  }\n  .lands-community-editor[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin: 0 0 20px 0;\n    padding: 0 15px;\n    font-size: 16px;\n    line-height: 50px;\n    height: 50px;\n  }\n  .list-group-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    margin-right: 15px;\n  }\n  .list-group-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    border-radius: 20px;\n    line-height: 20px;\n  }\n  .list-group-item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUhBO0VBT1ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFEWjtBQWRBO0VBa0JZLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBRFo7QUFwQkE7RUF1QmdCLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQWhCO0FBM0JBO0VBNkJvQixpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ3BCO0FBaENBO0VBbUNnQixrQkFBQTtBQUFoQjtBQW5DQTtFQXFDb0IsZUFBQTtFQUNBLGNBQUE7QUFDcEI7QUF2Q0E7RUF5Q29CLGVBQUE7RUFDQSxjQUFBO0FBQ3BCO0FBM0NBOztFQWdEUSxjQUFBO0FBRFI7QUEvQ0E7RUFtRFEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURSO0FBS0E7RUFHUSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxSO0FBTkE7RUFjUSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFMUjtBQU1RO0VBQ0ksZ0JBQUE7QUFKWjtBQWxCQTtFQTBCUSxVQUFBO0FBTFI7QUFyQkE7RUE0QlksUUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFKWjtBQTNCQTtFQWtDWSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBSlo7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFUSjtBQUVBO0VBU1Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVJSO0FBTkE7RUFnQlksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBUFo7QUFaQTtFQXNCWSxTQUFBO0FBUFo7QUFmQTtFQXlCWSxVQUFBO0FBUFo7QUFsQkE7RUE4QlEsVUFBQTtFQUNBLHlCQUFBO0FBVFI7QUF0QkE7RUFrQ1Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFUUjtBQWhDQTtFQTJDWSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUlo7QUFyQ0E7RUFnRFksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUlo7QUFuREE7RUErRFEsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVRSO0FBWUE7RUFDSSxVQUFBO0FBVko7QUFhRTtFQUNFLHNEQUFBO0FBWEo7QUFjRTtFQUNFLFlBQUE7QUFaSjtBQWlCQTtFQUNJO0lBRVEsZUFBQTtFQWhCVjtFQWNFO0lBTVksZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFqQmQ7RUFxQkU7SUFFUSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBcEJWO0VBNEJFO0lBRVEsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQTNCVjtFQXVCRTtJQU1ZLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQTFCZDtFQWlCRTtJQVdnQixXQUFBO0lBQ0EsWUFBQTtFQXpCbEI7QUFDRiIsImZpbGUiOiJjb21tdW5pdHkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmxhbmRzLWNvbW11bml0eSB7XG4gICAgLmJsb2NrIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzBGMTkyNjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE5MkY0QztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwOTEwMUE7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTkyRjRDO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzY2NkQ4MDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTIyMzM7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgNXB4O1xuICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNhcmQtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ibG9jaywgLmJsb2NrLW5vbmUge1xuICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgICB9XG4gICAgLm5vLWNvbW11bml0eSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwRDE5MjY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICAgICAgY29sb3I6ICM4Rjk4QjM7XG4gICAgfVxufVxuXG4ubGFuZHMtY29tbXVuaXR5LWVkaXRvciB7XG4gICAgXG4gICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwOTEwMUE7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOTJGNEM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICB9XG4gICAgLmZvcm0tY29udHJvbC1lZGl0IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMGYxOTI2O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5saXN0LWdyb3VwIHtcbiAgICAgICAgbWFyZ2luOiAwIDtcbiAgICAgICAgLmVkaXRvciB7XG4gICAgICAgICAgICB3aWR0aDowOyBcbiAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLWVkaXQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzY2NkQ4MDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxufVxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtIDAuNzVyZW0gMi41cmVtO1xuICAgIGJhY2tncm91bmQ6ICMwRjE5MjY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE5MkY0QztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLmxpc3QtZHJhZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA0MHB4OyBcbiAgICAgICAgY3Vyc29yOiBtb3ZlOyBcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgICB9XG4gICAgICAgIHN2ZzpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3ZnOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbGVmdDogMTNweDtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHNwYW46Zm9jdXMtdmlzaWJsZSB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gICAgfVxuICAgIC5pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDkxMDFBO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTgyRDQ4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC51cGxvYWQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNEQ0REREU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSg5LCAxNiwgMjYsIDAuMyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0RjU0NUM7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogIzY2NkQ4MDtcbiAgICB9XG59XG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAubGFuZHMtY29tbXVuaXR5IHtcbiAgICAgICAgLm5vLWNvbW11bml0eSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2NrIHtcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxhbmRzLWNvbW11bml0eS1lZGl0b3Ige1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxpc3QtZ3JvdXAge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIC51cGxvYWQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgXG59XG4iXX0= */"] });


/***/ }),

/***/ 44493:
/*!********************************************************!*\
  !*** ./src/app/pages/lands/editor/editor.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorComponent": () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/cookie.service */ 80856);



class EditorComponent {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    ngOnInit() {
    }
    toEdit() {
        // const noncestrCookie = this.cookieService.getCookie('noncestr');
        // console.log(noncestrCookie)
        const url = this.router.url.split('?')[0];
        let urlArray = url.split('/');
        urlArray.shift();
        urlArray.push('edit');
        this.router.navigate(urlArray);
    }
    goLand() {
        this.router.navigate(['/land']);
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_cookie_service__WEBPACK_IMPORTED_MODULE_0__.CookieService)); };
EditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], decls: 24, vars: 0, consts: [[1, "container"], [1, "lands-editor", "row"], [1, "col-12", "col-lg-3", "block", "mb-3"], [1, "inblock"], [1, "title", "text-truncate"], [1, "row"], [1, "col"], [1, "card", "mb-3", 3, "click"], [1, "flex-shrink-0", "img"], [1, "card-body", "text-truncate"], [1, "card-title", "text-truncate"], [1, "col-12", "col-lg-3", "block", "mb-3", "pr-3", "pr-lg-0"], [1, "col-6", "pr-0"], [1, "card", "mb-3"], [1, "card-body", "text-truncate", 3, "click"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_div_click_8_listener() { return ctx.toEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "About Land");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_div_click_21_listener() { return ctx.goLand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "My Land");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".lands-editor[_ngcontent-%COMP%] {\n  display: flex;\n}\n.lands-editor[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .inblock[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #0F1926;\n  border: 1px solid #192F4C;\n  border-radius: 5px;\n}\n.lands-editor[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  margin-bottom: 20px;\n  background: #09101A;\n  border: 1px solid #192F4C;\n  border-radius: 5px;\n  font-size: 20px;\n  line-height: 60px;\n  height: 60px;\n  color: #666D80;\n}\n.lands-editor[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: transparent;\n  flex-direction: row;\n}\n.lands-editor[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #112233;\n  border-radius: 50%;\n}\n.lands-editor[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0 0 0 5px;\n}\n.lands-editor[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FFFFFF;\n  line-height: 40px;\n  margin-bottom: 0;\n}\n.lands-editor[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666D80;\n}\n@media (max-width: 767.98px) {\n  .lands-editor[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    padding: 0 15px;\n    font-size: 16px;\n    line-height: 50px;\n    height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUZBO0VBS1ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUFaO0FBUkE7RUFXWSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFaO0FBbkJBO0VBc0JZLGVBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQVo7QUF4QkE7RUEwQmdCLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNoQjtBQTlCQTtFQWdDZ0Isa0JBQUE7QUFDaEI7QUFqQ0E7RUFrQ29CLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVwQjtBQXZDQTtFQXdDb0IsZUFBQTtFQUNBLGNBQUE7QUFFcEI7QUFJQTtFQUNJO0lBR1ksZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFKZDtBQUNGIiwiZmlsZSI6ImVkaXRvci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kcy1lZGl0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLmJsb2NrIHtcbiAgICAgICAgXG4gICAgICAgIC5pbmJsb2NrIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEYxOTI2O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE5MkY0QztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwOTEwMUE7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTkyRjRDO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzY2NkQ4MDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMjIzMztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG4gICAgICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNhcmQtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLmxhbmRzLWVkaXRvciB7XG4gICAgICAgIC5ibG9jayB7XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 14378:
/*!******************************************************!*\
  !*** ./src/app/pages/lands/intro/intro.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroComponent": () => (/* binding */ IntroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/alert.service */ 43833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/autofocus.directive */ 73185);






function IntroComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r2.baseData == null ? null : ctx_r2.baseData.intro) ? ctx_r2.baseData.intro : "Nothing Here.");
} }
function IntroComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nothing Shared");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function IntroComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, IntroComponent_div_2_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, IntroComponent_div_2_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.suffix === "owner" || (ctx_r0.baseData == null ? null : ctx_r0.baseData.introStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.suffix !== "owner" && !(ctx_r0.baseData == null ? null : ctx_r0.baseData.introStatus));
} }
function IntroComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "/1000");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", (ctx_r4.intro == null ? null : ctx_r4.intro.length) > 1000 ? "text-danger" : "text-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.intro == null ? null : ctx_r4.intro.length);
} }
function IntroComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IntroComponent_div_3_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.introEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r5.baseData == null ? null : ctx_r5.baseData.intro) ? ctx_r5.baseData.intro : "Nothing Here.");
} }
function IntroComponent_div_3_textarea_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function IntroComponent_div_3_textarea_7_Template_textarea_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.introEdit(); })("ngModelChange", function IntroComponent_div_3_textarea_7_Template_textarea_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r11.intro = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.intro);
} }
function IntroComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Introduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, IntroComponent_div_3_div_4_Template, 4, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, IntroComponent_div_3_div_6_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, IntroComponent_div_3_textarea_7_Template, 1, 1, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function IntroComponent_div_3_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.changeIntroStatus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.introEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.introEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r1.baseData == null ? null : ctx_r1.baseData.introStatus);
} }
class IntroComponent {
    constructor(httpService, alertService) {
        this.httpService = httpService;
        this.alertService = alertService;
        this.loader = false;
        this.introEditing = false;
    }
    ngOnInit() {
    }
    introEdit() {
        if (!this.edit)
            return;
        if (this.introEditing) {
            const matchQuery = this.httpService.updateLand(this.baseData.id, 'intro', this.intro);
            this.httpService.updateDatabase(matchQuery).subscribe(res => {
                this.baseData.intro = this.intro;
                if (res.length > 0) {
                    this.alertService.create({
                        body: 'Changing successfully.',
                        time: 2000,
                        color: 'success'
                    });
                }
                else {
                    this.alertService.create({
                        body: 'Changing failed.',
                        time: 2000,
                        color: 'danger'
                    });
                }
            });
        }
        else {
            this.intro = this.baseData.intro;
        }
        this.introEditing = !this.introEditing;
    }
    changeIntroStatus(e) {
        const introStatus = e.currentTarget.checked ? 1 : 0;
        const matchQuery = this.httpService.updateLand(this.baseData.id, 'introStatus', introStatus, true);
        this.httpService.updateDatabase(matchQuery).subscribe(res => {
            this.baseData.introStatus = introStatus;
            if (res.length > 0) {
                this.alertService.create({
                    body: introStatus ? 'Allowed to display on Profile.' : 'Prohibited from displaying on Profile.',
                    time: 2000,
                    color: 'success'
                });
            }
            else {
                this.alertService.create({
                    body: 'Changing failed.',
                    time: 2000,
                    color: 'danger'
                });
            }
        });
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService)); };
IntroComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], inputs: { loader: "loader", suffix: "suffix", baseData: "baseData", edit: "edit" }, decls: 4, vars: 2, consts: [[1, "container"], [1, "lands-intro"], ["class", "card", 4, "ngIf"], [1, "card"], ["class", "content", "style", "white-space: pre-wrap;", 4, "ngIf"], [1, "content", 2, "white-space", "pre-wrap"], [1, "d-flex", "justify-content-between", "pb-3"], [1, "title", "fs-3"], ["class", "calc", 4, "ngIf"], ["class", "content", "style", "white-space: pre-wrap;", 3, "click", 4, "ngIf"], ["class", "form-control form-control-edit", "rows", "8", "maxlength", "1000", "placeholder", "Introduce the land...", "autoFocus", "", 3, "ngModel", "blur", "ngModelChange", 4, "ngIf"], [1, "d-flex", "flex-row-reverse"], [1, "custom-control", "custom-switch", "custom-switch-md"], ["type", "checkbox", "id", "customIntro", 1, "custom-control-input", 3, "checked", "change"], ["for", "customIntro", 1, "custom-control-label"], [1, "calc"], [3, "ngClass"], [1, "content", 2, "white-space", "pre-wrap", 3, "click"], ["rows", "8", "maxlength", "1000", "placeholder", "Introduce the land...", "autoFocus", "", 1, "form-control", "form-control-edit", 3, "ngModel", "blur", "ngModelChange"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, IntroComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, IntroComponent_div_3_Template, 12, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_2__.AutoFocusDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: [".lands-intro[_ngcontent-%COMP%] {\n  background: #0D1926;\n  border-radius: 10px;\n  padding: 40px;\n  margin-bottom: 40px;\n}\n.lands-intro[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: transparent;\n  color: #8F98B3;\n}\n.lands-intro[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n}\n.lands-intro[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form-control-edit[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 14px;\n  line-height: 24px;\n  min-height: 8em;\n  background: #0f1926;\n  color: #fff;\n  font-weight: bold;\n  border: 0;\n  outline: none;\n}\n.lands-intro[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form-control-edit[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n@media (max-width: 767.98px) {\n  .lands-intro[_ngcontent-%COMP%] {\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBTEE7RUFNUSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBRVI7QUFWQTtFQVVZLGVBQUE7RUFDQSxpQkFBQTtBQUdaO0FBZEE7RUFnQlksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBQ1o7QUFBWTtFQUNJLGdCQUFBO0FBRWhCO0FBR0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtFQUROO0FBQ0YiLCJmaWxlIjoiaW50cm8uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZHMtaW50cm8ge1xuICAgIGJhY2tncm91bmQ6ICMwRDE5MjY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgLmNhcmQge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogIzhGOThCMztcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAvLyBtaW4taGVpZ2h0OiAxNGVtO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0tY29udHJvbC1lZGl0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDhlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZjE5MjY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAubGFuZHMtaW50cm8ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 15859:
/*!********************************************************************!*\
  !*** ./src/app/pages/lands/lands-footer/lands-footer.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandsFooterComponent": () => (/* binding */ LandsFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);





function LandsFooterComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LandsFooterComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Recommend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LandsFooterComponent_button_12__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LandsFooterComponent_button_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LandsFooterComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandsFooterComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.addLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LandsFooterComponent_button_12__svg_svg_1_Template, 2, 0, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LandsFooterComponent_button_12_div_2_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add New Relation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.isAdding);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isAdding);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isAdding);
} }
function LandsFooterComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Recommend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LandsFooterComponent_button_22__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LandsFooterComponent_button_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LandsFooterComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandsFooterComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.addLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LandsFooterComponent_button_22__svg_svg_1_Template, 2, 0, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LandsFooterComponent_button_22_div_2_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add New Relation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.isAdding);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isAdding);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isAdding);
} }
class LandsFooterComponent {
    constructor(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.isAdding = false;
        this.isCoverFooter = true;
    }
    onScroll() {
        this.calScroll();
    }
    onResize() {
        this.calScroll();
    }
    ngOnInit() {
        this.serviceCommunityListen = this.httpService.communityListen.subscribe(value => {
            if (value === 0) {
                this.isAdding = false;
            }
        });
        this.servicDataListen = this.httpService.dataListen.subscribe(isEnd => {
            if (isEnd) {
                this.calScroll();
            }
        });
    }
    ngOnDestroy() {
        this.serviceCommunityListen.unsubscribe();
        this.servicDataListen.unsubscribe();
    }
    ngOnChanges(changes) {
        this.isCoverFooter = true;
    }
    cancelEdit() {
        const url = decodeURI(this.router.url);
        let urlArray = url.split('/');
        urlArray.pop();
        urlArray[urlArray.length - 1] = urlArray[urlArray.length - 1].replace('.verify', '.v');
        this.router.navigate(urlArray);
    }
    addLink() {
        this.isAdding = true;
        this.httpService.emitCommunity(1);
    }
    calScroll() {
        // 文档距顶
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        // 文档高度
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        // 视窗高度
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        }
        else {
            windowHeight = document.body.clientHeight;
        }
        // 
        if (scrollTop + windowHeight + 60 >= scrollHeight) {
            this.isCoverFooter = true;
        }
        else {
            this.isCoverFooter = false;
        }
    }
}
LandsFooterComponent.ɵfac = function LandsFooterComponent_Factory(t) { return new (t || LandsFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); };
LandsFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandsFooterComponent, selectors: [["app-lands-footer"]], hostBindings: function LandsFooterComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function LandsFooterComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("resize", function LandsFooterComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { tab: "tab" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 23, vars: 6, consts: [[1, "fixed-bottom", "land-edit-btns", "d-none", "d-md-block", 3, "ngClass"], [1, "container"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "btn-question", "popoverClass", "popover-class", "ngbPopover", "Up to six custom links can be added", "triggers", "mouseenter:mouseleave", 4, "ngIf"], [1, "d-flex", "justify-content-around"], [1, "btn", "btn-second", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-eye-fill"], ["d", "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"], ["d", "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"], ["class", "btn btn-second ml-3", "disabled", "", 4, "ngIf"], ["class", "btn btn-main btn-active ml-3", 3, "disabled", "click", 4, "ngIf"], [1, "fixed-bottom", "land-edit-btns-sm", "d-md-none"], [1, "btn", "btn-col", 3, "click"], ["class", "btn btn-col", "disabled", "", 4, "ngIf"], ["class", "btn btn-main btn-active", 3, "disabled", "click", 4, "ngIf"], ["popoverClass", "popover-class", "ngbPopover", "Up to six custom links can be added", "triggers", "mouseenter:mouseleave", 1, "btn-question"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-question-circle"], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["d", "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"], ["disabled", "", 1, "btn", "btn-second", "ml-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-grid-fill"], ["d", "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"], [1, "btn", "btn-main", "btn-active", "ml-3", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "class", "bi bi-plus-circle-fill", "viewBox", "0 0 16 16", 4, "ngIf"], ["class", "spinner-border text-light", "style", "width: 1em; height: 1em", "role", "status", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-plus-circle-fill"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"], ["role", "status", 1, "spinner-border", "text-light", 2, "width", "1em", "height", "1em"], [1, "sr-only"], ["disabled", "", 1, "btn", "btn-col"], [1, "btn", "btn-main", "btn-active", 3, "disabled", "click"]], template: function LandsFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LandsFooterComponent_button_4_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandsFooterComponent_Template_button_click_6_listener() { return ctx.cancelEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Profile View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LandsFooterComponent_button_11_Template, 4, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LandsFooterComponent_button_12_Template, 4, 3, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandsFooterComponent_Template_button_click_16_listener() { return ctx.cancelEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Profile View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LandsFooterComponent_button_21_Template, 4, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LandsFooterComponent_button_22_Template, 4, 3, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isCoverFooter ? "non-transparent" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab === "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab === "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab === "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab === "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab === "2");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPopover], styles: [".land-edit-btns[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  background: rgba(15, 25, 38, 0.8);\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-question[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #6c757d;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-question[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 10px;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  color: #a7b4c0;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-second[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  font-size: 14px;\n  background-color: #1B3859;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-second[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-second[_ngcontent-%COMP%]:hover {\n  background: #2050CB;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  font-size: 14px;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-col[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-col[_ngcontent-%COMP%]:hover {\n  background: #2050CB;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 367px;\n  height: 60px;\n  font-size: 16px;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n.land-edit-btns[_ngcontent-%COMP%]   .btn-active[_ngcontent-%COMP%] {\n  background: #2050CB;\n}\n.land-edit-btns-sm[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  background: rgba(15, 25, 38, 0.8);\n}\n.land-edit-btns-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 5px;\n}\n.land-edit-btns-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  color: #6c757d;\n}\n.land-edit-btns-sm[_ngcontent-%COMP%]   .btn-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  height: 40px;\n}\n.land-edit-btns-sm[_ngcontent-%COMP%]   .btn-col[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n}\n.land-edit-btns-sm[_ngcontent-%COMP%]   .btn-col[_ngcontent-%COMP%]:hover {\n  background: #2050CB;\n}\n.land-edit-btns-sm[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  width: 180px;\n  height: 40px;\n}\n.land-edit-btns-sm[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n.land-edit-btns-sm[_ngcontent-%COMP%]   .btn-active[_ngcontent-%COMP%] {\n  background: #2050CB;\n}\n.non-transparent[_ngcontent-%COMP%] {\n  background: #0f1926 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRzLWZvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBQUNKO0FBSEE7RUFJUSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRVI7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQVhBO0VBWVEsV0FBQTtFQUNBLG1CQUFBO0FBRVI7QUFmQTtFQWdCUSxjQUFBO0FBRVI7QUFsQkE7RUFtQlEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRVI7QUExQkE7RUEwQlksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUdaO0FBRFE7RUFDSSxtQkFBQTtBQUdaO0FBbENBO0VBbUNRLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVSO0FBMUNBO0VBMENZLFdBQUE7RUFDQSxZQUFBO0FBR1o7QUFEUTtFQUNJLG1CQUFBO0FBR1o7QUFqREE7RUFrRFEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFUjtBQXpEQTtFQXlEWSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR1o7QUE5REE7RUErRFEsbUJBQUE7QUFFUjtBQUNBO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0FBQ0o7QUFIQTtFQUlRLFdBQUE7RUFDQSxrQkFBQTtBQUVSO0FBUEE7RUFRUSxjQUFBO0FBRVI7QUFWQTtFQVdRLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVSO0FBbEJBO0VBa0JZLFdBQUE7RUFDQSxZQUFBO0FBR1o7QUFEUTtFQUNJLG1CQUFBO0FBR1o7QUF6QkE7RUEwQlEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFUjtBQWpDQTtFQWlDWSxpQkFBQTtBQUdaO0FBcENBO0VBcUNRLG1CQUFBO0FBRVI7QUFFQTtFQUNJLDhCQUFBO0FBQUoiLCJmaWxlIjoibGFuZHMtZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmQtZWRpdC1idG5zIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjUsIDM4LCAwLjgpO1xuICAgIC5idG4tcXVlc3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICAgIC5idG46ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogI2E3YjRjMDtcbiAgICB9XG4gICAgLmJ0bi1zZWNvbmQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjM4NTk7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIwNTBDQjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuLWNvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIwNTBDQjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuLW1haW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDM2N3B4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ0bi1hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjA1MENCO1xuICAgIH1cbn1cbi5sYW5kLWVkaXQtYnRucy1zbSB7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjUsIDM4LCAwLjgpO1xuICAgIC5idG4ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuYnRuOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgfVxuICAgIC5idG4tY29sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjA1MENCO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5idG4tbWFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ0bi1hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjA1MENCO1xuICAgIH1cblxufVxuLm5vbi10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZDogIzBmMTkyNiAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 83875:
/*!************************************************!*\
  !*** ./src/app/pages/lands/lands.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandsComponent": () => (/* binding */ LandsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/contract.service */ 7533);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/alert.service */ 43833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _thumb_thumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thumb/thumb.component */ 83936);
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intro/intro.component */ 14378);
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./community/community.component */ 6698);
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor/editor.component */ 44493);
/* harmony import */ var _lands_footer_lands_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lands-footer/lands-footer.component */ 15859);
/* harmony import */ var _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mapping/mapping.component */ 57281);













function LandsComponent_ng_container_2_ul_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_2_ul_2_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r12.switchTab("p"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Public");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_2_ul_2_Template_li_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r14.switchTab("verify"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Offical");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_2_ul_2_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r15.switchTab("owner"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.suffix === "p" ? "btn-primary" : "btn-second");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.suffix === "verify" ? "btn-primary" : "btn-second");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.suffix === "owner" ? "btn-primary" : "btn-second");
} }
function LandsComponent_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r16.suffix)("baseData", ctx_r16.baseData);
} }
const _c0 = function (a0) { return { name: a0, logoStatus: 1 }; };
function LandsComponent_ng_container_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "The content editing function will be released soon.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "There will be token rewards for you if you contribute meaningful content.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Please stay tuned!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("page", ctx_r17.page)("suffix", ctx_r17.suffix)("baseData", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c0, ctx_r17.name));
} }
function LandsComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LandsComponent_ng_container_2_ng_container_3_ng_container_1_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LandsComponent_ng_container_2_ng_container_3_ng_container_2_Template, 10, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.objectStatus > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.objectStatus <= 0);
} }
function LandsComponent_ng_container_2_ng_container_4_ng_container_1_hr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "hr", 14);
} }
function LandsComponent_ng_container_2_ng_container_4_ng_container_1_app_editor_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-editor");
} }
function LandsComponent_ng_container_2_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-intro", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-community", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LandsComponent_ng_container_2_ng_container_4_ng_container_1_hr_5_Template, 1, 0, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, LandsComponent_ng_container_2_ng_container_4_ng_container_1_app_editor_6_Template, 1, 0, "app-editor", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r18.suffix)("baseData", ctx_r18.baseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r18.suffix)("baseData", ctx_r18.baseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r18.suffix)("baseData", ctx_r18.baseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r18.rights === 0 && ctx_r18.suffix === "verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r18.rights === 0 && ctx_r18.suffix === "verify");
} }
function LandsComponent_ng_container_2_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "No one has claimed to be the owner of the official space. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "If you are the official owner of this land, please join olandbox DC to apply for certification by contacting us.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "After the certification is passed, you can have the authority to edit the official land.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_2_ng_container_4_ng_container_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r23.goDc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Go to claim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("page", ctx_r19.page)("suffix", ctx_r19.suffix)("baseData", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c0, ctx_r19.name));
} }
function LandsComponent_ng_container_2_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r20.suffix)("baseData", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, ctx_r20.name));
} }
function LandsComponent_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LandsComponent_ng_container_2_ng_container_4_ng_container_1_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LandsComponent_ng_container_2_ng_container_4_ng_container_2_Template, 15, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LandsComponent_ng_container_2_ng_container_4_ng_container_3_Template, 2, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.objectStatus > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.objectStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.objectStatus < 0);
} }
function LandsComponent_ng_container_2_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-intro", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-community", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r25.suffix)("baseData", ctx_r25.baseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r25.suffix)("baseData", ctx_r25.baseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r25.suffix)("baseData", ctx_r25.baseData);
} }
function LandsComponent_ng_container_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " No one has claimed to be the owner of the official space. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function LandsComponent_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LandsComponent_ng_container_2_ng_container_5_ng_container_1_Template, 4, 6, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LandsComponent_ng_container_2_ng_container_5_ng_container_2_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.objectStatus > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.objectStatus == 0);
} }
function LandsComponent_ng_container_2_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-intro", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-community", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r27.suffix)("baseData", ctx_r27.baseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r27.suffix)("baseData", ctx_r27.baseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r27.suffix)("baseData", ctx_r27.baseData);
} }
function LandsComponent_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LandsComponent_ng_container_2_ng_container_6_ng_container_1_Template, 4, 6, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.objectStatus > 0);
} }
function LandsComponent_ng_container_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "There is no content for the time being, the content editing function will be released soon.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r28.suffix)("baseData", ctx_r28.baseData);
} }
function LandsComponent_ng_container_2_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Congratulations!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "There are no owners of this land yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " Go and mint your own land now, so you can get the possible benifits in the future~");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Click to mint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("page", ctx_r29.page)("suffix", ctx_r29.suffix)("baseData", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c0, ctx_r29.name));
} }
function LandsComponent_ng_container_2_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r30.suffix)("baseData", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, ctx_r30.name));
} }
function LandsComponent_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LandsComponent_ng_container_2_ng_container_7_ng_container_1_Template, 6, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LandsComponent_ng_container_2_ng_container_7_ng_container_2_Template, 13, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LandsComponent_ng_container_2_ng_container_7_ng_container_3_Template, 2, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.objectStatus > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.objectStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.objectStatus < 0);
} }
function LandsComponent_ng_container_2_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_2_div_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r31.goEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_2_div_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r33.goEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LandsComponent_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_2_div_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r34.goDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_2_div_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r36.goDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LandsComponent_ng_container_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_2_div_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r37.goDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_2_div_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r39.goDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LandsComponent_ng_container_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" No space! The page will be re-directed to detail in ", ctx_r11.seconds, " seconds. ");
} }
function LandsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LandsComponent_ng_container_2_ul_2_Template, 7, 3, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LandsComponent_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, LandsComponent_ng_container_2_ng_container_4_Template, 4, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LandsComponent_ng_container_2_ng_container_5_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, LandsComponent_ng_container_2_ng_container_6_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LandsComponent_ng_container_2_ng_container_7_Template, 4, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, LandsComponent_ng_container_2_div_8_Template, 7, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, LandsComponent_ng_container_2_div_9_Template, 7, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, LandsComponent_ng_container_2_div_10_Template, 7, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, LandsComponent_ng_container_2_div_11_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.isSimplify);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.suffix === "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.suffix === "verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.suffix === "v");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.suffix === "o");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.suffix === "owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.suffix === "v" && ctx_r0.rights == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.suffix === "v" && ctx_r0.rights != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.suffix === "o" && ctx_r0.seconds < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.suffix === "o" && ctx_r0.seconds > 0);
} }
function LandsComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Connect your wallet, please! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function LandsComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Sign first, please! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_3_ng_container_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r45.sign(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Sign");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function LandsComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "No one has claimed to be the owner of the official space. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Reconnect your wallet, please!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function LandsComponent_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "You do not have the right to modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function LandsComponent_ng_container_3_ng_container_5_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-thumb", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-intro", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r47.suffix)("edit", ctx_r47.edit)("baseData", ctx_r47.baseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r47.suffix)("edit", ctx_r47.edit)("baseData", ctx_r47.baseData);
} }
function LandsComponent_ng_container_3_ng_container_5_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-community", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r48.suffix)("edit", ctx_r48.edit)("baseData", ctx_r48.baseData);
} }
function LandsComponent_ng_container_3_ng_container_5_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-mapping", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suffix", ctx_r49.suffix)("edit", ctx_r49.edit)("baseData", ctx_r49.baseData);
} }
const _c1 = function (a0) { return { "active": a0 }; };
function LandsComponent_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_3_ng_container_5_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r50.editTab = "1"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_3_ng_container_5_Template_li_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r52.editTab = "2"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LandsComponent_ng_container_3_ng_container_5_Template_li_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r53.editTab = "3"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Mapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, LandsComponent_ng_container_3_ng_container_5_ng_container_11_Template, 3, 6, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, LandsComponent_ng_container_3_ng_container_5_ng_container_12_Template, 2, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, LandsComponent_ng_container_3_ng_container_5_ng_container_13_Template, 2, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "app-lands-footer", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c1, ctx_r44.editTab === "1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](9, _c1, ctx_r44.editTab === "2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c1, ctx_r44.editTab === "3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r44.editTab === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r44.editTab === "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r44.editTab === "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tab", ctx_r44.editTab);
} }
function LandsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LandsComponent_ng_container_3_ng_container_1_Template, 5, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LandsComponent_ng_container_3_ng_container_2_Template, 7, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LandsComponent_ng_container_3_ng_container_3_Template, 8, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, LandsComponent_ng_container_3_ng_container_4_Template, 6, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LandsComponent_ng_container_3_ng_container_5_Template, 15, 13, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.account);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.account && !ctx_r1.isSign);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.account && ctx_r1.isSign && ctx_r1.objectStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.account && ctx_r1.isSign && ctx_r1.objectStatus > 0 && ctx_r1.rights != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.account && ctx_r1.isSign && ctx_r1.objectStatus > 0 && ctx_r1.rights == 0);
} }
class LandsComponent {
    constructor(router, activeRoute, contractService, httpService, alertService) {
        // let sub = combineLatest([this.activeRoute.params, this.contractService.account$])
        // sub.subscribe(([params, account]) => {
        //   if (params.name && account) {
        //     let nameArray = decodeURI(params.name).split('.');
        //     this.name = nameArray[0].trim().replace(/\s{2,}/g, ' ').toLowerCase();
        //     this.suffix = nameArray[1];
        //     if (this.suffix === 'o' || this.suffix === 'v') {
        //       this.isSimplify = true;
        //     } else {
        //       this.isSimplify = false;
        //     }
        this.router = router;
        this.activeRoute = activeRoute;
        this.contractService = contractService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.account = '';
        this.isLoading = false;
        this.isSign = false; // 是否已签名
        this.rights = -1; // 无人有权 | 我有权 | 别人有权编辑
        // p | owner | verify : detail页-公共，私有，官方
        // o | v : detail简化映射页
        this.suffix = 'verify';
        this.isSimplify = false; // 是否显示为简化页
        this.edit = false; // 是否编辑状态
        this.editTab = '1'; // 编辑tab，1,2,3 - basic | link | mapping;
        this.needPermission = false; // 是否需要授权
        this.seconds = -1; // 倒计时
        this.baseData = null;
        //     if (this.suffix === 'o') {
        //       this.getMappingLand();
        //     } else {
        //       this.getLand();
        //     }
        //     if (this.suffix === 'verify' || this.suffix === 'v') {
        //       this.getEditor();
        //     }
        //   }
        // })
        this.activeRoute.params.subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let nameArray = decodeURI(res.name).split('.');
            this.name = nameArray[0].trim().replace(/\s{2,}/g, ' ').toLowerCase();
            this.suffix = nameArray[1];
            if (this.suffix === 'o' || this.suffix === 'v') {
                this.isSimplify = true;
            }
            else {
                this.isSimplify = false;
            }
            if (this.suffix === 'o') {
                this.getMappingLand();
            }
            else {
                this.getLand();
            }
            this.contractService.account$.subscribe((account) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                this.account = account;
                if (this.account) {
                    // 目前只有官方空间支持修改，所以需要拿到owner
                    if (this.suffix === 'verify' || this.suffix === 'v') {
                        this.getEditor();
                    }
                }
            }));
        }));
    }
    ngOnInit() {
        this.activeRoute.data.subscribe(data => {
            this.edit = data.edit;
        });
        this.getIsLogin();
    }
    get objectStatus() {
        if (this.baseData === null || this.baseData === undefined) {
            return -1;
        }
        else {
            return Object.keys(this.baseData).length;
        }
    }
    getIsLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.httpService.isLogin();
            this.isSign = data.code === 0;
        });
    }
    sign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const noncestr = yield this.httpService.noncestr(this.account);
            const hexMessage = yield this.contractService.hexMessage(noncestr.data);
            const signature = yield this.contractService.signature(hexMessage, this.account);
            if (signature) {
                const data = yield this.httpService.login(this.account, signature, hexMessage, noncestr.data);
                if (data.code !== 0) {
                    this.alertService.create({
                        body: 'Error: ' + data.message,
                        color: 'danger',
                        time: 2000
                    });
                    this.isSign = false;
                }
                else {
                    this.isSign = true;
                }
            }
        });
    }
    // .o
    getMappingLand() {
        let matchQuery = this.httpService.getMappingLand(this.name);
        this.httpService.getDatabase(matchQuery).subscribe(res => {
            if (res.length === 0) {
                this.seconds = 3;
                let timeDown = setInterval(() => {
                    this.seconds--;
                    if (this.seconds === 0) {
                        clearInterval(timeDown);
                        this.router.navigate(['/detail', this.name + '.owner']);
                    }
                }, 1000);
            }
            else {
                this.baseData = res[0][0].properties;
                this.baseData.id = res[0][0].id;
                this.setLandStatus();
            }
        });
    }
    //
    getLand() {
        let label;
        if (this.suffix === 'owner') {
            label = 'OwnerLand';
        }
        if (this.suffix === 'verify' || this.suffix === 'v') {
            label = 'VerifyLand';
        }
        if (this.suffix === 'p') {
            label = 'PublicLand';
            this.baseData = {};
            return;
        }
        this.baseData = null;
        const matchQuery = this.httpService.getLand(label, this.name);
        this.httpService.getDatabase(matchQuery).subscribe(res => {
            if (res.length === 0) {
                this.baseData = {};
            }
            else {
                this.baseData = res[0][0].properties;
                this.baseData.id = res[0][0].id;
                this.setLandStatus();
            }
        });
    }
    setLandStatus() {
        if (!this.baseData.hasOwnProperty('introStatus')) {
            this.baseData.introStatus = 1;
        }
        if (!this.baseData.hasOwnProperty('logoStatus')) {
            this.baseData.logoStatus = 1;
        }
    }
    getEditor() {
        const ownerMatchQuery = this.httpService.getLandEditor('Verify', this.name);
        this.httpService.getDatabase(ownerMatchQuery).subscribe(res => {
            if (res.length === 0) {
                this.rights = -1;
            }
            else {
                this.rights = res[0][0].properties.name === this.account ? 0 : 1;
            }
        });
    }
    goDetail() {
        const url = this.router.url.split('?')[0];
        let urlArray = url.split('/');
        urlArray.shift();
        if (this.suffix === 'v' || this.suffix === 'o') {
            urlArray[1] = this.baseData.name + '.verify';
        }
        // this.router.navigate(urlArray)
        this.router.navigate(['detail', this.baseData.name + '.verify']);
    }
    goEdit() {
        let urlArray = ['detail', this.name + '.verify', 'edit'];
        this.router.navigate(urlArray);
    }
    switchTab(suffix) {
        this.suffix = suffix;
        let urlArray = this.router.url.split('/');
        urlArray.shift();
        urlArray[1] = urlArray[1].split('.')[0] + '.' + suffix;
        urlArray[1] = decodeURI(urlArray[1]);
        this.httpService.emitData(false);
        this.router.navigate(urlArray);
    }
    cancelEdit() {
        this.goDetail();
        // let urlArray = this.router.url.split('/')
        // urlArray.shift();
        // urlArray.pop();
        // this.router.navigate(urlArray)
    }
    goDc() {
        global.window.open('https://discord.gg/2pgsTcfyDH', '_blank');
    }
}
LandsComponent.ɵfac = function LandsComponent_Factory(t) { return new (t || LandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService)); };
LandsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: LandsComponent, selectors: [["app-lands"]], decls: 4, vars: 3, consts: [[1, "main", 3, "ngClass"], [1, "lands"], [4, "ngIf"], [1, "container", "py-3", "py-md-5"], ["class", "d-flex justify-content-end", 4, "ngIf"], ["class", "lands-detail", 4, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "btn", "rounded-pill", "px-4", "py-2", 3, "ngClass", "click"], [1, "btn", "rounded-pill", "ml-3", "px-4", "py-2", 3, "ngClass", "click"], [3, "suffix", "baseData"], [3, "page", "suffix", "baseData"], [1, "container"], [1, "lands-mint"], ["class", "my-40", 4, "ngIf"], [1, "my-40"], [1, "text-center"], [1, "btn", "btn-guid", "mt-5", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-discord"], ["d", "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"], [1, "container", "d-flex", "justify-content-center", "align-items-center", "text-white"], ["routerLink", "/mint", 1, "btn", "btn-guid", "mt-5"], [1, "container", "justify-content-center", "align-items-center", "d-none", "d-sm-flex", "mt-5"], [1, "btn", "btn-primary", "rounded-pill", 3, "click"], [1, "fixed-bottom", "d-sm-none"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "click"], [1, "lands-detail"], [1, "container", "d-flex", "justify-content-center", "align-items-center"], [1, "account-card"], [1, "container", "d-flex", "align-items-center", "justify-content-center"], [1, "text-white"], [1, "btn", "btn-primary", "rounded-pill", "px-3", 3, "click"], [1, "lands-edit-tabs", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "px-3"], [3, "ngClass", "click"], [3, "tab"], [3, "suffix", "edit", "baseData"]], template: function LandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LandsComponent_ng_container_2_Template, 12, 10, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LandsComponent_ng_container_3_Template, 6, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", (ctx.suffix === "o" || ctx.suffix === "v") && ctx.seconds < 0 ? "land-share" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.edit && ctx.objectStatus > -1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _thumb_thumb_component__WEBPACK_IMPORTED_MODULE_3__.ThumbComponent, _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__.IntroComponent, _community_community_component__WEBPACK_IMPORTED_MODULE_5__.CommunityComponent, _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__.EditorComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _lands_footer_lands_footer_component__WEBPACK_IMPORTED_MODULE_7__.LandsFooterComponent, _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_8__.MappingComponent], styles: [".land-share[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.lands[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  overflow: hidden;\n}\n.lands[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background: linear-gradient(-90deg, rgba(32, 80, 203, 0.8), #2E62E6);\n}\n.lands[_ngcontent-%COMP%]   .btn-second[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0F1926;\n  border: 1px solid #192F4C;\n}\n.lands[_ngcontent-%COMP%]   .btn-second[_ngcontent-%COMP%]:hover {\n  background-color: #192F4C;\n}\n.lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%] {\n  padding: 60px 0 ;\n  background: #0F1926;\n}\n.lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   .navbar-nav-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   .navbar-nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n  \n  height: 3px;\n}\n.lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   .navbar-nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #101011;\n  \n}\n.lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   .navbar-nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #192536;\n  \n  border-radius: 2px;\n  \n}\n.lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  color: #fff;\n}\n.lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-right: 20px;\n  cursor: pointer;\n  flex-shrink: 0;\n  padding: 12px 30px;\n  border-radius: 10px;\n}\n.lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #2E8AE6;\n  background-color: #09101A;\n}\n.lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  background: #2B68AC;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  line-height: 60px;\n  height: 60px;\n}\n.lands[_ngcontent-%COMP%]   .lands-mint[_ngcontent-%COMP%] {\n  text-indent: 1em;\n  background: #141F33;\n  padding: 80px 50px;\n  margin-top: 40px;\n  color: #fff;\n  font-size: 20px;\n  border-radius: 10px;\n  font-weight: lighter;\n}\n.lands[_ngcontent-%COMP%]   .lands-mint[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-indent: 0;\n}\n.lands[_ngcontent-%COMP%]   .lands-mint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.lands[_ngcontent-%COMP%]   .lands-mint[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #2153D3, #4866B0);\n  border-radius: 5px;\n  font-size: 16px;\n  color: #FFFFFF;\n  height: 50px;\n}\n.lands[_ngcontent-%COMP%]   .lands-mint[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n.lands[_ngcontent-%COMP%]   .lands-mint[_ngcontent-%COMP%]   .btn-guid[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  color: #ccc;\n  border-bottom: 1px solid #ccc;\n  height: 2em;\n  border-radius: 0;\n}\n.lands[_ngcontent-%COMP%]   .lands-mint[_ngcontent-%COMP%]   .btn-guid[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border-bottom: 1px solid #fff;\n}\n.lands[_ngcontent-%COMP%]   .lands-detail[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 56px 0;\n  margin-top: 40px;\n  margin-bottom: -20px;\n  color: #fff;\n  font-size: 20px;\n  border-radius: 10px;\n}\n.lands[_ngcontent-%COMP%]   .lands-detail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #2153D3, #4866B0);\n  border-radius: 5px;\n  font-size: 16px;\n  color: #FFFFFF;\n  height: 50px;\n}\n.lands[_ngcontent-%COMP%]   .lands-detail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(90deg, #285ce0, #506fbd);\n}\n.account-card[_ngcontent-%COMP%] {\n  margin-bottom: calc(100vh - 337px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 180px;\n  background: #0D1926;\n  color: #fff;\n  font-size: 30px;\n}\n.account-card[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  width: 60px;\n  height: 60px;\n  background-color: #09101A;\n  border-radius: 50%;\n  color: #18314D;\n}\n.account-card[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.my-40[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\n@media (max-width: 991.98px) {\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%] {\n    padding: 20px 0;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 40px;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n    padding: 0 30px;\n    font-size: 16px;\n    line-height: 40px;\n    height: 40px;\n  }\n}\n@media (max-width: 767.98px) {\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    padding: 10px 15px;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .account-card[_ngcontent-%COMP%] {\n    font-size: 15px;\n    min-height: 90px;\n    margin-bottom: 20px;\n    padding: 10px 0;\n  }\n  .account-card[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    width: 40px;\n    height: 40px;\n  }\n  .account-card[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n@media (max-width: 575.98px) {\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 20px;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-edit-tabs[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n    font-size: 14px;\n    border-radius: 20px 0 0 20px;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-mint[_ngcontent-%COMP%] {\n    padding: 40px 25px;\n    font-size: 12px;\n    margin-bottom: 0;\n    margin-top: 100px;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-mint[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    height: 40px;\n  }\n  .lands[_ngcontent-%COMP%]   .lands-mint[_ngcontent-%COMP%]   .btn-guid[_ngcontent-%COMP%] {\n    height: 2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBQ0E7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFIQTtFQUlRLFdBQUE7RUFDQSxvRUFBQTtBQUVSO0FBUEE7RUFRUSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUVSO0FBRFE7RUFDSSx5QkFBQTtBQUdaO0FBZkE7RUFrQlEsZ0JBQUE7RUFDQSxtQkFBQTtBQUFSO0FBbkJBO0VBcUJZLGdCQUFBO0FBQ1o7QUFBWTtFQUNJLFVBQUE7RUFFZCxrQ0FBa0M7RUFEcEIsV0FBQTtBQUdoQjtBQUFZO0VBQ0ksbUJBQUE7RUFFZCwrQkFBK0I7QUFDakM7QUFBWTtFQUNJLHlCQUFBO0VBRWQsOEJBQThCO0VBRGhCLGtCQUFBO0VBR2Qsa0NBQWtDO0FBQ3BDO0FBckNBO0VBcUNZLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHWjtBQTNDQTtFQTBDZ0IsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUloQjtBQW5EQTtFQWtEZ0IsY0FBQTtFQUNBLHlCQUFBO0FBSWhCO0FBdkRBO0VBdURZLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFHWjtBQWhFQTtFQWlFUSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUVSO0FBMUVBO0VBMEVZLGNBQUE7QUFHWjtBQTdFQTtFQTZFWSxxQkFBQTtBQUdaO0FBaEZBO0VBZ0ZZLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFHWjtBQXZGQTtFQXlGZ0IsbUJBQUE7QUFDaEI7QUExRkE7RUE2RlksVUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQVo7QUFDWTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtBQUNoQjtBQXRHQTtFQTBHUSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURSO0FBL0dBO0VBa0hZLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFBWjtBQUNZO0VBQ0ksb0RBQUE7QUFDaEI7QUFLQTtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjtBQUxBO0VBVVEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRlI7QUFiQTtFQWlCWSxXQUFBO0VBQ0EsWUFBQTtBQURaO0FBTUE7RUFDSSxjQUFBO0FBSko7QUFRQTtFQUNJO0lBRVEsZUFBQTtFQVBWO0VBS0U7SUFJWSxlQUFBO0VBTmQ7RUFFRTtJQU1nQixrQkFBQTtFQUxsQjtFQURFO0lBVVksZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFOZDtBQUNGO0FBVUE7RUFDSTtJQUdZLGVBQUE7RUFWZDtFQU9FO0lBS2dCLGtCQUFBO0lBQ0Esa0JBQUE7RUFUbEI7RUFHRTtJQVVZLGVBQUE7RUFWZDtFQWNFO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBWk47RUFRRTtJQU1RLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFYVjtFQUdFO0lBVVksV0FBQTtJQUNBLFlBQUE7RUFWZDtBQUNGO0FBZUE7RUFFSTtJQUlZLFVBQUE7RUFqQmQ7RUFhRTtJQU9ZLGVBQUE7RUFqQmQ7RUFVRTtJQVNnQixrQkFBQTtFQWhCbEI7RUFPRTtJQWFZLGVBQUE7SUFDQSw0QkFBQTtFQWpCZDtFQUdFO0lBa0JRLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUFsQlY7RUFIRTtJQXdCWSxlQUFBO0lBQ0EsWUFBQTtFQWxCZDtFQVBFO0lBNEJZLFdBQUE7RUFsQmQ7QUFDRiIsImZpbGUiOiJsYW5kcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kLXNoYXJlIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4ubGFuZHMge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIHJnYmEoMzIsIDgwLCAyMDMsIDAuOCksICMyRTYyRTYpO1xuICAgIH1cbiAgICAuYnRuLXNlY29uZCB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYxOTI2O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTkyRjRDO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTJGNEM7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC5sYW5kcy1lZGl0LXRhYnMge1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDAgO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMEYxOTI2O1xuICAgICAgICAubmF2YmFyLW5hdi1zY3JvbGwge1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogM3B4OyAgICAgICAgICAgICAgIC8qIHdpZHRoIG9mIHRoZSBlbnRpcmUgc2Nyb2xsYmFyICovXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMDEwMTE7ICAgICAgICAvKiBjb2xvciBvZiB0aGUgdHJhY2tpbmcgYXJlYSAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyNTM2OyAgICAvKiBjb2xvciBvZiB0aGUgc2Nyb2xsIHRodW1iICovXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4OyAgICAgICAvKiByb3VuZG5lc3Mgb2YgdGhlIHNjcm9sbCB0aHVtYiAqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJFOEFFNjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkxMDFBO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5idG4tYmFjayB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMkI2OEFDO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxhbmRzLW1pbnQge1xuICAgICAgICB0ZXh0LWluZGVudDogMWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTQxRjMzO1xuICAgICAgICBwYWRkaW5nOiA4MHB4IDUwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAudGV4dC1sZWZ0IHtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAwO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjE1M0QzLCAjNDg2NkIwKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgLy8gJjpob3ZlciB7XG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjg1Y2UwLCAjNTA2ZmJkKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYnRuLWd1aWQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5sYW5kcy1kZXRhaWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZzogNTZweCAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyMTUzRDMsICM0ODY2QjApO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyODVjZTAsICM1MDZmYmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWNjb3VudC1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEwMHZoIC0gMzM3cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMEQxOTI2O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAucGVvcGxlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkxMDFBO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGNvbG9yOiAjMTgzMTREO1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbi5teS00MCB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgLmxhbmRzIHtcbiAgICAgICAgLmxhbmRzLWVkaXQtdGFicyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4tYmFjayB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLmxhbmRzIHtcbiAgICAgICAgLmxhbmRzLWVkaXQtdGFicyB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0bi1iYWNrIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuICAgIC5hY2NvdW50LWNhcmQge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgLnBlb3BsZSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcblxuICAgIC5sYW5kcyB7XG4gICAgICAgIC5sYW5kcy1lZGl0LXRhYnMge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWJhY2sge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICAubGFuZHMtbWludCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG5cbiAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWd1aWQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 57281:
/*!**********************************************************!*\
  !*** ./src/app/pages/lands/mapping/mapping.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MappingComponent": () => (/* binding */ MappingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/contract.service */ 7533);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ 13841);
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/alert.service */ 43833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);








function MappingComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MappingComponent_div_21_Template_input_change_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const item_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.mappingChange($event, item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MappingComponent_div_21_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const item_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.copy(ctx_r5.baseUrl + item_r1.name + ".o"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "mapSwitch", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", item_r1.mapping);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "mapSwitch", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.baseUrl, "", item_r1.name, ".o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("title", "", ctx_r0.baseUrl, "", item_r1.name, ".o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.baseUrl, "", item_r1.name, ".o");
} }
class MappingComponent {
    constructor(router, contractService, httpService, clipboard, alertService) {
        this.router = router;
        this.contractService = contractService;
        this.httpService = httpService;
        this.clipboard = clipboard;
        this.alertService = alertService;
        this.baseUrl = window.location.origin + '/';
        this.account = '';
        this.lands = [];
        this.loading = true;
    }
    ngOnInit() {
        this.contractService.account$.subscribe(account => {
            this.account = account;
        });
    }
    ngOnChanges(changes) {
        if (changes.baseData.currentValue) {
            this.getLands();
        }
    }
    getLands() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const matchQuery = this.httpService.getOwnLand(this.baseData.name);
            this.httpService.getDatabase(matchQuery).subscribe(res => {
                res.forEach(item => {
                    this.lands.push({
                        id: item[0].id,
                        name: item[0].properties.name,
                        mapping: item[0].properties.mapping ? true : false
                    });
                });
                setTimeout(() => {
                    this.httpService.emitData(true);
                });
            });
        });
    }
    mappingChange(e, item) {
        const status = e.currentTarget.checked ? 1 : 0;
        const matchQuery = this.httpService.updateOwnerLandMapping(item.id, status);
        this.httpService.updateDatabase(matchQuery).subscribe(res => {
            if (res.length > 0) {
                let message = status ? `Domain mapping is open, you can access your personal profile though "${item.name}.o"` : `Domain mapping is closed.`;
                this.alertService.create({
                    body: message,
                    color: 'success',
                    time: 2000
                });
            }
            else {
                this.alertService.create({
                    body: 'Domain mapping failed.',
                    color: 'danger',
                    time: 2000
                });
            }
        });
    }
    copy(name) {
        this.clipboard.copy(encodeURI(name));
        this.alertService.create({
            body: `Copy successfully, go and share your profile link`,
            color: 'success',
            time: 2000
        });
    }
    cancelEdit() {
        this.router.navigate(['detail', this.baseData.name + '.' + this.suffix]);
    }
}
MappingComponent.ɵfac = function MappingComponent_Factory(t) { return new (t || MappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService)); };
MappingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MappingComponent, selectors: [["app-mapping"]], inputs: { baseData: "baseData", suffix: "suffix" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 22, vars: 8, consts: [[1, "container", "lands-mapping-editor"], [1, "title"], [1, "sub-title"], [1, "list-group", "mb-5"], [1, "list-group-item", "py-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "list-title", "text-truncate"], ["src", "../../../../assets/images/map.png", 1, "mr-2"], [1, "link"], ["src", "../../../../assets/images/link.png", 1, "mr-2"], [1, "link-wrap"], [1, "txt"], [1, "attr-title", 3, "title"], [1, "btn-edit", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-front"], ["d", "M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z"], ["class", "list-group-item py-4", 4, "ngFor", "ngForOf"], [1, "custom-control", "custom-switch", "custom-switch-md"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"]], template: function MappingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Mapping Instruction");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Please click the copy button, and then update to your social app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MappingComponent_Template_button_click_18_listener() { return ctx.copy(ctx.baseUrl + ctx.account + ".v"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, MappingComponent_div_21_Template, 18, 10, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.baseData.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.baseUrl, "", ctx.baseData.name, ".v");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("title", "", ctx.baseUrl, "", ctx.baseData.name, ".v");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.baseUrl, "", ctx.baseData.name, ".v");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lands);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], styles: [".lands-mapping-editor[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n}\n.lands-mapping-editor[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 16px;\n  color: #666D80;\n}\n.lands-mapping-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0;\n  color: #666D80;\n}\n.lands-mapping-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  background: #0F1926;\n  border: 1px solid #192F4C;\n  border-radius: 5px;\n  color: #fff;\n}\n.lands-mapping-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.lands-mapping-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 16px;\n  color: #666D80;\n}\n.lands-mapping-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrap[_ngcontent-%COMP%] {\n  width: 0;\n  flex: 1;\n  position: relative;\n  line-height: 32px;\n  height: 32px;\n  overflow: hidden;\n}\n.lands-mapping-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrap[_ngcontent-%COMP%]   .attr-title[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  background: inherit;\n  text-align: justify;\n  height: 32px;\n  overflow: hidden;\n  top: -64px;\n  word-break: break-word;\n  word-wrap: break-word;\n  background: #0F1926;\n}\n.lands-mapping-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrap[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 64px;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n.lands-mapping-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link-wrap[_ngcontent-%COMP%]   .attr-title[_ngcontent-%COMP%]::before {\n  content: attr(title);\n  width: 87%;\n  float: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  direction: rtl;\n  margin-left: -0.5em;\n}\n.lands-mapping-editor[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHBpbmcuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHUSxXQUFBO0VBQ0EsZUFBQTtBQUZSO0FBRkE7RUFPUSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRlI7QUFQQTtFQWFZLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFIWjtBQVpBO0VBa0JZLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhaO0FBbkJBO0VBd0JnQixlQUFBO0FBRmhCO0FBdEJBO0VBMkJnQixhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFGaEI7QUEzQkE7RUErQm9CLFFBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURwQjtBQW5DQTtFQXNDd0IsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFBeEI7QUEvQ0E7RUFrRHdCLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFBeEI7QUFyREE7RUF3RHdCLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFBeEI7QUEvREE7RUFxRVksV0FBQTtBQUhaIiwiZmlsZSI6Im1hcHBpbmcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sYW5kcy1tYXBwaW5nLWVkaXRvciB7XG4gICAgXG4gICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgLnN1Yi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgfVxuICAgIC5saXN0LWdyb3VwIHtcbiAgICAgICAgLmJ0bi1lZGl0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgIH1cbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBGMTkyNjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOTJGNEM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIC5saXN0LXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgICAgICAgICAgLmxpbmstd3JhcCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIC5hdHRyLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEYxOTI2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50eHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXR0ci10aXRsZTo6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYXR0cih0aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODclO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 83936:
/*!******************************************************!*\
  !*** ./src/app/pages/lands/thumb/thumb.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThumbComponent": () => (/* binding */ ThumbComponent)
/* harmony export */ });
/* harmony import */ var _components_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/upload-image/upload-image.component */ 50244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/alert.service */ 43833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/autofocus.directive */ 73185);









function ThumbComponent_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.baseData.logo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ThumbComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ThumbComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ThumbComponent_div_2_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.upload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "avator-edit": a0 }; };
function ThumbComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ThumbComponent_div_2_img_1_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ThumbComponent_div_2_div_2_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ThumbComponent_div_2_div_3_Template, 4, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, ctx_r0.edit));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.baseData == null ? null : ctx_r0.baseData.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r0.baseData == null ? null : ctx_r0.baseData.logo));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.edit);
} }
function ThumbComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.baseData.name);
} }
function ThumbComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.baseData.alias || ctx_r8.baseData.name);
} }
function ThumbComponent_div_3_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.baseData.alias);
} }
function ThumbComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ThumbComponent_div_3_div_4_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r9.aliasEditing);
} }
function ThumbComponent_div_3_div_5_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ThumbComponent_div_3_div_5_input_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r16.baseData.alias = $event; })("blur", function ThumbComponent_div_3_div_5_input_1_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r18.blurAlias(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r13.baseData.alias);
} }
function ThumbComponent_div_3_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ThumbComponent_div_3_div_5_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r19.editAlias(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.baseData.alias || "name");
} }
function ThumbComponent_div_3_div_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ThumbComponent_div_3_div_5_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r21.editAlias(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ThumbComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ThumbComponent_div_3_div_5_input_1_Template, 1, 1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ThumbComponent_div_3_div_5_span_2_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ThumbComponent_div_3_div_5_button_3_Template, 3, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.aliasEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r10.aliasEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r10.aliasEditing);
} }
function ThumbComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ThumbComponent_div_3_div_6_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r23.changeLogoStatus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r11.baseData == null ? null : ctx_r11.baseData.logoStatus);
} }
const _c1 = function (a0) { return { "content-edit": a0 }; };
function ThumbComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ThumbComponent_div_3_div_2_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ThumbComponent_div_3_div_3_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ThumbComponent_div_3_div_4_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ThumbComponent_div_3_div_5_Template, 4, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ThumbComponent_div_3_div_6_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c1, ctx_r1.edit));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.suffix !== "o" && ctx_r1.suffix !== "v");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.suffix === "o" || ctx_r1.suffix === "v");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.edit && ctx_r1.suffix !== "o" && ctx_r1.suffix !== "v");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.edit);
} }
const _c2 = function (a0, a1, a2) { return { "edit": a0, "public": a1, owner: a2 }; };
class ThumbComponent {
    constructor(router, modalService, httpService, alertService) {
        this.router = router;
        this.modalService = modalService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.loader = false;
        this.edit = false;
        this.aliasEditing = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.httpService.emitData(true);
        });
    }
    upload() {
        const modalRef = this.modalService.open(_components_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_0__.UploadImageComponent, { backdropClass: 'modal-mask', windowClass: 'dark', size: 'md', centered: true });
        modalRef.componentInstance.urlEvent.subscribe((url) => {
            const matchQuery = this.httpService.updateLand(this.baseData.id, 'logo', url);
            this.httpService.updateDatabase(matchQuery).subscribe(res => {
                this.baseData.logo = url;
                if (res.length > 0) {
                    this.alertService.create({
                        body: 'Upload image successfully.',
                        time: 2000,
                        color: 'success'
                    });
                }
                else {
                    this.alertService.create({
                        body: 'Changing failed.',
                        time: 2000,
                        color: 'danger'
                    });
                }
            });
        });
    }
    changeLogoStatus(e) {
        const logoStatus = e.currentTarget.checked ? 1 : 0;
        const matchQuery = this.httpService.updateLand(this.baseData.id, 'logoStatus', logoStatus, true);
        this.httpService.updateDatabase(matchQuery).subscribe(res => {
            if (res.length > 0) {
                this.alertService.create({
                    body: logoStatus ? 'Allowed to display on Profile.' : 'Prohibited from displaying on Profile.',
                    time: 2000,
                    color: 'success'
                });
            }
            else {
                this.alertService.create({
                    body: 'Changing failed.',
                    time: 2000,
                    color: 'danger'
                });
            }
            this.baseData.logoStatus = logoStatus;
        });
    }
    editAlias() {
        this.aliasEditing = true;
    }
    blurAlias() {
        this.aliasEditing = false;
        const matchQuery = this.httpService.updateLand(this.baseData.id, 'alias', this.baseData.alias);
        this.httpService.updateDatabase(matchQuery).subscribe(res => {
            if (res.length > 0) {
                this.alertService.create({
                    body: 'Changing successfully.',
                    color: 'success',
                    time: 2000
                });
            }
            else {
                this.alertService.create({
                    body: 'Changing failed.',
                    color: 'danger',
                    time: 2000
                });
            }
        });
    }
    cancelEdit() {
        this.router.navigate(['detail', this.baseData.name + '.' + this.suffix]);
    }
}
ThumbComponent.ɵfac = function ThumbComponent_Factory(t) { return new (t || ThumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService)); };
ThumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ThumbComponent, selectors: [["app-thumb"]], inputs: { loader: "loader", suffix: "suffix", baseData: "baseData", edit: "edit" }, decls: 4, vars: 7, consts: [[1, "container", "lands-thumb"], [1, "cover", 3, "ngClass"], ["class", "avator", 3, "ngClass", 4, "ngIf"], ["class", "content", 3, "ngClass", 4, "ngIf"], [1, "avator", 3, "ngClass"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "people", 4, "ngIf"], ["class", "upload", 3, "click", 4, "ngIf"], ["alt", "", 3, "src"], [1, "people"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-circle"], ["d", "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"], ["fill-rule", "evenodd", "d", "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"], [1, "upload", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-image"], ["d", "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"], ["d", "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"], [1, "content", 3, "ngClass"], [1, "mb-1"], ["class", "title text-break", 4, "ngIf"], ["class", "title text-break", "style", "width: 100%", 4, "ngIf"], ["class", "alias", 4, "ngIf"], ["class", "alias text-truncate", 4, "ngIf"], ["class", "text-right mt-3", 4, "ngIf"], [1, "title", "text-break"], [1, "title", "text-break", 2, "width", "100%"], [1, "alias"], ["class", "d-inline-block text-break ", 4, "ngIf"], [1, "d-inline-block", "text-break"], [1, "alias", "text-truncate"], ["type", "text", "class", "form-control form-control-edit", "maxlength", "30", "autoFocus", "", 3, "ngModel", "ngModelChange", "blur", 4, "ngIf"], ["class", "d-inline-block text-truncate ", 3, "click", 4, "ngIf"], ["class", "btn-edit", 3, "click", 4, "ngIf"], ["type", "text", "maxlength", "30", "autoFocus", "", 1, "form-control", "form-control-edit", 3, "ngModel", "ngModelChange", "blur"], [1, "d-inline-block", "text-truncate", 3, "click"], [1, "btn-edit", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pencil-fill"], ["d", "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"], [1, "text-right", "mt-3"], [1, "custom-control", "custom-switch", "custom-switch-md"], ["type", "checkbox", "id", "thumbSwitch", 1, "custom-control-input", 3, "checked", "change"], ["for", "thumbSwitch", 1, "custom-control-label"]], template: function ThumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ThumbComponent_div_2_Template, 4, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ThumbComponent_div_3_Template, 7, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](3, _c2, ctx.edit, ctx.suffix === "p", ctx.suffix === "owner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.edit || (ctx.baseData == null ? null : ctx.baseData.logoStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.edit || (ctx.baseData == null ? null : ctx.baseData.logoStatus));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__.AutoFocusDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel], styles: [".lands-thumb[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  background-color: #2E4C99;\n  height: 200px;\n}\n.lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  border: 4px solid #09101A;\n  bottom: -80px;\n  left: 40px;\n  background: #09101a;\n  color: #fff;\n  font-size: 20px;\n  font-weight: bolder;\n  text-align: center;\n}\n.lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: #18314D;\n}\n.lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 60px;\n  height: 60px;\n  background: #DCDDDE;\n  box-shadow: 0px 0px 8px 0px rgba(9, 16, 26, 0.3);\n  border-radius: 30px;\n  color: #4F545C;\n  line-height: 56px;\n  cursor: pointer;\n}\n.lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.lands-thumb[_ngcontent-%COMP%]   .cover.edit[_ngcontent-%COMP%] {\n  background-color: #2EA8E6;\n}\n.lands-thumb[_ngcontent-%COMP%]   .cover.public[_ngcontent-%COMP%] {\n  background-color: #1F8599;\n}\n.lands-thumb[_ngcontent-%COMP%]   .cover.owner[_ngcontent-%COMP%] {\n  background-color: #80420D;\n}\n.lands-thumb[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 16px 0 0 240px;\n  color: #fff;\n  min-height: 100px;\n}\n.lands-thumb[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 24px;\n}\n.lands-thumb[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%] {\n  margin: 0 0 0 auto;\n}\n.lands-thumb[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .alias[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  color: #8F98B3;\n}\n.lands-thumb[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-control-edit[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 24px;\n  background: #09101a;\n  color: #fff;\n  font-weight: bold;\n  border: 0;\n  outline: none;\n}\n.lands-thumb[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-control-edit[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.lands-thumb[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0;\n  color: #666D80;\n}\n@media (max-width: 767.98px) {\n  .lands-thumb[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    border: 2px solid #09101A;\n    bottom: -15px;\n    left: 20px;\n    font-size: 16px;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator[_ngcontent-%COMP%]::after {\n    line-height: 80px;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    box-shadow: 0px 0px 8px 0px rgba(9, 16, 26, 0.3);\n    line-height: 26px;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .avator.avator-edit[_ngcontent-%COMP%] {\n    left: calc(50% - 40px);\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 120px;\n    bottom: 6px;\n    right: 10px;\n    padding: 30px 15px 0 15px;\n    min-height: 50px;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .alias[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .content.content-edit[_ngcontent-%COMP%] {\n    position: relative;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    padding: 30px 15px 0 15px;\n    min-height: 50px;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .content.content-edit[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .lands-thumb[_ngcontent-%COMP%]   .content.content-edit[_ngcontent-%COMP%]   .alias[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRodW1iLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjtBQUZBO0VBR1Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUVSO0FBUkE7RUFRWSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQXRCQTtFQXFCZ0IsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSWhCO0FBNUJBO0VBMkJnQixXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFJaEI7QUFqQ0E7RUErQm9CLFdBQUE7RUFDQSxZQUFBO0FBS3BCO0FBckNBO0VBb0NnQixrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSWhCO0FBbERBO0VBZ0RvQixXQUFBO0VBQ0EsWUFBQTtBQUtwQjtBQXREQTtFQXdEUSx5QkFBQTtBQUNSO0FBekRBO0VBMkRRLHlCQUFBO0FBQ1I7QUE1REE7RUE4RFEseUJBQUE7QUFDUjtBQS9EQTtFQWlFUSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNSO0FBcEVBO0VBcUVZLFdBQUE7RUFDQSxlQUFBO0FBRVo7QUF4RUE7RUF5RVksa0JBQUE7QUFFWjtBQTNFQTtFQTRFWSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVaO0FBakZBO0VBa0ZZLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUVaO0FBRFk7RUFDSSxnQkFBQTtBQUdoQjtBQTdGQTtFQThGWSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBRVo7QUFHQTtFQUNJO0lBQ0ksa0JBQUE7RUFETjtFQUFFO0lBR1EsYUFBQTtFQUFWO0VBSEU7SUFLWSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VBQ2Q7RUFBYztJQUNJLGlCQUFBO0VBRWxCO0VBZEU7SUFlZ0IsV0FBQTtJQUNBLFlBQUE7SUFDQSxnREFBQTtJQUNBLGlCQUFBO0VBRWxCO0VBcEJFO0lBb0JvQixXQUFBO0lBQ0EsWUFBQTtFQUd0QjtFQXhCRTtJQTBCWSxzQkFBQTtFQUNkO0VBM0JFO0lBOEJRLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBRUEseUJBQUE7SUFDQSxnQkFBQTtFQURWO0VBbkNFO0lBc0NZLGVBQUE7RUFBZDtFQXRDRTtJQXlDWSxlQUFBO0VBQWQ7RUF6Q0U7SUE2Q1Esa0JBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSx5QkFBQTtJQUNBLGdCQUFBO0VBRFY7RUFqREU7SUFvRFksZUFBQTtFQUFkO0VBcERFO0lBd0RZLGVBQUE7RUFEZDtBQUNGIiwiZmlsZSI6InRodW1iLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRzLXRodW1iIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIC5jb3ZlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJFNEM5OTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgLmF2YXRvciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzA5MTAxQTtcbiAgICAgICAgICAgIGJvdHRvbTogLTgwcHg7XG4gICAgICAgICAgICBsZWZ0OiA0MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA5MTAxYTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wZW9wbGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE4MzE0RDtcbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51cGxvYWQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNEQ0REREU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoOSwgMTYsIDI2LCAwLjMpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0RjU0NUM7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLmNvdmVyLmVkaXQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVBOEU2O1xuICAgIH1cbiAgICAuY292ZXIucHVibGljIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFGODU5OTtcbiAgICB9XG4gICAgLmNvdmVyLm93bmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwNDIwRDtcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMCAyNDBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmN1c3RvbS1jb250cm9sIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuYWxpYXMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzhGOThCMztcbiAgICAgICAgfVxuICAgICAgICAuZm9ybS1jb250cm9sLWVkaXQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwOTEwMWE7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1lZGl0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAubGFuZHMtdGh1bWIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgLmF2YXRvciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwOTEwMUE7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4OyAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51cGxvYWQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSg5LCAxNiwgMjYsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXZhdG9yLmF2YXRvci1lZGl0IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgYm90dG9tOiA2cHg7XG4gICAgICAgICAgICByaWdodDogMTBweDtcblxuICAgICAgICAgICAgcGFkZGluZzogMzBweCAxNXB4IDAgMTVweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbGlhcyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50LmNvbnRlbnQtZWRpdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDE1cHggMCAxNXB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsaWFzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIl19 */"] });


/***/ }),

/***/ 895:
/*!************************************************************!*\
  !*** ./src/app/pages/login-board/login-board.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginBoardComponent": () => (/* binding */ LoginBoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);


function LoginBoardComponent_div_0_div_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "- 50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoginBoardComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "OLAND length: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginBoardComponent_div_0_div_4_ng_container_8_Template, 2, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "current / limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "MATIC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.key == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.value.mintCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" / ", item_r2.value.mintLimit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.value.mintPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Mint top ", item_r2.value.mintLimit, " OLAND enjoy ", item_r2.value.priceOff, "% discount");
} }
function LoginBoardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Congratulations, you can search and mint content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginBoardComponent_div_0_div_4_Template, 28, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r0.levelObj));
} }
class LoginBoardComponent {
    constructor() {
        this.levelObj = null;
    }
    ngOnInit() {
    }
}
LoginBoardComponent.ɵfac = function LoginBoardComponent_Factory(t) { return new (t || LoginBoardComponent)(); };
LoginBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginBoardComponent, selectors: [["app-login-board"]], inputs: { levelObj: "levelObj" }, decls: 1, vars: 1, consts: [["class", "section", 4, "ngIf"], [1, "section"], [1, "text-white", "pl-3"], [1, "row", "flex-row-reverse", "limit"], ["class", "col-12 col-md-4 pb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-4", "pb-3"], [1, "rounded", "overflow-hidden"], [1, "row"], [1, "col-12", "text-center", "bg-dark-second", "py-3"], [1, "font-second"], [1, "text-white"], [4, "ngIf"], [1, "col-6", "text-center", "bg-dark-third", "pr-0", "py-4"], [2, "border-right", "1px solid #18314D"], [1, "font-point", "fs-3"], [1, "text-white", "fs-3"], [1, "col-6", "text-center", "bg-dark-third", "pl-0", "py-4"], [1, "font-importent", "fs-3"], [1, "font-importent", "fs-5"], [1, "col-12", "bg-dark-second", "py-2", "px-3"], [1, "font-second", "px-3"]], template: function LoginBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginBoardComponent_div_0_Template, 6, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.levelObj);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.KeyValuePipe], styles: [".limit[_ngcontent-%COMP%] {\n  margin: 1rem 0 0 0;\n  padding: 1rem 0 0 0;\n  align-items: center;\n}\n.section[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem 1rem;\n  color: #fff;\n  border: 1px solid #666D80;\n  border-radius: 0.625rem;\n  background: #080F17;\n}\n@media screen and (max-width: 768px) {\n  .limit[_ngcontent-%COMP%] {\n    margin: 1rem 0 0 0;\n    padding: 1rem 0 0 0;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n}\n@media screen and (max-width: 479px) {\n  .section[_ngcontent-%COMP%] {\n    padding: 1rem 0rem;\n  }\n  .py-3[_ngcontent-%COMP%] {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-4[_ngcontent-%COMP%] {\n    padding-top: 0.325rem !important;\n    padding-bottom: 0.325rem !important;\n  }\n  .pb-3[_ngcontent-%COMP%] {\n    padding-bottom: 0.25rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWJvYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQUZOO0VBS0U7SUFDSSxvQkFBQTtFQUhOO0FBQ0Y7QUFPQTtFQUNJO0lBQ0ksa0JBQUE7RUFMTjtFQVFFO0lBQ0ksK0JBQUE7SUFDQSxrQ0FBQTtFQU5OO0VBUUU7SUFDSSxnQ0FBQTtJQUNBLG1DQUFBO0VBTk47RUFRRTtJQUNJLGtDQUFBO0VBTk47QUFDRiIsImZpbGUiOiJsb2dpbi1ib2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxpbWl0IHtcbiAgICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gICAgcGFkZGluZzogMXJlbSAwIDAgMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NkQ4MDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjMDgwRjE3O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgLmxpbWl0IHtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xuICAgIH1cblxuICAgIC5zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDFyZW07XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gICAgLnNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDByZW07XG4gICAgfVxuXG4gICAgLnB5LTMge1xuICAgICAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucHktNCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjMyNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4zMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnBiLTMge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxufSJdfQ== */"] });


/***/ }),

/***/ 25811:
/*!**************************************************************!*\
  !*** ./src/app/pages/logout-board/logout-board.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutBoardComponent": () => (/* binding */ LogoutBoardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/contract.service */ 7533);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);




function LogoutBoardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Mint quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "matic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "length 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "matic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "length 7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "matic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "length 8+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.defaultInfo.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.defaultInfo.sixPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.defaultInfo.sevenPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.defaultInfo.eightPrice);
} }
class LogoutBoardComponent {
    constructor(contractService) {
        this.contractService = contractService;
        this.defaultInfo = null;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getDefaultInfo();
    }
    getDefaultInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.defaultInfo = {
                'sixPrice': yield this.contractService.getPriceByLen(6),
                'sevenPrice': yield this.contractService.getPriceByLen(7),
                'eightPrice': yield this.contractService.getPriceByLen(8),
                'amount': yield this.contractService.getTotal()
            };
        });
    }
}
LogoutBoardComponent.ɵfac = function LogoutBoardComponent_Factory(t) { return new (t || LogoutBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService)); };
LogoutBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogoutBoardComponent, selectors: [["app-logout-board"]], decls: 3, vars: 1, consts: [[1, "row", "justify-content-center", "mb-3"], [1, "col-10", "col-lg-8", "bg-dark-first"], ["class", "row text-center logout-board rounded overflow-hidden", 4, "ngIf"], [1, "row", "text-center", "logout-board", "rounded", "overflow-hidden"], [1, "col-6", "col-md-3", "py-4"], [1, "fs-3", "text-white"], [1, "font-second"], [1, "fs-6", "ml-1"]], template: function LogoutBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LogoutBoardComponent_div_2_Template, 31, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.defaultInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".logout-board[_ngcontent-%COMP%] {\n  border-top: 1px solid #1A243D;\n  border-bottom: 1px solid #1A243D;\n  border-left: 1px solid #1A243D;\n}\n.logout-board[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-right: 1px solid #1A243D;\n}\n@media screen and (max-width: 768px) {\n  .logout-board[_ngcontent-%COMP%] {\n    border: 1px solid #1A243D;\n  }\n  .logout-board[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    border-right: 1px solid #1A243D;\n    border-bottom: 1px solid #1A243D;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC1ib2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQUNKO0FBSkE7RUFLUSwrQkFBQTtBQUVSO0FBRUE7RUFDSTtJQUNJLHlCQUFBO0VBQU47RUFERTtJQUdRLCtCQUFBO0lBQ0EsZ0NBQUE7RUFDVjtBQUNGIiwiZmlsZSI6ImxvZ291dC1ib2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvdXQtYm9hcmQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMUEyNDNEO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMUEyNDNEO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzFBMjQzRDtcbiAgICA+IGRpdiB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxQTI0M0Q7XG4gICAgfVxuXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5sb2dvdXQtYm9hcmQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMUEyNDNEO1xuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMUEyNDNEO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxQTI0M0Q7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 39730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 25245);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 73794);
/* harmony import */ var _tool_pages_merkletree_merkletree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool-pages/merkletree/merkletree.component */ 62037);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ 46860);
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history/history.component */ 24824);
/* harmony import */ var _lands_lands_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lands/lands.component */ 83875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/mint' },
    { path: 'mint', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent },
    { path: 'land', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__.UserComponent },
    { path: 'past', component: _history_history_component__WEBPACK_IMPORTED_MODULE_4__.HistoryComponent },
    { path: 'detail/:name', component: _lands_lands_component__WEBPACK_IMPORTED_MODULE_5__.LandsComponent },
    { path: 'detail/:name/edit', component: _lands_lands_component__WEBPACK_IMPORTED_MODULE_5__.LandsComponent, data: { edit: true } },
    { path: ':name', component: _lands_lands_component__WEBPACK_IMPORTED_MODULE_5__.LandsComponent },
    { path: ':name/edit', component: _lands_lands_component__WEBPACK_IMPORTED_MODULE_5__.LandsComponent, data: { edit: true } },
    { path: 'merkletree', component: _tool_pages_merkletree_merkletree_component__WEBPACK_IMPORTED_MODULE_2__.MerkletreeComponent },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-bootstrap.module */ 34356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-routing.module */ 39730);
/* harmony import */ var _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/app-pipes.module */ 44315);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 82402);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 25245);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ 58449);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ 73794);
/* harmony import */ var _login_board_login_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-board/login-board.component */ 895);
/* harmony import */ var _logout_board_logout_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout-board/logout-board.component */ 25811);
/* harmony import */ var _components_fail_modal_fail_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fail-modal/fail-modal.component */ 55927);
/* harmony import */ var _components_sucess_modal_sucess_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sucess-modal/sucess-modal.component */ 98532);
/* harmony import */ var _tool_pages_merkletree_merkletree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tool-pages/merkletree/merkletree.component */ 62037);
/* harmony import */ var _pages_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/components/loading/loading.component */ 28178);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ 46860);
/* harmony import */ var _pages_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/components/cards/cards.component */ 48194);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detail/detail.component */ 21371);
/* harmony import */ var _components_mint_history_mint_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mint-history/mint-history.component */ 25308);
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./history/history.component */ 24824);
/* harmony import */ var _lands_thumb_thumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lands/thumb/thumb.component */ 83936);
/* harmony import */ var _lands_intro_intro_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lands/intro/intro.component */ 14378);
/* harmony import */ var _lands_community_community_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lands/community/community.component */ 6698);
/* harmony import */ var _lands_editor_editor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lands/editor/editor.component */ 44493);
/* harmony import */ var _lands_lands_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lands/lands.component */ 83875);
/* harmony import */ var _lands_mapping_mapping_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lands/mapping/mapping.component */ 57281);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/confirm-modal/confirm-modal.component */ 84249);
/* harmony import */ var _components_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/upload-image/upload-image.component */ 50244);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../directives/directives.module */ 78434);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var _home_minted_minted_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/minted/minted.component */ 99562);
/* harmony import */ var _home_search_tip_search_tip_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/search-tip/search-tip.component */ 1088);
/* harmony import */ var _lands_lands_footer_lands_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lands/lands-footer/lands-footer.component */ 15859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 2316);



// Routing


// Components

























// import { AlertComponent } from './components/alert/alert.component';






class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule,
            _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_0__.AppBootstrapModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.PagesRoutingModule,
            _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_2__.AppPipesModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_34__.NgxSkeletonLoaderModule,
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_26__.DirectivesModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__.DragDropModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__.TopBarComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent,
        _error_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent,
        _login_board_login_board_component__WEBPACK_IMPORTED_MODULE_7__.LoginBoardComponent,
        _logout_board_logout_board_component__WEBPACK_IMPORTED_MODULE_8__.LogoutBoardComponent,
        _components_fail_modal_fail_modal_component__WEBPACK_IMPORTED_MODULE_9__.FailModalComponent,
        _components_sucess_modal_sucess_modal_component__WEBPACK_IMPORTED_MODULE_10__.SucessModalComponent,
        _tool_pages_merkletree_merkletree_component__WEBPACK_IMPORTED_MODULE_11__.MerkletreeComponent,
        _pages_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__.LoadingComponent,
        _user_user_component__WEBPACK_IMPORTED_MODULE_13__.UserComponent,
        _pages_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__.CardsComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_15__.DetailComponent,
        _components_mint_history_mint_history_component__WEBPACK_IMPORTED_MODULE_16__.MintHistoryComponent,
        _history_history_component__WEBPACK_IMPORTED_MODULE_17__.HistoryComponent,
        _lands_thumb_thumb_component__WEBPACK_IMPORTED_MODULE_18__.ThumbComponent,
        _lands_intro_intro_component__WEBPACK_IMPORTED_MODULE_19__.IntroComponent,
        _lands_community_community_component__WEBPACK_IMPORTED_MODULE_20__.CommunityComponent,
        _lands_editor_editor_component__WEBPACK_IMPORTED_MODULE_21__.EditorComponent,
        _lands_lands_component__WEBPACK_IMPORTED_MODULE_22__.LandsComponent,
        _lands_mapping_mapping_component__WEBPACK_IMPORTED_MODULE_23__.MappingComponent,
        _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_24__.ConfirmModalComponent,
        _components_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_25__.UploadImageComponent,
        _home_minted_minted_component__WEBPACK_IMPORTED_MODULE_27__.MintedComponent,
        _home_search_tip_search_tip_component__WEBPACK_IMPORTED_MODULE_28__.SearchTipComponent,
        _lands_lands_footer_lands_footer_component__WEBPACK_IMPORTED_MODULE_29__.LandsFooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule,
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_0__.AppBootstrapModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.PagesRoutingModule,
        _pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_2__.AppPipesModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbModule,
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_34__.NgxSkeletonLoaderModule,
        _directives_directives_module__WEBPACK_IMPORTED_MODULE_26__.DirectivesModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__.DragDropModule], exports: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__.TopBarComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent] }); })();


/***/ }),

/***/ 62037:
/*!*********************************************************************!*\
  !*** ./src/app/pages/tool-pages/merkletree/merkletree.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MerkletreeComponent": () => (/* binding */ MerkletreeComponent)
/* harmony export */ });
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merkletreejs */ 14809);
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merkletreejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-sha256 */ 40338);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var keccak256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keccak256 */ 49875);
/* harmony import */ var keccak256__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(keccak256__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contracts_addresses_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contracts/addresses_v2 */ 31876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);







function MerkletreeComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Level: ", item_r5, "");
} }
function MerkletreeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MerkletreeComponent_div_17_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.merkle.hashFnChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("name", item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", item_r6.checked === true)("ngModel", ctx_r1.merkle.hashFnChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.name);
} }
function MerkletreeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MerkletreeComponent_div_21_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const item_r9 = restoredCtx.$implicit; return item_r9.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("name", item_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", item_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r9.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("for", item_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r9.name);
} }
function MerkletreeComponent_b_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.verifiction.result);
} }
function MerkletreeComponent_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r13 + "#" + item_r12);
} }
class MerkletreeComponent {
    constructor() {
        this._hashFn = {
            sha256: js_sha256__WEBPACK_IMPORTED_MODULE_1__.sha256,
            keccak256: (keccak256__WEBPACK_IMPORTED_MODULE_2___default())
        };
        this.merkle = {
            leaves: '',
            hashFnChecked: 'sha256',
            hashFn: [
                { id: 1, name: 'sha256' },
                { id: 2, name: 'keccak256' }
            ],
            options: [
                { id: 1, name: 'hashLeaves', selected: false },
                { id: 2, name: 'sortLeaves', selected: false },
                { id: 3, name: 'sortPairs', selected: false },
                { id: 4, name: 'duplicateOdd', selected: false },
                { id: 5, name: 'isBitcoinTree', selected: false },
                // {id: 6, name: 'fillDefaultHash', selected: false},
            ]
        };
        this.verifiction = {
            proof: '',
            leaf: '',
            root: '',
            result: null
        };
        this.leave = '';
        this.proof = [];
        this.output = {
            root: '',
            leaves: []
        };
    }
    get levels() {
        return Object.keys(_contracts_addresses_v2__WEBPACK_IMPORTED_MODULE_3__.WHITELIST);
    }
    ngOnInit() {
    }
    changeLevel(level) {
        this.merkle.leaves = JSON.stringify(_contracts_addresses_v2__WEBPACK_IMPORTED_MODULE_3__.WHITELIST[level.toString()]);
    }
    submitInput() {
        this.clear();
        const leaves = this.getLeaves();
        const hashFn = this.getHashFn();
        const options = this.getOptions();
        this.tree = new merkletreejs__WEBPACK_IMPORTED_MODULE_0__.MerkleTree(leaves, hashFn, options);
        this.output.root = this.tree.getHexRoot();
        this.output.leaves = this.tree.getHexLeaves();
        console.log('leaves', leaves);
        console.log('hashFn', hashFn);
        console.log('options', options);
        console.log('output.root', this.output.root);
        console.log('output.leaves', this.output.leaves);
    }
    clear() {
        this.leave = '';
        this.proof = [];
        this.output = {
            root: '',
            leaves: []
        };
    }
    getLeaves() {
        let leaves = this.merkle.leaves.trim();
        leaves = leaves.replace(/'/gi, '"');
        try {
            return JSON.parse(leaves);
        }
        catch (err) {
            return leaves.split('\n')
                .map(function (line) { return line.trim(); })
                .filter(function (line) { return line; });
        }
    }
    getHashFn() {
        return this._hashFn[this.merkle.hashFnChecked];
    }
    getOptions() {
        let options = {};
        this.merkle.options.forEach(item => {
            options[item.name] = item.selected;
        });
        return options;
    }
    getProof(leave) {
        this.proof = this.tree.getHexProof(leave);
    }
    verify() {
        this.verifiction.result = null;
        const verifyproof = this.getVerifyProof();
        const hashFn = this.getHashFn();
        const options = this.getOptions();
        this.verifiction.result = merkletreejs__WEBPACK_IMPORTED_MODULE_0__.MerkleTree.verify(verifyproof, this.verifiction.leaf, this.verifiction.root, hashFn, options);
    }
    getVerifyProof() {
        let leaves = this.verifiction.proof.trim();
        leaves = leaves.replace(/'/gi, '"');
        try {
            return JSON.parse(leaves);
        }
        catch (err) {
            return leaves.split('\n')
                .map(function (line) { return line.trim(); })
                .filter(function (line) { return line; });
        }
    }
}
MerkletreeComponent.ɵfac = function MerkletreeComponent_Factory(t) { return new (t || MerkletreeComponent)(); };
MerkletreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MerkletreeComponent, selectors: [["app-merkletree"]], decls: 75, vars: 19, consts: [[1, "container", "text-white", "merkle"], [1, "form-group"], ["for", "level", 1, "col-12"], ["name", "level", "id", "level", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "leaves", 1, "col-12"], ["name", "leaves", "id", "leaves", "rows", "3", "placeholder", "[\"0x98085FDD27d568B7735E466e82F228345F666c2c\"]", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "hash", 1, "col-2"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["for", "options", 1, "col-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["for", "verifyProof"], ["name", "verifyProof", "id", "verifyProof", "rows", "3", "name", "proof", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "verifyLeaf"], ["type", "text", "name", "leaf", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "verifyRoot"], ["type", "text", "name", "root", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-info", 3, "click"], [1, "ml-3"], [4, "ngIf"], ["for", "leave"], ["name", "leave", "id", "leave", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value"], [1, "form-check", "form-check-inline"], ["type", "radio", 1, "form-check-input", 3, "name", "value", "checked", "ngModel", "ngModelChange"], ["for", "hashFn", 1, "form-check-label"], ["type", "checkbox", 1, "form-check-input", 3, "name", "value", "ngModel", "ngModelChange"], [1, "form-check-label", 3, "for"]], template: function MerkletreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Merkle Tree JS Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Select Level: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MerkletreeComponent_Template_select_ngModelChange_8_listener($event) { return ctx.level = $event; })("ngModelChange", function MerkletreeComponent_Template_select_ngModelChange_8_listener($event) { return ctx.changeLevel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MerkletreeComponent_option_9_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Leaves: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MerkletreeComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.merkle.leaves = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Hash function: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MerkletreeComponent_div_17_Template, 4, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Options: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, MerkletreeComponent_div_21_Template, 4, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MerkletreeComponent_Template_button_click_22_listener() { return ctx.submitInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Input Your Proof: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MerkletreeComponent_Template_textarea_ngModelChange_32_listener($event) { return ctx.verifiction.proof = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Leaf: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MerkletreeComponent_Template_input_ngModelChange_36_listener($event) { return ctx.verifiction.leaf = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Root: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MerkletreeComponent_Template_input_ngModelChange_40_listener($event) { return ctx.verifiction.root = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MerkletreeComponent_Template_button_click_41_listener() { return ctx.verify(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Verify Result: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, MerkletreeComponent_b_45_Template, 2, 1, "b", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Proof");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MerkletreeComponent_Template_select_ngModelChange_54_listener($event) { return ctx.leave = $event; })("ngModelChange", function MerkletreeComponent_Template_select_ngModelChange_54_listener($event) { return ctx.getProof($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, MerkletreeComponent_option_55_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Proof: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](61, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Root: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Leaves: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](74, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.level);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.levels);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.merkle.leaves);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.merkle.hashFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.merkle.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.verifiction.proof);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.verifiction.leaf);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.verifiction.root);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.verifiction.result !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Select Your Leave: ", ctx.leave, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.leave);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.output.leaves);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](61, 15, ctx.proof));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.output.root);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](74, 17, ctx.output.leaves));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe], styles: [".merkle[_ngcontent-%COMP%] {\n  height: calc(100vh - 180px);\n  background-color: #666;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lcmtsZXRyZWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJtZXJrbGV0cmVlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lcmtsZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 82402:
/*!****************************************************!*\
  !*** ./src/app/pages/top-bar/top-bar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/contract.service */ 7533);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);










function TopBarComponent_ng_container_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopBarComponent_ng_container_6_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.link(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r6.currentLink.indexOf(item_r5.link) > -1 ? "text-point" : "text-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.title);
} }
function TopBarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TopBarComponent_ng_container_6_li_1_Template, 3, 2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r5.isShow);
} }
function TopBarComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopBarComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.switchChain(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Switch Network");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TopBarComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopBarComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.disconnect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx_r2.account$).slice(0, 2), "...", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx_r2.account$).slice(38), "");
} }
function TopBarComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopBarComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.connect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TopBarComponent_ng_container_20_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopBarComponent_ng_container_20_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.link(item_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r18.currentLink == item_r17.link ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r17.title);
} }
function TopBarComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TopBarComponent_ng_container_20_li_1_Template, 3, 2, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r17.isShow);
} }
class TopBarComponent {
    constructor(router, contractService, httpService) {
        this.router = router;
        this.contractService = contractService;
        this.httpService = httpService;
        this.isMenuCollapsed = true;
        this.menuList = [
            { title: 'HOME', link: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.microWebsite}home`, navigation: false, isShow: true },
            { title: 'MINT', link: '/mint', navigation: true, isShow: true },
            { title: 'MY LAND', link: '/land', navigation: true, isShow: true },
            { title: 'BLUE SOUL', link: '/detail', navigation: true, isShow: true },
            { title: 'Q&A', link: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.microWebsite}detail?templateId=2`, navigation: false, isShow: true },
            { title: 'ABOUT', link: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.microWebsite}detail?templateId=3`, navigation: false, isShow: true },
            { title: '3D OLAND', link: `http://test.unity.oland.info`, navigation: false, isShow: !src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production },
        ];
        this.currentLink = '';
        this.alert = '';
        this.account = '';
    }
    ngOnInit() {
        this.account$ = this.contractService.account$;
        this.chainStatus$ = this.contractService.chainStatus$;
        this.account$.subscribe(address => {
            this.account = address;
        });
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe((res) => {
            this.currentLink = decodeURI(res.urlAfterRedirects).trim().replace(/\s{2,}/g, ' ').toLowerCase();
        });
    }
    collapseMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        if (this.isMenuCollapsed) {
            document.querySelector('.bg').style.maxHeight = '';
            document.querySelector('.bg').style.overflow = '';
        }
        else {
            document.querySelector('.bg').style.maxHeight = '100vh';
            document.querySelector('.bg').style.overflow = 'hidden';
        }
    }
    connect() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.contractService.connectAccount();
            if (this.account) {
                const noncestr = yield this.httpService.noncestr(this.account);
                const hexMessage = yield this.contractService.hexMessage(noncestr.data);
                const signature = yield this.contractService.signature(hexMessage, this.account);
                if (signature) {
                    yield this.httpService.login(this.account, signature, hexMessage, noncestr.data);
                }
                return true;
            }
            return false;
        });
    }
    disconnect() {
        this.contractService.disconnectAccount().then(() => {
            localStorage.clear();
        });
    }
    switchChain() {
        this.contractService.switchChain();
    }
    link(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isMenuCollapsed = true;
            document.querySelector('.bg').style.maxHeight = '';
            document.querySelector('.bg').style.overflow = '';
            if (link.navigation) {
                if (link.link === '/detail') {
                    if (!this.account) {
                        const isConnect = yield this.connect();
                        !!isConnect ? this.router.navigate([link.link, this.account + '.verify', 'edit']) : this.link(link);
                    }
                    else {
                        this.router.navigate([link.link, this.account + '.verify', 'edit']);
                    }
                }
                else {
                    this.router.navigateByUrl(link.link);
                }
                document.querySelector('.bg').style.maxHeight = '';
                document.querySelector('.bg').style.overflow = '';
            }
            else {
                global.window.location.href = link.link;
            }
        });
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_1__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService)); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 28, vars: 16, consts: [[1, "py-3", "text-white", "header"], [1, "container"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-start", "header-content"], ["href", "/", 1, "d-flex", "align-items-center", "mb-md-2", "mb-lg-0", "text-white", "text-decoration-none"], ["src", "./assets/images/logo.png", "alt", "Ontology\u00A0Land", 1, "logo"], [1, "nav", "col-auto", "me-md-auto", "ml-auto", "mb-2", "mb-md-0", "ms-5", "justify-content-center", "d-none", "d-md-flex"], [4, "ngFor", "ngForOf"], [1, "text-end", "ml-auto", "ml-md-0"], ["type", "button", "class", "btn btn-outline-primary btn-sm mr-2 rounded-lg", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary btn-sm rounded-lg", 3, "click", 4, "ngIf"], ["type", "button", 1, "navbar-toggler", "d-block", "d-md-none", 3, "click"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav"], [1, "d-flex", "justify-content-around"], ["href", "https://twitter.com", "target", "_blank", 1, "text-white", "nav-link", "d-flex", "align-items-center"], ["src", "./assets/images/twitter.png", 2, "width", "2.5rem"], ["href", "https://discord.com", "target", "_blank", 1, "text-white", "nav-link", "d-flex", "align-items-center"], ["src", "./assets/images/discord.png", 2, "width", "2.5rem"], ["href", "https://telegram.org", "target", "_blank", 1, "text-white", "nav-link", "d-flex", "align-items-center"], ["src", "./assets/images/bxl-telegram.png", 2, "width", "2.5rem"], ["role", "button", 4, "ngIf"], ["role", "button"], [1, "nav-link", "px-3", 3, "ngClass", "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "mr-2", "rounded-lg", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "rounded-lg", 3, "click"], ["class", "nav-item", 3, "ngClass", 4, "ngIf"], [1, "nav-item", 3, "ngClass"], [1, "nav-link", 3, "click"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TopBarComponent_ng_container_6_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TopBarComponent_button_8_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, TopBarComponent_button_10_Template, 5, 6, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TopBarComponent_button_13_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_16_listener() { return ctx.collapseMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " \u2630 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, TopBarComponent_ng_container_20_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menuList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, ctx.chainStatus$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 8, ctx.account$) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 10, ctx.chainStatus$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 12, ctx.account$) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 14, ctx.chainStatus$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menuList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapse, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: [".header[_ngcontent-%COMP%] {\n  background: #050A0F;\n}\n.navbar-toggler[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n}\n.navbar-collapse[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 4rem;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 1500;\n  border-top: 1px solid #162940;\n}\n.navbar-collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  background-color: #0D1926;\n  border-bottom: 1px solid #162940;\n}\n.navbar-collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  text-align: center;\n  color: #fff;\n}\n.navbar-collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #eee;\n}\n.navbar-collapse[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  background-color: #122133;\n}\n.navbar-collapse[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #365DC0;\n}\n.navbar-collapse[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2050CB;\n}\n.logo[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n@media screen and (max-width: 768px) {\n  .logo[_ngcontent-%COMP%] {\n    height: 1.5rem;\n  }\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: rgba(5, 10, 15, 0.6);\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 5rem;\n  color: #fff;\n  font-size: 1.25rem;\n  text-align: center;\n  padding-top: 1.875rem;\n  padding-bottom: 1.875rem;\n  display: flex;\n  justify-content: center;\n}\n.footer[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%] {\n  width: 4.25rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2.3125rem;\n  margin-right: 0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUVYO0VBQ0ksbUJBQUE7QUFBSjtBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBQUo7QUFSQTtFQVVRLHlCQUFBO0VBQ0EsZ0NBQUE7QUFDUjtBQVpBO0VBYVksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUVaO0FBakJBO0VBa0JZLFdBQUE7QUFFWjtBQXBCQTtFQXNCUSx5QkFBQTtBQUNSO0FBdkJBO0VBeUJRLGNBQUE7QUFDUjtBQTFCQTtFQTRCUSxjQUFBO0FBQ1I7QUFHQTtFQUNJLFlBQUE7QUFESjtBQUlBO0VBQ0k7SUFDSSxjQUFBO0VBRk47QUFDRjtBQUNBLFdBQVc7QUFNWDtFQUNJLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFKSjtBQU1BO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKSjtBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUpKIiwiZmlsZSI6InRvcC1iYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIGhlYWRlciAqL1xuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzA1MEEwRjtcbn1cbi5uYXZiYXItdG9nZ2xlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA0cmVtO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XG4gICAgei1pbmRleDogMTUwMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzE2Mjk0MDtcbiAgICAubmF2LWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxOTI2O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE2Mjk0MDtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5uYXYtaXRlbTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjIxMzM7XG4gICAgfVxuICAgIC5uYXYtaXRlbS5hY3RpdmUgYSB7XG4gICAgICAgIGNvbG9yOiAjMzY1REMwO1xuICAgIH1cbiAgICAubmF2LWl0ZW0uYWN0aXZlIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzIwNTBDQjtcbiAgICB9XG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDJyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmxvZ28ge1xuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB9XG5cbn1cblxuLyogZm9vdGVyICovXG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsIDEwLCAxNSwgMC42KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEuODc1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjg3NXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb3RlciAuZm9vdGVyLWl0ZW0ge1xuICAgIHdpZHRoOiA0LjI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9vdGVyIC5mb290ZXItaXRlbSBpbWcge1xuICAgIHdpZHRoOiAyLjMxMjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuNjI1cmVtO1xufSJdfQ== */"] });


/***/ }),

/***/ 46860:
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 34361);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/contract.service */ 7533);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/http.service */ 30561);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);









function UserComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.account);
} }
function UserComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserComponent_div_3_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.changeTab(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserComponent_div_3_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.changeTab(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Private land");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserComponent_div_3_Template_li_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.changeTab(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Verify land");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.tab === 1 ? "btn-active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.tab === 2 ? "btn-active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.tab === 3 ? "btn-active" : "");
} }
const _c0 = function (a0) { return { voucher: a0 }; };
function UserComponent_div_4_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Voucher quantity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserComponent_div_4_ng_container_1_div_1_div_1_Template_button_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const card_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r17.goVoucherOpensea(card_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " opensea");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Click to mint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](card_r16.balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("text-", card_r16.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", card_r16.priceOff, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "../../../assets/images/voucher", card_r16.length, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", card_r16.length, "L Voucher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Mint character length is ", card_r16.length, ", and the price is reduced by ", 100 - card_r16.priceOff, "%.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, card_r16.cardId));
} }
function UserComponent_div_4_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserComponent_div_4_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserComponent_div_4_ng_container_1_div_1_div_1_Template, 28, 12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserComponent_div_4_ng_container_1_div_1_div_2_Template, 5, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.cards);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.isCardsLoading);
} }
function UserComponent_div_4_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Follow twitter activity to get land voucher.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserComponent_div_4_ng_container_1_div_1_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserComponent_div_4_ng_container_1_div_2_Template, 5, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.cards.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r9.cards.length);
} }
function UserComponent_div_4_ng_container_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserComponent_div_4_ng_container_2_div_1_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const land_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r23.goDetail(land_r22.name, "owner"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const land_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "land" + land_r22.num);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](land_r22.name);
} }
function UserComponent_div_4_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserComponent_div_4_ng_container_2_div_1_div_1_Template, 4, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r19.ownLands);
} }
function UserComponent_div_4_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "There's nothing here. Now go to mint land.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Mint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserComponent_div_4_ng_container_2_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserComponent_div_4_ng_container_2_div_2_Template, 5, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.ownLands.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r10.ownLands.length);
} }
function UserComponent_div_4_ng_container_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserComponent_div_4_ng_container_3_div_1_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const land_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r29.goDetail(land_r28.name, "verify"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const land_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "land" + land_r28.num);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](land_r28.name);
} }
function UserComponent_div_4_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserComponent_div_4_ng_container_3_div_1_div_1_Template, 4, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r25.verifyLands);
} }
function UserComponent_div_4_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No one has claimed to be the owner of the official space at the moment. If you are the official owner of this land, please join olandbox DC to contact us to apply for certification. After the certification is passed, you can have the authority to edit your official land.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserComponent_div_4_ng_container_3_div_2_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r31.goDc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Go to claim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserComponent_div_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserComponent_div_4_ng_container_3_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserComponent_div_4_ng_container_3_div_2_Template, 5, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.verifyLands.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r11.verifyLands.length);
} }
function UserComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserComponent_div_4_ng_container_1_Template, 3, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserComponent_div_4_ng_container_2_Template, 3, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UserComponent_div_4_ng_container_3_Template, 3, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.tab === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.tab === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.tab === 3);
} }
function UserComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Connect your wallet, please! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class UserComponent {
    constructor(router, contractService, httpService) {
        this.router = router;
        this.contractService = contractService;
        this.httpService = httpService;
        this.account = '';
        this.tab = 1;
        // lands: any[] = [];
        this.ownLands = [];
        this.verifyLands = [];
        this.cards = [];
        this.isCardsLoading = false;
        this.isLandsLoading = false;
    }
    ngOnInit() {
        this.contractService.account$.subscribe(account => {
            this.account = account;
            if (account) {
                this.getCards();
                this.getPrivateLands();
                this.getVerifyLand();
            }
            else {
            }
        });
    }
    changeTab(tab) {
        this.tab = tab;
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    getCards() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isCardsLoading = true;
            let balances$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.contractService.getCardIds()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(cardIds => this.contractService.getBalanceOfBatch(this.account, cardIds)));
            let cardInfo$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.contractService.getCards()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(cards => cards.map(item => {
                return {
                    cardId: +item[0],
                    length: +item[2],
                    name: item[1],
                    priceOff: item[3]
                };
            })));
            (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([cardInfo$, balances$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([cardInfo, balances]) => {
                return cardInfo.map((value, index) => {
                    value.balance = +balances[index];
                    return value;
                });
            })).subscribe(cardInfo => {
                this.cards = cardInfo.filter(card => card.balance > 0);
                this.isCardsLoading = false;
            });
        });
    }
    getPrivateLands() {
        const matchQuery = this.httpService.getOwnLand(this.account);
        this.httpService.getDatabase(matchQuery).subscribe(res => {
            res.forEach(element => {
                this.ownLands.push({
                    name: element[0].properties.name,
                    num: this.randomIntFromInterval(1, 3)
                });
            });
        });
    }
    getVerifyLand() {
        const matchQuery = this.httpService.getVerifyLand(this.account);
        this.httpService.getDatabase(matchQuery).subscribe(res => {
            res.forEach(element => {
                this.verifyLands.push({
                    name: element[0].properties.name,
                    num: this.randomIntFromInterval(1, 3)
                });
            });
        });
    }
    // async getLands() {
    //   this.isLandsLoading = true;
    //   const balanceCount = await this.contractService.getUserBalance(this.account);
    //   for(let i = 0; i < balanceCount; i++) {
    //     const token = await this.contractService.getTokenByIndex(i);
    //     const uriStr = await this.contractService.getTokenUri(token);
    //     const uri = new URL(uriStr);
    //     this.httpService.getMetadata(uri.pathname).then(metadata => {
    //       if (i === balanceCount - 1) {
    //         this.isLandsLoading = false;
    //       }
    //       const randomNum = this.randomIntFromInterval(1,3);
    //       metadata.num = randomNum;
    //       this.lands.push(metadata)
    //     }, err => {
    //       console.log(err)
    //     })
    //   }
    // }
    logout() {
        this.cards = [];
        this.ownLands = [];
        this.verifyLands = [];
    }
    goVoucherOpensea(card) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let uri = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oprensearURI}${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.voucherAddress}/`;
            global.window.open(uri + card.cardId);
        });
    }
    goLandOpensea(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let uri = yield this.contractService.getOpenseaUriByName(name);
            global.window.open(uri);
        });
    }
    goDetail(name, belong) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/detail', name + '.' + belong]);
        });
    }
    goDc() {
        global.window.open('https://discord.gg/2pgsTcfyDH', '_blank');
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_contract_service__WEBPACK_IMPORTED_MODULE_1__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService)); };
UserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 7, vars: 4, consts: [[1, "main"], ["class", "account-card", 4, "ngIf"], [1, "account-tab"], ["class", "container d-flex align-items-center", 4, "ngIf"], ["class", "container overflow-hidden", 4, "ngIf", "ngIfElse"], ["tip", ""], [1, "account-card"], [1, "container", "d-flex", "align-items-center"], [1, "people"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-circle"], ["d", "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"], ["fill-rule", "evenodd", "d", "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"], [1, "text-truncate"], [1, "d-flex", "justify-content-end", "px-0", "my-0"], [1, "btn", "mr-4", 3, "ngClass", "click"], [1, "btn", 3, "ngClass", "click"], [1, "container", "overflow-hidden"], [4, "ngIf"], ["class", "row card-group", 4, "ngIf"], ["class", "empty-card", 4, "ngIf"], [1, "row", "card-group"], ["class", "col-12 col-lg-4 mb-3", 4, "ngFor", "ngForOf"], ["class", "col-12 col-lg-4 mb-3", 4, "ngIf"], [1, "col-12", "col-lg-4", "mb-3"], [1, "voucher-card"], [1, "head"], [1, "title"], [1, "title-sub"], [1, "body"], [1, "percent"], [1, "info"], [1, "thumb"], ["alt", "", 3, "src"], [1, "intro"], [1, "foot"], [1, "btn", "btn-opensea", 3, "click"], ["src", "../../../assets/images/opensea.png", "alt", ""], ["routerLink", "/mint", 1, "btn", "btn-mint", 3, "queryParams"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "text-light"], [1, "sr-only"], [1, "empty-card"], ["href", "https://mobile.twitter.com/olandbox", "target", "_blank", 1, "btn"], ["class", "col-4 col-lg-2 mb-3", 4, "ngFor", "ngForOf"], [1, "col-4", "col-lg-2", "mb-3"], [1, "land-card", 3, "ngClass", "click"], ["routerLink", "/mint", 1, "btn"], [1, "btn", 3, "click"], [1, "container", "d-flex", "align-items-center", "justify-content-center"], [1, "text-white"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserComponent_div_1_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UserComponent_div_3_Template, 8, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UserComponent_div_4_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UserComponent_ng_template_5_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.account)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref], styles: [".account-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 180px;\n  background: #0D1926;\n  color: #fff;\n  font-size: 30px;\n}\n.account-card[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  width: 60px;\n  height: 60px;\n  background-color: #09101A;\n  border-radius: 50%;\n  color: #18314D;\n}\n.account-card[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.account-tab[_ngcontent-%COMP%] {\n  padding: 40px 0 60px 0;\n  color: #fff;\n}\n.account-tab[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 60px;\n  line-height: 46px;\n  font-size: 20px;\n  background: #1B3859;\n  border-radius: 5px;\n  color: #666D80;\n}\n.account-tab[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #234872;\n}\n.account-tab[_ngcontent-%COMP%]   .btn-active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #3F6BD7;\n}\n.account-tab[_ngcontent-%COMP%]   .btn-active[_ngcontent-%COMP%]:hover {\n  background: #4672e4;\n}\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  font-size: 36px;\n  font-family: 'Aileron';\n  font-weight: bold;\n  color: #666D80;\n}\n.card-group[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.voucher-card[_ngcontent-%COMP%] {\n  background-color: #0D2440;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.voucher-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  color: #fff;\n}\n.voucher-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 51%;\n  border-radius: 10px 0 10px 0;\n  background: linear-gradient(90deg, #112953, #183579);\n  font-size: 14px;\n  padding: 18px 0 18px 40px;\n}\n.voucher-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  left: 29px;\n  top: 20px;\n  width: 6px;\n  height: 16px;\n  border-radius: 3px;\n  background-color: #3D66CC;\n}\n.voucher-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title-sub[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  background: linear-gradient(90deg, #183579, #1A3680);\n  height: 40px;\n}\n.voucher-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: '';\n  left: 0;\n  bottom: -10px;\n  width: 10px;\n  height: 10px;\n  background-color: #112953;\n}\n.voucher-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: '';\n  left: 0;\n  bottom: -10px;\n  width: 10px;\n  height: 10px;\n  border-top-left-radius: 10px;\n  background-color: #0D1926;\n}\n.voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  background-color: #0D1926;\n  border-radius: 10px;\n}\n.voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  width: 51%;\n}\n.voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 60px;\n  line-height: 1;\n  font-family: 'Aileron';\n}\n.voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #666D80;\n}\n.voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: -23px;\n  width: 49%;\n  height: calc(100% + 67px);\n  background-color: #0D1926;\n  border-radius: 10px;\n}\n.voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  padding: 0 40px 20px 40px;\n}\n.voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 28px;\n  font-family: 'Aileron';\n  margin-bottom: 14px;\n}\n.voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5F6679;\n}\n.voucher-card[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 40px;\n  background-color: #0D2440;\n}\n.voucher-card[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 45%;\n  border-radius: 5px;\n  color: #fff;\n}\n.voucher-card[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .btn-opensea[_ngcontent-%COMP%] {\n  background: #1B3859;\n}\n.voucher-card[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .btn-opensea[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 12px;\n}\n.voucher-card[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .btn-mint[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #2153D3, #4866B0);\n}\n.voucher-card[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .btn-mint[_ngcontent-%COMP%]:disabled {\n  background: #26374D;\n}\n.land-card[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  height: 0;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  padding-bottom: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.land-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 90%;\n  word-break: break-all;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.land1[_ngcontent-%COMP%] {\n  background-image: url('land1.png');\n}\n.land2[_ngcontent-%COMP%] {\n  background-image: url('land2.png');\n}\n.land3[_ngcontent-%COMP%] {\n  background-image: url('land3.png');\n}\n.empty-card[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px 40px;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 80px;\n  align-items: center;\n  min-height: 265px;\n  background: #0D1926;\n  border-radius: 20px;\n  color: #fff;\n  font-size: 24px;\n}\n.empty-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 180px;\n  height: 60px;\n  line-height: 60px;\n  background: #1B3859;\n  border-radius: 5px;\n  color: #fff;\n}\n.text-6[_ngcontent-%COMP%] {\n  color: #2FEEE5;\n}\n.text-7[_ngcontent-%COMP%] {\n  color: #4298F4;\n}\n.text-8[_ngcontent-%COMP%] {\n  color: #1455DA;\n}\n.text-9[_ngcontent-%COMP%] {\n  color: #ffc51a;\n}\n.text-10[_ngcontent-%COMP%] {\n  color: #6E44D7;\n}\n.text-11[_ngcontent-%COMP%] {\n  color: #4b3cbf;\n}\n.text-12[_ngcontent-%COMP%] {\n  color: #555cda;\n}\n.text-13[_ngcontent-%COMP%] {\n  color: #5069c5;\n}\n.text-14[_ngcontent-%COMP%] {\n  color: #447dd9;\n}\n.text-15[_ngcontent-%COMP%] {\n  color: #4c95d2;\n}\n.text-16[_ngcontent-%COMP%] {\n  color: #54a9cb;\n}\n.text-17[_ngcontent-%COMP%] {\n  color: #53bcca;\n}\n.text-18[_ngcontent-%COMP%] {\n  color: #54cbc4;\n}\n.text-19[_ngcontent-%COMP%] {\n  color: #54cb9d;\n}\n.text-20[_ngcontent-%COMP%] {\n  color: #54cb89;\n}\n@media (max-width: 767.98px) {\n  .account-card[_ngcontent-%COMP%] {\n    font-size: 15px;\n    height: 90px;\n  }\n  .account-card[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    width: 40px;\n    height: 40px;\n  }\n  .account-card[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .account-tab[_ngcontent-%COMP%] {\n    padding: 20px 0 30px 0;\n  }\n  .account-tab[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 30px;\n    line-height: 20px;\n    font-size: 14px;\n  }\n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    font-size: 18px;\n  }\n  .card-group[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  .voucher-card[_ngcontent-%COMP%] {\n    border-radius: 5px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 12px 0 12px 20px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after {\n    left: 12px;\n    top: 13px;\n    width: 5px;\n    height: 15px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title-sub[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    border-radius: 5px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    width: 51%;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n    height: calc(100% + 56px);\n  }\n  .voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n    padding: 0 20px 20px 20px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 5px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .voucher-card[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n  }\n  .empty-card[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n    padding: 10px 20px;\n    min-height: 140px;\n    border-radius: 10px;\n    font-size: 14px;\n  }\n  .empty-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 30px;\n    line-height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7QUFQQTtFQVNRLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBZkE7RUFnQlksV0FBQTtFQUNBLFlBQUE7QUFFWjtBQUVBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFGQTtFQUlRLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDUjtBQUFRO0VBQ0ksbUJBQUE7QUFFWjtBQWRBO0VBZ0JRLFdBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQVE7RUFDSSxtQkFBQTtBQUVaO0FBR0E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0E7RUFDSSxtQkFBQTtBQURKO0FBR0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUZBO0VBS1Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBQVI7QUFSQTtFQVVZLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0RBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDWjtBQWhCQTtFQWtCWSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNaO0FBMUJBO0VBNEJZLGNBQUE7RUFDQSxvREFBQTtFQUNBLFlBQUE7QUFDWjtBQS9CQTtFQWtDUSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFBUjtBQXhDQTtFQTJDUSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUFSO0FBbERBO0VBcURRLHlCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQXREQTtFQXdEWSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQTNEQTtFQTREZ0IsZUFBQTtFQUNBLFVBQUE7QUFFaEI7QUEvREE7RUErRG9CLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFHcEI7QUFwRUE7RUFvRW9CLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdwQjtBQXpFQTtFQTJFZ0Isa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDaEI7QUFsRkE7RUFtRm9CLFlBQUE7QUFFcEI7QUFyRkE7RUF3RlkseUJBQUE7QUFBWjtBQXhGQTtFQTBGZ0IsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ2hCO0FBOUZBO0VBZ0dnQixlQUFBO0VBQ0EsY0FBQTtBQUNoQjtBQWxHQTtFQXNHUSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRFI7QUF4R0E7RUEyR1ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFaO0FBN0dBO0VBZ0hZLG1CQUFBO0FBQVo7QUFoSEE7RUFrSGdCLFlBQUE7QUFDaEI7QUFuSEE7RUFzSFksb0RBQUE7QUFBWjtBQXRIQTtFQXlIWSxtQkFBQTtBQUFaO0FBSUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBSEo7QUFSQTtFQWFRLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZSO0FBS0E7RUFDSSxrQ0FBQTtBQUhKO0FBS0E7RUFDSSxrQ0FBQTtBQUhKO0FBS0E7RUFDSSxrQ0FBQTtBQUhKO0FBS0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSEo7QUFSQTtFQWFRLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFGUjtBQUtBO0VBQ0ksY0FBQTtBQUhKO0FBS0E7RUFDSSxjQUFBO0FBSEo7QUFLQTtFQUNJLGNBQUE7QUFISjtBQUtBO0VBQ0ksY0FBQTtBQUhKO0FBS0E7RUFDSSxjQUFBO0FBSEo7QUFLQTtFQUNJLGNBQUE7QUFISjtBQUtBO0VBQ0ksY0FBQTtBQUhKO0FBS0E7RUFDSSxjQUFBO0FBSEo7QUFLQTtFQUNJLGNBQUE7QUFISjtBQUtBO0VBQ0ksY0FBQTtBQUhKO0FBS0E7RUFDSSxjQUFBO0FBSEo7QUFLQTtFQUNJLGNBQUE7QUFISjtBQUtBO0VBQ0ksY0FBQTtBQUhKO0FBS0E7RUFDSSxjQUFBO0FBSEo7QUFLQTtFQUNJLGNBQUE7QUFISjtBQUtBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsWUFBQTtFQUhOO0VBQ0U7SUFJUSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBRlY7RUFKRTtJQVFZLFdBQUE7SUFDQSxZQUFBO0VBRGQ7RUFLRTtJQUNJLHNCQUFBO0VBSE47RUFFRTtJQUdRLFlBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBRlY7RUFLRTtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFQUhOO0VBS0U7SUFDSSxtQkFBQTtFQUhOO0VBS0U7SUFDSSxrQkFBQTtFQUhOO0VBRUU7SUFJWSxlQUFBO0lBQ0EseUJBQUE7RUFIZDtFQUZFO0lBUVksVUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUhkO0VBUkU7SUFjWSxZQUFBO0VBSGQ7RUFYRTtJQWtCUSxrQkFBQTtFQUpWO0VBZEU7SUFvQlksbUJBQUE7RUFIZDtFQWpCRTtJQXNCZ0IsZUFBQTtJQUNBLFVBQUE7RUFGbEI7RUFyQkU7SUF5Qm9CLGVBQUE7RUFEdEI7RUF4QkU7SUE0Qm9CLGVBQUE7RUFEdEI7RUEzQkU7SUFpQ2dCLHlCQUFBO0VBSGxCO0VBOUJFO0lBcUNZLHlCQUFBO0VBSmQ7RUFqQ0U7SUF1Q2dCLGVBQUE7SUFDQSxrQkFBQTtFQUhsQjtFQXJDRTtJQTJDZ0IsZUFBQTtFQUhsQjtFQXhDRTtJQWdEUSxrQkFBQTtFQUxWO0VBV0U7SUFDSSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFUTjtFQUlFO0lBT1EsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQVJWO0FBQ0YiLCJmaWxlIjoidXNlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFjY291bnQtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgYmFja2dyb3VuZDogIzBEMTkyNjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgLnBlb3BsZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MTAxQTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBjb2xvcjogIzE4MzE0RDtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmFjY291bnQtdGFiIHtcbiAgICBwYWRkaW5nOiA0MHB4IDAgNjBweCAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC5idG4ge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzFCMzg1OTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBjb2xvcjogIzY2NkQ4MDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjM0ODcyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5idG4tYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzRjZCRDc7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ2NzJlNDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQWlsZXJvbic7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM2NjZEODA7XG59XG4uY2FyZC1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cbi52b3VjaGVyLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDI0NDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC5oZWFkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogNTElO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDEwcHggMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzExMjk1MywgIzE4MzU3OSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDAgMThweCA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZTo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAyOXB4O1xuICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDY2Q0M7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLXN1YiB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE4MzU3OSwgIzFBMzY4MCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhlYWQ6OmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTI5NTM7XG4gICAgfVxuICAgIC5oZWFkOjphZnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDE5MjY7XG4gICAgfVxuICAgIC5ib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTkyNjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLnBlcmNlbnQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUxJTtcbiAgICAgICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FpbGVyb24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjZEODA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGh1bWIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IC0yM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA2N3B4KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxOTI2O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4IDIwcHggNDBweDtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBaWxlcm9uJztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNUY2Njc5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDI0NDA7XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5idG4tb3BlbnNlYSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUIzODU5O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1taW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzIxNTNEMywgIzQ4NjZCMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1taW50OmRpc2FibGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNjM3NEQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubGFuZC1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBzdHJvbmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cbi5sYW5kMSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sYW5kMS5wbmdcIik7XG59XG4ubGFuZDIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZDIucG5nXCIpO1xufVxuLmxhbmQzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xhbmQzLnBuZ1wiKTtcbn1cbi5lbXB0eS1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAyNjVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMEQxOTI2O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBhIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMUIzODU5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbn1cbi50ZXh0LTYge1xuICAgIGNvbG9yOiAjMkZFRUU1O1xufVxuLnRleHQtNyB7XG4gICAgY29sb3I6ICM0Mjk4RjQ7XG59XG4udGV4dC04IHtcbiAgICBjb2xvcjogIzE0NTVEQTtcbn1cbi50ZXh0LTkge1xuICAgIGNvbG9yOiAjZmZjNTFhO1xufVxuLnRleHQtMTAge1xuICAgIGNvbG9yOiAjNkU0NEQ3O1xufVxuLnRleHQtMTEge1xuICAgIGNvbG9yOiAjNGIzY2JmO1xufVxuLnRleHQtMTIge1xuICAgIGNvbG9yOiAjNTU1Y2RhO1xufVxuLnRleHQtMTMge1xuICAgIGNvbG9yOiAjNTA2OWM1O1xufVxuLnRleHQtMTQge1xuICAgIGNvbG9yOiAjNDQ3ZGQ5O1xufVxuLnRleHQtMTUge1xuICAgIGNvbG9yOiAjNGM5NWQyO1xufVxuLnRleHQtMTYge1xuICAgIGNvbG9yOiAjNTRhOWNiO1xufVxuLnRleHQtMTcge1xuICAgIGNvbG9yOiAjNTNiY2NhO1xufVxuLnRleHQtMTgge1xuICAgIGNvbG9yOiAjNTRjYmM0O1xufVxuLnRleHQtMTkge1xuICAgIGNvbG9yOiAjNTRjYjlkO1xufVxuLnRleHQtMjAge1xuICAgIGNvbG9yOiAjNTRjYjg5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLmFjY291bnQtY2FyZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAucGVvcGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFjY291bnQtdGFiIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAwIDMwcHggMDtcbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLmNhcmQtZ3JvdXAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cbiAgICAudm91Y2hlci1jYXJkIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAuaGVhZCB7XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMTJweCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlOjphZnRlciB7XG4gICAgICAgICAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgICAgICAgICB0b3A6IDEzcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUtc3ViIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgLnBlcmNlbnQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MSU7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnRodW1iIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA1NnB4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW50cm8ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Qge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sYW5kLWNhcmQge1xuICAgICAgIFxuICAgIH1cbiAgICAuZW1wdHktY2FyZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 44315:
/*!*******************************************!*\
  !*** ./src/app/pipes/app-pipes.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppPipesModule": () => (/* binding */ AppPipesModule)
/* harmony export */ });
/* harmony import */ var _isFinit_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFinit.pipe */ 24618);
/* harmony import */ var _time_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time.pipe */ 98017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



class AppPipesModule {
}
AppPipesModule.ɵfac = function AppPipesModule_Factory(t) { return new (t || AppPipesModule)(); };
AppPipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppPipesModule });
AppPipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
        // dep modules
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppPipesModule, { declarations: [_isFinit_pipe__WEBPACK_IMPORTED_MODULE_0__.IsFinitePipe,
        _time_pipe__WEBPACK_IMPORTED_MODULE_1__.TimeSincePipe], exports: [_isFinit_pipe__WEBPACK_IMPORTED_MODULE_0__.IsFinitePipe,
        _time_pipe__WEBPACK_IMPORTED_MODULE_1__.TimeSincePipe] }); })();


/***/ }),

/***/ 24618:
/*!***************************************!*\
  !*** ./src/app/pipes/isFinit.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsFinitePipe": () => (/* binding */ IsFinitePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class IsFinitePipe {
    transform(value) {
        return Number.isFinite(value) ? value : '--';
    }
}
IsFinitePipe.ɵfac = function IsFinitePipe_Factory(t) { return new (t || IsFinitePipe)(); };
IsFinitePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isFinite", type: IsFinitePipe, pure: true });


/***/ }),

/***/ 98017:
/*!************************************!*\
  !*** ./src/app/pipes/time.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeSincePipe": () => (/* binding */ TimeSincePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TimeSincePipe {
    transform(timeSeconds) {
        const seconds = Math.ceil(new Date().getTime() / 1000) - (+timeSeconds);
        let interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }
}
TimeSincePipe.ɵfac = function TimeSincePipe_Factory(t) { return new (t || TimeSincePipe)(); };
TimeSincePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timeSince", type: TimeSincePipe, pure: true });


/***/ }),

/***/ 43833:
/*!******************************************!*\
  !*** ./src/app/service/alert.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class AlertService {
    constructor() {
        this.alertSetting$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    create(params) {
        this.alertSetting$.next(params);
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5815:
/*!*********************************************!*\
  !*** ./src/app/service/caculate.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaculateService": () => (/* binding */ CaculateService)
/* harmony export */ });
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merkletreejs */ 14809);
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merkletreejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keccak256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keccak256 */ 49875);
/* harmony import */ var keccak256__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keccak256__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contracts_addresses_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/addresses_v2 */ 31876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




class CaculateService {
    constructor() {
    }
    getLevel(account) {
        let level = Object.keys(_contracts_addresses_v2__WEBPACK_IMPORTED_MODULE_2__.WHITELIST).find(key => {
            let isInclude = _contracts_addresses_v2__WEBPACK_IMPORTED_MODULE_2__.WHITELIST[key].some(item => item === account);
            if (isInclude)
                return key;
        });
        console.log('level is: ' + level);
        return level === undefined ? 0 : +level;
    }
    getLeaves(level) {
        if (_contracts_addresses_v2__WEBPACK_IMPORTED_MODULE_2__.WHITELIST[level] === undefined) {
            return [];
        }
        else {
            return _contracts_addresses_v2__WEBPACK_IMPORTED_MODULE_2__.WHITELIST[level.toString()];
        }
    }
    getMerkleProof(level, account) {
        if (_contracts_addresses_v2__WEBPACK_IMPORTED_MODULE_2__.WHITELIST[level] === undefined) {
            return [];
        }
        let leaves = this.getLeaves(level);
        let options = { hashLeaves: true, sortPairs: true, sortLeaves: true };
        const tree = new merkletreejs__WEBPACK_IMPORTED_MODULE_0__.MerkleTree(leaves, (keccak256__WEBPACK_IMPORTED_MODULE_1___default()), options);
        const outputRoot = tree.getHexRoot();
        const outputLeave = tree.getHexLeaves();
        const hexAccount = '0x' + keccak256__WEBPACK_IMPORTED_MODULE_1___default()(account).toString('hex');
        const proof = tree.getHexProof(hexAccount);
        console.log('hexAccount', hexAccount);
        console.log('proof', proof);
        let verify = merkletreejs__WEBPACK_IMPORTED_MODULE_0__.MerkleTree.verify(proof, hexAccount, outputRoot, (keccak256__WEBPACK_IMPORTED_MODULE_1___default()), options);
        console.log('verify: ' + verify);
        return proof;
    }
    verifyProof(proof, leaf, root) {
        let result = merkletreejs__WEBPACK_IMPORTED_MODULE_0__.MerkleTree.verify(proof, leaf, root, (keccak256__WEBPACK_IMPORTED_MODULE_1___default()), { hashLeaves: true, sortPairs: true, sortLeaves: true });
        console.log(result);
    }
    verifyLenth(name) {
        const withoutSpaceName = name.replace(/\s+/g, "");
        const dPattern = /^[a-zA-Z0-9\s]{6,50}$/;
        return dPattern.test(withoutSpaceName);
    }
    verifyLevelPermission(name) {
        const withoutSpaceName = name.replace(/\s+/g, "");
        const length = withoutSpaceName.length;
        return {
            failKey: null,
            verify: true
        };
    }
}
CaculateService.ɵfac = function CaculateService_Factory(t) { return new (t || CaculateService)(); };
CaculateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CaculateService, factory: CaculateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7533:
/*!*********************************************!*\
  !*** ./src/app/service/contract.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractService": () => (/* binding */ ContractService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ 69978);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3modal */ 22651);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @walletconnect/web3-provider */ 5924);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _contracts_ABI_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/ABI.json */ 35397);
/* harmony import */ var _contracts_voucherABI_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/voucherABI.json */ 68334);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provider */ 33067);
/* harmony import */ var _pages_components_sucess_modal_sucess_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/components/sucess-modal/sucess-modal.component */ 98532);
/* harmony import */ var _pages_components_fail_modal_fail_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/components/fail-modal/fail-modal.component */ 55927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert.service */ 43833);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http.service */ 30561);















class ContractService {
    constructor(web3, modalService, alertService, httpService) {
        this.web3 = web3;
        this.modalService = modalService;
        this.alertService = alertService;
        this.httpService = httpService;
        this.web3js = null;
        this.provider = null;
        this.voucherContract = null;
        this.mainContract = null;
        this._mainContract$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(false);
        this.mainContract$ = this._mainContract$.asObservable();
        this._account$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(null);
        this.account$ = this._account$.asObservable();
        this._chainStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(true);
        this.chainStatus$ = this._chainStatus$.asObservable();
        // set web3 modal
        let rpc = {};
        rpc[parseInt(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.chainId, 16)] = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.rpcUrl[0];
        console.log(rpc);
        const providerOptions = {
            walletconnect: {
                package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__.default,
                options: {
                    rpc: rpc
                    // infura: 'e010c4cb0ed94e74aecf0558b420daa7'
                }
            }
        };
        this.web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_1___default())({
            network: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.chainName,
            cacheProvider: true,
            providerOptions,
            theme: {
                background: "rgb(39, 49, 56)",
                main: "rgb(199, 199, 199)",
                secondary: "rgb(136, 136, 136)",
                border: "rgba(195, 195, 195, 0.14)",
                hover: "rgb(16, 26, 32)"
            }
        });
        this.mainContract = new this.web3.eth.Contract(_contracts_ABI_json__WEBPACK_IMPORTED_MODULE_4__, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.contractAddress);
        this._mainContract$.next(true);
        this.voucherContract = new this.web3.eth.Contract(_contracts_voucherABI_json__WEBPACK_IMPORTED_MODULE_5__, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.voucherAddress);
        if (this.web3Modal.cachedProvider) {
            this.initWeb();
        }
    }
    initChainStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const chainId = yield this.web3js.eth.getChainId();
            this.chainStatus = chainId === parseInt(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.chainId, 16);
            this._chainStatus$.next(this.chainStatus);
            if (!this.chainStatus) {
                this.alertService.create({
                    body: 'Switch chain please!',
                    color: 'warning',
                    time: 4000
                });
            }
        });
    }
    initAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.accounts = yield this.web3js.eth.getAccounts();
            this._account$.next(this.accounts[0].toLowerCase() || '');
            console.log('init account');
        });
    }
    initWeb() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.provider = yield this.web3Modal.connect();
                this.web3js = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(this.provider);
                this.mainContract = new this.web3js.eth.Contract(_contracts_ABI_json__WEBPACK_IMPORTED_MODULE_4__, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.contractAddress);
                this._mainContract$.next(true);
                this.voucherContract = new this.web3js.eth.Contract(_contracts_voucherABI_json__WEBPACK_IMPORTED_MODULE_5__, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.voucherAddress);
                yield this.initChainStatus();
                if (this.chainStatus) {
                    yield this.initAccount();
                }
                this.watchProvider();
            }
            catch (error) {
                console.log(error);
            }
            // todo signatuer
            //  const message = 'abc';
            //  console.log('message: ' + this.web3js.utils.sha3(message))
            //  this.web3js.eth.personal.sign(this.web3js.utils.sha3(message), "0xFA22F2Bf7F3fd1C3d355456d7FE2598bD3a8Ef38".toLowerCase()).then((res) => console.log('signature: ' + res))
        });
    }
    connectAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.web3Modal.clearCachedProvider();
            yield this.initWeb();
        });
    }
    disconnectAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.web3Modal.clearCachedProvider();
            this.accounts = null;
            this._account$.next('');
            this._chainStatus$.next(true);
            this.provider = null;
        });
    }
    watchProvider() {
        this.provider.on("chainChanged", (chainId) => {
            global.window.location.reload();
        });
        this.provider.on("accountsChanged", (accounts) => {
            global.window.location.reload();
        });
        this.provider.on("connect", (info) => {
            console.log(info);
        });
        this.provider.on("disconnect", (error) => {
            this.disconnectAccount();
        });
    }
    switchChain() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // await this.initWeb();
            try {
                yield this.web3js.currentProvider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.chainId }],
                });
            }
            catch (error) {
                try {
                    yield this.web3js.currentProvider.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.chainId,
                                chainName: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.chainName,
                                rpcUrls: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.rpcUrl,
                                nativeCurrency: {
                                    name: "Matic",
                                    symbol: "Matic",
                                    decimals: 18,
                                },
                            },
                        ],
                    });
                }
                catch (error) {
                    this.alertService.create({
                        body: "switch chain failed",
                        color: 'danger',
                        time: 2000
                    });
                    console.log(error);
                }
            }
        });
    }
    hexMessage(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            return this.web3js.utils.sha3(message);
        });
    }
    signature(hexMessage, address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            return this.web3js.eth.personal.sign(hexMessage, address.toLowerCase(), '', (error) => {
                if (error) {
                    this.alertService.create({
                        body: error.message,
                        color: 'danger',
                        time: 5000
                    });
                }
            });
        });
    }
    //------------------ contract -----------------------------
    getOpenseaUriByName(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let url = yield this.mainContract.methods.tokenURIByName(name).call();
                console.log('url', url);
                url = url.replace(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.metaURI, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.oprensearURI + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.contractAddress + '/');
                url = url.replace('/data.json', '');
                console.log('url', url);
                return url;
            }
            catch (error) {
                console.log('getOpenseaUriByName error', error);
            }
            return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.oprensearURI;
        });
    }
    getSlipPriceWei(price) {
        let wPrice = web3__WEBPACK_IMPORTED_MODULE_0___default().utils.toWei(price, 'ether');
        let sPrice = Math.floor(parseInt(wPrice.toString()) * src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.slip).toString();
        console.log('origin price: ' + price + ', slip price: ' + sPrice);
        return sPrice;
    }
    getSlipPriceEth(price) {
        let wPrice = this.getSlipPriceWei(price);
        let sPrice = web3__WEBPACK_IMPORTED_MODULE_0___default().utils.fromWei(wPrice).toString();
        return sPrice;
    }
    isApproved(account) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.voucherContract.methods.isApprovedForAll(account, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.contractAddress).call();
            }
            catch (error) {
                console.log('get isApproved', error);
            }
        });
    }
    setApprove(approved) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.voucherContract.methods.setApprovalForAll(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.contractAddress, approved).send({ from: this.accounts[0] });
            }
            catch (error) {
                throw (error);
            }
        });
    }
    // return wei string
    getGasFee() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const polygon = yield this.httpService.getPolygonGas();
            if (polygon.fast && polygon.fast.maxFee) {
                const polygonGas = Math.ceil(polygon.fast.maxFee) + '';
                const polygonGasWei = this.web3js.utils.toWei(polygonGas, 'gwei');
                return polygonGasWei;
            }
            else {
                return (yield this.web3.eth.getGasPrice()) * 1.5;
            }
        });
    }
    mint(name, price) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let options = {
                from: this.accounts[0],
                gas: 960000,
                gasPrice: yield this.getGasFee(),
                value: price
            };
            return this.mainContract.methods.register(name).send(options)
                .on('receipt', (receipt) => {
                this.modalService.open(_pages_components_sucess_modal_sucess_modal_component__WEBPACK_IMPORTED_MODULE_7__.SucessModalComponent, { backdropClass: 'modal-mask', windowClass: 'dark', size: 'lg', centered: true });
            })
                .on('error', (error, receipt) => {
                if (receipt.transactionHash) {
                    const modalRef = this.modalService.open(_pages_components_fail_modal_fail_modal_component__WEBPACK_IMPORTED_MODULE_8__.FailModalComponent, { backdropClass: 'modal-mask', windowClass: 'dark', size: 'lg', centered: true });
                    modalRef.componentInstance.tx = receipt.transactionHash;
                }
            });
        });
    }
    mintByCard(name, cardPrice, cardId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let options = {
                from: this.accounts[0],
                gas: 960000,
                gasPrice: yield this.getGasFee(),
                value: cardPrice
            };
            return this.mainContract.methods.registerByVoucher(name, cardId).send(options)
                .on('receipt', (receipt) => {
                this.modalService.open(_pages_components_sucess_modal_sucess_modal_component__WEBPACK_IMPORTED_MODULE_7__.SucessModalComponent, { backdropClass: 'modal-mask', windowClass: 'dark', size: 'lg', centered: true });
            })
                .on('error', (error, receipt) => {
                console.log(error);
                if (receipt.transactionHash) {
                    const modalRef = this.modalService.open(_pages_components_fail_modal_fail_modal_component__WEBPACK_IMPORTED_MODULE_8__.FailModalComponent, { backdropClass: 'modal-mask', windowClass: 'dark', size: 'lg', centered: true });
                    modalRef.componentInstance.tx = receipt.transactionHash;
                }
            });
        });
    }
    isExist(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let isExist;
            isExist = yield this.mainContract.methods.exist(name).call();
            return isExist;
        });
    }
    getPriceByLen(len) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let price = yield this.mainContract.methods.priceByLen(len).call();
                return web3__WEBPACK_IMPORTED_MODULE_0___default().utils.fromWei(price);
            }
            catch (error) {
                console.log('get price by len error', error);
            }
        });
    }
    getPriceByStr(str) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let price = yield this.mainContract.methods.priceByStr(str).call();
                return web3__WEBPACK_IMPORTED_MODULE_0___default().utils.fromWei(price);
            }
            catch (error) {
                console.log('get price by str error', error);
            }
        });
    }
    getPriceByCard(cardId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let price = yield this.mainContract.methods.priceByVoucher(cardId).call();
                return web3__WEBPACK_IMPORTED_MODULE_0___default().utils.fromWei(price);
            }
            catch (error) {
                console.log('get price by card error', error);
            }
        });
    }
    getOwner(str) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let owner = yield this.mainContract.methods.ownerOfByName(str).call();
                return owner;
            }
            catch (error) {
                console.log('get owner error', error);
            }
        });
    }
    getSixClaimed(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.mainContract.methods.sixClaimed(address).call();
            }
            catch (error) {
                console.log('getSixClaimed error', error);
            }
        });
    }
    getSevenClaimed(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.mainContract.methods.sevenClaimed(address).call();
            }
            catch (error) {
                console.log('sevenClaimed error', error);
            }
        });
    }
    getEightClaimed(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.mainContract.methods.eightClaimed(address).call();
            }
            catch (error) {
                console.log('eightClaimed error', error);
            }
        });
    }
    getTotal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.mainContract.methods.totalSupply().call();
            }
            catch (error) {
                console.log('totalSupply error', error);
            }
        });
    }
    convertToStandard(str) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.mainContract.methods.convertToOlandStandard(str).call();
            }
            catch (error) {
                console.log('convertToOlandStandard error', error);
            }
        });
    }
    getLogicLength(str) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.mainContract.methods.logicLength(str).call();
            }
            catch (error) {
                console.log('convertToOlandStandard error', error);
            }
        });
    }
    getMetadataUrl(str) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.mainContract.methods.tokenURIByName(str).call();
            }
            catch (error) {
                console.log('tokenURIByName error', error);
            }
        });
    }
    getUserBalance(account) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.mainContract.methods.balanceOf(account).call();
            }
            catch (error) {
                console.log('getUserBalance error', error);
            }
        });
    }
    getTokenByIndex(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.mainContract.methods.tokenOfOwnerByIndex(this.accounts[0], index).call({ from: this.accounts[0] });
            }
            catch (error) {
                console.log('getTokenByIndex error', error);
            }
        });
    }
    getTokenUri(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.mainContract.methods.tokenURI(token).call({ from: this.accounts[0] });
            }
            catch (error) {
                console.log('getTokenUri error', error);
            }
        });
    }
    //----------------------voucher contract--------------------------------
    getCards() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.voucherContract.methods.getNFTs().call();
            }
            catch (error) {
                console.log('getVouchers error', error);
            }
        });
    }
    getCardIds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.voucherContract.methods.getNftIds().call();
            }
            catch (error) {
                console.log('getVoucherIds error', error);
            }
        });
    }
    getCard(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.voucherContract.methods.getNft(id).call();
            }
            catch (error) {
                console.log('getVoucherId error', error);
            }
        });
    }
    getBalanceOf(account, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.voucherContract.methods.balanceOf(account, id).call();
            }
            catch (error) {
                console.log('getBalanceOf error', error);
            }
        });
    }
    getBalanceOfBatch(account, ids) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const len = ids.length;
            const accounts = Array(len).fill(account);
            try {
                return yield this.voucherContract.methods.balanceOfBatch(accounts, ids).call();
            }
            catch (error) {
                console.log('getBalanceOfBatch error', error);
            }
        });
    }
}
ContractService.ɵfac = function ContractService_Factory(t) { return new (t || ContractService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_provider__WEBPACK_IMPORTED_MODULE_6__.WEB3), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_9__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_10__.HttpService)); };
ContractService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({ token: ContractService, factory: ContractService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80856:
/*!*******************************************!*\
  !*** ./src/app/service/cookie.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookieService": () => (/* binding */ CookieService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CookieService {
    constructor() { }
    getCookie(name) {
        let ca = document.cookie.split(';');
        console.log(document.cookie);
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
    deleteCookie(cookieName) {
        this.setCookie({ name: cookieName, value: '', expireDays: -1 });
    }
    /**
     * Expires default 1 day
     * If params.session is set and true expires is not added
     * If params.path is not set or value is not greater than 0 its default value will be root "/"
     * Secure flag can be activated only with https implemented
     * Examples of usage:
     * {service instance}.setCookie({name:'token',value:'abcd12345', session:true }); <- This cookie will not expire
     * {service instance}.setCookie({name:'userName',value:'John Doe', secure:true }); <- If page is not https then secure will not apply
     * {service instance}.setCookie({name:'niceCar', value:'red', expireDays:10 }); <- For all this examples if path is not provided default will be root
     */
    setCookie(params) {
        let d = new Date();
        d.setTime(d.getTime() +
            (params.expireDays ? params.expireDays : 1) * 24 * 60 * 60 * 1000);
        document.cookie =
            (params.name ? params.name : '') +
                '=' +
                (params.value ? params.value : '') +
                ';' +
                (params.session && params.session == true
                    ? ''
                    : 'expires=' + d.toUTCString() + ';') +
                'path=' +
                (params.path && params.path.length > 0 ? params.path : '/') +
                ';' +
                (location.protocol === 'https:' && params.secure && params.secure == true
                    ? 'secure'
                    : '');
    }
}
CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(); };
CookieService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieService, factory: CookieService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 30561:
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ 43833);







const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': ' application/x-www-form-urlencoded;charset=utf-8' }),
};
const httpOptionsJson = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': ' application/json;charset=utf-8' }),
};
class HttpService {
    constructor(httpClient, alertService) {
        this.httpClient = httpClient;
        this.alertService = alertService;
        // add community
        this.subjectCommunity = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.communityListen = this.subjectCommunity.asObservable();
        this.subjectData = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.dataListen = this.subjectData.asObservable();
    }
    emitCommunity(value) {
        this.subjectCommunity.next(value);
    }
    emitData(isEnd) {
        this.subjectData.next(isEnd);
    }
    getPolygonGas() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.polygonGasApi).toPromise();
    }
    getMetadata(path) {
        return this.httpClient.get(path).toPromise();
    }
    getMintHistory() {
        return this.httpClient.get('/api/v1/mintedHistory').toPromise();
    }
    uploadImg(fileToUpload) {
        const url = '/home/a/img/img';
        const formData = new FormData();
        formData.append('file', fileToUpload);
        return this.httpClient.post(url, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.catchAuthError(err)));
    }
    //登陆后验证
    isLogin() {
        return this.httpClient.post('/a/v/address', '').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.catchAuthError(err))).toPromise();
    }
    noncestr(address) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('address', address);
        return this.httpClient.post('/a/oland/noncestr', body, httpOptions).toPromise();
    }
    login(address, signature, hexmessage, noncestr) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('address', address)
            .set('signature', signature)
            .set('hexmessage', hexmessage)
            .set('noncestr', noncestr);
        const params = {
            address: address,
            signature: signature,
            hexmessage: hexmessage,
            noncestr: noncestr
        };
        return this.httpClient.post('/a/oland/login', body, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.catchAuthError(err))).toPromise();
    }
    catchAuthError(error) {
        if (error && error.error && error.error.message) {
            this.alertService.create({
                body: error.error.message,
                color: 'danger',
                time: 5000
            });
        }
        else if (error && error.message) {
            this.alertService.create({
                body: error.message,
                color: 'danger',
                time: 5000
            });
        }
        else {
            this.alertService.create({
                body: JSON.stringify(error),
                color: 'danger',
                time: 5000
            });
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }
    // --------------neo4j数据库操作start---------------------
    updateDatabase(matchQuery) {
        return this.httpClient.post('a/v/oland/execute', matchQuery).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((res) => {
            if (res.code === 0) {
                return res.data;
            }
            else {
                this.alertService.create({
                    body: 'Interface error: ' + res.message,
                    color: 'danger',
                    time: 5000
                });
                return [];
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.catchAuthError(err)));
    }
    // 数据库接口
    getDatabase(matchQuery) {
        console.log(matchQuery);
        return this.httpClient.post('/a/oland/query', matchQuery).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((res) => {
            if (res.code === 0) {
                return res.data;
            }
            else {
                this.alertService.create({
                    body: 'Interface error: ' + res.message,
                    color: 'danger',
                    time: 5000
                });
                return [];
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.catchAuthError(err)));
    }
    // 节点操作语句
    getNodeNameByTab(tab) {
        switch (tab) {
            case 'p':
                return 'PublicLand';
                break;
            case 'v':
                return 'VerifyLand';
                break;
            case 'o':
                return 'OwnerLand';
                break;
            default:
                return 'Project';
                break;
        }
    }
    // 匹配父节点，创建子节点，如果已存在则不添加
    createCNodeById(params) {
        return `MATCH ${this.setPn(params)} WHERE id(pn)=${params.id} CREATE (pn)-${this.setR(params)}->${this.setCn(params)} RETURN cn`;
    }
    // 获取映射节点
    getMappingNode(params) {
        return `MATCH ${this.setPn(params)}-${this.setR(params)}->${this.setCn(params)} RETURN pn`;
    }
    // 获取父节点
    getSingleNode(params) {
        return `MATCH ${this.setPn(params)} RETURN pn`;
    }
    // 根据ID获取父节点的子节点     
    getChildNodesById(params) {
        return `MATCH ${this.setPn(params)}-${this.setR(params)}->${this.setCn(params)} WHERE id(pn)=${params.id} RETURN cn`;
    }
    // 根据ID修改节点整体属性
    updateNodeById(params) {
        let properties = this.stringifyProperties(params.pNodeProperties);
        return `MATCH (pn) WHERE id(pn)=${params.id} SET pn=${properties} RETURN pn`;
    }
    // 根据ID修改节点单一属性
    updateNodePropertyById(id, property, value) {
        if (typeof (value) === 'string') {
            value = `"${value}"`;
        }
        return `MATCH (pn) WHERE id(pn)=${id} SET pn.${property}=${value} RETURN pn`;
    }
    // 根据ID删除节点
    deleteNodeById(id) {
        return `MATCH (pn) WHERE id(pn)=${id} DETACH DELETE pn`;
    }
    // --- 单一功能查询语句
    // 获取空间基本信息
    // public getLand(label: 'PublicLand' | 'VerifyLand' | 'OwnerLand', name: string) {
    //     return `MATCH (p:${label}{name: '${name}'}) RETURN p`;
    // } 
    getLand(label, name) {
        if (label === 'PublicLand') {
            return ``;
        }
        if (label === 'VerifyLand') {
            return `MATCH (p)-[:Verify]->(a:PublicLand{name:'${name}'})-[:VerifyLand]->(b) RETURN b`;
        }
        if (label === 'OwnerLand') {
            return `MATCH (p)-[:Owner]->(a:PublicLand{name:'${name}'})-[:OwnerLand]->(b) RETURN b`;
        }
    }
    // 获取官方和私人空间的官方空间
    getLandPublic(label, id) {
        return `MATCH (p)-[:${label}]->(c) WHERE id(c)=${id} RETURN p`;
    }
    // 修改空间属性
    updateLand(id, property, value, notString) {
        if (notString) {
            return `MATCH (p) WHERE id(p)=${id} SET p.${property}=${value} RETURN p`;
        }
        else {
            return `MATCH (p) WHERE id(p)=${id} SET p.${property}='${value}' RETURN p`;
        }
    }
    // 获取空间所有人
    getLandEditor(label, name) {
        // return `MATCH (p)-[:Owner]->(c:PublicLand) WHERE id(c)=${id} RETURN p`;
        return `match (p)-[:${label}]->(c:PublicLand{name:'${name}'}) RETURN p`;
    }
    // 获取link
    getLinks(id) {
        return `MATCH (pn) WHERE id(pn)=${id} MATCH (pn)-[:LinkTo]->(cn) RETURN cn ORDER BY cn.sort DESC, id(cn) DESC`;
    }
    // 更新link的sort
    updateLinkSort(batch) {
        const batchStr = JSON.stringify(batch);
        const batchStrUnquoted = batchStr.replace(/"([^"]+)":/g, '$1:');
        return `UNWIND ${batchStrUnquoted} as row MATCH (pn) WHERE id(pn)=row.id SET pn.sort=row.sort RETURN pn;`;
    }
    // 获取映射对象
    getMappingLand(name) {
        return `MATCH (a:OwnerLand{name:'${name}', mapping: 1})<-[:OwnerLand]-(:PublicLand)<-[or:Owner]-(b:PublicLand)-[vl:VerifyLand]->(v:VerifyLand) RETURN v`;
    }
    // 修改私有土地映射
    updateOwnerLandMapping(id, mappingStatus) {
        return `MATCH (p) WHERE id(p)=${id} SET p.mapping=${mappingStatus} RETURN p `;
    }
    // 获取land的私人land列表
    getOwnLand(name) {
        return `MATCH (p:PublicLand{name: '${name}'})-[:Owner]->(c:PublicLand)-[:OwnerLand]->(cn) RETURN cn`;
    }
    // 获取land的官方land列表
    getVerifyLand(name) {
        return `MATCH (p:PublicLand{name: '${name}'})-[:Verify]->(c) RETURN c`;
    }
    // 节点属性, object -> string
    stringifyProperties(propertiesObj) {
        let properties = propertiesObj ? JSON.stringify(propertiesObj) : '';
        properties = properties.replace(/"(\w+)"\s*:/g, '$1:');
        return properties;
    }
    // 依据传入参数构造父节点、关系节点和子节点的cyper语句
    setPn(params) {
        let properties = this.stringifyProperties(params.pNodeProperties);
        return `(pn${params.pNodeLabel ? ':' + params.pNodeLabel : ''}${properties})`;
    }
    setR(params) {
        let properties = this.stringifyProperties(params.relationProperties);
        return `[r${params.relationType ? ':' + params.relationType : ''}${properties}]`;
    }
    setCn(params) {
        let properties = this.stringifyProperties(params.cNodeProperties);
        return `(cn${params.cNodeLabel ? ':' + params.cNodeLabel : ''}${properties})`;
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 33067:
/*!*************************************!*\
  !*** ./src/app/service/provider.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WEB3": () => (/* binding */ WEB3)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ 69978);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);



const WEB3 = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('web3', {
    providedIn: 'root',
    // factory: () => new Web3(Web3.givenProvider)
    factory: () => new (web3__WEBPACK_IMPORTED_MODULE_1___default())(new (web3__WEBPACK_IMPORTED_MODULE_1___default().providers.HttpProvider)(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.rpcUrl[0]))
});


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    chainName: 'mumbai',
    chainId: '0x13881',
    rpcUrl: ['https://rpc-mumbai.maticvigil.com', 'https://rpc-mumbai.matic.today/', 'https://polygontestapi.terminet.io/rpc', 'https://matic-testnet-archive-rpc.bwarelabs.com', 'https://rpc.ankr.com/polygon_mumbai', 'https://matic-mumbai.chainstacklabs.com'],
    contractAddress: '0xce3A9A3C8c4199fD73f574a8F0a695F01097e8b5',
    voucherAddress: '0x464DaDD9779C45cb226FBf33C6E3523d2c62b041',
    openseaVoucher: 'https://testnets.opensea.io/collection/olandbox-land-vouchers-test-v3',
    oprensearURI: 'https://testnets.opensea.io/assets/mumbai/',
    polygonscanURI: 'https://mumbai.polygonscan.com/tx/',
    metaURI: 'https://test.metadata.oland.info/oland/',
    microWebsite: 'https://test.oland.info/',
    slip: 1.1,
    polygonGasApi: 'https://gasstation-mumbai.matic.today/v2'
    // chainName: 'matic',
    // chainId: '0x89', //137
    // rpcUrl: ['https://polygon-mainnet.public.blastapi.io'],
    // contractAddress: '0x8e0564F8Ec6c2f6e636cac9a719927d59cc00624',
    // voucherAddress: '0x1957A4D72BCec91Db7a296B5C11c46Ad7e467e77',
    // openseaVoucher: 'https://opensea.io/collection/olandbox-land-vouchers',
    // oprensearURI: 'https://opensea.io/assets/matic/',
    // polygonscanURI: 'https://polygonscan.com/tx/',
    // metaURI: 'https://metadata.oland.info/oland/',
    // microWebsite: 'https://www.oland.info/',
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ }),

/***/ 62859:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 75304:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 88677:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 62808:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 71922:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2363:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 96419:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 56353:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 85568:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 69386:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 31616:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 43472:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 29120:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46586:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6567:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 69862:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 40964:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 71408:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 23646:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 56773:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 55896:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 87500:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 33557:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 35397:
/*!************************************!*\
  !*** ./src/app/contracts/ABI.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"_name","type":"string"},{"indexed":true,"internalType":"uint256","name":"_length","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"originalName","type":"string"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"length","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NameRegister","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"oland","type":"string"}],"name":"convertToOlandStandard","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"eightClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eightSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"oland","type":"string"}],"name":"exist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBaseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"s","type":"string"}],"name":"logicLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"olandDetail","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"oland","type":"string"}],"name":"ownerOfByName","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"len","type":"uint256"}],"name":"priceByLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"oland","type":"string"}],"name":"priceByStr","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"voucherId","type":"uint256"}],"name":"priceByVoucher","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"oland","type":"string"}],"name":"register","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"oland","type":"string"},{"internalType":"uint256","name":"voucherId","type":"uint256"}],"name":"registerByVoucher","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"value","type":"string"}],"name":"setMapping","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"oland","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setMappingByName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_voucher","type":"address"}],"name":"setVoucher","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"sevenClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sevenSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"sixClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sixSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"oland","type":"string"}],"name":"tokenURIByName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');

/***/ }),

/***/ 68334:
/*!*******************************************!*\
  !*** ./src/app/contracts/voucherABI.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"to","type":"address[]"},{"internalType":"uint256","name":"cardId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bulkTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to","type":"address[]"},{"internalType":"uint256","name":"cardId","type":"uint256"},{"internalType":"uint256[]","name":"amount","type":"uint256[]"}],"name":"bulkTransfer1s","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to","type":"address[]"},{"internalType":"uint256[]","name":"_cardIds","type":"uint256[]"},{"internalType":"uint256[]","name":"amount","type":"uint256[]"}],"name":"bulkTransfers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatchByOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNFTs","outputs":[{"components":[{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"length","type":"uint256"},{"internalType":"uint256","name":"discount","type":"uint256"}],"internalType":"struct OlandVoucher.NFT[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"nftId","type":"uint256"}],"name":"getNft","outputs":[{"components":[{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"length","type":"uint256"},{"internalType":"uint256","name":"discount","type":"uint256"}],"internalType":"struct OlandVoucher.NFT","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNftIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"increaseBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"string","name":"nftName","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"length","type":"uint256"},{"internalType":"uint256","name":"discount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"setUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map