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
var Symfony3Component = (function () {
    function Symfony3Component(_symfonyservice) {
        this._symfonyservice = _symfonyservice;
    }
    Symfony3Component.prototype.postadd = function () {
        var _this = this;
        this._symfonyservice.addpost(this.nome).subscribe(//call the post
        function (//call the post
            data) { return _this.resutlpost = JSON.stringify(data); }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return console.log("Error HTTP Post Service"); }, // in case of failure show this message
        function () { return console.log(_this.resutlpost); } //run this code in all cases
         //run this code in all cases
        );
        console.log(this.nome);
    };
    Symfony3Component = __decorate([
        core_1.Component({
            selector: 'my-select3',
            templateUrl: 'app/symfony3.component.html',
        }), 
        __metadata('design:paramtypes', [symfonyrest_service_1.SymfonyService])
    ], Symfony3Component);
    return Symfony3Component;
}());
exports.Symfony3Component = Symfony3Component;
//# sourceMappingURL=symfony3.component.js.map