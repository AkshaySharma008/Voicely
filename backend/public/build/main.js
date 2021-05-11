(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dell\Desktop\Voicely\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "15Cw":
/*!*****************************************!*\
  !*** ./src/app/services/add.service.ts ***!
  \*****************************************/
/*! exports provided: AddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddService", function() { return AddService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AddService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    saveAudio(data) {
        return this.httpClient.post(`/api/v1/voicely/save-audio`, data);
    }
    cloneAudio(data) {
        return this.httpClient.post(`/api/v1/voicely/clone`, data);
    }
}
AddService.ɵfac = function AddService_Factory(t) { return new (t || AddService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AddService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddService, factory: AddService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "2FjL":
/*!**********************************************!*\
  !*** ./src/app/voicely/voicely.component.ts ***!
  \**********************************************/
/*! exports provided: VoicelyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoicelyComponent", function() { return VoicelyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/fetch.service */ "L97J");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class VoicelyComponent {
    constructor(fetchService, sidebarService) {
        this.fetchService = fetchService;
        this.sidebarService = sidebarService;
        this.user = { name: "The Pack" };
        this.items = [
            {
                title: 'Home',
                icon: 'home-outline',
                link: '/app/home'
            },
            {
                title: 'Clone Voice',
                icon: 'headphones-outline',
                link: '/app/inProgress'
            },
            {
                title: 'Let\'s Voicely',
                icon: 'checkmark-square-outline',
                link: '/app/voicely'
            },
            {
                title: 'Statistics',
                icon: 'activity-outline',
                link: '/app/statistics'
            },
            {
                title: 'My History',
                icon: 'archive-outline',
                link: '/app/inProgress'
            },
            {
                title: 'Logout',
                icon: 'unlock-outline',
                link: '/app/inProgress'
            },
        ];
    }
    ngOnInit() {
        this.fetchService.checkAPIServices().subscribe((res) => {
            console.log(res);
        });
    }
    toggle() {
        this.sidebarService.toggle(true);
        return false;
    }
}
VoicelyComponent.ɵfac = function VoicelyComponent_Factory(t) { return new (t || VoicelyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fetch_service__WEBPACK_IMPORTED_MODULE_1__["FetchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"])); };
VoicelyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoicelyComponent, selectors: [["app-voicely"]], decls: 14, vars: 2, consts: [["fixed", ""], ["href", "#", 3, "click"], ["icon", "menu"], ["type", "rotate-layout", 2, "position", "absolute", "right", "250px"], [2, "position", "absolute", "right", "50px"], ["title", "Problem Solvers", 3, "name"], [3, "items"], [1, "colored-column-basic"]], template: function VoicelyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoicelyComponent_Template_a_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Voicely");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-user", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nb-menu", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-layout-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSearchComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvaWNlbHkvdm9pY2VseS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoicelyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voicely',
                templateUrl: './voicely.component.html',
                styleUrls: ['./voicely.component.css']
            }]
    }], function () { return [{ type: _services_fetch_service__WEBPACK_IMPORTED_MODULE_1__["FetchService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"] }]; }, null); })();


/***/ }),

/***/ "7Upm":
/*!**************************************************************************!*\
  !*** ./src/app/voicely/under-development/under-development.component.ts ***!
  \**************************************************************************/
/*! exports provided: UnderDevelopmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderDevelopmentComponent", function() { return UnderDevelopmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UnderDevelopmentComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnderDevelopmentComponent.ɵfac = function UnderDevelopmentComponent_Factory(t) { return new (t || UnderDevelopmentComponent)(); };
UnderDevelopmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnderDevelopmentComponent, selectors: [["app-under-development"]], decls: 2, vars: 0, consts: [[1, "col-md-12", "text-center"], ["src", "../../../assets/under-construction-gif-11.gif", "alt", "under-construction", 1, "col-md-12", "m-auto", 2, "max-height", "680px"]], template: function UnderDevelopmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvaWNlbHkvdW5kZXItZGV2ZWxvcG1lbnQvdW5kZXItZGV2ZWxvcG1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderDevelopmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-under-development',
                templateUrl: './under-development.component.html',
                styleUrls: ['./under-development.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "L97J":
/*!*******************************************!*\
  !*** ./src/app/services/fetch.service.ts ***!
  \*******************************************/
