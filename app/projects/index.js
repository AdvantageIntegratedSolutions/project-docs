import ProjectsComponent from './projects.component';
import Docs from "../docs/_docs";

angular
  .module('app.projects', [])
  .component('projects', ProjectsComponent)
  .config(($stateProvider) => {
    Docs.forEach(function(doc){
      $stateProvider.state('app.' + doc.name.toLowerCase(), {
        url: '/' + doc.name.toLowerCase(),
        template: '<projects></projects>',
        project: doc
      })
    });
  })