import ProjectsComponent from './projects.component';
import Docs from "../docs/_docs";

angular
  .module('app.projects', [])
  .component('projects', ProjectsComponent)
  .config(($stateProvider) => {
    Docs.forEach(function(doc){

      var name = doc.name.replace(/-/g, "").toLowerCase();
      doc.route = name;

      $stateProvider.state('app.' + name, {
        url: '/' + name,
        template: '<projects></projects>',
        project: doc
      })
    });
  })