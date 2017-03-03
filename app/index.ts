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

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UpgradeModule} from '@angular/upgrade/static';

import {PhonecatAppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(PhonecatAppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['phonecatApp']);
});