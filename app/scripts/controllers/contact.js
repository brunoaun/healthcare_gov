'use strict';

/**
 * @ngdoc function
 * @name healthcareGovApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the healthcareGovApp
 */
angular.module('healthcareGovApp')
  .controller('ContactCtrl', ['$scope', function ($scope) {
    
    	$scope.reasons = ['Healthcare Marketplace', 'Technical Support', 'Website Feedback'];

    	$scope.formModel={};
    	$scope.formMessage='';
    	$scope.formMessageClass=false;

    	$scope.submitForm = function  (valid) {
    		//console.log($scope.formModel);
    		if(valid){
    			$scope.formMessageClass=true;
    			$scope.formMessage='The Form is Valid.';
    		}else{
    			$scope.formMessageClass=false;
    			$scope.formMessage='The Form is Invalid.';
    		}
    	}
  }]);
