import Header from './header.component';
import Project from './project.component';

angular
  .module('app.layout', [])
  .component('appHeader', Header)
  .component('project', Project)