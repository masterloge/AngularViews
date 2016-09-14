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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var function_service_1 = require('./function.service');
var SymfonyService = (function () {
    function SymfonyService(http, _functionservice) {
        this.http = http;
        this._functionservice = _functionservice;
        this.urlstring = "http://127.0.0.1:8000/api/";
    }
    SymfonyService.prototype.getresults = function () {
        var token = this._functionservice.getCookie("Cookieteste");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
        var options = new http_1.RequestOptions({ headers: headers, method: "get" });
        return this.http.get(this.urlstring + "status", options).toPromise().then(function (response) { return response.json(); });
    };
    SymfonyService.prototype.getoneresult = function (id) {
        var token = this._functionservice.getCookie("Cookieteste");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
        var options = new http_1.RequestOptions({ headers: headers, method: "get" });
        return this.http.get(this.urlstring + "status/" + id, options).toPromise().then(function (response) { return response.json(); });
    };
    SymfonyService.prototype.addpost = function (nome) {
        var token = this._functionservice.getCookie("Cookieteste");
        var body = JSON.stringify({ "nome": nome });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.urlstring + "statuses", body, options)
            .map(function (res) { return res.json(); });
    };
    SymfonyService.prototype.login = function (user, pass) {
        var body = JSON.stringify({ "user": user, "pass": pass });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http.post(this.urlstring + "logins", body, options)
            .map(function (res) { return res.json(); });
    };
    SymfonyService.prototype.validtoken = function () {
        var token = this._functionservice.getCookie("Cookieteste");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
        var options = new http_1.RequestOptions({ headers: headers, method: "get" });
        return this.http.get(this.urlstring + "getisvalid", options).map(function (response) { return response.json(); });
    };
    SymfonyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, function_service_1.FunctionService])
    ], SymfonyService);
    return SymfonyService;
}());
exports.SymfonyService = SymfonyService;
//# sourceMappingURL=symfonyrest.service.js.map