import "../dist/templates";
import "./layout";
import "./shared";
import "./dashboard";
import "./projects/base-js";
import "./projects/quickstart";

const DEPENDENCIES = [
  'ui.router',
  'templates',
  'app.layout',
  'app.shared',
  'app.dashboard',
  'app.base-js',
  'app.quickstart'
];

angular
  .module('app', DEPENDENCIES)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'layout/app-layout.html'
      })

    $urlRouterProvider.otherwise('/dashboard');
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