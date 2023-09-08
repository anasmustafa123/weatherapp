/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/main.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/main.css ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/cloudy.jpg */ "./src/assets/cloudy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
}
body{
    position: relative;
}
html{
    --text-color: white;
    --comment-text-color: rgba(155, 154, 154, 0.715);
    --background-color: rgba(179, 173, 173, 0.268);
    --transparent-bg-color: rgba(0, 0, 0, 0.298);
    font-size: 100%;
}
html.clear{
    --text-color: white;
    --comment-text-color: rgba(155, 154, 154, 0.715);
    --background-color: rgba(179, 173, 173, 0.268);
    --transparent-bg-color: rgba(0, 0, 0, 0.125);
}
html.cloudy, html.partlycloudy{
    --text-color: black;
    --comment-text-color: rgb(0 0 0 / 53%);
    --background-color: #ffffff96;
    --transparent-bg-color: rgba(255, 255, 255, 0.153);
}
html.sunny{
    --text-color: black;
    --comment-text-color: rgb(0 0 0 / 56%);
    --background-color: rgb(255 255 255 / 65%);
    --transparent-bg-color: rgba(255, 255, 255, 0.153);
}
html.rain{
    --text-color: white;
    --background-color: rgb(129 129 129 / 70%);
    --comment-text-color: rgb(0 0 0 / 55%);
    --transparent-bg-color: rgba(0, 0, 0, 0.125);
}
html.night_cloudy{
    --text-color: white;
    --background-color: rgb(129 129 129 / 70%);
    --comment-text-color: rgb(0 0 0 / 55%);
    --transparent-bg-color: rgba(0, 0, 0, 0.125);
}
section{
    background: no-repeat center center fixed;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    min-height: 100vh;
    padding: 5rem 4rem;
    color: var(--text-color);
    position: relative;
}
section.main-container {
    display: grid;
}


/* input */
.input-container{
    position: absolute;
    height: 50px;
    width: 20rem;
    background-color: white;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease-in-out;
    overflow-x: hidden;
    left: 50%;
    top: 2rem;
    transform: translate(-50%);
}
.input-container i {
    position: absolute;
    color: black;
    font-size: 1.5rem;
    left: 0.5rem;
}
.input-data-container{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 3rem;
    display: inline-flex;
    align-items: center;
    font-size: 2rem;
}
input#search {
    font-size: 1.15rem;
}

/* part 1 */
.part1 {
    max-width: 26rem;
}
.parts-container{
    display: flex;
    justify-content: space-between;
}

h1.searched-country{
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1;
    max-width: 26rem;
}

p.date{
    margin-left: 0.5rem;
}
.temprature-container{
    display: flex;
    font-size: 4rem;
    margin: 1rem 0;
    gap: 2rem;
    border: 0.2px solid #00000030;
    padding: 0.7rem;
    background: #ffffff3d;
    border-radius: 1rem;
    max-width: 24rem;
    width: fit-content;
}
div#temp {
    display: inline-flex;
}
img#temp-icon {
    width: 6rem;
    object-fit: contain;
}
img.loading {
    object-fit: contain;
}
img.loading.country-fullname{
    width: 120px;
}
img.loading.time{
    width: 50px;
}
img.loading.date{
    width: 50px;
}
img.loading.temp{
    width: 90px;
}
img.loading.condition{
    width: 50px;
}
img.loading.feel-like{
    width: 50px;
}
img.loading.feel-like{
    width: 50px;
}
img.loading.humidity{
    width: 30px;
}
img.loading.wind-speed{
    width: 30px;
}
img.loading.rain{
    width: 30px;
}
img.loading{
    width: 50%
}
img.loading.day-name{
    width: 30px;
}
img.loading.avg-weather{
    width: 40px;
}
img.loading.min-weather{
    width: 30px;
}
img.loading.max-weather{
    width: 30px;
}
.part1 .heading{
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 0.5rem;
}
.part1 p{
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--comment-text-color);
    border: 0.2px solid #00000030;
    padding: 0.2rem 0.5rem;
    background: #ffffff3d;
    border-radius: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.change-display{
    margin-top: 1rem;
}

/* part 2 */

.button-container{
    display: flex;
    width: 100%;
    justify-content: space-around;
}
.btn.selected, .forecast.selected{
    background-color: var(--background-color);
}
.btn{
    border: 0.1px solid var(--background-color);
    border-radius: 20%;
    padding: 0.35rem;
    cursor: pointer;
    display: inline-flex;
}

.state-container{
    display: flex;
    margin: 1.5rem 0;
    gap: 1rem;
    border: 0.2px solid #00000030;
    padding: 0.7rem;
    background: #ffffff3d;
    border-radius: 1rem;

}
.state-name{
    font-weight: 600;
    margin-bottom: 0.3rem;
}
.state-value{
    font-weight: 600;
    font-size: 1.3rem;
    margin-left: 0.5rem;
}
.part2 i{
    font-size: 2.5rem;
}

.state-value{
    display: inline-flex;
}

.forecast-btn-container {
    display: flex;
    height: fit-content;
    gap: 1rem;
    position: relative;
    margin-bottom: 2rem;
}
.forecast-container {
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr 1fr;
    justify-items: center;
    gap: 2rem;
}
.forecast-container.daily.hide{
    display: none;
}
.forecast-container.hourly.hide{
    display: none;
}
.forecast-data {
    padding: 1rem;
    border-radius: 2rem;
    background: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    max-height: 13rem;
}
.day-minmax-weather {
    display: flex;
    justify-content: space-around;
    width: 100%;
}
img.day-weather-icon {
    width: 6rem;
    object-fit: contain;
}

