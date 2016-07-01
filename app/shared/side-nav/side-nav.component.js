class SideNavCtrl {
  constructor($scope) {
    $(".button-collapse").sideNav();
  }
}

export default {
  bindings: { headings: '=' },
  templateUrl: 'shared/side-nav/side-nav.component.html',
  controller: SideNavCtrl
}