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
var SymfonyComponent = (function () {
    function SymfonyComponent(_symfonyservice) {
        this._symfonyservice = _symfonyservice;
        this.results = [];
    }
    SymfonyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._symfonyservice.getresults().then(function (results) { return _this.results = results; });
    };
    SymfonyComponent = __decorate([
        core_1.Component({
            selector: 'my-select',
            templateUrl: 'app/symfony.component.html',
        }), 
        __metadata('design:paramtypes', [symfonyrest_service_1.SymfonyService])
    ], SymfonyComponent);
    return SymfonyComponent;
}());
exports.SymfonyComponent = SymfonyComponent;
//# sourceMappingURL=symfony.component.js.map