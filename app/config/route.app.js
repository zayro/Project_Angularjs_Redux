const app = require('angular').module('angularWebpack');

app.config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
      .when('/', {
          templateUrl: 'index.html'
      })
      /**
       * RUTAS DE SERVIDOR
       */
      .when('/404', {
          templateUrl: 'shared/404/404.html'
      })
      /**
       * RUTAS DE MENUS
       */
      .when('/auditar', {
          templateUrl: 'section/report/audit/audit.html',
          controller: ''
      })
      .otherwise({
          redirectTo: '/404'
      })
});
