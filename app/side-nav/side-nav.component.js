class SideNavCtrl {
  constructor($q, $scope, $rootScope) {
  	var _self = this;

    this.navs = $rootScope.sideNavs;
    this.onScroll();
  }

  onScroll(){
    $(window).unbind("scroll");

    var _self = this;

    $(window).scroll(function(){
      var activeNavs = _self.getActiveNavs();
      var currentNav = activeNavs[activeNavs.length - 1];

      if(_self.atBottom()){
        currentNav = _self.navs[_self.navs.length - 1];
      };

      if(!currentNav){
        currentNav = _self.navs[0];
      }

      _self.updateActivePrimaryNav(currentNav);
    });
  }

  updateActivePrimaryNav(currentNav){
    document.location.hash = currentNav.anchor;

    this.navs.forEach(function(nav){
      if(
        nav.anchor == currentNav.anchor || 
        nav.tier == "secondary-nav" && nav.closestParent == currentNav.closestParent || 
        nav.tier == "secondary-nav" && nav.closestParent == currentNav.anchor || 
        nav.anchor == currentNav.closestParent
      ){
        nav["display"] = "";

        //console.log("ANCHOR: " + nav.anchor + " is shown.")

        if(nav.anchor == currentNav.anchor || nav.anchor == currentNav.closestParent){

          //console.log("ANCHOR: " + nav.anchor + " is active.")

          if(nav.tier == "primary-nav"){
            nav["status"] = "active";
          }
        }else{
          nav["status"] = "";
        }
      }else{
        if(nav.tier == "secondary-nav"){
          //console.log("ANCHOR: " + nav.anchor + " is hidden.")
          nav["display"] = "hide"
        };

        //console.log("ANCHOR: " + nav.anchor + " is not active.")

        nav["status"] = "";
      };
    });
  }

  atBottom(){
    return $(window).scrollTop() == ($(document).height() - $(window).height());
  }

  getActiveNavs(navs, fromTop){
    var fromTop = $(window).scrollTop();
    var activeNavs = [];

    this.navs.forEach(function(nav){
      if(nav.tier != "econdary-nav"){
        var navOffset = $("#" + nav.anchor).offset().top - fromTop;
        if(navOffset < 20){
          activeNavs.push(nav);
        };
      }
    });

    return activeNavs;
  }
}

export default {
  bindings: {},
  templateUrl: 'side-nav/side-nav.component.html',
  controller: SideNavCtrl
}