/* footer */
footer {
    position: absolute;
    bottom: 0;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    font-size: 120%;
    color: var(--text-color);
    background: var(--transparent-bg-color);
    font-weight: 600;
}
footer svg {
    width: 2.1rem;
    height: 2.1rem;
}
footer svg path {
    fill: var(--background-color);
}
footer svg:hover {
    transform: scale(1.5) rotate(360deg);
    transition: transform 500ms ease;
    cursor: pointer;
}

@media (max-width: 1300px){
    .forecast-data{
        width: 70%;
    }
}
@media (max-width: 1100px){
    html{
        font-size: 90%;
    }
    .input-container {
        height: 36px;
        width: 17rem;
        left: 100%;
        top: 0.7rem;
        transform: translate(-19rem);
    }
}
@media (max-width: 850px){
    .forecast-data{
        width: 85%;
    }
}
@media (max-width: 750px){
    html{
        font-size: 85%;
    }
    .forecast-container {
        grid-template: 1fr 1fr / 1fr 1fr;
        width: 100%;
        gap: 2rem;
        margin-top: 4rem;
    }
    .forecast-data{
        width: 70%;
    }
    .input-container {
        height: 34px;
        width: 17rem;
    }
    section{
        padding: 4rem 3rem;
    }
}
@media (max-width: 610px){
    html{
        font-size: 75%;
    }
    .forecast-container {
        grid-template: 1fr 1fr 1fr / 1fr;
        width: 100%;
        gap: 2rem;
        margin-top: 4rem;
    }
    .temprature-container {
        gap: 1rem;
        padding: 0.1rem;
    }
    .input-container {
        height: 30px;
        width: 24rem;
        left: 50%;
        top: 0.7rem;
        transform: translate(-50%);
    }
    section{
        padding: 4rem 2rem;
    }
}
@media (max-width: 520px){
    html{
        font-size: 70%;
    }
    .input-container {
        width: 20rem;
    }
    section{
        padding: 4rem 1rem;
    }
} 
@media (max-width: 475px){
    html{
        font-size: 65%;
    }
} 
@media (max-width: 430px){
/*     html{
        font-size: 60%;
    } */
    .input-container {
        height: 25px;
        width: 17rem;
    }
} 
/* @media (max-width: 370px){
    html{
        font-size: 50%;
    }
} */ `, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AACA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,kCAAkC;AACtC;AACA;IACI,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,gDAAgD;IAChD,8CAA8C;IAC9C,4CAA4C;IAC5C,eAAe;AACnB;AACA;IACI,mBAAmB;IACnB,gDAAgD;IAChD,8CAA8C;IAC9C,4CAA4C;AAChD;AACA;IACI,mBAAmB;IACnB,sCAAsC;IACtC,6BAA6B;IAC7B,kDAAkD;AACtD;AACA;IACI,mBAAmB;IACnB,sCAAsC;IACtC,0CAA0C;IAC1C,kDAAkD;AACtD;AACA;IACI,mBAAmB;IACnB,0CAA0C;IAC1C,sCAAsC;IACtC,4CAA4C;AAChD;AACA;IACI,mBAAmB;IACnB,0CAA0C;IAC1C,sCAAsC;IACtC,4CAA4C;AAChD;AACA;IACI,yCAAyC;IACzC,yDAA6C;IAC7C,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,wBAAwB;IACxB,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;;;AAGA,UAAU;AACV;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iCAAiC;IACjC,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,UAAU;IACV,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;;AAEA,WAAW;AACX;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,eAAe;IACf,cAAc;IACd,SAAS;IACT,6BAA6B;IAC7B,eAAe;IACf,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI;AACJ;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,gCAAgC;IAChC,6BAA6B;IAC7B,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;IACnB,oBAAoB;IACpB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,WAAW;IACX,6BAA6B;AACjC;AACA;IACI,yCAAyC;AAC7C;AACA;IACI,2CAA2C;IAC3C,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,SAAS;IACT,6BAA6B;IAC7B,eAAe;IACf,qBAAqB;IACrB,mBAAmB;;AAEvB;AACA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,qBAAqB;IACrB,SAAS;AACb;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,WAAW;AACf;AACA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA,WAAW;AACX;IACI,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,eAAe;IACf,wBAAwB;IACxB,uCAAuC;IACvC,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,cAAc;AAClB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,oCAAoC;IACpC,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI;QACI,UAAU;IACd;AACJ;AACA;IACI;QACI,cAAc;IAClB;IACA;QACI,YAAY;QACZ,YAAY;QACZ,UAAU;QACV,WAAW;QACX,4BAA4B;IAChC;AACJ;AACA;IACI;QACI,UAAU;IACd;AACJ;AACA;IACI;QACI,cAAc;IAClB;IACA;QACI,gCAAgC;QAChC,WAAW;QACX,SAAS;QACT,gBAAgB;IACpB;IACA;QACI,UAAU;IACd;IACA;QACI,YAAY;QACZ,YAAY;IAChB;IACA;QACI,kBAAkB;IACtB;AACJ;AACA;IACI;QACI,cAAc;IAClB;IACA;QACI,gCAAgC;QAChC,WAAW;QACX,SAAS;QACT,gBAAgB;IACpB;IACA;QACI,SAAS;QACT,eAAe;IACnB;IACA;QACI,YAAY;QACZ,YAAY;QACZ,SAAS;QACT,WAAW;QACX,0BAA0B;IAC9B;IACA;QACI,kBAAkB;IACtB;AACJ;AACA;IACI;QACI,cAAc;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,kBAAkB;IACtB;AACJ;AACA;IACI;QACI,cAAc;IAClB;AACJ;AACA;AACA;;OAEO;IACH;QACI,YAAY;QACZ,YAAY;IAChB;AACJ;AACA;;;;GAIG","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-decoration: none;\n    border: none;\n    outline: none;\n    scroll-behavior: smooth;\n    font-family: 'Poppins', sans-serif;\n}\nbody{\n    position: relative;\n}\nhtml{\n    --text-color: white;\n    --comment-text-color: rgba(155, 154, 154, 0.715);\n    --background-color: rgba(179, 173, 173, 0.268);\n    --transparent-bg-color: rgba(0, 0, 0, 0.298);\n    font-size: 100%;\n}\nhtml.clear{\n    --text-color: white;\n    --comment-text-color: rgba(155, 154, 154, 0.715);\n    --background-color: rgba(179, 173, 173, 0.268);\n    --transparent-bg-color: rgba(0, 0, 0, 0.125);\n}\nhtml.cloudy, html.partlycloudy{\n    --text-color: black;\n    --comment-text-color: rgb(0 0 0 / 53%);\n    --background-color: #ffffff96;\n    --transparent-bg-color: rgba(255, 255, 255, 0.153);\n}\nhtml.sunny{\n    --text-color: black;\n    --comment-text-color: rgb(0 0 0 / 56%);\n    --background-color: rgb(255 255 255 / 65%);\n    --transparent-bg-color: rgba(255, 255, 255, 0.153);\n}\nhtml.rain{\n    --text-color: white;\n    --background-color: rgb(129 129 129 / 70%);\n    --comment-text-color: rgb(0 0 0 / 55%);\n    --transparent-bg-color: rgba(0, 0, 0, 0.125);\n}\nhtml.night_cloudy{\n    --text-color: white;\n    --background-color: rgb(129 129 129 / 70%);\n    --comment-text-color: rgb(0 0 0 / 55%);\n    --transparent-bg-color: rgba(0, 0, 0, 0.125);\n}\nsection{\n    background: no-repeat center center fixed;\n    background-image: url('../assets/cloudy.jpg');\n    background-size: cover;\n    min-height: 100vh;\n    padding: 5rem 4rem;\n    color: var(--text-color);\n    position: relative;\n}\nsection.main-container {\n    display: grid;\n}\n\n\n/* input */\n.input-container{\n    position: absolute;\n    height: 50px;\n    width: 20rem;\n    background-color: white;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 200ms ease-in-out;\n    overflow-x: hidden;\n    left: 50%;\n    top: 2rem;\n    transform: translate(-50%);\n}\n.input-container i {\n    position: absolute;\n    color: black;\n    font-size: 1.5rem;\n    left: 0.5rem;\n}\n.input-data-container{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 3rem;\n    display: inline-flex;\n    align-items: center;\n    font-size: 2rem;\n}\ninput#search {\n    font-size: 1.15rem;\n}\n\n/* part 1 */\n.part1 {\n    max-width: 26rem;\n}\n.parts-container{\n    display: flex;\n    justify-content: space-between;\n}\n\nh1.searched-country{\n    font-size: 2.5rem;\n    margin-bottom: 1rem;\n    line-height: 1;\n    max-width: 26rem;\n}\n\np.date{\n    margin-left: 0.5rem;\n}\n.temprature-container{\n    display: flex;\n    font-size: 4rem;\n    margin: 1rem 0;\n    gap: 2rem;\n    border: 0.2px solid #00000030;\n    padding: 0.7rem;\n    background: #ffffff3d;\n    border-radius: 1rem;\n    max-width: 24rem;\n    width: fit-content;\n}\ndiv#temp {\n    display: inline-flex;\n}\nimg#temp-icon {\n    width: 6rem;\n    object-fit: contain;\n}\nimg.loading {\n    object-fit: contain;\n}\nimg.loading.country-fullname{\n    width: 120px;\n}\nimg.loading.time{\n    width: 50px;\n}\nimg.loading.date{\n    width: 50px;\n}\nimg.loading.temp{\n    width: 90px;\n}\nimg.loading.condition{\n    width: 50px;\n}\nimg.loading.feel-like{\n    width: 50px;\n}\nimg.loading.feel-like{\n    width: 50px;\n}\nimg.loading.humidity{\n    width: 30px;\n}\nimg.loading.wind-speed{\n    width: 30px;\n}\nimg.loading.rain{\n    width: 30px;\n}\nimg.loading{\n    width: 50%\n}\nimg.loading.day-name{\n    width: 30px;\n}\nimg.loading.avg-weather{\n    width: 40px;\n}\nimg.loading.min-weather{\n    width: 30px;\n}\nimg.loading.max-weather{\n    width: 30px;\n}\n.part1 .heading{\n    font-weight: 600;\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n}\n.part1 p{\n    font-size: 1rem;\n    font-weight: 600;\n    letter-spacing: 0.5px;\n    color: var(--comment-text-color);\n    border: 0.2px solid #00000030;\n    padding: 0.2rem 0.5rem;\n    background: #ffffff3d;\n    border-radius: 1rem;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n.change-display{\n    margin-top: 1rem;\n}\n\n/* part 2 */\n\n.button-container{\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n}\n.btn.selected, .forecast.selected{\n    background-color: var(--background-color);\n}\n.btn{\n    border: 0.1px solid var(--background-color);\n    border-radius: 20%;\n    padding: 0.35rem;\n    cursor: pointer;\n    display: inline-flex;\n}\n\n.state-container{\n    display: flex;\n    margin: 1.5rem 0;\n    gap: 1rem;\n    border: 0.2px solid #00000030;\n    padding: 0.7rem;\n    background: #ffffff3d;\n    border-radius: 1rem;\n\n}\n.state-name{\n    font-weight: 600;\n    margin-bottom: 0.3rem;\n}\n.state-value{\n    font-weight: 600;\n    font-size: 1.3rem;\n    margin-left: 0.5rem;\n}\n.part2 i{\n    font-size: 2.5rem;\n}\n\n.state-value{\n    display: inline-flex;\n}\n\n.forecast-btn-container {\n    display: flex;\n    height: fit-content;\n    gap: 1rem;\n    position: relative;\n    margin-bottom: 2rem;\n}\n.forecast-container {\n    display: grid;\n    grid-template: 1fr / 1fr 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 2rem;\n}\n.forecast-container.daily.hide{\n    display: none;\n}\n.forecast-container.hourly.hide{\n    display: none;\n}\n.forecast-data {\n    padding: 1rem;\n    border-radius: 2rem;\n    background: var(--background-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    max-height: 13rem;\n}\n.day-minmax-weather {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n}\nimg.day-weather-icon {\n    width: 6rem;\n    object-fit: contain;\n}\n\n/* footer */\nfooter {\n    position: absolute;\n    bottom: 0;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    gap: 1rem;\n    font-size: 120%;\n    color: var(--text-color);\n    background: var(--transparent-bg-color);\n    font-weight: 600;\n}\nfooter svg {\n    width: 2.1rem;\n    height: 2.1rem;\n}\nfooter svg path {\n    fill: var(--background-color);\n}\nfooter svg:hover {\n    transform: scale(1.5) rotate(360deg);\n    transition: transform 500ms ease;\n    cursor: pointer;\n}\n\n@media (max-width: 1300px){\n    .forecast-data{\n        width: 70%;\n    }\n}\n@media (max-width: 1100px){\n    html{\n        font-size: 90%;\n    }\n    .input-container {\n        height: 36px;\n        width: 17rem;\n        left: 100%;\n        top: 0.7rem;\n        transform: translate(-19rem);\n    }\n}\n@media (max-width: 850px){\n    .forecast-data{\n        width: 85%;\n    }\n}\n@media (max-width: 750px){\n    html{\n        font-size: 85%;\n    }\n    .forecast-container {\n        grid-template: 1fr 1fr / 1fr 1fr;\n        width: 100%;\n        gap: 2rem;\n        margin-top: 4rem;\n    }\n    .forecast-data{\n        width: 70%;\n    }\n    .input-container {\n        height: 34px;\n        width: 17rem;\n    }\n    section{\n        padding: 4rem 3rem;\n    }\n}\n@media (max-width: 610px){\n    html{\n        font-size: 75%;\n    }\n    .forecast-container {\n        grid-template: 1fr 1fr 1fr / 1fr;\n        width: 100%;\n        gap: 2rem;\n        margin-top: 4rem;\n    }\n    .temprature-container {\n        gap: 1rem;\n        padding: 0.1rem;\n    }\n    .input-container {\n        height: 30px;\n        width: 24rem;\n        left: 50%;\n        top: 0.7rem;\n        transform: translate(-50%);\n    }\n    section{\n        padding: 4rem 2rem;\n    }\n}\n@media (max-width: 520px){\n    html{\n        font-size: 70%;\n    }\n    .input-container {\n        width: 20rem;\n    }\n    section{\n        padding: 4rem 1rem;\n    }\n} \n@media (max-width: 475px){\n    html{\n        font-size: 65%;\n    }\n} \n@media (max-width: 430px){\n/*     html{\n        font-size: 60%;\n    } */\n    .input-container {\n        height: 25px;\n        width: 17rem;\n    }\n} \n/* @media (max-width: 370px){\n    html{\n        font-size: 50%;\n    }\n} */ "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/script/dom.js":
/*!***************************!*\
  !*** ./src/script/dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendValuesToDom: () => (/* binding */ appendValuesToDom),
/* harmony export */   changeBackground: () => (/* binding */ changeBackground),
/* harmony export */   changeStyleColor: () => (/* binding */ changeStyleColor),
/* harmony export */   getHourForecast: () => (/* binding */ getHourForecast),
/* harmony export */   loading: () => (/* binding */ loading)
/* harmony export */ });
/* harmony import */ var _assets_loading_img_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/loading_img.gif */ "./src/assets/loading_img.gif");
/* harmony import */ var _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/loading_text.gif */ "./src/assets/loading_text.gif");
/* harmony import */ var _assets_clear_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/clear.jpg */ "./src/assets/clear.jpg");
/* harmony import */ var _assets_sunny_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sunny.jpg */ "./src/assets/sunny.jpg");
/* harmony import */ var _assets_cloudy_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/cloudy.jpg */ "./src/assets/cloudy.jpg");
/* harmony import */ var _assets_rain_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/rain.jpg */ "./src/assets/rain.jpg");
/* harmony import */ var _assets_night_cloudy_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/night_cloudy.jpg */ "./src/assets/night_cloudy.jpg");
/* harmony import */ var _assets_partlycloudy_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/partlycloudy.jpg */ "./src/assets/partlycloudy.jpg");









const setForeCastData = (days, today, measureType) => {
  let i = 1;
  days.forEach((day) => {
    day.querySelector(".day-name").textContent = today.getForecastDayName(i);
    day.querySelector(".day-weather-icon").src =
      today.getForecastWeatherIcon(i);
    if (measureType == "c") {
      day.querySelector(".day-avg-weather").textContent =
        today.getForecastAvgTemp_c(i);
      day.querySelector(".day-min-weather").textContent =
        today.getForecastMinTemp_c(i);
      day.querySelector(".day-max-weather").textContent =
        today.getForecastMaxTemp_c(i);
    } else {
      day.querySelector(".day-avg-weather").textContent =
        today.getForecastAvgTemp_f(i);
      day.querySelector(".day-min-weather").textContent =
        today.getForecastMinTemp_f(i);
      day.querySelector(".day-max-weather").textContent =
        today.getForecastMaxTemp_f(i);
    }
    i += 1;
  });
};

const appendValuesToDom = (changeDom, today, measureType) => {
  changeDom.fullName = today.fullName;
  changeDom.date = today.date;
  changeDom.time = today.time;
  if (measureType == "c") {
    changeDom.temp = today.temp_c;
    changeDom.temp_feelLike = today.temp_feelLike_c;
    changeDom.windspeed = today.wspeed_kph;
  } else if (measureType == "f") {
    changeDom.temp = today.temp_f;
    changeDom.temp_feelLike = today.temp_feelLike_f;
    changeDom.windspeed = today.wspeed_mph;
  } else {
    console.error("invalid measure type (not c or f)");
  }
  changeDom.condition = today.condition;
  changeDom.humidity = today.humidity;
  changeDom.rain = today.rain;
  document.getElementById("temp-icon").src = today.iconUrl;
  let days = document.querySelectorAll(".forecast-container.daily .forecast-data");
  setForeCastData(days, today, measureType);
};

const newImg = (url, classList) => {
  let img = document.createElement("img");
  img.src = url;
  img.classList.add(...classList);
  return img;
};
const clear = (child) => {
  child.textContent = "";
};
const appendLoodingIcons = (id, imgurl, classlist) => {
  clear(document.getElementById(id));
  document.getElementById(id).append(newImg(imgurl, classlist));
};
const appendToAllLoodingIcons = (className, imgurl, classlist) => {
  let objects = document.querySelectorAll(className).forEach((object) => {
    clear(object);
    object.append(newImg(imgurl, classlist));
  });
};
const loading = () => {
  document.getElementById("temp-icon").src = _assets_loading_img_gif__WEBPACK_IMPORTED_MODULE_0__;
  appendLoodingIcons("country-fullname", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, [
    "loading",
    "country-fullname",
  ]);
  document.querySelectorAll(".day-weather-icon").forEach((day) => {
    day.src = _assets_loading_img_gif__WEBPACK_IMPORTED_MODULE_0__;
  });
  appendLoodingIcons("temp", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, ["loading", "temp"]);
  appendLoodingIcons("date", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, ["loading", "date"]);
  appendLoodingIcons("time", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, ["loading", "time"]);
  appendLoodingIcons("condition", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, ["loading", "condition"]);
  appendLoodingIcons("feel_like", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, ["loading", "feel-like"]);
  appendLoodingIcons("humidity", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, ["loading", "humidity"]);
  appendLoodingIcons("wind-speed", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, ["loading", "wind-speed"]);
  appendLoodingIcons("rain", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, ["loading", "rain"]);
  appendToAllLoodingIcons(".day-name", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, ["loading", "day-name"]);
  appendToAllLoodingIcons(".day-avg-weather", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, [
    "loading",
    "avg-weather",
  ]);
  appendToAllLoodingIcons(".day-min-weather", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, [
    "loading",
    "min-weather",
  ]);
  appendToAllLoodingIcons(".day-max-weather", _assets_loading_text_gif__WEBPACK_IMPORTED_MODULE_1__, [
    "loading",
    "max-weather",
  ]);
};
const changeBackground = (state) => {
  switch (state) {
    case "sunny":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${_assets_sunny_jpg__WEBPACK_IMPORTED_MODULE_3__})`;
      break;
    case "clear":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${_assets_clear_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
      break;
    case "cloudy":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${_assets_cloudy_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
      break;
    case "partlycloudy":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${_assets_partlycloudy_jpg__WEBPACK_IMPORTED_MODULE_7__})`;
      break;
    case "rain":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${_assets_rain_jpg__WEBPACK_IMPORTED_MODULE_5__})`;
      break;
    case "night_cloudy":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${_assets_night_cloudy_jpg__WEBPACK_IMPORTED_MODULE_6__})`;
      break;      
  }
};
const changeStyleColor = (state) => {
  const html = document.querySelector("html");
  switch (state) {
    case "sunny":
      html.className = "sunny";
      break;
    case "clear":
      html.className = "clear";
      break;
    case "cloudy":
      html.className = "cloudy";
      break;
    case "partlycloudy":
      html.className = "partlycloudy";
      break;
    case "rain":
      html.className = "rain";
      break;
    case "night_cloudy":
      html.className = "night_cloudy";
  }
};
const getHourForecast = (hourData) => {
  let temp
  if(document.querySelector('.mbtn.selected').id === 'c')
    temp = hourData.temp_c
  else temp = hourData.temp_f
  return `
    <div class="forecast-data" id = ${parseInt(hourData.name)}>
      <h3 class="day-name">${hourData.name}</h3>
      <img src="${hourData.weatherIcon}" alt="" class="day-weather-icon" />
      <h2 class="day-weather">${temp}</h2>
    </div>`
}



/***/ }),

/***/ "./src/script/fetchCoordinates.js":
/*!****************************************!*\
  !*** ./src/script/fetchCoordinates.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCoordinates: () => (/* binding */ fetchCoordinates)
/* harmony export */ });
const fetchCoordinates = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      const id = navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(
            `${position.coords.latitude},${position.coords.longitude}`
          );
          resolve(`${position.coords.latitude},${position.coords.longitude}`);
        },
        (err) => {
          if (err.code == err.PERMISSION_DENIED) {
            alert("open your gps");
          }
        }
      );
    }
  });
};



/***/ }),

/***/ "./src/script/fixedQuery.js":
/*!**********************************!*\
  !*** ./src/script/fixedQuery.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixedQuery: () => (/* binding */ fixedQuery)
/* harmony export */ });
/* returning the first serched name */
const fixedQuery = (query) => {
  return new Promise(function (resolve, reject) {
    fetch(
      `https://api.weatherapi.com/v1/search.json?key=e28ec3b945254a078d871023232807&q=${query}`,
      { mode: "cors" }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        /* taking the first result as the name */
        let fixedQuery = resp[0].name;
        resolve(fixedQuery);
      })
      .catch(function (err) {
        console.log(err);
        resolve("nowhere");
      });
  });
};



