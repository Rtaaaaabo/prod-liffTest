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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">DFree Line Things</mat-toolbar>\n<div class=\"container\">\n  <div class=\"text-center\">\n    <button (click)=\"test()\">Thanks Button</button>\n  </div>\n  <p>Before Data0 {{ultraDataBefore}}</p>\n  <br>\n  <br>\n  <p>After Data1 {{ultraDataAfter}}</p>\n</div>\n<br>\n<br>\n<div>\n  <p>Channel0 {{ultraChannel0Data}}</p>\n  <p>Channel1 {{ultraChannel1Data}}</p>\n  <p>Channel2 {{ultraChannel2Data}}</p>\n  <p>Channel3 {{ultraChannel3Data}}</p>\n</div>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_liffData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/liffData */ "./src/app/data/liffData.ts");


// import { LiffService } from './services/liff.service';

const SERVICE_UUID = _data_liffData__WEBPACK_IMPORTED_MODULE_2__["LiffData"].USER_SERVICE_UUID;
const BTN_CHARACTERISTIC_UUID = _data_liffData__WEBPACK_IMPORTED_MODULE_2__["LiffData"].BTN_CHARACTERISTIC_UUID;
const ULTRA_BEFORE_CHARACTERISTIC_UUID = _data_liffData__WEBPACK_IMPORTED_MODULE_2__["LiffData"].ULTRA_BEFORE_CHARACTERISTIC_UUID;
const ULTRA_AFTER_CHARACTERISTIC_UUID = _data_liffData__WEBPACK_IMPORTED_MODULE_2__["LiffData"].ULTRA_AFTER_CHARACTERISTIC_UUID;
const PSDI_SERVICE_UUID = _data_liffData__WEBPACK_IMPORTED_MODULE_2__["LiffData"].PSDI_SERVICE_UUID;
const PSDI_CHARACTERISTIC_UUID = _data_liffData__WEBPACK_IMPORTED_MODULE_2__["LiffData"].PSDI_CHARACTERISTIC_UUID;
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'LIFF Mock';
        // 一旦は記載するけど、あとできれいにする。
        this.bufferBefore = new ArrayBuffer(512);
        this.bufferAfter = new ArrayBuffer(512);
        this.buffetKind = new ArrayBuffer(128);
        this.bufferChannel0 = new ArrayBuffer(256);
        this.bufferChannel1 = new ArrayBuffer(256);
        this.bufferChannel2 = new ArrayBuffer(256);
        this.bufferChannel3 = new ArrayBuffer(256);
        this.dvChannel0 = new DataView(this.bufferChannel0);
        this.dvChannel1 = new DataView(this.bufferChannel1);
        this.dvChannel2 = new DataView(this.bufferChannel2);
        this.dvChannel3 = new DataView(this.bufferChannel3);
        this.dvBefore = new DataView(this.bufferBefore);
        this.dvAfter = new DataView(this.bufferAfter);
        this.dv0Before = new DataView(this.buffetKind);
        this.dv1Before = new DataView(this.buffetKind);
        this.dv2Before = new DataView(this.buffetKind);
        this.dv3Before = new DataView(this.buffetKind);
        this.dv0After = new DataView(this.buffetKind);
        this.dv1After = new DataView(this.buffetKind);
        this.dv2After = new DataView(this.buffetKind);
        this.dv3After = new DataView(this.buffetKind);
        this.messages = '';
        this.statusBle = true;
    }
    ngOnInit() {
        liff.init(() => this.initLineLiff(), error => alert('31' + JSON.stringify(error)));
    }
    initLineLiff() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            liff.initPlugins(['bluetooth']).then(() => {
                this.liffCheckAvailablityAndDo(() => this.liffRequestDevice());
            });
        });
    }
    liffCheckAvailablityAndDo(callbackIfAvailable) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            liff.bluetooth.getAvailability().then(isAvailable => {
                if (isAvailable) {
                    callbackIfAvailable();
                }
                else {
                    setTimeout(() => this.liffCheckAvailablityAndDo(callbackIfAvailable), 10000);
                }
            });
        });
    }
    liffRequestDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            liff.bluetooth.requestDevice().then(device => {
                this.liffConnectToDevice(device);
            });
        });
    }
    liffConnectToDevice(device) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            device.gatt.connect().then(() => {
                device.gatt.getPrimaryService(SERVICE_UUID).then(service => {
                    this.service = service;
                    this.liffGetUserService(service);
                });
                device.gatt.getPrimaryService(PSDI_SERVICE_UUID).then(service => {
                    this.liffGetPSDIService(service);
                });
            });
            const disconnectCallback = () => {
                device.removeEventListener('gattserverdisconnected', disconnectCallback);
                this.initLineLiff();
            };
            device.addEventListener('gattserverdisconnected', disconnectCallback);
        });
    }
    liffGetUserService(service) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            service.getCharacteristic(BTN_CHARACTERISTIC_UUID).then(characteristic => {
                this.liffGetButtonStateCharacteristic(characteristic);
            });
        });
    }
    liffGetUltraDataService(service) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            service.getCharacteristic(ULTRA_BEFORE_CHARACTERISTIC_UUID).then(characteristicBefore => {
                return characteristicBefore.readValue();
            })
                .then(dataViewBeforeValue => {
                service.getCharacteristic(ULTRA_AFTER_CHARACTERISTIC_UUID).then(characteristicAfter => {
                    return characteristicAfter.readValue();
                })
                    .then(dataViewAfterValue => {
                    for (let i = 0; i < dataViewBeforeValue.byteLength; i = i + 2) {
                        this.dvBefore.setUint16(i, dataViewBeforeValue.getUint16(i), true);
                    }
                    for (let i = 0; i < dataViewAfterValue.byteLength; i = i + 2) {
                        this.dvAfter.setUint16(i, dataViewAfterValue.getUint16(i), true);
                    }
                    this.ultraDataBefore = new Uint16Array(this.dvBefore.buffer);
                    this.ultraDataAfter = new Uint16Array(this.dvAfter.buffer);
                    for (let data0 = 0; data0 < 128; data0 = data0 + 2) { // 126で終わる
                        this.dvChannel0.setUint16(data0, this.dvBefore.getUint16(data0)); // offsetが0から126まで
                        this.dvChannel1.setUint16(data0, this.dvBefore.getUint16(data0 + 128)); // offsetが128から254まで
                        this.dvChannel2.setUint16(data0, this.dvBefore.getUint16(data0 + 256)); // offsetが256から382まで
                        this.dvChannel3.setUint16(data0, this.dvBefore.getUint16(data0 + 384)); // offsetが384から510まで
                    }
                    for (let data1 = 0; data1 < 128; data1 = data1 + 2) {
                        this.dvChannel0.setUint16(data1 + 128, this.dvBefore.getUint16(data1));
                        this.dvChannel1.setUint16(data1 + 128, this.dvBefore.getUint16(data1 + 128));
                        this.dvChannel2.setUint16(data1 + 128, this.dvBefore.getUint16(data1 + 256));
                        this.dvChannel3.setUint16(data1 + 128, this.dvBefore.getUint16(data1 + 384));
                    }
                    // 人が確認出来るような形
                    this.ultraChannel0Data = new Uint16Array(this.dvChannel0.buffer);
                    this.ultraChannel1Data = new Uint16Array(this.dvChannel1.buffer);
                    this.ultraChannel2Data = new Uint16Array(this.dvChannel2.buffer);
                    this.ultraChannel3Data = new Uint16Array(this.dvChannel3.buffer);
                    this.decryptionChannelData(this.dvChannel0, this.dvChannel1, this.dvChannel2, this.dvChannel3);
                }).catch(err => alert('After Data ERROR: ' + err));
            }).catch(error => alert('Before Data ERROR: ' + error));
        });
    }
    liffGetPSDIService(service) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            service.getCharacteristic(PSDI_CHARACTERISTIC_UUID).then(characteristic => {
                return characteristic.readValue();
            })
                .then(value => {
                const psdi = new Uint8Array(value.buffer);
            }).catch(error => alert('liffGetPSDIService ERROR: ' + error));
        });
    }
    test() {
        // this.liffGetUltraBeforeDataService(this.service);
        this.liffGetUltraDataService(this.service);
    }
    // それぞの引数には128個の16進数のデータが入っている
    decryptionChannelData(dvChannel0, dvChannel1, dvChannel2, dvChannel3) {
        let channel0Data;
        let channel1Data;
        let channel2Data;
        let channel3Data;
        for (let n = 0; n < 256; n = n + 2) {
            if ((n / 2) % 10 === 0) {
                channel0Data = dvChannel0.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel1Data = dvChannel1.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel2Data = dvChannel2.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel3Data = dvChannel3.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                this.dvChannel0.setUint16(n, channel0Data);
                this.dvChannel1.setUint16(n, channel1Data);
                this.dvChannel2.setUint16(n, channel2Data);
                this.dvChannel3.setUint16(n, channel3Data);
            }
            if ((n / 2) % 10 === 1) {
                channel0Data = dvChannel0.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel1Data = dvChannel1.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel2Data = dvChannel2.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel3Data = dvChannel3.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                this.dvChannel0.setUint16(n, channel0Data);
                this.dvChannel1.setUint16(n, channel1Data);
                this.dvChannel2.setUint16(n, channel2Data);
                this.dvChannel3.setUint16(n, channel3Data);
            }
            if ((n / 2) % 10 === 2) {
                channel0Data = dvChannel0.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel1Data = dvChannel1.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel2Data = dvChannel2.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel3Data = dvChannel3.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                this.dvChannel0.setUint16(n, channel0Data);
                this.dvChannel1.setUint16(n, channel1Data);
                this.dvChannel2.setUint16(n, channel2Data);
                this.dvChannel3.setUint16(n, channel3Data);
            }
            if ((n / 2) % 10 === 3) {
                channel0Data = dvChannel0.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel1Data = dvChannel1.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel2Data = dvChannel2.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel3Data = dvChannel3.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                this.dvChannel0.setUint16(n, channel0Data);
                this.dvChannel1.setUint16(n, channel1Data);
                this.dvChannel2.setUint16(n, channel2Data);
                this.dvChannel3.setUint16(n, channel3Data);
            }
            if ((n / 2) % 10 === 4) {
                channel0Data = dvChannel0.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel1Data = dvChannel1.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel2Data = dvChannel2.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel3Data = dvChannel3.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                this.dvChannel0.setUint16(n, channel0Data);
                this.dvChannel1.setUint16(n, channel1Data);
                this.dvChannel2.setUint16(n, channel2Data);
                this.dvChannel3.setUint16(n, channel3Data);
            }
            if ((n / 2) % 10 === 5) {
                channel0Data = dvChannel0.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel1Data = dvChannel1.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel2Data = dvChannel2.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel3Data = dvChannel3.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                this.dvChannel0.setUint16(n, channel0Data);
                this.dvChannel1.setUint16(n, channel1Data);
                this.dvChannel2.setUint16(n, channel2Data);
                this.dvChannel3.setUint16(n, channel3Data);
            }
            if ((n / 2) % 10 === 6) {
                channel0Data = dvChannel0.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel1Data = dvChannel1.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel2Data = dvChannel2.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel3Data = dvChannel3.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                this.dvChannel0.setUint16(n, channel0Data);
                this.dvChannel1.setUint16(n, channel1Data);
                this.dvChannel2.setUint16(n, channel2Data);
                this.dvChannel3.setUint16(n, channel3Data);
            }
            if ((n / 2) % 10 === 7) {
                channel0Data = dvChannel0.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel1Data = dvChannel1.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel2Data = dvChannel2.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel3Data = dvChannel3.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                this.dvChannel0.setUint16(n, channel0Data);
                this.dvChannel1.setUint16(n, channel1Data);
                this.dvChannel2.setUint16(n, channel2Data);
                this.dvChannel3.setUint16(n, channel3Data);
            }
            if ((n / 2) % 10 === 8) {
                channel0Data = dvChannel0.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel1Data = dvChannel1.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel2Data = dvChannel2.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel3Data = dvChannel3.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                this.dvChannel0.setUint16(n, channel0Data);
                this.dvChannel1.setUint16(n, channel1Data);
                this.dvChannel2.setUint16(n, channel2Data);
                this.dvChannel3.setUint16(n, channel3Data);
            }
            if ((n / 2) % 10 === 9) {
                channel0Data = dvChannel0.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel1Data = dvChannel1.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel2Data = dvChannel2.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                channel3Data = dvChannel3.getUint16(n) ^ _data_liffData__WEBPACK_IMPORTED_MODULE_2__["keyHexadecimalNum"].key1;
                this.dvChannel0.setUint16(n, channel0Data);
                this.dvChannel1.setUint16(n, channel1Data);
                this.dvChannel2.setUint16(n, channel2Data);
                this.dvChannel3.setUint16(n, channel3Data);
            }
        }
        alert(new Uint16Array(this.dvChannel1.buffer));
    }
    liffGetButtonStateCharacteristic(characteristic) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            characteristic.startNotifications().then(() => {
                characteristic.addEventListener('characteristicvaluechanged', e => {
                    const val = new Uint16Array(e.target.value.buffer)[0];
                    alert(`Button Val: ${val}`);
                    const target = new Uint16Array(e.target.value.buffer);
                    alert(target);
                });
            })
                .catch(error => {
                // uiStatusError(makeErrorMsg(error), false);
            });
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModuleModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data/liffData.ts":
/*!**********************************!*\
  !*** ./src/app/data/liffData.ts ***!
  \**********************************/
