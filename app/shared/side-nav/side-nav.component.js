class SideNavCtrl {
  constructor($scope) {
    $(".button-collapse").sideNav();
  }
}

export default {
  bindings: {},
  templateUrl: 'shared/side-nav/side-nav.component.html',
  controller: SideNavCtrl
}