/***/ }),

/***/ "./src/script/weather.js":
/*!*******************************!*\
  !*** ./src/script/weather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherToday: () => (/* binding */ weatherToday)
/* harmony export */ });
class weatherToday {
  constructor(resp) {
    this.resp = resp;
    this.name__ = resp.location.name;
    this.country__ = resp.location.country;
    this.date__ = resp.location.localtime.split(" ")[0];
    this.time__ = resp.location.localtime.split(" ")[1];
    this.hour__ = this.time.split(":")[0];
    this.temp_c__ = resp.current.temp_c;
    this.temp_f__ = resp.current.temp_f;
    this.condition__ = resp.current.condition.text;
    this.temp_feelLike_c__ = resp.current.feelslike_c;
    this.temp_feelLike_f__ = resp.current.feelslike_f;
    this.iconUrl__ = resp.current.condition.icon;
    this.wspeed_kph__ = resp.current.wind_kph;
    this.wspeed_mph__ = resp.current.wind_mph;
    this.humidity__ = resp.current.humidity;
    this.rain__ = resp.forecast.forecastday[0].day.daily_chance_of_rain;
    this.cloud__ = resp.current.cloud;
  }

  get fullName() {
    return `${this.name__}, ${this.country__}`;
  }
  get date() {
    return `${this.date__}`;
  }
  get time() {
    return `${this.time__}`;
  }
  get temp_c() {
    return `${this.temp_c__} °C`;
  }
  get temp_f() {
    return `${this.temp_f__} °F`;
  }
  get condition() {
    return `${this.condition__}`;
  }
  get temp_feelLike_c() {
    return `feels like ${this.temp_feelLike_c__} °C`;
  }
  get temp_feelLike_f() {
    return `feels like ${this.temp_feelLike_f__} °F`;
  }
  get iconUrl() {
    return `${this.iconUrl__}`;
  }
  get wspeed_kph() {
    return `${this.wspeed_kph__} km/h`;
  }
  get wspeed_mph() {
    return `${this.wspeed_mph__} mi/h`;
  }
  get humidity() {
    return `${this.humidity__} %`;
  }
  get rain() {
    return `${this.rain__} %`;
  }
  get cloud() {
    return `${this.cloud__}`;
  }
  get hour() {
    return this.time__.split(":")[0];
  }
  getForecastDate(dayNum) {
    return this.resp.forecast.forecastday[dayNum].date;
  }
  getForecastDayName(dayNum) {
    let date = this.getForecastDate(dayNum);
    let newDate = new Date(date);
    return newDate.toLocaleDateString("en-us", { weekday: "long" });
  }
  getForecastAvgTemp_c(dayNum) {
    return `${this.resp.forecast.forecastday[dayNum].day.avgtemp_c} °C`;
  }
  getForecastAvgTemp_f(dayNum) {
    return `${this.resp.forecast.forecastday[dayNum].day.avgtemp_f} °F`;
  }
  getForecastMaxTemp_c(dayNum) {
    return `${this.resp.forecast.forecastday[dayNum].day.maxtemp_c} °C`;
  }
  getForecastMaxTemp_f(dayNum) {
    return `${this.resp.forecast.forecastday[dayNum].day.maxtemp_f} °F`;
  }
  getForecastMinTemp_c(dayNum) {
    return `${this.resp.forecast.forecastday[dayNum].day.mintemp_c} °F`;
  }
  getForecastMinTemp_f(dayNum) {
    return `${this.resp.forecast.forecastday[dayNum].day.mintemp_f} °F`;
  }
  getForecastWeatherIcon(dayNum) {
    return this.resp.forecast.forecastday[dayNum].day.condition.icon;
  }
  getForecastDataHour(hourNum) {
    let temp_f = this.resp.forecast.forecastday[0].hour[hourNum].temp_f;
    let temp_c = this.resp.forecast.forecastday[0].hour[hourNum].temp_c;
    let weatherIcon = this.resp.forecast.forecastday[0].hour[hourNum].condition.icon;
    return {
      name: `${hourNum}:00`,
      temp_c: `${temp_c} °C`,
      temp_f: `${temp_f} °F`,
      weatherIcon,
    };
  }
}




