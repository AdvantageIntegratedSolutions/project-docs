class SideNavCtrl {
  constructor($q, $scope, $location) {
  	this.url = $location.url();
    $(".button-collapse").sideNav();
  }
}

export default {
  bindings: {},
  templateUrl: 'side-nav/side-nav.component.html',
  controller: SideNavCtrl
}