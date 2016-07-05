import SideNavComponent from './side-nav.component';
import NavsComponent from './nav/navs.component';

angular
  .module('app.sideNav', [])
  .component('sideNav', SideNavComponent)
  .component('nav', NavsComponent)