/***/ }),

/***/ "./src/script/weatherdom.js":
/*!**********************************!*\
  !*** ./src/script/weatherdom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Change: () => (/* binding */ Change)
/* harmony export */ });
class Change {
    constructor(){
    }
    set fullName(fullname){
        const searched_country = document.querySelector('.searched-country');
        searched_country.textContent = fullname;
    }
    set date(date){
        const thedate = new Date(date);
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        const newdate = thedate.toLocaleString('en-IN', options);
        document.getElementById('date').textContent = newdate;
    }
    set time(time){
        let hours = Number(time.split(':')[0]);
        let mainutes = time.split(':')[1];
        let part = 'pm';
        if(hours < 12){
            part = 'am';
        }
        hours = Number(time.split(':')[0]) % 12;
        if(Number(time.split(':')[0]) == 12) hours = 12;
        if(Number(time.split(':')[0]) == 0) hours = '00';
        document.getElementById('time').textContent = `${hours}:${mainutes} ${part}`;
    }
    set temp(temp){
        if(typeof temp === 'string'){
            document.getElementById('temp').textContent = temp;;
        }else{
        document.getElementById('temp').append(temp);
    }
    }
    set condition(condition){
        document.getElementById('condition').textContent = condition;
    }
    set temp_feelLike(feellike){
        document.getElementById('feel_like').textContent = feellike;
    }
    set iconUrl(url){
        document.getElementById('temp-icon').src = url;
    }
    set humidity(humidity) {
        document.getElementById('humidity').textContent = humidity;
    }
    set windspeed(wspeed){
        document.getElementById('wind-speed').textContent = wspeed;
    }
    set rain(chanse_of_rain){
        document.getElementById('rain').textContent = chanse_of_rain;
    } 
}



