import "../dist/templates";
import "./layout";
import "./shared";
import "./side-nav";

import Docs from "./docs/_docs"

const DEPENDENCIES = [
  'ui.router',
  'templates',
  'app.layout',
  'app.shared',
  'app.sideNav'
];

angular
  .module('app', DEPENDENCIES)
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'layout/app-layout.html'
      })

    Docs.forEach(function(doc){
      $stateProvider.state('app.' + doc, {
        url: '/' + doc,
        templateUrl: 'docs/' + doc + ".doc.html",
        title: doc
      })
    });

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/quickstart');
  })
  .run($rootScope => {
    $rootScope.$on('$stateChangeSuccess', (event, nextState) => {
      $rootScope.title = nextState.title;
    });
  })

angular.bootstrap(document, ['app']);