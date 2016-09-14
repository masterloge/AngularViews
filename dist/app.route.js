"use strict";
var router_1 = require('@angular/router');
var symfony_component_1 = require('./symfony.component');
var symfony2_component_1 = require('./symfony2.component');
var symfony3_component_1 = require('./symfony3.component');
exports.routes = [
    {
        path: '',
        component: symfony_component_1.SymfonyComponent,
    },
    {
        path: 'all',
        component: symfony_component_1.SymfonyComponent,
    },
    {
        path: 'one',
        component: symfony2_component_1.Symfony2Component,
    },
    {
        path: 'post',
        component: symfony3_component_1.Symfony3Component,
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.route.js.map