class DocHeaderCtrl {
  constructor($rootScope, $element) {
    var nav = { 
      text: $element.attr("nav-text"), 
      anchor: $element.attr("id"),
      tier: $element.hasClass("secondary") ? "secondary-nav": "primary-nav",
      status: ""
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