import "../dist/templates";
import "./layout";
import "./shared";
import "./projects";
import "./side-nav";

const DEPENDENCIES = [
  'ui.router',
  'templates',
  'app.layout',
  'app.shared',
  'app.projects',
  'app.sideNav'
];

angular
  .module('app', DEPENDENCIES)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'layout/app-layout.html'
      })

    $urlRouterProvider.otherwise('/projectdocs');
  })
  .run($rootScope => {
    $rootScope.$on('$stateChangeSuccess', (event, nextState) => {
      $rootScope.project = nextState.project;
    });
  })

angular.bootstrap(document, ['app']);