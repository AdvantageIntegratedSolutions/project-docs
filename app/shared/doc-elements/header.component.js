class DocHeaderCtrl {
  constructor($rootScope, $element, $transclude) {

    var _self = this;
    _self.$rootScope = $rootScope;

    $transclude(function(text){
      var nav = { 
        text: $(text).html(), 
        anchor: $element.attr("id"),
        tier: $element.hasClass("secondary") ? "secondary-nav": "primary-nav",
        status: "",
        display: !$element.hasClass("secondary")
      }

      _self.nav = nav;
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