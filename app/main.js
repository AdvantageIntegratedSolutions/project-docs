import "../dist/templates";
import "./layout";
import "./shared";
import "./dashboard";
import "./projects";

const DEPENDENCIES = [
  'ui.router',
  'templates',
  'app.layout',
  'app.shared',
  'app.dashboard',
  'app.projects'
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
    $rootScope.$on('$stateChangeSuccess', (event, nextState) => {
      $rootScope.project = nextState.project;
    });
  })

angular.bootstrap(document, ['app']);