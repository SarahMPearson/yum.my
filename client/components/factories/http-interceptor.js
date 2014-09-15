(function(){
  'use strict';

  angular.module('yummy')
  .factory('HttpInterceptor', ['$rootScope', function($rootScope){

    function response(res){
      var email = res.headers('x-authenticated-user');
      if(email){
        $rootScope.$broadcast('authenticated', email);
      }
      return res;
    }


    return {response:response};
  }]);
})();
