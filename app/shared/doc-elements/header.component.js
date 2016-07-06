class DocHeaderCtrl {
  constructor($rootScope, $element) {
    this.$rootScope = $rootScope;
    var nav = { 
      text: $element.attr("nav-text"), 
      anchor: $element.attr("id"),
      tier: $element.hasClass("secondary") ? "secondary-nav": "primary-nav",
      status: "",
      display: $element.hasClass("secondary") ? "hide": "",
    }

    $rootScope.sideNavs.push(nav);
  }
}

export default {
  bindings: {},
  templateUrl: "shared/doc-elements/header.component.html",
  controller: DocHeaderCtrl,
  transclude: true
}