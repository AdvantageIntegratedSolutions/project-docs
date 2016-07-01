class SideNavCtrl {
  constructor($q, $scope) {
    $(".button-collapse").sideNav();
  }
}

export default {
  bindings: { headings: '=' },
  templateUrl: 'side-nav/side-nav.component.html',
  controller: SideNavCtrl
}