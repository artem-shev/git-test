webpackJsonp([1,4],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 140;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(151);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(209),
        styles: [__webpack_require__(206)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_constants_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_repo_repo_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_search_component__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_repo_repo_component__["a" /* RepoComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* appRoutes */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__core_constants_service__["a" /* ConstantsService */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_service__["a" /* SearchService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_user_user_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_repo_repo_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });


var appRoutes = [
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_0__components_user_user_component__["a" /* UserComponent */] },
    { path: 'user/repos/:owner/:name', component: __WEBPACK_IMPORTED_MODULE_1__components_repo_repo_component__["a" /* RepoComponent */] },
    { path: '', redirectTo: '/user', pathMatch: 'full' },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_search_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.getUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */];
        this.usersQuery = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
        var lastSearch = this.searchService.lastSearch.login;
        if (lastSearch) {
            this.usersQuery = lastSearch;
            this.searchUser(lastSearch);
        }
    };
    SearchComponent.prototype.searchUser = function (login) {
        var _this = this;
        this.searchService.searchUser(login)
            .subscribe(function (user) {
            _this.getUser.emit(user);
        }, function (reject) {
            _this.getUser.emit({});
            var msg = reject.json().message;
            alert("Can't get user with login \"" + login + "\": " + msg);
        });
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "getUser", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'search',
        template: __webpack_require__(211),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_search_service__["a" /* SearchService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".wrapper {\r\n  padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".user__ava {\r\n  text-align: center;\r\n}\r\n.user__ava img {\r\n  max-width: 35px;\r\n  border-radius: 50%;\r\n}\r\n.user__name {\r\n  line-height: 35px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid wrapper\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"backToUser()\">Back to user view</button>\r\n    </div>\r\n    <h3 class=\"col-md-8 repo__name\">Author: {{ owner }}</h3>\r\n  </div>\r\n  <div class=\"row repo-readme-body\" [style.color]=\"readme === errorText ? 'red' : 'initial'\">\r\n    <div [innerHTML]=\"readme\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"searchUser(usersQuery)\">\r\n  <div class=\"input-group\">\r\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"usersQuery\" name=\"usersQuery\" placeholder=\"user login\" /> <br>\r\n    <span class=\"input-group-btn\">\r\n      <button type=\"submit\" class=\"btn btn-default\">\r\n        <span class=\"glyphicon glyphicon-search\"></span>\r\n      </button>\r\n    </span>\r\n  </div>\r\n</form>"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid user\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <search (getUser)=\"getUser($event)\"></search>\r\n    </div>\r\n  </div>\r\n\r\n  <h3 class=\"row\" *ngIf=\"!!user.login\">\r\n    <div class=\"pull-left user__ava\">\r\n      <img [src]=\"user.avatar_url\" alt=\"\">\r\n    </div>\r\n    <div class=\"col-md-6 user__name\">\r\n      {{user.login}}\r\n    </div>\r\n  </h3>\r\n\r\n  <h4 *ngIf=\"user.repos?.length\">Available repositories</h4>\r\n  <ul *ngIf=\"user.repos?.length\" class=\"list-group col-md-8\">\r\n    <li *ngFor=\"let repo of user.repos\" class=\"row list-group-item\">\r\n      <div class=\"col-md-8\" class=\"repos__item\">\r\n        <a [routerLink]=\"['repos/', repo.owner.login, repo.name]\">{{repo.name}}</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    function SearchService(constantsService, http) {
        this.constantsService = constantsService;
        this.http = http;
        this.repos = [];
        this.lastSearch = {
            login: '',
            repos: [],
        };
    }
    SearchService.prototype.searchUser = function (login) {
        var _this = this;
        this.lastSearch.login = login;
        var url = this.constantsService.githubURLS.user(login);
        return this.http.get(url)
            .map(function (response) {
            var user = response.json();
            _this.searchRepos(user.repos_url)
                .then(function (repos) {
                user.repos = repos;
                _this.lastSearch.repos = repos;
            })
                .catch(function (reject) {
                console.log('reject get repos', reject);
            });
            return user;
        })
            .catch(function (reject) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(reject);
        });
    };
    SearchService.prototype.searchRepos = function (url) {
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    SearchService.prototype.getRepoReadMe = function (owner, name) {
        var url = this.constantsService.githubURLS.getRepoReadme(owner, name);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/vnd.github.html' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options)
            .map(function (response) {
            return response._body;
        })
            .catch(this.errorsHandler);
    };
    SearchService.prototype.errorsHandler = function (reject) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(reject.statusText);
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__constants_service__["a" /* ConstantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__constants_service__["a" /* ConstantsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object])
], SearchService);

var _a, _b;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_search_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepoComponent = (function () {
    function RepoComponent(searchService, router, route) {
        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.owner = '';
        this.repoName = '';
        this.readme = '';
        this.errorText = "\n    <div>Can't get readme for this repo</div>\n  ";
    }
    RepoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.owner = this.route.snapshot.params['owner'];
        this.repoName = this.route.snapshot.params['name'];
        this.searchService.lastSearch.login = this.owner;
        this.searchService.getRepoReadMe(this.owner, this.repoName)
            .subscribe(function (readme) {
            _this.readme = readme;
        }, function () {
            _this.readme = _this.errorText;
        });
    };
    RepoComponent.prototype.backToUser = function () {
        this.router.navigate(['user']);
    };
    return RepoComponent;
}());
RepoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__(210),
        styles: ["\n    .repo__name { margin: 0; }\n    .repo-readme-body { margin-top: 20px; margin-left: 0;}\n  "],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], RepoComponent);

var _a, _b, _c;
//# sourceMappingURL=repo.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = (function () {
    function UserComponent() {
        this.title = 'user list';
        this.user = {};
    }
    UserComponent.prototype.getUser = function (user) {
        this.user = user;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'user',
        template: __webpack_require__(212),
        styles: [__webpack_require__(207)],
    })
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConstantsService = (function () {
    function ConstantsService() {
        this.githubURLS = {
            user: function (login) {
                return "//api.github.com/users/" + login;
            },
            users: function (query) {
                return "//api.github.com/search/users?q=" + query;
            },
            repos: function (login) {
                return "//api.github.com/search/repositories?q=" + login;
            },
            getRepoReadme: function (owner, name) {
                return "//api.github.com/repos/" + owner + "/" + name + "/readme";
            }
        };
    }
    return ConstantsService;
}());
ConstantsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ConstantsService);

//# sourceMappingURL=constants.service.js.map

/***/ })

},[484]);
//# sourceMappingURL=main.bundle.js.map