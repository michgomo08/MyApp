(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            Autenticación\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn fast content-animation-config\">\n    <ion-grid>\n        <ion-row class=\"ion-justify-content-center ion-margin-top\">\n            <ion-col>\n                <div>\n                    <ion-item>\n                        <ion-input inputmode=\"number\" [type]=\"PASSWORD_INPUT_TYPE\" (keyup.enter)=\"validarPIN(PIN, $event)\" [(ngModel)]=\"PIN\" placeholder=\"PIN\"></ion-input>\n                        <ion-icon (click)=\"hideShowPassword()\" [name]=\"PASSWORD_INPUT_ICON\" slot=\"end\"></ion-icon>\n                    </ion-item>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-center ion-margin-top\">\n            <ion-col>\n                <div>\n\n                    <ion-button expand=\"block\" (click)=\"validarPIN(PIN, $event)\">Validar</ion-button>\n\n                </div>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row class=\"ion-justify-content-center ion-margin-top full-row-size\">\n            <ion-col>\n                <ion-item class=\"ion-text-center\">\n                    <ion-label class=\"ion-text-center\" class=\"lbl-tittle\" color=\"primary\">Información del Certificado</ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-item>\n        <ion-label>Nombre:</ion-label>\n        <ion-input class=\"ion-text-end\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Emitido Por:</ion-label>\n        <ion-input class=\"ion-text-end\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Fecha Vencimiento:</ion-label>\n        <ion-input class=\"ion-text-end\"></ion-input>\n    </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-animation-config {\n  -webkit-animation-duration: 300ms;\n          animation-duration: 300ms;\n}\n\n.divider {\n  height: 3%;\n}\n\n.lbl-tittle {\n  font-size: 25px;\n}\n\n.full-row-size {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXG1nb21lelxcRG9jdW1lbnRzXFxPcmJlXFxUb2RvXFxGRUlUSUFOXFxteUFwcC9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYW5pbWF0aW9uLWNvbmZpZyB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICBoZWlnaHQ6IDMlO1xyXG59XHJcblxyXG4ubGJsLXRpdHRsZSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5mdWxsLXJvdy1zaXplIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiLmNvbnRlbnQtYW5pbWF0aW9uLWNvbmZpZyB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG59XG5cbi5kaXZpZGVyIHtcbiAgaGVpZ2h0OiAzJTtcbn1cblxuLmxibC10aXR0bGUge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5mdWxsLXJvdy1zaXplIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Tab2Page = class Tab2Page {
    constructor() {
        this.PASSWORD_INPUT_TYPE = 'password';
        this.PASSWORD_INPUT_ICON = 'eye';
    }
    hideShowPassword() {
        this.PASSWORD_INPUT_TYPE = this.PASSWORD_INPUT_TYPE === 'text' ? 'password' : 'text';
        this.PASSWORD_INPUT_ICON = this.PASSWORD_INPUT_ICON === 'eye-off' ? 'eye' : 'eye-off';
    }
    validarPIN(pin, ev) {
        // tslint:disable-next-line: ban-types only-arrow-functions
        cordova.plugins.MyPlugin.testMichael('Validando certificado', function (response) {
            alert(response);
            // tslint:disable-next-line: only-arrow-functions
        }, function (error) {
            alert(error);
        });
    }
};
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map