/***/ }),

/***/ "./src/assets/clear.jpg":
/*!******************************!*\
  !*** ./src/assets/clear.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/clear.jpg";

/***/ }),

/***/ "./src/assets/cloudy.jpg":
/*!*******************************!*\
  !*** ./src/assets/cloudy.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cloudy.jpg";

/***/ }),

/***/ "./src/assets/loading_img.gif":
/*!************************************!*\
  !*** ./src/assets/loading_img.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/loading_img.gif";

/***/ }),

/***/ "./src/assets/loading_text.gif":
/*!*************************************!*\
  !*** ./src/assets/loading_text.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/loading_text.gif";

/***/ }),

/***/ "./src/assets/night_cloudy.jpg":
/*!*************************************!*\
  !*** ./src/assets/night_cloudy.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/night_cloudy.jpg";

/***/ }),

/***/ "./src/assets/partlycloudy.jpg":
/*!*************************************!*\
  !*** ./src/assets/partlycloudy.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/partlycloudy.jpg";

/***/ }),

/***/ "./src/assets/rain.jpg":
/*!*****************************!*\
  !*** ./src/assets/rain.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/rain.jpg";

/***/ }),

/***/ "./src/assets/sunny.jpg":
/*!******************************!*\
  !*** ./src/assets/sunny.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sunny.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _script_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/weather */ "./src/script/weather.js");
