"use strict";
/**
 * Created by pedroferreira on 09/08/16.
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var app_route_1 = require('./app.route');
var auth_guard_service_1 = require('./auth-guard.service');
var symfonyrest_service_1 = require('./symfonyrest.service');
var local_storage_1 = require('angular2-local-storage/local_storage');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_route_1.appRouterProviders, http_1.HTTP_PROVIDERS, auth_guard_service_1.AuthGuard, symfonyrest_service_1.SymfonyService, local_storage_1.LocalStorage]);
//# sourceMappingURL=main.js.map