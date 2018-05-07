import angular from 'angular';
const app = angular.module('angularWebpack');

app.config(function ($provide) {

  $provide.decorator('$exceptionHandler', function ($delegate) {

      return function (exception, cause) {
          $delegate(exception, cause);

          alert('Error occurred! Please contact admin.');
      };
  });
});