/* harmony import */ var _script_fixedQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/fixedQuery */ "./src/script/fixedQuery.js");
/* harmony import */ var _script_weatherdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/weatherdom */ "./src/script/weatherdom.js");
/* harmony import */ var _script_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script/dom */ "./src/script/dom.js");
/* harmony import */ var _script_fetchCoordinates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script/fetchCoordinates */ "./src/script/fetchCoordinates.js");







/* setting weather measure toggling */
let weatherDataNow;
var changeDom = new _script_weatherdom__WEBPACK_IMPORTED_MODULE_3__.Change();
document.querySelectorAll(".mbtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("selected")) {
      const selected = document.querySelector(".mbtn.selected");
      btn.classList.add("selected");
      selected.classList.toggle("selected");
      changeWeatherMeasure(btn.id, changeDom, weatherDataNow);
      console.log(weatherDataNow);
    }
  });
});
document.querySelectorAll(".forecast").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("selected")) {
      const selected = document.querySelector(".forecast.selected");
      btn.classList.add("selected");
      selected.classList.toggle("selected"); 
    }
  });
});
document.querySelector(".forecast.hourly.btn").addEventListener("click", () => {
  let hourlyForeccastContainer = document.querySelector(
    ".forecast-container.hourly"
  );
  document.querySelector(".forecast-container.daily").classList.add("hide");
  hourlyForeccastContainer.classList.remove("hide");
  let finalResult = "";
  for (let i = weatherDataNow.hour; i < 24; i++) {
    finalResult += (0,_script_dom__WEBPACK_IMPORTED_MODULE_4__.getHourForecast)(weatherDataNow.getForecastDataHour(i));
  }
  hourlyForeccastContainer.innerHTML = finalResult;
});
document.querySelector(".forecast.daily.btn").addEventListener("click", () => {
  document.querySelector(".forecast-container.hourly").classList.add("hide");
  document.querySelector(".forecast-container.daily").classList.remove("hide");
});
/* search a query */
const search = document.getElementById("search");
search.addEventListener("change", () => {
  if (search.value.replaceAll(" ", "") != "") {
    let query = search.value;
    searchThenFetch(query);
    (0,_script_dom__WEBPACK_IMPORTED_MODULE_4__.loading)();
  }
});
document.querySelector("i.search").addEventListener("click", () => {
  if (search.value.replaceAll(" ", "") != "") {
    let query = search.value;
    searchThenFetch(query);
    (0,_script_dom__WEBPACK_IMPORTED_MODULE_4__.loading)();
  }
});

