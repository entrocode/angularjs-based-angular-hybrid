'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    template: require('./phone-list.template.html'),
    controller: ['Phone', 'downgradeableService',
      function PhoneListController(Phone, downgradeableService) {
        this.phones = Phone.query();
        this.orderProp = 'age';
        this.downgradeMessage = downgradeableService.getMessage();
      }
    ]
  });
