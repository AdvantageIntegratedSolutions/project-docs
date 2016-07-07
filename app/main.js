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
  'app.sideNav',
  'hljs'
];

angular
  .module('app', DEPENDENCIES)
  .config(($stateProvider, $urlRouterProvider, $locationProvider, hljsServiceProvider) => {
    $locationProvider.html5Mode(true);
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

    $urlRouterProvider.otherwise('/project-docs');

    hljsServiceProvider.setOptions({
      tabReplace: ' '
    });
  })
  .run($rootScope => {
    $rootScope.sideNavs = [];

    $rootScope.$on('$stateChangeStart', function(event, nextState){ 
      $rootScope.sideNavs = [];
    })

    $rootScope.$on('$stateChangeSuccess', (event, nextState) => {
      $rootScope.title = nextState.title;
    });
  })

angular.bootstrap(document, ['app']);