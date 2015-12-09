'use strict';

/**
 * @ngdoc overview
 * @name healthcareGovApp
 * @description
 * # healthcareGovApp
 *
 * Main module of the application.
 */
angular
  .module('healthcareGovApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'Blog'
      })
      .when('/Blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'Blog'
      })
      .when('/Glossary', {
        templateUrl: 'views/glossary.html',
        controller: 'GlossaryCtrl',
        controllerAs: 'Glossary'
      })
      .when('/Contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'Contact'
      })
      .otherwise({
        redirectTo: '/Blog'
      });
  });