/*! exports provided: LiffData, keyHexadecimalNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiffData", function() { return LiffData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyHexadecimalNum", function() { return keyHexadecimalNum; });
const LiffData = {
    USER_SERVICE_UUID: 'c4dd444d-6d46-47de-8b24-c3b70fbf8b31',
    LED_CHARACTERISTIC_UUID: 'E9062E71-9E62-4BC6-B0D3-35CDCD9B027B',
    BTN_CHARACTERISTIC_UUID: '62FBD229-6EDD-4D1A-B554-5C4E1BB29169',
    ULTRA_BEFORE_CHARACTERISTIC_UUID: 'C7D372AE-F856-46e0-A21B-AB41F3434656',
    ULTRA_AFTER_CHARACTERISTIC_UUID: 'F681F9EC-2C70-45d2-BE3A-FC54D033B50A',
    PSDI_SERVICE_UUID: 'E625601E-9E55-4597-A598-76018A0D293D',
    PSDI_CHARACTERISTIC_UUID: '26E2B12B-85F0-4F3F-9FDD-91D114270E6E'
};
const keyHexadecimalNum = {
    key1: 0x04A3,
    key2: 0x0B3B,
    key3: 0x0BBA,
    key4: 0x0FBC,
    key5: 0x09D2,
    key6: 0x0FEE,
    key7: 0x01B4,
    key8: 0x0F67,
    key9: 0x0A99,
    key10: 0x0E51
};


/***/ }),

/***/ "./src/app/material-module/material-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-module/material-module.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModuleModule", function() { return MaterialModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");







let MaterialModuleModule = class MaterialModuleModule {
};
MaterialModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        ]
    })
], MaterialModuleModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nakagawataku/dev/Angular/liffMock/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map