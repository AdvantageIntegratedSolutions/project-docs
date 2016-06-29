import QuickStartComponent from './quickstart.component';

angular
  .module('app.quickstart', [])
  .component('quickstart', QuickStartComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('app.quickstart', {
        url: '/quickstart',
        template: '<quickstart></quickstart>',
        title: 'QuickStart'
      })
  })