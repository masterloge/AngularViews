"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by pedroferreira on 09/08/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var symfonyrest_service_1 = require('./symfonyrest.service');
var function_service_1 = require('./function.service');
var AppComponent = (function () {
    function AppComponent(router) {
        this.title = 'Test';
        this.router = router;
        console.log(router);
    }
    AppComponent.prototype.getCookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s\+/g, "");
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    };
    AppComponent.prototype.showMenu = function () {
        return (this.getCookie("Cookieteste") != '' && this.getCookie("Cookieteste") != "undefined");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n    <div><h2>{{resultcooki}}</h2></div>\n\t<nav>\n\t<div *ngIf=\"showMenu()\"> \n    <a [routerLink]=\"['/all']\" routerLinkActive=\"active\" >All</a>\n    <a [routerLink]=\"['/one']\" >ONE</a>\n    <a [routerLink]=\"['/post']\" >Post</a>\n    </div>\n    <a [routerLink]=\"['/login']\" >Login</a>\n\t</nav>\n    <router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [symfonyrest_service_1.SymfonyService, function_service_1.FunctionService]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map