/*! exports provided: FetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchService", function() { return FetchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FetchService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    checkAPIServices() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('login_token')}`,
            }),
        };
        return this.httpClient.get(`/api/v1/voicely`, httpOptions);
    }
}
FetchService.ɵfac = function FetchService_Factory(t) { return new (t || FetchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FetchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FetchService, factory: FetchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FetchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _voicely_voicely_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voicely/voicely.component */ "2FjL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/eva-icons */ "tR1z");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _voicely_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./voicely/home/home.component */ "qmr+");
/* harmony import */ var _voicely_lets_voicely_lets_voicely_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./voicely/lets-voicely/lets-voicely.component */ "gORQ");
/* harmony import */ var ng_audio_recorder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-audio-recorder */ "XgeJ");
/* harmony import */ var _voicely_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./voicely/statistics/statistics.component */ "xwv+");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! plotly.js/dist/plotly.js */ "95T3");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-plotly.js */ "u3+B");
/* harmony import */ var _voicely_under_development_under_development_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./voicely/under-development/under-development.component */ "7Upm");



















angular_plotly_js__WEBPACK_IMPORTED_MODULE_15__["PlotlyModule"].plotlyjs = plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_14__;
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbThemeModule"].forRoot({ name: 'default' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbThemeModule"].forRoot(),
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbMenuModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbContextMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepperModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSearchModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbListModule"],
            ng_audio_recorder__WEBPACK_IMPORTED_MODULE_12__["NgAudioRecorderModule"],
            angular_plotly_js__WEBPACK_IMPORTED_MODULE_15__["PlotlyModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _voicely_voicely_component__WEBPACK_IMPORTED_MODULE_4__["VoicelyComponent"],
        _voicely_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _voicely_lets_voicely_lets_voicely_component__WEBPACK_IMPORTED_MODULE_11__["LetsVoicelyComponent"],
        _voicely_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_13__["StatisticsComponent"],
        _voicely_under_development_under_development_component__WEBPACK_IMPORTED_MODULE_16__["UnderDevelopmentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbThemeModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbContextMenuModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepperModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSearchModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbListModule"],
        ng_audio_recorder__WEBPACK_IMPORTED_MODULE_12__["NgAudioRecorderModule"],
        angular_plotly_js__WEBPACK_IMPORTED_MODULE_15__["PlotlyModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _voicely_voicely_component__WEBPACK_IMPORTED_MODULE_4__["VoicelyComponent"],
                    _voicely_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _voicely_lets_voicely_lets_voicely_component__WEBPACK_IMPORTED_MODULE_11__["LetsVoicelyComponent"],
                    _voicely_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_13__["StatisticsComponent"],
                    _voicely_under_development_under_development_component__WEBPACK_IMPORTED_MODULE_16__["UnderDevelopmentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbThemeModule"].forRoot({ name: 'default' }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbThemeModule"].forRoot(),
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbMenuModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbContextMenuModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepperModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSpinnerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSearchModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbListModule"],
                    ng_audio_recorder__WEBPACK_IMPORTED_MODULE_12__["NgAudioRecorderModule"],
                    angular_plotly_js__WEBPACK_IMPORTED_MODULE_15__["PlotlyModule"]
                ],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gORQ":
/*!****************************************************************!*\
  !*** ./src/app/voicely/lets-voicely/lets-voicely.component.ts ***!
  \****************************************************************/
/*! exports provided: LetsVoicelyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetsVoicelyComponent", function() { return LetsVoicelyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recordrtc */ "qe5e");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_add_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/add.service */ "15Cw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "aceb");










function LetsVoicelyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LetsVoicelyComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Upload Audio");
} }
function LetsVoicelyComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetsVoicelyComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.initiateRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Recording");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LetsVoicelyComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetsVoicelyComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.stopRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stop Recording");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LetsVoicelyComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} }
function LetsVoicelyComponent_audio_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.sanitize(ctx_r6.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LetsVoicelyComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Correction");
} }
function LetsVoicelyComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Summarize");
} }
class LetsVoicelyComponent {
    constructor(addService, formBuilder, http, domSanitizer) {
        this.addService = addService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.domSanitizer = domSanitizer;
        this.showOverlay = false;
        this.s3Link = 'https://arkynexbucket.s3.amazonaws.com/output_1617964161747494.wav';
        //Will use this flag for toggeling recording
        this.recording = false;
    }
    ngOnInit() {
        this.audioUploadForm = this.formBuilder.group({
            audio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.correctedTextForm = this.formBuilder.group({
            correctedText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            inputText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    onUpload(evnt) {
        console.log(evnt.target.files[0]);
        this.audio_file = evnt.target.files[0];
    }
    sendAudioFile() {
        const formData = new FormData();
        formData.append('audio', this.audio_file);
        this.showOverlay = true;
        this.addService.saveAudio(formData).subscribe((res) => {
            console.log(res);
            this.correctedTextForm.patchValue({ inputText: res.input_speech });
            this.correctedTextForm.patchValue({ correctedText: res.data });
            this.audio_path = res.audio_file_name;
            this.showOverlay = false;
        });
    }
    cloneAudio() {
        this.showOverlay = true;
        this.addService
            .cloneAudio({
            path: this.audio_path,
            message: this.correctedTextForm.value.correctedText,
        })
            .subscribe((res) => {
            console.log(res);
            this.showOverlay = false;
            this.s3Link = res.s3Data.Location;
        });
    }
    sanitize(url) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }
    /**
     * Start recording.
     */
    initiateRecording() {
        this.recording = true;
        let mediaConstraints = {
            video: false,
            audio: true,
        };
        navigator.mediaDevices
            .getUserMedia({ video: false, audio: true })
            .then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }
    /**
     * Will be called automatically.
     */
    successCallback(stream) {
        var options = {
            mimeType: 'audio/wav',
            numberOfAudioChannels: 1,
            sampleRate: 44100,
        };
        //Start Actuall Recording
        var StereoAudioRecorder = recordrtc__WEBPACK_IMPORTED_MODULE_2__["StereoAudioRecorder"];
        this.record = new StereoAudioRecorder(stream, options);
        this.record.record();
    }
    /**
     * Stop recording.
     */
    stopRecording() {
        this.recording = false;
        this.record.stop(this.processRecording.bind(this));
    }
    /**
     * processRecording Do what ever you want with blob
     * @param  {any} blob Blog
     */
    processRecording(blob) {
        this.url = URL.createObjectURL(blob);
        console.log('blob', blob);
        console.log('url', this.url);
    }
    /**
     * Process Error.
     */
    errorCallback(error) {
        this.error = 'Can not play audio in your browser';
    }
}
LetsVoicelyComponent.ɵfac = function LetsVoicelyComponent_Factory(t) { return new (t || LetsVoicelyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_add_service__WEBPACK_IMPORTED_MODULE_3__["AddService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
LetsVoicelyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LetsVoicelyComponent, selectors: [["app-lets-voicely"]], decls: 92, vars: 12, consts: [["class", "my-overlay", 4, "ngIf"], [3, "nbSpinner"], ["orientation", "horizontal"], [3, "label"], ["labelOne", ""], [1, "lorem"], [1, "col-md-6", "m-auto"], [1, "card-body"], [1, "text-center"], ["type", "button", "class", "btn btn-success p-2 m-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger p-2 m-2", 3, "click", 4, "ngIf"], ["src", "https://media3.giphy.com/media/U8GtXtxM2XFhS/source.gif", "height", "200px", "width", "600px", 4, "ngIf"], ["controls", "", 4, "ngIf"], [1, "card", "text-center"], [1, "form-group", "pt-3", "pl-3", 3, "formGroup"], ["type", "file", "accept", "audio/*", "formControlName", "audio", 1, "form-control-file", 3, "change"], ["nbButton", "", "disabled", "", "nbStepperNext", ""], ["nbButton", "", "nbStepperNext", "", 3, "click"], ["labelTwo", ""], [1, "form-group", "col-md-10", "container", 3, "formGroup"], ["disabled", "", "formControlName", "inputText", "rows", "5", 1, "form-control"], ["formControlName", "correctedText", "rows", "5", 1, "form-control"], ["nbButton", "", "nbStepperPrevious", ""], ["label", "Outcomes"], [1, "container", "text-center", "m-3"], ["controls", "", 2, "width", "600px", 3, "src"], ["nbButton", "", "nbStepperNext", ""], ["labelFour", ""], [1, "my-overlay"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"], ["type", "button", 1, "btn", "btn-success", "p-2", "m-2", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "p-2", "m-2", 3, "click"], ["src", "https://media3.giphy.com/media/U8GtXtxM2XFhS/source.gif", "height", "200px", "width", "600px"], ["controls", ""], ["type", "audio/wav", 3, "src"]], template: function LetsVoicelyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LetsVoicelyComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-stepper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LetsVoicelyComponent_ng_template_5_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome to the First step.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Either record your audio by clicking the button below or upload a pre-recorded text. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Voicely Recorder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LetsVoicelyComponent_button_16_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LetsVoicelyComponent_button_18_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LetsVoicelyComponent_img_20_Template, 1, 0, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LetsVoicelyComponent_audio_22_Template, 2, 1, "audio", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Voicely Uploader ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LetsVoicelyComponent_Template_input_change_30_listener($event) { return ctx.onUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetsVoicelyComponent_Template_button_click_36_listener() { return ctx.sendAudioFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nb-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, LetsVoicelyComponent_ng_template_39_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Corrected Transcript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Your audio has been corrected by our smart AI-assistant. Please re-verify the correction. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "If you want, you can even change the text altogether.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Original Transcript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Corrected transcript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LetsVoicelyComponent_Template_button_click_61_listener() { return ctx.cloneAudio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nb-step", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Corrected Voice!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Hey there, I have converted your audio and corrected it to the best format. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Go ahead and listen to it. You can also download it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "audio", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Your browser does not support the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nb-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, LetsVoicelyComponent_ng_template_84_Template, 1, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Hurray, you have successfully smartened your audio speech !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " More information on this input audio will be shown in statistics and history. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Do Check it out, for a better analysis ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.showOverlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recording);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recording);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recording);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.audioUploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.correctedTextForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.s3Link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _r9);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperNextDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperPreviousDirective"]], styles: [".my-overlay[_ngcontent-%COMP%] {\r\n    left: 0 !important;\r\n    top: 0 !important;\r\n    z-index: 10000 !important;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    position: fixed !important;\r\n    background-color: rgba(0,0,0,0.9) !important;\r\n    cursor: pointer !important;\r\n    visibility: visible !important;\r\n    transition: visibility 0s, opacity 0.4s linear !important;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: wait !important;\r\n}\r\n.my-overlay[_ngcontent-%COMP%]   i.fa.fa-spinner.fa-spin[_ngcontent-%COMP%], .spinner-big[_ngcontent-%COMP%] {\r\n    font-size: 100px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm9pY2VseS9sZXRzLXZvaWNlbHkvbGV0cy12b2ljZWx5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiw0Q0FBNEM7SUFDNUMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5Qix5REFBeUQ7SUFDekQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC92b2ljZWx5L2xldHMtdm9pY2VseS9sZXRzLXZvaWNlbHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1vdmVybGF5IHtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC40cyBsaW5lYXIgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHdhaXQgIWltcG9ydGFudDtcclxufVxyXG4ubXktb3ZlcmxheSBpLmZhLmZhLXNwaW5uZXIuZmEtc3BpbiwgLnNwaW5uZXItYmlnIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetsVoicelyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lets-voicely',
                templateUrl: './lets-voicely.component.html',
                styleUrls: ['./lets-voicely.component.css'],
            }]
    }], function () { return [{ type: src_app_services_add_service__WEBPACK_IMPORTED_MODULE_3__["AddService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "qmr+":
/*!************************************************!*\
  !*** ./src/app/voicely/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 30, vars: 0, consts: [[1, "main"], [1, "mb-5"], ["src", "../../../assets/Voicely.png", "alt", "Voicely", 1, "col-md-12"], [1, "col-md-12", "row", "my-5"], [1, "col-md-12"], ["status", "danger"], [1, "font-weight-bold"], [1, "col-md-10", "m-auto"], ["src", "../../../assets/Voicely-Story.png", "alt", "story", 1, "col-md-12"], [1, "text-center", "m-5", "p-3"], [2, "color", "coral"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Problems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We can understand the English language very well while when it comes to speaking or interaction, almost 50% of us make grammatical Mistakes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Doing grammatical mistakes in professional communications leads to a bad impact and ends up with low confidence of speaker.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Students don't have adequate resources to improve their grammatical or pronunciation mistakes in real-time while speaking.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "There is no application which checks your verbal communication skills and corrects you or gives you feedback.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Made with \u2764\uFE0F by Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "The_Pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " during Rackathon 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"]], styles: [".main[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm9pY2VseS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3ZvaWNlbHkvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _voicely_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voicely/home/home.component */ "qmr+");
/* harmony import */ var _voicely_lets_voicely_lets_voicely_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voicely/lets-voicely/lets-voicely.component */ "gORQ");
/* harmony import */ var _voicely_voicely_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voicely/voicely.component */ "2FjL");
/* harmony import */ var _voicely_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voicely/statistics/statistics.component */ "xwv+");
/* harmony import */ var _voicely_under_development_under_development_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voicely/under-development/under-development.component */ "7Upm");









const routes = [
    {
        path: 'app',
        component: _voicely_voicely_component__WEBPACK_IMPORTED_MODULE_4__["VoicelyComponent"],
        children: [
            { path: 'home', component: _voicely_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'voicely', component: _voicely_lets_voicely_lets_voicely_component__WEBPACK_IMPORTED_MODULE_3__["LetsVoicelyComponent"] },
            { path: 'statistics', component: _voicely_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__["StatisticsComponent"] },
            { path: 'inProgress', component: _voicely_under_development_under_development_component__WEBPACK_IMPORTED_MODULE_6__["UnderDevelopmentComponent"] }
        ],
    },
    { path: '**', redirectTo: '/app/home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xwv+":
/*!************************************************************!*\
  !*** ./src/app/voicely/statistics/statistics.component.ts ***!
  \************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-plotly.js */ "u3+B");



class StatisticsComponent {
    constructor() { }
    ngOnInit() {
        this.graph1 = {
            data: [{
                    values: [55, 26, 19],
                    labels: ['Grammatical', 'Puntuation', 'prononciation'],
                    type: 'pie'
                }],
            layout: {
                title: 'Errors Analysis'
            }
        };
        this.graph2 = {
            data: [
                {
                    x: ['2021-04-09 14:23:00', '2021-04-09 16:00:00', '2021-04-09 16:43:00', '2021-04-09 17:23:00'],
                    y: [8, 6, 7, 1],
                    type: 'scatter',
                    line: { color: "red", width: 3 }
                }
            ],
            layout: { title: 'Improvement of Errors Analysis' }
        };
    }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(); };
StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["app-statistics"]], decls: 14, vars: 4, consts: [[1, "text-center"], [1, "row"], [1, "col-md-4", 3, "data", "layout"], [1, "col-md-8", 3, "data", "layout"], [1, "col-md-12", "card", "mt-3"], [1, "pt-4"], [1, "text-muted"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Let's look at some useful insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "plotly-plot", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "plotly-plot", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Voice Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Accent : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Hindi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.graph1.data)("layout", ctx.graph1.layout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.graph2.data)("layout", ctx.graph2.layout);
    } }, directives: [angular_plotly_js__WEBPACK_IMPORTED_MODULE_1__["PlotlyComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvaWNlbHkvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statistics',
                templateUrl: './statistics.component.html',
                styleUrls: ['./statistics.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map