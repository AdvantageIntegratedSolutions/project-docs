class SideNavCtrl {
  constructor($q, $scope, $rootScope, $location) {
  	var _self = this;

    this.secondaryClicked = false;

    _self.navs = _self.injectNavsOnStateChange();
    $rootScope.$on('$viewContentLoaded', function(event, nextState){ 
    	_self.navs = _self.injectNavsOnStateChange();
		})
  }

  injectNavsOnStateChange(){
    var navs = [];
    
    $(".side-nav-heading").each(function(index, nav){
      nav = { 
        text: $(nav).text(), 
        anchor: $(nav).attr("id"),
        tier: $(nav).hasClass("secondary") ? "secondary-nav": "primary-nav",
      };

      if(index == 0){
        nav["status"] = "active";
      };
      
      navs.push(nav);
    });

    this.onScroll(navs);
    
    return navs;
  }

  onScroll(navs){
    $(window).unbind("scroll");

    var _self = this;

    $(window).scroll(function(){
      var activeNavs = _self.getActiveNavs(navs);
      var lastNav = activeNavs[activeNavs.length - 1];

      if(_self.atBottom()){
        lastNav = navs[navs.length - 1].anchor;
      };

      _self.updateActivePrimaryNav(lastNav);
    });
  }

  setSecondaryClicked(){
    this.secondaryClicked = true;
  }

  updateActivePrimaryNav(lastNav){
    $("#side-nav-headings li").removeClass("active");
    $("#" + lastNav + "-nav").addClass("active");

    if(!this.secondaryClicked){
      document.location.hash = lastNav;
    };

    this.secondaryClicked = false;
    
    this.updateActiveSecondaryNav(lastNav);
  }

  updateActiveSecondaryNav(nav){
    $(".secondary-nav").hide();
    $("#" + nav + "-nav").nextUntil(".primary-nav").show();
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

    navs.forEach(function(nav){
      if(nav.tier != "secondary-nav"){
        var navOffset = $("#" + nav.anchor).offset().top - fromTop;
        if(navOffset < 100){
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