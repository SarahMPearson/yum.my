(function(){
  'use strict';

  angular.module('yummy')
  .factory('Register', ['$http', function($http){

    function getMessage(){
      return $http.get('/register');
    }

    return {getMessage:getMessage};
  }]);
})();