/* search the input query and select the first in result searched array */
const searchThenFetch = (query) => {
  (0,_script_fixedQuery__WEBPACK_IMPORTED_MODULE_2__.fixedQuery)(query).then(fetchThenLoad);
};

function fetchThenLoad(fixedQuery) {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e28ec3b945254a078d871023232807&q=${fixedQuery}&days=5`,
    { mode: "cors" }
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (resp) {
      let today = new _script_weather__WEBPACK_IMPORTED_MODULE_1__.weatherToday(resp);
      const changeDom = new _script_weatherdom__WEBPACK_IMPORTED_MODULE_3__.Change();
      let state = getWeatherStatusNumber(today);
      (0,_script_dom__WEBPACK_IMPORTED_MODULE_4__.changeBackground)(state);
      (0,_script_dom__WEBPACK_IMPORTED_MODULE_4__.changeStyleColor)(state);
      /* append weather data */
      let measureType = document.querySelector(".mbtn.selected").id;
      (0,_script_dom__WEBPACK_IMPORTED_MODULE_4__.appendValuesToDom)(changeDom, today, measureType);
      weatherDataNow = today;
    })
    .catch(function (err) {
      console.log(err);
    });
}

const togglle = (btn, btnClassName, toggleClassName) => {
  const selected = document.querySelector(
    `.${btnClassName}.${toggleClassName}`
  );
  btn.classList.add(`${toggleClassName}`);
  selected.classList.toggle(`${toggleClassName}`);
};

const changeWeatherMeasure = (key, changeDom, weatherData) => {
  const dailyForecastDatas = document.querySelectorAll(".forecast-container.daily .forecast-data");
  const hourlyForecastDatas = document.querySelectorAll(".forecast-container.hourly .forecast-data");

  if (key == "c") {
    changeDom.temp = weatherData.temp_c;
    changeDom.temp_feelLike = weatherData.temp_feelLike_c;
    changeDom.windspeed = weatherData.wspeed_kph;
    let i = 1; /* counter for forecast days */
    dailyForecastDatas.forEach((day) => {
      let avgweather = day.querySelector(".day-avg-weather");
      let minweather = day.querySelector(".day-min-weather");
      let maxweather = day.querySelector(".day-max-weather");
      avgweather.textContent = weatherData.getForecastMaxTemp_c(i);
      minweather.textContent = weatherData.getForecastAvgTemp_c(i);
      maxweather.textContent = weatherData.getForecastMinTemp_c(i);
      i += 1;
    });
    hourlyForecastDatas.forEach(hour => {
      hour.querySelector('h2.day-weather').textContent = weatherData.getForecastDataHour(parseInt(hour.id)).temp_c
    })
  } else if (key == "f") {
    changeDom.temp = weatherData.temp_f;
    changeDom.temp_feelLike = weatherData.temp_feelLike_f;
    changeDom.windspeed = weatherData.wspeed_mph;
    let i = 1; /* counter for forecast days */
    dailyForecastDatas.forEach((day) => {
      let avgweather = day.querySelector(".day-avg-weather");
      let minweather = day.querySelector(".day-min-weather");
      let maxweather = day.querySelector(".day-max-weather");
      avgweather.textContent = weatherData.getForecastMaxTemp_f(i);
      minweather.textContent = weatherData.getForecastAvgTemp_f(i);
      maxweather.textContent = weatherData.getForecastMinTemp_f(i);
      i += 1;
    });
    hourlyForecastDatas.forEach(hour => {
      hour.querySelector('h2.day-weather').textContent = weatherData.getForecastDataHour(parseInt(hour.id)).temp_f
    })
  }
};
const getWeatherStatusNumber = (weatherData) => {
  if (weatherData.humidity__ >= 90 && weatherData.rain > 50) return "rain";
  if (weatherData.cloud < 25) {
    if (weatherData.hour >= 6 && weatherData.hour <= 20) {
      return "sunny";
    } else {
      return "clear";
    }
  } else if (weatherData.cloud <= 75) {
    if (weatherData.hour >= 6 && weatherData.hour <= 20) {
      return "partlycloudy";
    } else {
      return "night_cloudy";
    }
  } else return "cloudy";
};

(0,_script_dom__WEBPACK_IMPORTED_MODULE_4__.loading)();
(0,_script_fetchCoordinates__WEBPACK_IMPORTED_MODULE_5__.fetchCoordinates)().then(fetchThenLoad);

})();

/******/ })()
;
//# sourceMappingURL=bundle.476b680b0eb000d6ccc3.js.map