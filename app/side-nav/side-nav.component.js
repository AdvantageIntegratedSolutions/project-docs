class SideNavCtrl {
  constructor($q, $scope, $rootScope, $location) {
  	var _self = this;

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

    this.findActiveNav(navs);
    
    return navs;
  }

  findActiveNav(navs){
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

  updateActivePrimaryNav(lastAnchor){
    $("#side-nav-headings li").removeClass("active");
    $("#" + lastAnchor + "-nav").addClass("active");
    
    this.updateActiveSecondaryNav(lastAnchor);
  }

  updateActiveSecondaryNav(anchor){
    $(".secondary-nav").hide();
    $("#" + anchor + "-nav").nextUntil(".primary-nav").show();
  }

  updateActiveNavOnClick(anchor){
    var _self = this;
    var childFoundParent;

    this.navs.forEach(function(nav){
      if(anchor == nav.anchor){
        if(nav.tier == "secondary-nav"){
          nav = _self.findParentPrimaryNav(nav, _self.navs)
        }else{
          _self.updateActiveSecondaryNav(nav.anchor);
        };

        nav["status"] = "active"
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