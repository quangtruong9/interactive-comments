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

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/*! exports provided: currentUser, comments, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"currentUser\":{\"image\":{\"png\":\"./images/avatars/image-juliusomo.png\",\"webp\":\"./images/avatars/image-juliusomo.webp\"},\"username\":\"juliusomo\"},\"comments\":[{\"id\":1,\"content\":\"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.\",\"createdAt\":\"1 month ago\",\"score\":12,\"user\":{\"image\":{\"png\":\"./images/avatars/image-amyrobson.png\",\"webp\":\"./images/avatars/image-amyrobson.webp\"},\"username\":\"amyrobson\"},\"replies\":[]},{\"id\":2,\"content\":\"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!\",\"createdAt\":\"2 weeks ago\",\"score\":5,\"user\":{\"image\":{\"png\":\"./images/avatars/image-maxblagun.png\",\"webp\":\"./images/avatars/image-maxblagun.webp\"},\"username\":\"maxblagun\"},\"replies\":[{\"id\":3,\"content\":\"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.\",\"createdAt\":\"1 week ago\",\"score\":4,\"replyingTo\":\"maxblagun\",\"user\":{\"image\":{\"png\":\"./images/avatars/image-ramsesmiron.png\",\"webp\":\"./images/avatars/image-ramsesmiron.webp\"},\"username\":\"ramsesmiron\"},\"replies\":[]},{\"id\":4,\"content\":\"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.\",\"createdAt\":\"2 days ago\",\"score\":2,\"replyingTo\":\"ramsesmiron\",\"user\":{\"image\":{\"png\":\"./images/avatars/image-juliusomo.png\",\"webp\":\"./images/avatars/image-juliusomo.webp\"},\"username\":\"juliusomo\"},\"replies\":[]}]}]}");

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
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./data.json", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");





function AppComponent_app_comment_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comment", 7);
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", comment_r1)("width", ctx_r0.commentWidth);
} }
class AppComponent {
    constructor() {
        this.title = 'interactive-comments';
    }
    ngOnInit() {
        this.comments = _data_json__WEBPACK_IMPORTED_MODULE_1__["comments"];
        this.commentWidth = screen.width > 630 ? 630 : 340;
        this.username = _data_json__WEBPACK_IMPORTED_MODULE_1__["currentUser"].username;
        this.commentBoxWidth = this.commentWidth + 'px';
        this.userAvatar = "assets" + _data_json__WEBPACK_IMPORTED_MODULE_1__["currentUser"]["image"]["png"].substring(1);
        let temp = this.commentWidth - 200;
        this.replyBoxWidth = temp + 'px';
        let count = function (value) {
            let res = 0;
            if (value.length > 0) {
                res = value.length;
                for (let comment of value)
                    res += count(comment.replies);
            }
            return res;
        };
        this.newId = count(this.comments);
    }
    sendReply() {
        let reply = document.getElementById("new-comment");
        let request = {
            "id": this.newId * 6,
            "content": reply.value,
            "createdAt": "2 weeks ago",
            "score": 0,
            "user": {
                "image": {
                    "png": _data_json__WEBPACK_IMPORTED_MODULE_1__["currentUser"].image.png
                },
                "username": _data_json__WEBPACK_IMPORTED_MODULE_1__["currentUser"].username
            },
            "replies": []
        };
        this.comments.push(request);
        reply.value = "";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 6, consts: [[3, "comment", "width", 4, "ngFor", "ngForOf"], [1, "comment-box"], [1, "account-avatar"], [3, "src"], [1, "reply-content"], ["id", "new-comment", 1, "reply-input"], [1, "reply-send", 3, "click"], [3, "comment", "width"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_comment_0_Template, 1, 2, "app-comment", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_7_listener() { return ctx.sendReply(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "REPLY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.commentBoxWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.replyBoxWidth);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__["CommentComponent"]], styles: [".comment-box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    background-color: white;   \r\n    border-radius: 15px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.reply-input[_ngcontent-%COMP%]{\r\n    font-family: 'Rubik';\r\n    border-radius: 15px;\r\n    height: 90px;\r\n    margin-bottom: 10px;\r\n    padding: 15px 10px 10px 15px;\r\n    color: hsl(212, 24%, 26%);\r\n\r\n}\r\n\r\n.account-avatar[_ngcontent-%COMP%]{\r\n    margin-left: 18px;\r\n}\r\n\r\n.account-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 38px;\r\n}\r\n\r\n.reply-send[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n    background-color: hsl(238, 40%, 52%);\r\n    color: white;\r\n    width: 100px;\r\n    height: 45px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.reply-send[_ngcontent-%COMP%]:hover{\r\n    background-color:hsl(239, 57%, 85%) ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIseUJBQXlCOztBQUU3Qjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnJlcGx5LWlucHV0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweCAxMHB4IDE1cHg7XHJcbiAgICBjb2xvcjogaHNsKDIxMiwgMjQlLCAyNiUpO1xyXG5cclxufVxyXG4uYWNjb3VudC1hdmF0YXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxufVxyXG5cclxuLmFjY291bnQtYXZhdGFyIGltZ3tcclxuICAgIHdpZHRoOiAzOHB4O1xyXG59XHJcblxyXG4ucmVwbHktc2VuZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM4LCA0MCUsIDUyJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnJlcGx5LXNlbmQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgyMzksIDU3JSwgODUlKSA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__["CommentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__["CommentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data.json */ "./data.json", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CommentComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.reply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "you");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.reply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_33_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.sendReply(ctx_r13.comment.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "REPLY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.accountAvatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r7.replyBoxWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r7.comment.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", ctx_r7.comment["user"]["username"], ". ");
} }
function CommentComponent_app_comment_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comment", 46);
} if (rf & 2) {
    const rep_r15 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", rep_r15)("width", ctx_r8.width - ctx_r8.reducePixel);
} }
class CommentComponent {
    constructor() {
        this.isReply = false;
        this.isUser = false;
    }
    ngOnInit() {
        this.widthPx = this.width + 'px';
        this.avatarUrl = "assets/" + this.comment["user"]["image"]["png"].substring(2);
        if (this.comment["user"]["username"] == 'juliusomo')
            this.isUser = true;
        this.reducePixel = screen.width > 630 ? 50 : 20;
        let temp = this.width - 200;
        this.replyBoxWidth = temp + 'px';
    }
    reply() {
        this.isReply = true;
        this.accountAvatarUrl = "assets/" + _data_json__WEBPACK_IMPORTED_MODULE_1__["currentUser"]["image"]["png"].substring(2);
    }
    sendReply(value) {
        let reply = document.getElementById(value);
        let request = {
            "id": value * 6,
            "content": reply.value,
            "createdAt": "2 weeks ago",
            "score": 0,
            "user": {
                "image": {
                    "png": _data_json__WEBPACK_IMPORTED_MODULE_1__["currentUser"].image.png
                },
                "username": _data_json__WEBPACK_IMPORTED_MODULE_1__["currentUser"].username
            },
            "replies": []
        };
        this.comment.replies.push(request);
        reply.innerHTML = "";
        this.isReply = false;
    }
    upVote() {
        this.comment.score += 1;
    }
    downVote() {
        this.comment.score -= 1;
    }
    createRequest() {
        let info = {
            "currentUser": {
                "image": {
                    "png": _data_json__WEBPACK_IMPORTED_MODULE_1__["currentUser"].image.png,
                },
                "username": _data_json__WEBPACK_IMPORTED_MODULE_1__["currentUser"].username
            }
        };
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { comment: "comment", width: "width" }, decls: 38, vars: 16, consts: [[1, "comment"], [1, "button-group"], [1, "vote"], [1, "upvote", 3, "click"], ["src", "assets/images/icon-plus.svg"], [1, "vote-content"], [1, "downvote", 3, "click"], ["src", "assets/images/icon-minus.svg"], [1, "button-small"], ["class", "delete", 4, "ngIf"], ["class", "edit", 4, "ngIf"], ["class", "reply", 3, "click", 4, "ngIf"], [1, "content"], [1, "comment-header"], [1, "user-avatar"], [2, "width", "30px", 3, "src"], [1, "user-name"], ["class", "user-certificate", 4, "ngIf"], [1, "comment-time"], ["class", "delete button-big", 4, "ngIf"], ["class", "edit button-big", 4, "ngIf"], ["class", "reply button-big", 3, "click", 4, "ngIf"], [1, "comment-content"], ["class", "comment comment-reply-box", 4, "ngIf"], [1, "comment-reply"], [1, "comment-line"], [1, "reply-box"], [3, "comment", "width", 4, "ngFor", "ngForOf"], [1, "delete"], ["src", "assets/images/icon-delete.svg"], [2, "display", "inline"], [1, "edit"], ["src", "assets/images/icon-edit.svg"], [1, "reply", 3, "click"], ["src", "assets/images/icon-reply.svg"], [1, "user-certificate"], [1, "user-certificate-text"], [1, "delete", "button-big"], [1, "edit", "button-big"], [1, "reply", "button-big", 3, "click"], [1, "comment", "comment-reply-box"], [1, "account-avatar"], [3, "src"], [1, "reply-content"], [1, "reply-input", 3, "id"], [1, "reply-send", 3, "click"], [3, "comment", "width"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_div_click_3_listener() { return ctx.upVote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_div_click_9_listener() { return ctx.downVote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CommentComponent_div_12_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CommentComponent_div_13_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CommentComponent_div_14_Template, 5, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CommentComponent_div_23_Template, 4, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CommentComponent_div_27_Template, 5, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CommentComponent_div_28_Template, 5, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CommentComponent_div_29_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CommentComponent_div_33_Template, 10, 5, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CommentComponent_app_comment_37_Template, 1, 2, "app-comment", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.widthPx);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment["score"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment["user"]["username"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment["createdAt"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment["content"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isReply);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comment.replies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], CommentComponent], styles: [".comment[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    background-color: white;\r\n    \r\n    \r\n    border-radius: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.vote[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 35px;\r\n    height: 97px;\r\n    background-color: hsl(223, 19%, 93%);\r\n    border-radius: 10px;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    justify-items: center;\r\n    margin-left: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.vote-content[_ngcontent-%COMP%]{\r\n    color: hsl(238, 40%, 52%);\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 90%;\r\n    margin-left: 30px;\r\n}\r\n\r\n.comment-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n\r\n.user-name[_ngcontent-%COMP%], .comment-time[_ngcontent-%COMP%]{\r\n    margin-left: 30px;\r\n}\r\n\r\n.user-certificate[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n\r\n.user-certificate-text[_ngcontent-%COMP%]{ \r\n    background-color: hsl(238, 40%, 52%);\r\n    border-radius: 2px;\r\n    color: white;\r\n}\r\n\r\n.comment-time[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: hsl(211, 10%, 45%);\r\n}\r\n\r\n.reply[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: 20px;\r\n    color: hsl(238, 40%, 52%);\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.reply[_ngcontent-%COMP%]:hover{\r\n    \r\n    filter: brightness(0) saturate(100%) invert(74%) sepia(3%) saturate(3670%) hue-rotate(201deg) brightness(111%) contrast(87%);\r\n}\r\n\r\n.delete[_ngcontent-%COMP%]{\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%]:hover{\r\n    filter: brightness(0) saturate(100%) invert(79%) sepia(85%) saturate(1694%) hue-rotate(293deg) brightness(112%) contrast(106%);\r\n}\r\n\r\n.edit[_ngcontent-%COMP%]{\r\n    color: hsl(238, 40%, 52%);\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%]:hover{\r\n    filter: brightness(0) saturate(100%) invert(74%) sepia(3%) saturate(3670%) hue-rotate(201deg) brightness(111%) contrast(87%);\r\n\r\n}\r\n\r\n.comment-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    color: hsl(211, 10%, 45%);\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.comment-reply[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    \r\n}\r\n\r\n.comment-line[_ngcontent-%COMP%]{\r\n    border-left: 3px solid hsl(223, 19%, 93%);\r\n    margin-left: 20px;\r\n}\r\n\r\n.comment-reply[_ngcontent-%COMP%]   .reply-box[_ngcontent-%COMP%]   app-comment[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{\r\n    width: 650px;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n\r\n.reply-send[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n    background-color: hsl(238, 40%, 52%);\r\n    color: white;\r\n    width: 100px;\r\n    height: 45px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.comment-reply-box[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n.account-avatar[_ngcontent-%COMP%]{\r\n    margin-left: 18px;\r\n    flex-grow: 1;\r\n\r\n}\r\n\r\n.account-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 38px;\r\n}\r\n\r\n.reply-content[_ngcontent-%COMP%]{\r\n    flex-grow: 3;\r\n}\r\n\r\n.reply-input[_ngcontent-%COMP%]{\r\n    font-family: 'Rubik';\r\n    border-radius: 15px;\r\n    border: 0.5px solid black;\r\n    height: 90px;\r\n    margin-bottom: 10px;\r\n    padding: 15px 10px 10px 15px;\r\n    color: hsl(212, 24%, 26%);\r\n}\r\n\r\n.reply-send[_ngcontent-%COMP%]:hover{\r\n    background-color:hsl(239, 57%, 85%) ;\r\n}\r\n\r\n@media (max-width: 630px) {\r\n    .comment[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    .content[_ngcontent-%COMP%]{\r\n        order: 1;\r\n    }\r\n    .button-group[_ngcontent-%COMP%]{\r\n        order: 2;\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        align-items: baseline;\r\n    }\r\n    .vote[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: row;\r\n        width: 97px;\r\n        height: 35px;\r\n    }\r\n\r\n    .downvote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        margin-bottom: 3px;\r\n    }\r\n\r\n    .button-small[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n    }\r\n\r\n\r\n    .button-big[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n\r\n    .comment-line[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n    }\r\n\r\n    .account-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 40px;\r\n    }\r\n\r\n    .comment-reply-box[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n}\r\n\r\n@media (min-width: 631px) {\r\n    .button-small[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFDQTs7O0NBR0M7O0FBQ0Q7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBOzs7OztDQUtDOztBQUNEO0lBQ0ksK0JBQStCO0lBQy9CLDRIQUE0SDtBQUNoSTs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUNBO0lBQ0ksOEhBQThIO0FBQ2xJOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0SEFBNEg7O0FBRWhJOztBQUNBO0lBQ0ksU0FBUztJQUNULHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7OztHQUdHOztBQUlIO0lBQ0ksbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksUUFBUTtRQUNSLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCO0lBQ2xDOzs7SUFHQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOzs7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvKiB3aWR0aDogNzMwcHg7ICovXHJcbiAgICAvKiBoZWlnaHQ6IDE1MHB4OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udm90ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDk3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIzLCAxOSUsIDkzJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi52b3RlLWNvbnRlbnR7XHJcbiAgICBjb2xvcjogaHNsKDIzOCwgNDAlLCA1MiUpO1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb21tZW50LWhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4vKiBcclxubWFyZ2luLWF1dG8gZG9jdW1lbnQ6XHJcbmh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMyNTUxMjkxL2luLWNzcy1mbGV4Ym94LXdoeS1hcmUtdGhlcmUtbm8tanVzdGlmeS1pdGVtcy1hbmQtanVzdGlmeS1zZWxmLXByb3BlcnRpZXNcclxuKi9cclxuLnVzZXItbmFtZSwgLmNvbW1lbnQtdGltZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi51c2VyLWNlcnRpZmljYXRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi51c2VyLWNlcnRpZmljYXRlLXRleHR7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzOCwgNDAlLCA1MiUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29tbWVudC10aW1lICBwe1xyXG4gICAgY29sb3I6IGhzbCgyMTEsIDEwJSwgNDUlKTtcclxufVxyXG5cclxuLnJlcGx5e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogaHNsKDIzOCwgNDAlLCA1MiUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBcclxuRmlsdGVyIGNvbG9yIFxyXG5Eb2N1bWVudDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI5NjY2NDEvaG93LXRvLXRyYW5zZm9ybS1ibGFjay1pbnRvLWFueS1naXZlbi1jb2xvci11c2luZy1vbmx5LWNzcy1maWx0ZXJzLzQzOTYwOTkxIzQzOTYwOTkxXHJcbkNhbGN1bGF0b3I6IGh0dHBzOi8vY29kZXBlbi5pby9zb3N1a2UvcGVuL1Bqb3FxcFxyXG5Db2xvciBtdXN0IGJlIGJsYWNrIHRoZW4gdXNlciBjYWxjdWxhdG9yXHJcbiovXHJcbi5yZXBseTpob3ZlcntcclxuICAgIC8qIGNvbG9yOiBoc2woMjM5LCA1NyUsIDg1JSk7ICovXHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDc0JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDM2NzAlKSBodWUtcm90YXRlKDIwMWRlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCg4NyUpO1xyXG59XHJcblxyXG4uZGVsZXRle1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGVsZXRlOmhvdmVye1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg3OSUpIHNlcGlhKDg1JSkgc2F0dXJhdGUoMTY5NCUpIGh1ZS1yb3RhdGUoMjkzZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDEwNiUpO1xyXG59XHJcbi5lZGl0e1xyXG4gICAgY29sb3I6IGhzbCgyMzgsIDQwJSwgNTIlKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmVkaXQ6aG92ZXJ7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDc0JSkgc2VwaWEoMyUpIHNhdHVyYXRlKDM2NzAlKSBodWUtcm90YXRlKDIwMWRlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCg4NyUpO1xyXG5cclxufVxyXG4uY29tbWVudC1jb250ZW50IHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogaHNsKDIxMSwgMTAlLCA0NSUpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb21tZW50LXJlcGx5e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb21tZW50LWxpbmV7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGhzbCgyMjMsIDE5JSwgOTMlKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uY29tbWVudC1yZXBseSAucmVwbHktYm94IGFwcC1jb21tZW50IC5jb21tZW50e1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIC5jb21tZW50LXJlcGx5IC5yZXBseS1ib3ggYXBwLWNvbW1lbnQ6bGFzdC1jaGlsZCAuY29tbWVudHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59ICovXHJcblxyXG5cclxuXHJcbi5yZXBseS1zZW5ke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzgsIDQwJSwgNTIlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb21tZW50LXJlcGx5LWJveHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hY2NvdW50LWF2YXRhcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG5cclxufVxyXG4uYWNjb3VudC1hdmF0YXIgaW1ne1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbn1cclxuLnJlcGx5LWNvbnRlbnR7XHJcbiAgICBmbGV4LWdyb3c6IDM7XHJcbn1cclxuLnJlcGx5LWlucHV0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxNXB4O1xyXG4gICAgY29sb3I6IGhzbCgyMTIsIDI0JSwgMjYlKTtcclxufVxyXG5cclxuLnJlcGx5LXNlbmQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgyMzksIDU3JSwgODUlKSA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xyXG4gICAgLmNvbW1lbnR7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1ncm91cHtcclxuICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIH1cclxuICAgIC52b3Rle1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogOTdweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvd252b3RlIGltZ3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi1zbWFsbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuYnV0dG9uLWJpZ3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21tZW50LWxpbmV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjY291bnQtYXZhdGFyIGltZ3tcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29tbWVudC1yZXBseS1ib3h7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjMxcHgpIHtcclxuICAgIC5idXR0b24tc21hbGx7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.css']
            }]
    }], function () { return []; }, { comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
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

module.exports = __webpack_require__(/*! C:\Users\quang\Desktop\pratice\interactive-comments\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map