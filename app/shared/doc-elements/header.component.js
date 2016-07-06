class DocHeaderCtrl {
  constructor($rootScope, $element, $transclude) {
    this.$rootScope = $rootScope;

    $transclude(function(text){
      var nav = { 
        text: $(text).html(), 
        anchor: $element.attr("id"),
        tier: $element.hasClass("secondary") ? "secondary-nav": "primary-nav",
        status: "",
        display: $element.hasClass("secondary") ? "hide": "",
      }

      $rootScope.sideNavs.push(nav);
    });
  }
}

export default {
  bindings: {},
  templateUrl: "shared/doc-elements/header.component.html",
  controller: DocHeaderCtrl,
  transclude: true
}