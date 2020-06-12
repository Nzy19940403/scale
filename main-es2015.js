(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mytest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mytest */ "./src/app/mytest.ts");
/* harmony import */ var _test_scale_test_scale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-scale/test-scale.component */ "./src/app/test-scale/test-scale.component.ts");




const _c0 = ["mytest"];
class AppComponent {
    constructor() {
        this.title = 'voiceTest';
    }
    ngOnInit() {
        let t = new _mytest__WEBPACK_IMPORTED_MODULE_1__["Mytest"](this.mytest.nativeElement);
        // t.update()
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mytest = _t.first);
    } }, decls: 4, vars: 0, consts: [[2, "padding", "10px 20px"], ["mytest", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-test-scale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", null, 1);
    } }, directives: [_test_scale_test_scale_component__WEBPACK_IMPORTED_MODULE_2__["TestScaleComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, { mytest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mytest', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_scale_test_scale_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-scale/test-scale.component */ "./src/app/test-scale/test-scale.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _test_scale_test_scale_component__WEBPACK_IMPORTED_MODULE_4__["TestScaleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _test_scale_test_scale_component__WEBPACK_IMPORTED_MODULE_4__["TestScaleComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mytest.ts":
/*!***************************!*\
  !*** ./src/app/mytest.ts ***!
  \***************************/
/*! exports provided: Mytest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mytest", function() { return Mytest; });
class Mytest {
    constructor(data) {
        this.mytest = data;
    }
    update() {
        this.mytest.style.height = '700px';
        this.mytest.style.background = 'red';
    }
}


/***/ }),

/***/ "./src/app/test-scale/test-scale.component.ts":
/*!****************************************************!*\
  !*** ./src/app/test-scale/test-scale.component.ts ***!
  \****************************************************/
/*! exports provided: TestScaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestScaleComponent", function() { return TestScaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const _c0 = ["myscale"];
const _c1 = ["scalewrapper"];
class TestScaleComponent {
    constructor() {
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
    ngOnInit() {
        this.axisWidth = this.scalewrapper.nativeElement.clientWidth;
        // debugger
        this.initAxisRenderRule();
        this.initScale();
        this.bindScroll();
        this.bindDragMove();
        this.initSelectionChangeHandler();
        this.updateSelection$.next();
    }
    initSelectionChangeHandler() {
        this.updateSelection$
            .pipe(
        // debounceTime(100),
        // delay(100)
        )
            .subscribe(res => {
            let ticks = this.axisRenderRule.ticks();
            let r = this.axisRenderRule.range();
            let range = r[1] - r[0];
            let domain = this.axisRenderRule.domain();
            this.updateSelectRender(ticks, range, domain);
        });
    }
    updateSelectRender(ticks, range, domain) {
        let renderRange;
        if (this.selection.start >= domain[0] && this.selection.end <= domain[1]) {
            renderRange = this.selection;
        }
        else if (this.selection.start < domain[0] && this.selection.end > domain[1]) {
            renderRange = {
                start: domain[0],
                end: domain[1]
            };
        }
        else if (this.selection.start < domain[0] && this.selection.end < domain[1] && this.selection.end >= domain[0]) {
            renderRange = {
                start: domain[0],
                end: this.selection.end
            };
        }
        else if (this.selection.start >= domain[0] && this.selection.end > domain[1] && this.selection.start <= domain[1]) {
            renderRange = {
                start: this.selection.start,
                end: domain[1]
            };
        }
        else if (this.selection.end <= domain[0] || this.selection.start >= domain[1]) {
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
    initAxisRenderRule() {
        this.axisRenderRule = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([this.axisRangeStart, this.axisRangeEnd])
            .range([20, (this.axisWidth - 20)]);
    }
    addPathToRecover() {
        let lineDrawer = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (d) {
            return d.x;
        }).y(function (d) {
            return d.y;
        });
        // D3.select(this.myscale.nativeElement)
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
        d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.myscale.nativeElement)
            .select('path.domain')
            .remove();
    }
    initScale(bool = true) {
        let _this = this;
        this.axisSvg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.myscale.nativeElement)
            .select('g.xaxis')
            .attr("transform", `translate(0,${30})`)
            .transition(2000)
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](_this.axisRenderRule)
            .tickSize(40)
            .tickPadding(10)
            .tickFormat(d => {
            return this.timeformat(d);
        }));
        this.addPathToRecover();
    }
    updateAxis(number = 2000) {
        d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.myscale.nativeElement)
            .select('g.xaxis')
            .transition(2000)
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.axisRenderRule)
            .tickSize(40)
            .tickPadding(10)
            .tickFormat(d => {
            return this.timeformat(d);
        }));
        this.addPathToRecover();
        this.updateSelection$.next(123);
    }
    timeformat(d) {
        let hour, min, sec;
        hour = (d - d % 3600) / 3600;
        min = ((d - 3600 * hour) - (d - 3600 * hour) % 60) / 60;
        sec = d - 3600 * hour - min * 60;
        let secF = sec < 10 ? `0${sec}` : sec;
        let hourF = hour < 10 ? `0${hour}` : hour;
        let minF = min < 10 ? `0${min}` : min;
        if (d == this.minRange) {
            return '';
        }
        else if (d == this.maxRange) {
            return '';
        }
        else {
            return `${hourF}:${minF}:${secF}`;
        }
    }
    scrollToClose(res) {
        let newRange = Math.ceil((this.axisRangeEnd - this.axisRangeStart) * this._scale);
        if (newRange <= 10)
            return;
        const currentScrollFrame = this.axisRangeStart + Math.floor((this.axisRangeEnd - this.axisRangeStart) * (res.offsetX / this.axisWidth));
        let newAxisRangeEnd = Math.floor(newRange / 2) + currentScrollFrame >= this.maxRange ? this.maxRange : Math.ceil(newRange / 2) + currentScrollFrame;
        let newAxisRangeStart = newAxisRangeEnd - newRange <= this.minRange ? this.minRange : newAxisRangeEnd - newRange;
        this.axisRangeStart = newAxisRangeStart;
        this.axisRangeEnd = newAxisRangeEnd;
    }
    scrollToAway(res) {
        let newRange = Math.ceil((this.axisRangeEnd - this.axisRangeStart) / this._scale);
        const currentScrollFrame = this.axisRangeStart + Math.floor((this.axisRangeEnd - this.axisRangeStart) * (res.offsetX / this.axisWidth));
        let newAxisRangeEnd, newAxisRangeStart;
        if (this.axisRangeEnd - currentScrollFrame < (currentScrollFrame - this.axisRangeStart)) {
            newAxisRangeEnd = Math.floor(newRange / 2) + currentScrollFrame >= this.maxRange ? this.maxRange : Math.ceil(newRange / 2) + currentScrollFrame;
            newAxisRangeStart = newAxisRangeEnd - newRange <= this.minRange ? this.minRange : newAxisRangeEnd - newRange;
        }
        else {
            newAxisRangeStart = currentScrollFrame - Math.floor(newRange / 2) <= this.minRange ? this.minRange : currentScrollFrame - Math.floor(newRange / 2);
            newAxisRangeEnd = newAxisRangeStart + newRange >= this.maxRange ? this.maxRange : newAxisRangeStart + newRange;
        }
        this.axisRangeStart = newAxisRangeStart;
        this.axisRangeEnd = newAxisRangeEnd;
    }
    bindScroll() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.myscale.nativeElement, 'wheel')
            .subscribe((res) => {
            res.preventDefault();
            if (res.deltaY > 0) {
                this.scrollToClose(res);
            }
            else {
                this.scrollToAway(res);
            }
            this.initAxisRenderRule();
            this.updateAxis();
        });
    }
    bindDragMove() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.myscale.nativeElement, 'mousedown')
            .subscribe((res) => {
            // debugger
            res.preventDefault();
            if (res.button === 0) {
                this.enableDragToMoveScale(res);
                this.isDragging = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'mouseup')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                    .subscribe(res => {
                    this.disableDragToMoveScale();
                    this.isDragging = false;
                });
            }
            else if (res.button == 2) {
                this.updateSelection(res);
                this.isDragging = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'mouseup')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                    .subscribe(res => {
                    this.disableDragToMoveScale();
                    this.isDragging = false;
                });
            }
        });
    }
    updateSelection(res) {
        res.preventDefault();
        let r = this.axisRenderRule.range();
        let range = r[1] - r[0];
        let domain = this.axisRenderRule.domain();
        let start = Math.ceil((res.offsetX - 20) / range * (domain[1] - domain[0]) + domain[0]);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.myscale.nativeElement, 'mousemove')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.dragToMoveDestroy$))
            .subscribe((res) => {
            let t = Math.ceil((res.offsetX - 20) / range * (domain[1] - domain[0]) + domain[0]);
            if (t > start) {
                this.selection = {
                    start: start,
                    end: t
                };
            }
            else {
                this.selection = {
                    end: start,
                    start: t
                };
            }
            this.updateSelection$.next();
        });
    }
    enableDragToMoveScale(startpoint) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.myscale.nativeElement, 'mousemove')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.dragToMoveDestroy$))
            .subscribe((res) => {
            res.preventDefault();
            let distance = res.movementX;
            let realDistance;
            let t = (this.axisRangeEnd - this.axisRangeStart) * (distance / this.axisWidth);
            if (t >= 0) {
                realDistance = t;
            }
            else {
                realDistance = 0 - t;
            }
            if (res.movementX > 0) {
                if (this.axisRangeStart - realDistance >= this.minRange) {
                    this.axisRangeStart -= realDistance;
                    this.axisRangeEnd -= realDistance;
                }
                else {
                    let t = this.axisRangeStart - this.minRange;
                    this.axisRangeStart = this.minRange;
                    this.axisRangeEnd -= t;
                }
            }
            else {
                if (this.axisRangeEnd + realDistance <= this.maxRange) {
                    // //  debugger
                    this.axisRangeEnd += realDistance;
                    this.axisRangeStart += realDistance;
                    //   // debugger
                }
                else {
                    let t = this.maxRange - this.axisRangeEnd;
                    this.axisRangeStart += t;
                    this.axisRangeEnd = this.maxRange;
                    // debugger
                    // return
                }
            }
            this.initAxisRenderRule();
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.myscale.nativeElement)
                .select('g.xaxis')
                .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.axisRenderRule)
                .tickSize(40)
                .tickPadding(10)
                .tickFormat(d => {
                return this.timeformat(d);
            }));
            this.addPathToRecover();
            this.updateSelection$.next();
        });
    }
    disableDragToMoveScale() {
        this.dragToMoveDestroy$.next();
    }
}
TestScaleComponent.ɵfac = function TestScaleComponent_Factory(t) { return new (t || TestScaleComponent)(); };
TestScaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestScaleComponent, selectors: [["app-test-scale"]], viewQuery: function TestScaleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myscale = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scalewrapper = _t.first);
    } }, inputs: { svgWidth: "svgWidth", svgHeight: "svgHeight" }, decls: 11, vars: 14, consts: [[1, "svg-wrapper"], ["scalewrapper", ""], [1, "scale-svg", 3, "contextmenu"], ["myscale", ""], [1, "xaxis"], [1, "selection-wrapper"], [1, "selection"], [2, "margin-top", "20px"]], template: function TestScaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function TestScaleComponent_Template__svg_svg_contextmenu_2_listener($event) { return $event.preventDefault(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.svgWidth)("height", ctx.svgHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.selectRender.start + "px")("width", ctx.selectRender.end + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isdragging", ctx.isDragging);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" start ", ctx.selection.start, " end ", ctx.selection.end, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" format start", ctx.timeformat(ctx.selection.start), " format end", ctx.timeformat(ctx.selection.end), " ");
    } }, styles: [".scale-svg[_ngcontent-%COMP%]{\r\n\r\n}\r\n.svg-wrapper[_ngcontent-%COMP%]{\r\n  \r\n  margin-top:20px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n}\r\n.selection-wrapper[_ngcontent-%COMP%]{\r\n  right:20px;\r\n  left:20px;\r\n  height:100%;\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: -100;\r\n  border-left:1px solid ;\r\n  border-right:1px solid;\r\n  overflow: hidden;\r\n}\r\n.selection[_ngcontent-%COMP%]{\r\n  background: #ddd;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  transition: all .2s;\r\n\r\n}\r\n.isdragging.selection[_ngcontent-%COMP%]{\r\n  transition: none;\r\n}\r\n.svg-wrapper[_ngcontent-%COMP%]::before{\r\n  content: '';\r\n  width:20px;\r\n  height:100%;\r\n  background: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  left:0px;\r\n}\r\n.svg-wrapper[_ngcontent-%COMP%]::after{\r\n  content: '';\r\n  width:20px;\r\n  height:100%;\r\n  background: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  right:0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1zY2FsZS90ZXN0LXNjYWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0FBQ1Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3Rlc3Qtc2NhbGUvdGVzdC1zY2FsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjYWxlLXN2Z3tcclxuXHJcbn1cclxuLnN2Zy13cmFwcGVye1xyXG4gIC8qIGJvcmRlcjoxcHggc29saWQgOyAqL1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2VsZWN0aW9uLXdyYXBwZXJ7XHJcbiAgcmlnaHQ6MjBweDtcclxuICBsZWZ0OjIwcHg7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAtMTAwO1xyXG4gIGJvcmRlci1sZWZ0OjFweCBzb2xpZCA7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zZWxlY3Rpb257XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG5cclxufVxyXG4uaXNkcmFnZ2luZy5zZWxlY3Rpb257XHJcbiAgdHJhbnNpdGlvbjogbm9uZTtcclxufVxyXG4uc3ZnLXdyYXBwZXI6OmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDoyMHB4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OjBweDtcclxufVxyXG4uc3ZnLXdyYXBwZXI6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOjIwcHg7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestScaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test-scale',
                templateUrl: './test-scale.component.html',
                styleUrls: ['./test-scale.component.css']
            }]
    }], function () { return []; }, { myscale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myscale', { static: true }]
        }], scalewrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scalewrapper', { static: true }]
        }], svgWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], svgHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\lab\voiceTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map