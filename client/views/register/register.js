(function(){
  'use strict';

  angular.module('yummy')
  .controller('RegisterCtrl', ['$scope', function($scope){
    $scope.user = {};
    $scope.register = function(){
      $scope.user = {};
    };
  }]);
})();
