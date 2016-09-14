import { provideRouter, RouterConfig }  from '@angular/router';
import {SymfonyComponent} from './symfony.component';
import {Symfony2Component} from './symfony2.component';
import {Symfony3Component} from './symfony3.component';

export const routes: RouterConfig = [
  
  {
    path: '',
    component: SymfonyComponent,

  },

  {
    path: 'all',
    component: SymfonyComponent,

  },
  
  {
    path: 'one',
    component: Symfony2Component,

  },
   {
    path: 'post',
    component: Symfony3Component,

  },

];

export const appRouterProviders = [
  provideRouter(routes)
];


