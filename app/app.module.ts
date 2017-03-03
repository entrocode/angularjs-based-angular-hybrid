import {NgModule} from '@angular/core';
import {Location, PathLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule, downgradeInjectable, downgradeComponent} from '@angular/upgrade/static';

import { DowngradeableService } from './ng2/downgradeableService';
import { DowngradeableComponent } from './ng2/downgradeableComponent';

declare let angular: any;
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
])
  .factory('downgradeableService', downgradeInjectable(DowngradeableService))
  .directive(
    'downgradeableComponent',
    downgradeComponent({ component: DowngradeableComponent }) as angular.IDirectiveFactory
    );

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    DowngradeableComponent
  ],
  entryComponents: [
    DowngradeableComponent
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    Location,
    DowngradeableService
  ]
})
export class PhonecatAppModule {
  ngDoBootstrap() {}
}