'use strict';


// Declare app level module which depends on filters, and services
angular.module('Peon', ['Peon.filters', 'Peon.services', 'Peon.directives', 'Peon.controllers'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/status',   {templateUrl: 'partials/status.html',   controller: 'CtrlStatus'});
  $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'CtrlSettings'});
  $routeProvider.when('/backup',   {templateUrl: 'partials/backup.html',   controller: 'CtrlBackup'});
  $routeProvider.when('/restore',  {templateUrl: 'partials/restore.html',  controller: 'CtrlRestore'});

  $routeProvider.otherwise({redirectTo: '/status'});
}]);