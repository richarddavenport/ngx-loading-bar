webpackJsonp([1],{0:function(t,e,n){t.exports=n("6Wgd")},"1ITJ":function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="1ITJ"},"6Wgd":function(t,e,n){"use strict";function o(t,e,n){return new I(t,e,n)}Object.defineProperty(e,"__esModule",{value:!0});var r=n("/oeL"),i=n("Qa4U"),a=n("fc+i"),c=n("BkNc"),s=n("fL27"),l=n("cC+T"),u=n("0bRs"),p=n("CPp0"),f=n("qbdv"),d=n("rlar"),b=n("CH/r"),h=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},g=function(){function t(){this.progress$=b.debounceTime.call(new d.Subject),this._pending=new d.Subject,this._pendingRequests=0,this._value=0}return t.prototype.start=function(){++this._pendingRequests,0===this._value&&this.set(2)},t.prototype.complete=function(){var t=this;0!==this._pendingRequests&&(--this._pendingRequests,0===this._pendingRequests&&100!==this._value&&this._value>0&&(this.set(100),setTimeout(function(){return t.set(0)},500)))},t.prototype.ngOnDestroy=function(){this.progress$.complete()},t.prototype.set=function(t){var e=this;0===t&&this._pendingRequests>0&&(t=2),this._value=t,this.progress$.next(t),clearTimeout(this._incTimeout),this._value>0&&this._value<100&&(this._incTimeout=setTimeout(function(){return e.increment()},250))},t.prototype.increment=function(){var t=0,e=this._value;t=e>=0&&e<25?3*Math.random()+3:e>=25&&e<65?3*Math.random():e>=65&&e<90?2*Math.random():e>=90&&e<99?.5:0,this.set(this._value+t)},t=h([Object(r.C)()],t)}(),y=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},m=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v=function(){function t(t){this.loader=t,this.includeSpinner=!0,this.includeBar=!0}return y([Object(r.F)(),m("design:type",Object)],t.prototype,"includeSpinner",void 0),y([Object(r.F)(),m("design:type",Object)],t.prototype,"includeBar",void 0),y([Object(r.F)(),m("design:type",Object)],t.prototype,"color",void 0),t=y([Object(r.o)({selector:"ngx-loading-bar",template:'\n    <ng-container *ngIf="(loader.progress$|async) as progress">\n      <div id="loading-bar-spinner" *ngIf="includeSpinner" [style.color]="color"><div class="spinner-icon"></div></div>\n      <div id="loading-bar" *ngIf="includeBar" [style.color]="color">\n        <div class="bar" [style.background]="color" [style.width]="progress + \'%\'">\n          <div class="peg"></div>\n        </div>\n      </div>\n    </ng-container>\n  ',preserveWhitespaces:!1,changeDetection:r.k.OnPush,styles:[n("O1Sm")]}),m("design:paramtypes",["function"==typeof(e=void 0!==g&&g)&&e||Object])],t);var e}(),j=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},O=function(){function t(){}return e=t,t.forRoot=function(){return{ngModule:e,providers:[g]}},t=e=j([Object(r.M)({imports:[f.b],declarations:[v],exports:[v]})],t);var e}(),R=n("rDIt"),_=n("uYJe"),x=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),w=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},M=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},I=function(t){function e(e,n,o){var r=t.call(this,e,n)||this;return r.loadingBar=o,r}return x(e,t),e.prototype.request=function(e,n){var o=this,r=t.prototype.request.call(this,e,n);if(n&&!0===n.ignoreLoadingBar)return r;var i=!1;return _._finally.call(R._do.call(r,function(){o.loadingBar.start(),i=!0}),function(){return i&&o.loadingBar.complete()})},e=w([Object(r.C)(),M("design:paramtypes",["function"==typeof(n=void 0!==p.a&&p.a)&&n||Object,"function"==typeof(o=void 0!==p.d&&p.d)&&o||Object,"function"==typeof(i=void 0!==g&&g)&&i||Object])],e);var n,o,i}(p.b),k=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},P=function(){function t(){}return t=k([Object(r.M)({imports:[p.c,O.forRoot()],exports:[p.c,O],providers:[{provide:p.b,useFactory:o,deps:[p.e,p.d,g]}]})],t)}(),D=n("XKz0"),C=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},L=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},T=function(){function t(t){this.loadingBar=t}return t.prototype.intercept=function(t,e){var n=this,o=t.metadata||{};if(o&&!0===o.ignoreLoadingBar)return e.handle(t);var r=!1;return _._finally.call(R._do.call(e.handle(t),function(t){r||t.type!==D.d.Sent?r&&t.type===D.d.Response&&(r=!1,n.loadingBar.complete()):(r=!0,n.loadingBar.start())}),function(){return r&&n.loadingBar.complete()})},t=C([Object(r.C)(),L("design:paramtypes",["function"==typeof(e=void 0!==g&&g)&&e||Object])],t);var e}(),A=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},N=function(){function t(){}return t=A([Object(r.M)({imports:[D.c,O.forRoot()],exports:[D.c,O],providers:[{provide:D.a,useClass:T,multi:!0}]})],t)}(),S=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},q=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},z=function(){function t(t,e){t.events.subscribe(function(t){t instanceof c.d&&e.start(),(t instanceof c.c||t instanceof c.b||t instanceof c.a)&&e.complete()})}return t=S([Object(r.M)({imports:[c.f,O.forRoot()],exports:[c.f,O]}),q("design:paramtypes",["function"==typeof(e=void 0!==c.e&&c.e)&&e||Object,"function"==typeof(n=void 0!==g&&g)&&n||Object])],t);var e,n}(),B=n("bKpL"),G=(n("ACG2"),n("5uCp"),n("5v8a"),this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}),E=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},Z=function(){function t(t,e,n){this.http=t,this.httpClient=e,this.loader=n,this.timer=0}return t.prototype.ngAfterViewInit=function(){},Object.defineProperty(t.prototype,"count",{get:function(){return this.loader._pendingRequests},enumerable:!0,configurable:!0}),t.prototype.startHttpRequest=function(){var t=this;this.users=[],this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(function(e){return t.users=e.json()})},t.prototype.startHttpClientRequest=function(){var t=this;this.users=[],this.httpClient.get("https://jsonplaceholder.typicode.com/users").take(1).subscribe(function(e){return t.users=e})},t.prototype.start=function(){this.loader.start()},t.prototype.complete=function(){this.loader.complete()},t.prototype.startTimer=function(){var t=this;B.Observable.interval(1e3).take(3).subscribe(function(e){return t.timer=e+1},function(e){return t.loader.complete()},function(){return t.loader.complete()}),this.loader.start()},t=G([Object(r.o)({selector:"app-root",template:n("XUmN"),styles:["\n    :host {\n      padding: 64px 32px;\n      display: block;\n    }\n  "]}),E("design:paramtypes",["function"==typeof(e=void 0!==p.b&&p.b)&&e||Object,"function"==typeof(o=void 0!==D.b&&D.b)&&o||Object,"function"==typeof(i=void 0!==g&&g)&&i||Object])],t);var e,o,i}(),F=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},H=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},J=function(){function t(){}return F([Object(r.F)(),H("design:type",String)],t.prototype,"name",void 0),t=F([Object(r.o)({selector:"app-hello",template:""})],t)}(),Q=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},U=function(){function t(){}return t=Q([Object(r.M)({declarations:[Z,J],imports:[a.a,c.f.forRoot([{path:"",component:J},{path:"home",component:J}]),s.a,l.a,u.a,P,N,z],bootstrap:[Z]})],t)}();Object(r._23)(),Object(i.a)().bootstrapModule(U).catch(function(t){return console.log(t)})},O1Sm:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,":host>div{pointer-events:none;-webkit-pointer-events:none;transition:all .35s linear;color:#29d}:host>div .bar{transition:width .35s;background:#29d;position:fixed;z-index:10002;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}:host>div .peg{position:absolute;width:70px;right:0;top:0;height:2px;opacity:.45;-ms-box-shadow:1px 0 6px 1px;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}:host>div:first-child{display:block;position:fixed;z-index:10002;top:10px;left:10px}:host>div:first-child .spinner-icon{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:loading-bar-spinner .4s linear infinite;animation:loading-bar-spinner .4s linear infinite}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),t.exports=t.exports.toString()},XUmN:function(t,e){t.exports='<div class="container">\n  <div class="row">\n    <div class="text-center col">\n      <h1>@ngx-loading-bar/*</h1>\n      <ngx-loading-bar [color]="\'red\'"></ngx-loading-bar>\n      <router-outlet></router-outlet>\n      <p>\n        Automatic loading bar with zero configuration (http, http-client and router)\n      </p>\n      <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">\n    </div>\n    <div class="col">\n      <h3 class="text-center">\n        Number of pending requests:\n        <span class="badge badge-secondary">{{ count }}</span>\n      </h3>\n      <ul>\n        <li>\n          Load request using `@angular/common/http`\n          <div>\n            <button class="btn btn-sm btn-outline-primary" (click)="startHttpClientRequest()" type="button" name="button">Load</button>\n          </div>\n        </li>\n        <li>\n          Load request using `@angular/http`\n          <div>\n            <button class="btn btn-sm btn-outline-primary" (click)="startHttpRequest()" type="button" name="button">Load</button>\n          </div>\n        </li>\n        <li>\n          Display loading-bar on route navigation `@angular/router`\n          <div>\n            <a class="btn btn-sm btn-outline-primary" role="button" [routerLink]="[\'\']" routerLinkActive="disabled" [routerLinkActiveOptions]="{exact:\ntrue}">\n              page \'/\'\n            </a>\n            <a class="btn btn-sm btn-outline-primary" role="button" [routerLink]="[\'home\']" routerLinkActive="disabled" [routerLinkActiveOptions]="{exact:\ntrue}">\n              page \'/test\'\n            </a>\n          </div>\n        </li>\n        <li>\n          Manage manually loading bar\n          <div>\n            <button class="btn btn-sm btn-outline-primary" (click)="start()" type="button" name="button">Start</button>\n            <button class="btn btn-sm btn-outline-primary" (click)="complete()" type="button" name="button">Complete</button>\n          </div>\n        </li>\n        <li>\n          Manage manually loading bar: using rxjs observable (timer 3 seconds)\n          <div>\n            <button class="btn btn-sm btn-outline-primary" (click)="startTimer()" type="button" name="button">Start Timer ({{ timer }})</button>\n          </div>\n        </li>\n        <li>\n          Using <a href="https://material.angular.io/components/progress-bar/overview" target="_blank">Material Progress bar</a>\n          <mat-progress-bar mode="determinate" [value]="loader.progress$|async"></mat-progress-bar>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n'}},[0]);