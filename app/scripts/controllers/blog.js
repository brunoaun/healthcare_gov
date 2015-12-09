'use strict';

/**
 * @ngdoc function
 * @name healthcareGovApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the healthcareGovApp
 */
angular.module('healthcareGovApp')
  .controller('BlogCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('Http://healthcare.gov/api/blog.json')
    			.success(function(data){
					$scope.blogs = data;
    			})
  }]);
