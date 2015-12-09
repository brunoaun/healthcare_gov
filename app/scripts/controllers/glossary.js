'use strict';

/**
 * @ngdoc function
 * @name healthcareGovApp.controller:GlossaryCtrl
 * @description
 * # GlossaryCtrl
 * Controller of the healthcareGovApp
 */
angular.module('healthcareGovApp')
  .controller('GlossaryCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('Http://healthcare.gov/api/glossary.json')
    			.success(function(data){
					$scope.Glossary = data;
    			})
  }]);