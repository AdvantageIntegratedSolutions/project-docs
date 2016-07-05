import SideNavComponent from './side-nav.component';
import SideNavItemsComponent from './side-nav-item/side-nav-items.component';

angular
  .module('app.sideNav', [])
  .component('sideNav', SideNavComponent)
  .component('sideNavItem', SideNavItemsComponent)