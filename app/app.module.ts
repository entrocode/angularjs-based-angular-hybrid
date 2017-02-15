import * as angular from 'angular';

// define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);

// angular.module('phonecatApp').factory('downgradeableService',
//     upgradeAdapter.downgradeNg2Provider(DowngradeableService));
