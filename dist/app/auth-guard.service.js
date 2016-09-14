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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var symfonyrest_service_1 = require('./symfonyrest.service');
var function_service_1 = require('./function.service');
var AuthGuard = (function () {
    function AuthGuard(_symfonyservice, _router, _functionservice) {
        this._symfonyservice = _symfonyservice;
        this._functionservice = _functionservice;
        this.resut = [];
        this.router = _router;
    }
    AuthGuard.prototype.verifytoken = function () {
        var _this = this;
        if (this._functionservice.getCookie("Cookieteste") != '' && this._functionservice.getCookie("Cookieteste") != "undefined") {
            return this._symfonyservice.validtoken().subscribe(function (data) {
                _this.resut = data;
                if (_this.resut['is_valid'] == true) {
                    console.log('true');
                    return true;
                }
                else {
                    _this._functionservice.deleteCookie("Cookieteste");
                    console.log('false');
                    _this.router.navigate(['login']);
                    return false;
                }
            }, function (error) {
                alert("Sessão Expirada");
                _this._functionservice.deleteCookie("Cookieteste");
                console.log('false');
                _this.router.navigate(['login']);
                return false;
            });
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard.prototype.canActivate = function () {
        var token = this.verifytoken();
        while (token == undefined) {
        }
        return token;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [symfonyrest_service_1.SymfonyService, router_1.Router, function_service_1.FunctionService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.service.js.map