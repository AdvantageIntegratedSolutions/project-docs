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

    if(nav.tier == "secondary-nav"){
      nav["closestParent"] = this.findClosestParent(nav);
    };
  
    $rootScope.sideNavs.push(nav);
  }

  findClosestParent(nav){
    var closestParent;

    if(nav.tier == "secondary-nav"){
      var navs = this.$rootScope.sideNavs.reverse();
      
      navs.forEach(function(originalNav){
        if(originalNav.tier == "primary-nav" && !closestParent){
          closestParent = originalNav.anchor;
        };
      });
    }

    return closestParent;
  }
}

export default {
  bindings: {},
  templateUrl: "shared/doc-elements/header.component.html",
  controller: DocHeaderCtrl,
  transclude: true
}