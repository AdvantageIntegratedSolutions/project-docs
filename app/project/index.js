import ProjectComponent from './projects.component';
import ProjectItemComponent from './project-item/project-items.component';

angular
  .module('app.project', [])
  .component('projects', ProjectComponent)
  .component('projectItem', ProjectItemComponent)
  .config(($stateProvider) => {
    $stateProvider.state('app.projects', {
      url: '/',
      template: '<projects></projects>',
      title: 'Projects'
    })
  })