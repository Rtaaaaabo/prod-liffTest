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

module.exports = "<mat-toolbar color=\"primary\">DFree Line Things</mat-toolbar>\n<div class=\"container\">\n  <div class=\"text-center\">\n    <button (click)=\"test()\">Thanks Button</button>\n  </div>\n</div>\n<br>\n<br>\n<div>\n  <p>Data0: {{ultraData0}}</p>\n  <p>Data1: {{ultraData1}}</p>\n</div>\n\n<router-outlet></router-outlet>\n"

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
const ULTRA_DATA0_CHARACTERISTIC_UUID = _data_liffData__WEBPACK_IMPORTED_MODULE_2__["LiffData"].ULTRA_DATA0_CHARACTERISTIC_UUID;
const ULTRA_DATA1_CHARACTERISTIC_UUID = _data_liffData__WEBPACK_IMPORTED_MODULE_2__["LiffData"].ULTRA_DATA1_CHARACTERISTIC_UUID;
const PSDI_SERVICE_UUID = _data_liffData__WEBPACK_IMPORTED_MODULE_2__["LiffData"].PSDI_SERVICE_UUID;
const PSDI_CHARACTERISTIC_UUID = _data_liffData__WEBPACK_IMPORTED_MODULE_2__["LiffData"].PSDI_CHARACTERISTIC_UUID;
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'LIFF Mock';
        this.bufferData0 = new ArrayBuffer(512);
        this.bufferData1 = new ArrayBuffer(512);
        this.dvData0 = new DataView(this.bufferData0);
        this.dvData1 = new DataView(this.bufferData1);
        // 一旦は記載するけど、あとできれいにする。
        this.bufferRawChannel1 = new ArrayBuffer(256);
        this.bufferRawChannel2 = new ArrayBuffer(256);
        this.bufferRawChannel3 = new ArrayBuffer(256);
        this.bufferRawChannel4 = new ArrayBuffer(256);
        this.dvRawChannel1 = new DataView(this.bufferRawChannel1);
        this.dvRawChannel2 = new DataView(this.bufferRawChannel2);
        this.dvRawChannel3 = new DataView(this.bufferRawChannel3);
        this.dvRawChannel4 = new DataView(this.bufferRawChannel4);
        this.messages = '';
        this.statusBle = true;
        this.ch1AntePosition = 0;
        this.ch1PostePosition = 0;
        this.ch2AntePosition = 0;
        this.ch2PostePosition = 0;
        this.ch3AntePosition = 0;
        this.ch3PostePosition = 0;
        this.ch4AntePosition = 0;
        this.ch4PostePosition = 0;
        this.ch1Under20FrontPosition = 0;
        this.ch1Under20BackPosition = 0;
        this.ch2Under20FrontPosition = 0;
        this.ch2Under20BackPosition = 0;
        this.ch3Under20FrontPosition = 0;
        this.ch3Under20BackPosition = 0;
        this.ch4Under20FrontPosition = 0;
        this.ch4Under20BackPosition = 0;
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
            this.ch1IsUrine = false;
            this.ch2IsUrine = false;
            this.ch3IsUrine = false;
            this.ch4IsUrine = false;
            yield service
                .getCharacteristic(ULTRA_DATA0_CHARACTERISTIC_UUID)
                .then(characteristicData0 => {
                return characteristicData0.readValue();
            })
                .then(dataView0Value => {
                service
                    .getCharacteristic(ULTRA_DATA1_CHARACTERISTIC_UUID)
                    .then(characteristicData1 => {
                    return characteristicData1.readValue();
                })
                    .then(characteristicData1 => {
                    for (let i = 0; i < dataView0Value.byteLength; i = i + 2) {
                        this.dvData0.setUint16(i, dataView0Value.getUint16(i));
                    }
                    for (let i = 0; i < characteristicData1.byteLength; i = i + 2) {
                        this.dvData1.setUint16(i, characteristicData1.getUint16(i));
                    }
                    this.splitForChannel(this.dvData0, this.dvData1);
                    this.ultraData0 = new Uint16Array(this.dvData0.buffer);
                    this.ultraData1 = new Uint16Array(this.dvData1.buffer);
                })
                    .catch(error => alert('Data0 ERROR: ' + error));
            })
                .catch(error => alert('Data1 ERROR: ' + error));
        });
    }
    splitForChannel(dvData0, dvData1) {
        for (let i = 0; i < dvData0.byteLength; i = i + 2) {
            if (i < 256) {
                this.dvRawChannel1.setUint16(i, dvData0.getUint16(i, true));
            }
            else if (i < 512) {
                this.dvRawChannel2.setUint16(i - 256, dvData0.getUint16(i, true));
            }
        }
        for (let i = 0; i < dvData1.byteLength; i = i + 2) {
            if (i < 256) {
                this.dvRawChannel3.setUint16(i, dvData1.getUint16(i, true));
            }
            else if (i < 512) {
                this.dvRawChannel4.setUint16(i - 256, dvData1.getUint16(i, true));
            }
        }
        this.culcDiscardUnder100(this.dvRawChannel1, this.dvRawChannel2, this.dvRawChannel3, this.dvRawChannel4);
    }
    culcDiscardUnder100(dvRawChannel1, dvRawChannel2, dvRawChannel3, dvRawChannel4) {
        const bufferChannel1DiscardUnder100 = new ArrayBuffer(256);
        const dvChannel1DiscardUnder100 = new DataView(bufferChannel1DiscardUnder100);
        const bufferChannel2DiscardUnder100 = new ArrayBuffer(256);
        const dvChannel2DiscardUnder100 = new DataView(bufferChannel2DiscardUnder100);
        const bufferChannel3DiscardUnder100 = new ArrayBuffer(256);
        const dvChannel3DiscardUnder100 = new DataView(bufferChannel3DiscardUnder100);
        const bufferChannel4DiscardUnder100 = new ArrayBuffer(256);
        const dvChannel4DiscardUnder100 = new DataView(bufferChannel4DiscardUnder100);
        for (let ch1Posi = 0; ch1Posi < dvRawChannel1.byteLength; ch1Posi = ch1Posi + 2) {
            if (dvRawChannel1.getUint16(ch1Posi) < 100) {
                dvChannel1DiscardUnder100.setUint16(ch1Posi, 0);
            }
            else if (dvRawChannel1.getUint16(ch1Posi) >= 100) {
                dvChannel1DiscardUnder100.setUint16(ch1Posi, dvRawChannel1.getUint16(ch1Posi));
            }
        }
        for (let ch2Posi = 0; ch2Posi < dvRawChannel2.byteLength; ch2Posi = ch2Posi + 2) {
            if (dvRawChannel2.getUint16(ch2Posi) < 100) {
                dvChannel2DiscardUnder100.setUint16(ch2Posi, 0);
            }
            else if (dvRawChannel2.getUint16(ch2Posi) >= 100) {
                dvChannel2DiscardUnder100.setUint16(ch2Posi, dvRawChannel1.getUint16(ch2Posi));
            }
        }
        for (let ch3Posi = 0; ch3Posi < dvRawChannel3.byteLength; ch3Posi = ch3Posi + 2) {
            if (dvRawChannel3.getUint16(ch3Posi) < 100) {
                dvChannel3DiscardUnder100.setUint16(ch3Posi, 0);
            }
            else if (dvRawChannel3.getUint16(ch3Posi) >= 100) {
                dvChannel3DiscardUnder100.setUint16(ch3Posi, dvRawChannel1.getUint16(ch3Posi));
            }
        }
        for (let ch4Posi = 0; ch4Posi < dvRawChannel1.byteLength; ch4Posi = ch4Posi + 2) {
            if (dvRawChannel4.getUint16(ch4Posi) < 100) {
                dvChannel4DiscardUnder100.setUint16(ch4Posi, 0);
            }
            else if (dvRawChannel4.getUint16(ch4Posi) >= 100) {
                dvChannel4DiscardUnder100.setUint16(ch4Posi, dvRawChannel1.getUint16(ch4Posi));
            }
        }
        for (let ch1Posi = 0; ch1Posi < dvChannel1DiscardUnder100.byteLength; ch1Posi = ch1Posi + 2) {
            dvChannel1DiscardUnder100.setUint16(ch1Posi, dvChannel1DiscardUnder100.getUint16(ch1Posi, true));
        }
        this.culcBladderRange(dvChannel1DiscardUnder100, dvChannel2DiscardUnder100, dvChannel3DiscardUnder100, dvChannel4DiscardUnder100);
    }
    culcBladderRange(dvChannel1, dvChannel2, dvChannel3, dvChannel4) {
        this.ch1AntePosition = 0;
        this.ch1PostePosition = 0;
        this.ch2AntePosition = 0;
        this.ch2PostePosition = 0;
        this.ch3AntePosition = 0;
        this.ch3PostePosition = 0;
        this.ch4AntePosition = 0;
        this.ch4PostePosition = 0;
        for (let ch1Posi = 0; ch1Posi < dvChannel1.byteLength; ch1Posi = ch1Posi + 2) {
            if (dvChannel1.getUint16(ch1Posi) === 0) { // 入っているところが0のときにここに処理が遷移
                if (this.ch1AntePosition === 0) {
                    this.ch1AntePosition = ch1Posi;
                }
                else if (this.ch1AntePosition !== 0) { // 後壁の計算
                    if (ch1Posi < 254) {
                        this.ch1PostePosition = ch1Posi;
                        if (dvChannel1.getUint16(ch1Posi + 2) !== 0) {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        for (let ch2Posi = 0; ch2Posi < dvChannel2.byteLength; ch2Posi = ch2Posi + 2) {
            if (dvChannel2.getUint16(ch2Posi) === 0) { // 入っているところが0のときにここに処理が遷移
                if (this.ch2AntePosition === 0) {
                    this.ch2AntePosition = ch2Posi;
                }
                else if (this.ch2AntePosition !== 0) { // 後壁の計算
                    if (ch2Posi < 254) {
                        this.ch2PostePosition = ch2Posi;
                        if (dvChannel2.getUint16(ch2Posi + 2) !== 0) {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        for (let ch3Posi = 0; ch3Posi < dvChannel1.byteLength; ch3Posi = ch3Posi + 2) {
            if (dvChannel3.getUint16(ch3Posi) === 0) { // 入っているところが0のときにここに処理が遷移
                if (this.ch3AntePosition === 0) {
                    this.ch3AntePosition = ch3Posi;
                }
                else if (this.ch3AntePosition !== 0) { // 後壁の計算
                    if (ch3Posi < 254) {
                        this.ch3PostePosition = ch3Posi;
                        if (dvChannel3.getUint16(ch3Posi + 2) !== 0) {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        for (let ch4Posi = 0; ch4Posi < dvChannel4.byteLength; ch4Posi = ch4Posi + 2) {
            if (dvChannel4.getUint16(ch4Posi) === 0) { // 入っているところが0のときにここに処理が遷移
                if (this.ch4AntePosition === 0) {
                    this.ch4AntePosition = ch4Posi;
                }
                else if (this.ch4AntePosition !== 0) { // 後壁の計算
                    if (ch4Posi < 254) {
                        this.ch4PostePosition = ch4Posi;
                        if (dvChannel4.getUint16(ch4Posi + 2) !== 0) {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        this.ch1BladderSize = (this.ch1PostePosition) - (this.ch1AntePosition);
        this.ch2BladderSize = (this.ch2PostePosition) - (this.ch2AntePosition);
        this.ch3BladderSize = (this.ch3PostePosition) - (this.ch3AntePosition);
        this.ch4BladderSize = (this.ch4PostePosition) - (this.ch4AntePosition);
        // alert(this.ch1BladderSize + ' ' + this.ch2BladderSize + ' ' + this.ch3BladderSize + ' ' + this.ch4BladderSize);
        this.anteriorPositionUnder30(this.ch1AntePosition, this.ch2AntePosition, this.ch3AntePosition, this.ch4AntePosition);
    }
    sendMessageToChatRoom() {
        alert(this.ch1IsUrine + ' ' + this.ch2IsUrine + ' ' + this.ch3IsUrine + ' ' + this.ch4IsUrine);
    }
    anteriorPositionUnder30(ch1AntePosition, ch2AntePosition, ch3AntePosition, ch4AntePosition) {
        if ((ch1AntePosition <= 30) || (ch2AntePosition <= 30) || (ch3AntePosition <= 30) || (ch4AntePosition <= 30)) {
            if ((this.ch1BladderSize > 9) || (this.ch2BladderSize > 9) || (this.ch3BladderSize > 9) || (this.ch4BladderSize > 9)) {
                this.culcDiscardUnder20();
            }
        }
        this.sendMessageToChatRoom();
    }
    culcDiscardUnder20() {
        const bufferChannel1DiscardUnder20 = new ArrayBuffer(256);
        const dvChannel1DiscardUnder20 = new DataView(bufferChannel1DiscardUnder20);
        const bufferChannel2DiscardUnder20 = new ArrayBuffer(256);
        const dvChannel2DiscardUnder20 = new DataView(bufferChannel2DiscardUnder20);
        const bufferChannel3DiscardUnder20 = new ArrayBuffer(256);
        const dvChannel3DiscardUnder20 = new DataView(bufferChannel3DiscardUnder20);
        const bufferChannel4DiscardUnder20 = new ArrayBuffer(256);
        const dvChannel4DiscardUnder20 = new DataView(bufferChannel4DiscardUnder20);
        for (let ch1Posi = 0; ch1Posi < this.dvRawChannel1.byteLength; ch1Posi = ch1Posi + 2) {
            if (this.dvRawChannel1.getUint16(ch1Posi) < 20) {
                dvChannel1DiscardUnder20.setUint16(ch1Posi, 0);
            }
            else if (this.dvRawChannel1.getUint16(ch1Posi) >= 20) {
                dvChannel1DiscardUnder20.setUint16(ch1Posi, this.dvRawChannel1.getUint16(ch1Posi));
            }
        }
        for (let ch2Posi = 0; ch2Posi < this.dvRawChannel2.byteLength; ch2Posi = ch2Posi + 2) {
            if (this.dvRawChannel2.getUint16(ch2Posi) < 20) {
                dvChannel2DiscardUnder20.setUint16(ch2Posi, 0);
            }
            else if (this.dvRawChannel2.getUint16(ch2Posi) >= 20) {
                dvChannel2DiscardUnder20.setUint16(ch2Posi, this.dvRawChannel2.getUint16(ch2Posi));
            }
        }
        for (let ch3Posi = 0; ch3Posi < this.dvRawChannel3.byteLength; ch3Posi = ch3Posi + 2) {
            if (this.dvRawChannel3.getUint16(ch3Posi) < 20) {
                dvChannel3DiscardUnder20.setUint16(ch3Posi, 0);
            }
            else if (this.dvRawChannel3.getUint16(ch3Posi) >= 20) {
                dvChannel3DiscardUnder20.setUint16(ch3Posi, this.dvRawChannel1.getUint16(ch3Posi));
            }
        }
        for (let ch4Posi = 0; ch4Posi < this.dvRawChannel4.byteLength; ch4Posi = ch4Posi + 2) {
            if (this.dvRawChannel4.getUint16(ch4Posi) < 20) {
                dvChannel4DiscardUnder20.setUint16(ch4Posi, 0);
            }
            else if (this.dvRawChannel4.getUint16(ch4Posi) >= 20) {
                dvChannel4DiscardUnder20.setUint16(ch4Posi, this.dvRawChannel4.getUint16(ch4Posi));
            }
        }
        this.culcDiscardPosition(dvChannel1DiscardUnder20, dvChannel2DiscardUnder20, dvChannel3DiscardUnder20, dvChannel4DiscardUnder20);
        this.judgeRangePosition();
    }
    culcDiscardPosition(dvChannel1, dvChannel2, dvChannel3, dvChannel4) {
        this.ch1Under20FrontPosition = 0;
        this.ch1Under20BackPosition = 0;
        this.ch2Under20FrontPosition = 0;
        this.ch2Under20BackPosition = 0;
        this.ch3Under20FrontPosition = 0;
        this.ch3Under20BackPosition = 0;
        this.ch4Under20FrontPosition = 0;
        this.ch4Under20BackPosition = 0;
        for (let ch1Posi = 0; ch1Posi < dvChannel1.byteLength; ch1Posi = ch1Posi + 2) {
            if (dvChannel1.getUint16(ch1Posi) === 0) {
                if (this.ch1Under20FrontPosition === 0) {
                    this.ch1Under20FrontPosition = ch1Posi;
                }
                else if (this.ch1Under20FrontPosition !== 0) {
                    if (ch1Posi < 254) {
                        this.ch1Under20BackPosition = ch1Posi;
                        if (dvChannel1.getUint16(ch1Posi + 2) !== 0) {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        for (let ch2Posi = 0; ch2Posi < dvChannel2.byteLength; ch2Posi = ch2Posi + 2) {
            if (dvChannel2.getUint16(ch2Posi) === 0) {
                if (this.ch2Under20FrontPosition === 0) {
                    this.ch2Under20FrontPosition = ch2Posi;
                }
                else if (this.ch2Under20FrontPosition !== 0) {
                    if (ch2Posi < 254) {
                        this.ch2Under20BackPosition = ch2Posi;
                        if (dvChannel2.getUint16(ch2Posi + 2) !== 0) {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        for (let ch3Posi = 0; ch3Posi < dvChannel1.byteLength; ch3Posi = ch3Posi + 2) {
            if (dvChannel3.getUint16(ch3Posi) === 0) {
                if (this.ch3Under20FrontPosition === 0) {
                    this.ch3Under20FrontPosition = ch3Posi;
                }
                else if (this.ch3Under20FrontPosition !== 0) {
                    if (ch3Posi < 254) {
                        this.ch3Under20BackPosition = ch3Posi;
                        if (dvChannel3.getUint16(ch3Posi + 2) !== 0) {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        for (let ch4Posi = 0; ch4Posi < dvChannel4.byteLength; ch4Posi = ch4Posi + 2) {
            if (dvChannel4.getUint16(ch4Posi) === 0) {
                if (this.ch4Under20FrontPosition === 0) {
                    this.ch4Under20FrontPosition = ch4Posi;
                }
                else if (this.ch4Under20FrontPosition !== 0) {
                    if (ch4Posi < 254) {
                        this.ch4Under20BackPosition = ch4Posi;
                        if (dvChannel4.getUint16(ch4Posi + 2) !== 0) {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        // this.judgeRangePosition();
    }
    judgeRangePosition() {
        if (this.ch1AntePosition <= this.ch1Under20FrontPosition) {
            if (this.ch1Under20BackPosition <= this.ch1PostePosition) {
                this.ch1IsUrine = true;
            }
            else {
                this.ch1IsUrine = false;
            }
        }
        else {
            this.ch1IsUrine = false;
        }
        if (this.ch2AntePosition <= this.ch2Under20FrontPosition) {
            if (this.ch2Under20BackPosition <= this.ch2PostePosition) {
                this.ch2IsUrine = true;
            }
            else {
                this.ch2IsUrine = false;
            }
        }
        else {
            this.ch2IsUrine = false;
        }
        if (this.ch3AntePosition <= this.ch3Under20FrontPosition) {
            if (this.ch3Under20BackPosition <= this.ch3PostePosition) {
                this.ch3IsUrine = true;
            }
            else {
                this.ch3IsUrine = false;
            }
        }
        else {
            this.ch3IsUrine = false;
        }
        if (this.ch4AntePosition <= this.ch4Under20FrontPosition) {
            if (this.ch4Under20BackPosition <= this.ch4PostePosition) {
                this.ch4IsUrine = true;
            }
            else {
                this.ch4IsUrine = false;
            }
        }
        else {
            this.ch4IsUrine = false;
        }
    }
    liffGetPSDIService(service) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            service
                .getCharacteristic(PSDI_CHARACTERISTIC_UUID)
                .then(characteristic => {
                return characteristic.readValue();
            })
                .then(value => {
                const psdi = new Uint8Array(value.buffer);
            })
                .catch(error => alert('liffGetPSDIService ERROR: ' + error));
        });
    }
    test() {
        this.liffGetUltraDataService(this.service);
    }
    liffGetButtonStateCharacteristic(characteristic) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            characteristic
                .startNotifications()
                .then(() => {
                characteristic.addEventListener('characteristicvaluechanged', res => {
                    // const results = new Uint16Array(res.target.val.buffer);
                    const val = new Uint16Array(res.target.value.buffer)[0];
                    alert(val);
                });
            })
                .catch(error => {
                alert('Button Error: ' + error);
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
    ULTRA_DATA0_CHARACTERISTIC_UUID: 'C7D372AE-F856-46e0-A21B-AB41F3434656',
    ULTRA_DATA1_CHARACTERISTIC_UUID: 'F681F9EC-2C70-45d2-BE3A-FC54D033B50A',
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