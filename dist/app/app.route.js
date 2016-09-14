"use strict";
var router_1 = require('@angular/router');
var symfony_component_1 = require('./symfony.component');
var symfony2_component_1 = require('./symfony2.component');
var symfony3_component_1 = require('./symfony3.component');
var login_component_1 = require('./login.component');
var auth_guard_service_1 = require('./auth-guard.service');
exports.routes = [
    {
        path: '',
        component: login_component_1.LoginComponent
    },
    {
        path: 'all',
        component: symfony_component_1.SymfonyComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'one',
        component: symfony2_component_1.Symfony2Component,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'post',
        component: symfony3_component_1.Symfony3Component,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.route.js.map