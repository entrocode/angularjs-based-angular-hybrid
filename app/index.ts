import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import "./app.animations.css";

import "jquery/dist/jquery.js";
import "angular";
import "angular-animate/angular-animate.js";
import "angular-resource/angular-resource.js";
import "angular-route/angular-route.js";

import "zone.js/dist/zone";
import "reflect-metadata";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {UpgradeAdapter} from '@angular/upgrade';
// import {DowngradeableService} from './ng2/downgradeableService';

import "./app.module";
import "./app.config.js";
import "./app.animations.js";
import "./core/core.module.js";
import "./core/checkmark/checkmark.filter.js";
import "./core/phone/phone.module.js";
import "./core/phone/phone.service.js";
import "./phone-list/phone-list.module.js";
import "./phone-list/phone-list.component.js";
import "./phone-detail/phone-detail.module.js";
import "./phone-detail/phone-detail.component.js";

require("file-loader?name=[path][name].[ext]!./phones/phones.json");

// angular.bootstrap(document.body, ['phonecatApp']);

@NgModule({
  declarations: [],
  imports: [BrowserModule]
})
class MyNg2Module {}

let upgradeAdapter = new UpgradeAdapter(MyNg2Module);

upgradeAdapter.bootstrap(document.body, ['phonecatApp']);