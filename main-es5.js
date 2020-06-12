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

    var routes = [];

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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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


    var _mytest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mytest */
    "./src/app/mytest.ts");
    /* harmony import */


    var _test_scale_test_scale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./test-scale/test-scale.component */
    "./src/app/test-scale/test-scale.component.ts");

    var _c0 = ["mytest"];

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'voiceTest';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var t = new _mytest__WEBPACK_IMPORTED_MODULE_1__["Mytest"](this.mytest.nativeElement); // t.update()
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mytest = _t.first);
        }
      },
      decls: 4,
      vars: 0,
      consts: [[2, "padding", "10px 20px"], ["mytest", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-test-scale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", null, 1);
        }
      },
      directives: [_test_scale_test_scale_component__WEBPACK_IMPORTED_MODULE_2__["TestScaleComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, {
        mytest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mytest', {
            "static": true
          }]
        }]
      });
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _test_scale_test_scale_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./test-scale/test-scale.component */
    "./src/app/test-scale/test-scale.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _test_scale_test_scale_component__WEBPACK_IMPORTED_MODULE_4__["TestScaleComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _test_scale_test_scale_component__WEBPACK_IMPORTED_MODULE_4__["TestScaleComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/mytest.ts":
  /*!***************************!*\
    !*** ./src/app/mytest.ts ***!
    \***************************/

  /*! exports provided: Mytest */

  /***/
  function srcAppMytestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mytest", function () {
      return Mytest;
    });

    var Mytest = /*#__PURE__*/function () {
      function Mytest(data) {
        _classCallCheck(this, Mytest);

        this.mytest = data;
      }

      _createClass(Mytest, [{
        key: "update",
        value: function update() {
          this.mytest.style.height = '700px';
          this.mytest.style.background = 'red';
        }
      }]);

      return Mytest;
    }();
    /***/

  },

  /***/
  "./src/app/test-scale/test-scale.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/test-scale/test-scale.component.ts ***!
    \****************************************************/

  /*! exports provided: TestScaleComponent */

  /***/
  function srcAppTestScaleTestScaleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestScaleComponent", function () {
      return TestScaleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var _c0 = ["myscale"];
    var _c1 = ["scalewrapper"];

    var TestScaleComponent = /*#__PURE__*/function () {
      function TestScaleComponent() {
        _classCallCheck(this, TestScaleComponent);

        this.svgWidth = '100%';
        this.svgHeight = '100';
        this.axisRangeStart = 0;
        this.axisRangeEnd = 6000;
        this.minRange = 0;
        this.maxRange = 6000;
        this._scale = 3 / 4;
        this.dragToMoveDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateSelection$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isDragging = false;
        this.selection = {
          start: 800,
          end: 2400
        };
        this.selectRender = {
          end: 0,
          start: 0
        };
      }

      _createClass(TestScaleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.axisWidth = this.scalewrapper.nativeElement.clientWidth; // debugger

          this.initAxisRenderRule();
          this.initScale();
          this.bindScroll();
          this.bindDragMove();
          this.initSelectionChangeHandler();
          this.updateSelection$.next();
        }
      }, {
        key: "initSelectionChangeHandler",
        value: function initSelectionChangeHandler() {
          var _this2 = this;

          this.updateSelection$.pipe().subscribe(function (res) {
            var ticks = _this2.axisRenderRule.ticks();

            var r = _this2.axisRenderRule.range();

            var range = r[1] - r[0];

            var domain = _this2.axisRenderRule.domain();

            _this2.updateSelectRender(ticks, range, domain);
          });
        }
      }, {
        key: "updateSelectRender",
        value: function updateSelectRender(ticks, range, domain) {
          var renderRange;

          if (this.selection.start >= domain[0] && this.selection.end <= domain[1]) {
            renderRange = this.selection;
          } else if (this.selection.start < domain[0] && this.selection.end > domain[1]) {
            renderRange = {
              start: domain[0],
              end: domain[1]
            };
          } else if (this.selection.start < domain[0] && this.selection.end < domain[1] && this.selection.end >= domain[0]) {
            renderRange = {
              start: domain[0],
              end: this.selection.end
            };
          } else if (this.selection.start >= domain[0] && this.selection.end > domain[1] && this.selection.start <= domain[1]) {
            renderRange = {
              start: this.selection.start,
              end: domain[1]
            };
          } else if (this.selection.end <= domain[0] || this.selection.start >= domain[1]) {
            renderRange = {
              start: 0,
              end: 0
            };
          }

          ;
          this.selectRender = {
            start: Math.ceil((renderRange.start - domain[0]) / (domain[1] - domain[0]) * range),
            end: Math.ceil((renderRange.end - renderRange.start) / (domain[1] - domain[0]) * range)
          };
        }
      }, {
        key: "initAxisRenderRule",
        value: function initAxisRenderRule() {
          this.axisRenderRule = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([this.axisRangeStart, this.axisRangeEnd]).range([20, this.axisWidth - 20]);
        }
      }, {
        key: "addPathToRecover",
        value: function addPathToRecover() {
          var lineDrawer = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (d) {
            return d.x;
          }).y(function (d) {
            return d.y;
          }); // D3.select(this.myscale.nativeElement)
          // .append('path')
          // .classed('recover',true)
          // .attr('d',lineDrawer(
          //   [
          //     {x:19,y:30},
          //     {x:this.axisWidth -19,y:30}
          //   ]
          // ))
          // .attr('stroke','transparent')
          // .attr('stroke-width','2px')

          d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.myscale.nativeElement).select('path.domain').remove();
        }
      }, {
        key: "initScale",
        value: function initScale() {
          var _this3 = this;

          var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          var _this = this;

          this.axisSvg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.myscale.nativeElement).select('g.xaxis').attr("transform", "translate(0,".concat(30, ")")).transition(2000).call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](_this.axisRenderRule).tickSize(40).tickPadding(10).tickFormat(function (d) {
            return _this3.timeformat(d);
          }));
          this.addPathToRecover();
        }
      }, {
        key: "updateAxis",
        value: function updateAxis() {
          var _this4 = this;

          var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
          d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.myscale.nativeElement).select('g.xaxis').transition(2000).call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.axisRenderRule).tickSize(40).tickPadding(10).tickFormat(function (d) {
            return _this4.timeformat(d);
          }));
          this.addPathToRecover();
          this.updateSelection$.next(123);
        }
      }, {
        key: "timeformat",
        value: function timeformat(d) {
          var hour, min, sec;
          hour = (d - d % 3600) / 3600;
          min = (d - 3600 * hour - (d - 3600 * hour) % 60) / 60;
          sec = d - 3600 * hour - min * 60;
          var secF = sec < 10 ? "0".concat(sec) : sec;
          var hourF = hour < 10 ? "0".concat(hour) : hour;
          var minF = min < 10 ? "0".concat(min) : min;

          if (d == this.minRange) {
            return '';
          } else if (d == this.maxRange) {
            return '';
          } else {
            return "".concat(hourF, ":").concat(minF, ":").concat(secF);
          }
        }
      }, {
        key: "scrollToClose",
        value: function scrollToClose(res) {
          var newRange = Math.ceil((this.axisRangeEnd - this.axisRangeStart) * this._scale);
          if (newRange <= 10) return;
          var currentScrollFrame = this.axisRangeStart + Math.floor((this.axisRangeEnd - this.axisRangeStart) * (res.offsetX / this.axisWidth));
          var newAxisRangeEnd = Math.floor(newRange / 2) + currentScrollFrame >= this.maxRange ? this.maxRange : Math.ceil(newRange / 2) + currentScrollFrame;
          var newAxisRangeStart = newAxisRangeEnd - newRange <= this.minRange ? this.minRange : newAxisRangeEnd - newRange;
          this.axisRangeStart = newAxisRangeStart;
          this.axisRangeEnd = newAxisRangeEnd;
        }
      }, {
        key: "scrollToAway",
        value: function scrollToAway(res) {
          var newRange = Math.ceil((this.axisRangeEnd - this.axisRangeStart) / this._scale);
          var currentScrollFrame = this.axisRangeStart + Math.floor((this.axisRangeEnd - this.axisRangeStart) * (res.offsetX / this.axisWidth));
          var newAxisRangeEnd, newAxisRangeStart;

          if (this.axisRangeEnd - currentScrollFrame < currentScrollFrame - this.axisRangeStart) {
            newAxisRangeEnd = Math.floor(newRange / 2) + currentScrollFrame >= this.maxRange ? this.maxRange : Math.ceil(newRange / 2) + currentScrollFrame;
            newAxisRangeStart = newAxisRangeEnd - newRange <= this.minRange ? this.minRange : newAxisRangeEnd - newRange;
          } else {
            newAxisRangeStart = currentScrollFrame - Math.floor(newRange / 2) <= this.minRange ? this.minRange : currentScrollFrame - Math.floor(newRange / 2);
            newAxisRangeEnd = newAxisRangeStart + newRange >= this.maxRange ? this.maxRange : newAxisRangeStart + newRange;
          }

          this.axisRangeStart = newAxisRangeStart;
          this.axisRangeEnd = newAxisRangeEnd;
        }
      }, {
        key: "bindScroll",
        value: function bindScroll() {
          var _this5 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.myscale.nativeElement, 'wheel').subscribe(function (res) {
            res.preventDefault();

            if (res.deltaY > 0) {
              _this5.scrollToClose(res);
            } else {
              _this5.scrollToAway(res);
            }

            _this5.initAxisRenderRule();

            _this5.updateAxis();
          });
        }
      }, {
        key: "bindDragMove",
        value: function bindDragMove() {
          var _this6 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.myscale.nativeElement, 'mousedown').subscribe(function (res) {
            // debugger
            res.preventDefault();

            if (res.button === 0) {
              _this6.enableDragToMoveScale(res);

              _this6.isDragging = true;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (res) {
                _this6.disableDragToMoveScale();

                _this6.isDragging = false;
              });
            } else if (res.button == 2) {
              _this6.updateSelection(res);

              _this6.isDragging = true;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (res) {
                _this6.disableDragToMoveScale();

                _this6.isDragging = false;
              });
            }
          });
        }
      }, {
        key: "updateSelection",
        value: function updateSelection(res) {
          var _this7 = this;

          res.preventDefault();
          var r = this.axisRenderRule.range();
          var range = r[1] - r[0];
          var domain = this.axisRenderRule.domain();
          var start = Math.ceil((res.offsetX - 20) / range * (domain[1] - domain[0]) + domain[0]);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.myscale.nativeElement, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.dragToMoveDestroy$)).subscribe(function (res) {
            var t = Math.ceil((res.offsetX - 20) / range * (domain[1] - domain[0]) + domain[0]);

            if (t > start) {
              _this7.selection = {
                start: start,
                end: t
              };
            } else {
              _this7.selection = {
                end: start,
                start: t
              };
            }

            _this7.updateSelection$.next();
          });
        }
      }, {
        key: "enableDragToMoveScale",
        value: function enableDragToMoveScale(startpoint) {
          var _this8 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.myscale.nativeElement, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.dragToMoveDestroy$)).subscribe(function (res) {
            res.preventDefault();
            var distance = res.movementX;
            var realDistance;
            var t = (_this8.axisRangeEnd - _this8.axisRangeStart) * (distance / _this8.axisWidth);

            if (t >= 0) {
              realDistance = t;
            } else {
              realDistance = 0 - t;
            }

            if (res.movementX > 0) {
              if (_this8.axisRangeStart - realDistance >= _this8.minRange) {
                _this8.axisRangeStart -= realDistance;
                _this8.axisRangeEnd -= realDistance;
              } else {
                var _t2 = _this8.axisRangeStart - _this8.minRange;

                _this8.axisRangeStart = _this8.minRange;
                _this8.axisRangeEnd -= _t2;
              }
            } else {
              if (_this8.axisRangeEnd + realDistance <= _this8.maxRange) {
                // //  debugger
                _this8.axisRangeEnd += realDistance;
                _this8.axisRangeStart += realDistance; //   // debugger
              } else {
                var _t3 = _this8.maxRange - _this8.axisRangeEnd;

                _this8.axisRangeStart += _t3;
                _this8.axisRangeEnd = _this8.maxRange; // debugger
                // return
              }
            }

            _this8.initAxisRenderRule();

            d3__WEBPACK_IMPORTED_MODULE_1__["select"](_this8.myscale.nativeElement).select('g.xaxis').call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](_this8.axisRenderRule).tickSize(40).tickPadding(10).tickFormat(function (d) {
              return _this8.timeformat(d);
            }));

            _this8.addPathToRecover();

            _this8.updateSelection$.next();
          });
        }
      }, {
        key: "disableDragToMoveScale",
        value: function disableDragToMoveScale() {
          this.dragToMoveDestroy$.next();
        }
      }]);

      return TestScaleComponent;
    }();

    TestScaleComponent.ɵfac = function TestScaleComponent_Factory(t) {
      return new (t || TestScaleComponent)();
    };

    TestScaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestScaleComponent,
      selectors: [["app-test-scale"]],
      viewQuery: function TestScaleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myscale = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scalewrapper = _t.first);
        }
      },
      inputs: {
        svgWidth: "svgWidth",
        svgHeight: "svgHeight"
      },
      decls: 11,
      vars: 14,
      consts: [[1, "svg-wrapper"], ["scalewrapper", ""], [1, "scale-svg", 3, "contextmenu"], ["myscale", ""], [1, "xaxis"], [1, "selection-wrapper"], [1, "selection"], [2, "margin-top", "20px"]],
      template: function TestScaleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function TestScaleComponent_Template__svg_svg_contextmenu_2_listener($event) {
            return $event.preventDefault();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "g", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.svgWidth)("height", ctx.svgHeight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.selectRender.start + "px")("width", ctx.selectRender.end + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isdragging", ctx.isDragging);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" start ", ctx.selection.start, " end ", ctx.selection.end, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" format start", ctx.timeformat(ctx.selection.start), " format end", ctx.timeformat(ctx.selection.end), " ");
        }
      },
      styles: [".scale-svg[_ngcontent-%COMP%]{\r\n\r\n}\r\n.svg-wrapper[_ngcontent-%COMP%]{\r\n  \r\n  margin-top:20px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n}\r\n.selection-wrapper[_ngcontent-%COMP%]{\r\n  right:20px;\r\n  left:20px;\r\n  height:100%;\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: -100;\r\n  border-left:1px solid ;\r\n  border-right:1px solid;\r\n  overflow: hidden;\r\n}\r\n.selection[_ngcontent-%COMP%]{\r\n  background: #ddd;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  transition: all .2s;\r\n\r\n}\r\n.isdragging.selection[_ngcontent-%COMP%]{\r\n  transition: none;\r\n}\r\n.svg-wrapper[_ngcontent-%COMP%]::before{\r\n  content: '';\r\n  width:20px;\r\n  height:100%;\r\n  background: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  left:0px;\r\n}\r\n.svg-wrapper[_ngcontent-%COMP%]::after{\r\n  content: '';\r\n  width:20px;\r\n  height:100%;\r\n  background: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  right:0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1zY2FsZS90ZXN0LXNjYWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0FBQ1Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3Rlc3Qtc2NhbGUvdGVzdC1zY2FsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjYWxlLXN2Z3tcclxuXHJcbn1cclxuLnN2Zy13cmFwcGVye1xyXG4gIC8qIGJvcmRlcjoxcHggc29saWQgOyAqL1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2VsZWN0aW9uLXdyYXBwZXJ7XHJcbiAgcmlnaHQ6MjBweDtcclxuICBsZWZ0OjIwcHg7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAtMTAwO1xyXG4gIGJvcmRlci1sZWZ0OjFweCBzb2xpZCA7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zZWxlY3Rpb257XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG5cclxufVxyXG4uaXNkcmFnZ2luZy5zZWxlY3Rpb257XHJcbiAgdHJhbnNpdGlvbjogbm9uZTtcclxufVxyXG4uc3ZnLXdyYXBwZXI6OmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDoyMHB4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OjBweDtcclxufVxyXG4uc3ZnLXdyYXBwZXI6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOjIwcHg7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OjBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestScaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test-scale',
          templateUrl: './test-scale.component.html',
          styleUrls: ['./test-scale.component.css']
        }]
      }], function () {
        return [];
      }, {
        myscale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myscale', {
            "static": true
          }]
        }],
        scalewrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scalewrapper', {
            "static": true
          }]
        }],
        svgWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        svgHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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
    /*! D:\lab\voiceTest\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map