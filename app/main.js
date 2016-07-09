import "../dist/templates";
import "./layout";
import "./shared";
import "./side-nav";
import "./dashboard";

import docs from "./docs/_docs"

const DEPENDENCIES = [
  'ui.router',
  'templates',
  'app.layout',
  'app.shared',
  'app.sideNav',
  'app.dashboard'
];

angular
  .module('app', DEPENDENCIES)
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    
    $locationProvider.html5Mode(true);
    
    $stateProvider.state('app', {
      abstract: true,
      templateUrl: 'layout/app-layout.html'
    });

    //set the state route and template for each doc
    docs.forEach(doc => {
      $stateProvider.state('app.' + doc.name, {
        url: '/' + doc.name,
        templateUrl: 'docs/' + doc.name + ".doc.html",
        title: doc.name,
        controller: function($scope, $timeout){
          $scope.$on('$viewContentLoaded', (event, nextState) => {
            $timeout(function() {
              Prism.highlightAll(); //highlight new code tags
            }, 0);
          });
        } 
      })
    });

    $urlRouterProvider.otherwise('/');
  })
  .run($rootScope => {
    //track all compiled header directives.
    $rootScope.sideNavs = [];

    $rootScope.$on('$stateChangeStart', function(event, nextState){ 
      //clear out list of header directives that drive side-nav
      $rootScope.sideNavs = [];
    })

    $rootScope.$on('$stateChangeSuccess', (event, nextState) => {
      $rootScope.title = nextState.title;
      $rootScope.home = nextState.url == "/";
    });
  })

angular.bootstrap(document, ['app']);