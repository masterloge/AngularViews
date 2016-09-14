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
var symfonyrest_service_1 = require('./symfonyrest.service');
var function_service_1 = require('./function.service');
var LoginComponent = (function () {
    function LoginComponent(_symfonyservice, _functionservice) {
        this._symfonyservice = _symfonyservice;
        this._functionservice = _functionservice;
        this.results = [];
    }
    LoginComponent.prototype.getlogin = function () {
        var _this = this;
        this._symfonyservice.login(this.user, this.pass).subscribe(//call the post
        function (//call the post
            data) {
            _this.results = data;
            if (_this.results['token'] != "") {
                var token = _this.results['token'];
                _this._functionservice.deleteCookie("Cookieteste");
                _this._functionservice.setCookie("Cookieteste", token, 1);
            }
        }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return alert("Erro User"); }, // in case of failure show this message
        function () { return console.log(_this.results['token']); } //run this code in all cases
         //run this code in all cases
        );
    };
    LoginComponent.prototype.gettoken = function () {
        this.resultcooki = this._functionservice.getCookie("Cookieteste");
    };
    LoginComponent.prototype.deletoken = function () {
        this._functionservice.deleteCookie("Cookieteste");
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: 'app/login.component.html',
        }), 
        __metadata('design:paramtypes', [symfonyrest_service_1.SymfonyService, function_service_1.FunctionService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map