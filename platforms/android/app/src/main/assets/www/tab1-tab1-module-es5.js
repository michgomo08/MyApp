function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            Lector\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn fast content-animation-config\">\n    <ion-grid>\n        <ion-row class=\"ion-justify-content-center ion-margin-top\">\n            <ion-col>\n                <ion-item>\n                    <ion-thumbnail class=\"thumbnail\" *ngIf=\"IS_LOADING === true\" item-left>\n                        <img [src]=\"CARGANDO\" class=\"android hydrated\" />\n                    </ion-thumbnail>\n                    <ion-input [class.connected]=\"CONECTADO\" [class.disconnected]=\"!CONECTADO\" *ngIf=\"IS_LOADING === false\"> {{INPUT_ESTADO}} </ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <div class=\"divider \"></div>\n\n        <ion-row class=\"ion-justify-content-center ion-margin-top \">\n            <ion-col size=\"100% \">\n                <div>\n                    <!-- Default -->\n                    <ion-button [disabled]=\"BTN_CONECTAR_DISABLED\" (click)=\"conectarDesconectar($event)\">{{BTN_CONECTAR}}</ion-button>\n                </div>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row class=\"ion-justify-content-center ion-margin-top full-row-size \">\n            <ion-col>\n                <ion-item class=\"ion-text-center \">\n                    <ion-label class=\"ion-text-center \" class=\"lbl-titulo \" color=\"primary \">Información del Lector</ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-item>\n        <ion-label>Marca:</ion-label>\n        <ion-input class=\"ion-text-end \"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Modelo:</ion-label>\n        <ion-input class=\"ion-text-end \"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>ID:</ion-label>\n        <ion-input class=\"ion-text-end \"></ion-input>\n    </ion-item>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab1/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab1/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");

    var routes = [{
      path: '',
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/tab1/tab1-routing.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-animation-config {\n  -webkit-animation-duration: 300ms;\n          animation-duration: 300ms;\n}\n\n.divider {\n  height: 3%;\n}\n\n.lbl-titulo {\n  font-size: 25px;\n}\n\n.full-row-size {\n  width: 100%;\n}\n\n.connected {\n  margin-top: 3px;\n  margin-left: 5px;\n  color: green;\n}\n\n.disconnected {\n  margin-top: 3px;\n  margin-left: 5px;\n  color: red;\n}\n\n.thumbnail {\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXG1nb21lelxcRG9jdW1lbnRzXFxPcmJlXFxUb2RvXFxGRUlUSUFOXFxteUFwcC9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYW5pbWF0aW9uLWNvbmZpZyB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICBoZWlnaHQ6IDMlO1xyXG59XHJcblxyXG4ubGJsLXRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5mdWxsLXJvdy1zaXplIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29ubmVjdGVkIHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5kaXNjb25uZWN0ZWQge1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi50aHVtYm5haWwge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59IiwiLmNvbnRlbnQtYW5pbWF0aW9uLWNvbmZpZyB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG59XG5cbi5kaXZpZGVyIHtcbiAgaGVpZ2h0OiAzJTtcbn1cblxuLmxibC10aXR1bG8ge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5mdWxsLXJvdy1zaXplIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb25uZWN0ZWQge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmRpc2Nvbm5lY3RlZCB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIGhlaWdodDogMzBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(platform) {
        _classCallCheck(this, Tab1Page);

        this.platform = platform;
        this.CARGANDO = 'assets/icon/grabando.gif';
        this.IS_LOADING = true;
        this.BTN_CONECTAR = 'Conectar';
        this.BTN_CONECTAR_DISABLED = true;
        this.CONECTADO = false;
        this.INPUT_ESTADO = 'Desconectado';
      }

      _createClass(Tab1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.IS_LOADING = true;

            _this.comprobarConexion().then(function () {
              _this.IS_LOADING = false;
              _this.BTN_CONECTAR_DISABLED = false;
            });
          });
        }
      }, {
        key: "comprobarConexion",
        value: function comprobarConexion() {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve('resolved');
            }, 1000);
          });
        }
      }, {
        key: "conectarDesconectar",
        value: function conectarDesconectar(ev) {
          this.IS_LOADING = true;
          this.BTN_CONECTAR_DISABLED = true; //this.comprobarConexion().then(() => {
          // tslint:disable-next-line: ban-types only-arrow-functions

          cordova.plugins.MyLectorPlugin.coolMethod('', function (response) {
            alert(response);
            console.log(response); // tslint:disable-next-line: only-arrow-functions
          }, function (error) {
            alert(error);
          });
          this.IS_LOADING = false;
          this.BTN_CONECTAR_DISABLED = false; // });
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map