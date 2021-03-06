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
var symfonyrest_service_1 = require('./symfonyrest.service');
var Symfony2Component = (function () {
    function Symfony2Component(_symfonyservice) {
        this._symfonyservice = _symfonyservice;
        this.result = [];
    }
    Symfony2Component.prototype.getid = function () {
        var _this = this;
        this._symfonyservice.getoneresult(this.id).then(function (result) { return _this.result = result; });
    };
    Symfony2Component = __decorate([
        core_1.Component({
            selector: 'my-select2',
            templateUrl: 'app/symfony2.component.html',
        }), 
        __metadata('design:paramtypes', [symfonyrest_service_1.SymfonyService])
    ], Symfony2Component);
    return Symfony2Component;
}());
exports.Symfony2Component = Symfony2Component;
//# sourceMappingURL=symfony2.component.js.map