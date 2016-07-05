class SideNavCtrl {
  constructor($q, $scope, $rootScope, $location) {
  	var _self = this;

    this.navs = $rootScope.sideNavs;
    this.location = $location;
    this.onScroll();
  }

  onScroll(){
    $(window).unbind("scroll");

    var _self = this;

    $(window).scroll(function(){
      var activeNavs = _self.getActiveNavs();
      var lastNav = activeNavs[activeNavs.length - 1];

      if(_self.atBottom()){
        lastNav = activeNavs[activeNavs.length - 1].anchor;
      };

      _self.updateActivePrimaryNav(lastNav);
    });
  }

  updateActivePrimaryNav(lastNav){
    this.navs.forEach(function(nav){
      nav["status"] = nav.anchor == lastNav ? "active" : "";
    });

    if(!lastNav){
      lastNav = ""
    };

    if(lastNav){
      document.location.hash = lastNav;
    }

    this.updateActiveSecondaryNav(lastNav);    
  }

  updateActiveSecondaryNav(currentAnchor){
    var found = false;

    this.navs.forEach(function(nav){
      if(found){
        if(nav.tier == "primary-nav"){
          found = false;
        }else{
          nav["display"] = "";
        };
      }else{
        if(nav.tier == "secondary-nav"){
          nav["display"] = "hide";
        };
      }

      if(nav.anchor == currentAnchor){
        found = true;
        console.log(currentAnchor)
        nav["status"] = "active"

        console.log(currentAnchor, "active")
      };
    });
  }

  findParentPrimaryNav(nav, navs){
    var childFoundParent;

    var closestPrimaryAnchor = $("#" + nav.anchor)
      .closest('section')
      .find('.side-nav-heading:not(.secondary)').attr("id");

    navs.forEach(function(h){
      if(h.anchor == closestPrimaryAnchor){
        closestPrimaryAnchor = h;
      }
    });

    return closestPrimaryAnchor;
  }

  atBottom(){
    return $(window).scrollTop() == ($(document).height() - $(window).height());
  }

  getActiveNavs(navs, fromTop){
    var fromTop = $(window).scrollTop();
    var activeNavs = [];

    this.navs.forEach(function(nav){
      if(nav.tier != "secondary-nav"){
        var navOffset = $("#" + nav.anchor).offset().top - fromTop;
        if(navOffset < 20){
          activeNavs.push(nav.anchor);
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