import "../dist/templates";
import "./layout";
import "./shared";
import "./base-js";

const DEPENDENCIES = [
  'ui.router',
  'templates',
  'app.layout',
  'app.shared',
  'app.base-js'
];

angular
  .module('app', DEPENDENCIES)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'layout/app-layout.html'
      })

    $urlRouterProvider.otherwise('/base-js');
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