(function(){
  'use strict';

  angular.module('yummy') //finds a module called 'yummy'
  .controller('NavCtrl', ['$scope', function($scope){
    $scope.$on('authenticated', function(event, email){
      if(email === 'anonymous'){email = null;}
      $scope.email = email;
    });
  }]);
})();
