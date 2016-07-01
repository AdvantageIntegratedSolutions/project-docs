import ProjectsComponent from './projects.component';


import BaseDoc from "../docs/basejs.doc";
import QuickStartDoc from "../docs/quickstart.doc";

angular
  .module('app.projects', [])
  .component('projects', ProjectsComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('app.' + BaseDoc.name.toLowerCase(), {
        url: '/' + BaseDoc.name.toLowerCase(),
        template: '<projects></projects>',
        project: BaseDoc
      })

      .state('app.' + QuickStartDoc.name.toLowerCase(), {
        url: '/' + QuickStartDoc.name.toLowerCase(),
        template: '<projects></projects>',
        project: QuickStartDoc
      })
  })