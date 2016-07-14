import DashboardComponent from './dashboard.component';
import ProjectComponent from './projects/projects.component';

angular
  .module('app.dashboard', [])
  .component('dashboard', DashboardComponent)
  .component('project', ProjectComponent)
  .config(($stateProvider) => {
    $stateProvider.state('app.dashboard', {
      url: '/',
      template: '<dashboard></dashboard>',
      title: 'project-library'
    })
  })