class SideNavCtrl {
  constructor($q, $scope) {
    $(".button-collapse").sideNav();
  }

  anchor(id){
  	$("html, body").animate({ scrollTop: $('#' + id.toLowerCase()).offset().top - 200 }, 1000);
  }
}

export default {
  bindings: { headings: '=' },
  templateUrl: 'shared/side-nav/side-nav.component.html',
  controller: SideNavCtrl
}