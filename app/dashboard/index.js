import DashboardComponent from './dashboard.component';

angular
  .module('app.dashboard', [])
  .component('dashboard', DashboardComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>',
        title: 'Documentation Dashboard'
      })
  })