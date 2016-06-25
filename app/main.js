import "../tmp/templates";

import "./heroes"; //example feature
import "./villains"; //example feature
import "./layout";
import "./shared";

const DEPENDENCIES = [
  'ui.router',
  'templates',
  'app.heroes', //example feature
  'app.villains', //example feature
  'app.layout',
  'app.shared'
];

angular
  .module('app', DEPENDENCIES)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'layout/app-layout.html'
      })

    $urlRouterProvider.otherwise('/heroes');
  })
  .run($rootScope => {
    // Change page title based on state
    $rootScope.$on('$stateChangeSuccess', (event, nextState) => {
      $rootScope.setPageTitle(nextState.title);
    });

    // Helper method for setting the page's title
    $rootScope.setPageTitle = (title) => {
      if (title) {
        $rootScope.pageTitle = title;
      }
    };
  })

angular.bootstrap(document, ['app']);