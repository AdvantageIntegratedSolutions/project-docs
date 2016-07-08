class SideNavCtrl {
  constructor($scope, $rootScope, $location) {
  	const _self = this;
    _self.$location = $location;

    _self.navs = $rootScope.sideNavs;

    $rootScope.$watch('sideNavs', function(navs) {
      _self.navs = $rootScope.sideNavs;
      _self.findClosestParents(navs);
      _self.activateOnPageLoad();
      Prism.highlightAll();
    });

    _self.onScroll();
  }

  onScroll(){
    $(window).unbind("scroll");

    const _self = this;
    $(window).scroll(function(){
      _self.scrolling();
    });
  }

  activateOnPageLoad(){
    const hash = this.$location.hash();
    if(!hash){
      this.navs[0].status = "active";
    };
  };

  scrolling(){
    const _self = this;
    const activeNavs = _self.getActiveNavs();
    let currentNav;

    if(activeNavs.length == 0){
      currentNav = _self.navs[0];
      currentNav.offset = 0;
    }else{
      currentNav = activeNavs[activeNavs.length - 1];
    };

    if(_self.atBottom()){
      currentNav = _self.navs[_self.navs.length - 1];
    };

    if(!currentNav){
      currentNav = _self.navs[0];
    };

    _self.updateActivePrimaryNav(currentNav);
  }

  updateHash(anchor){
    const element = $("#" + anchor);
    
    $(element).attr("id", ""); //remove ID to prevent auto-scrolling onchange
    document.location.hash = anchor;
    $(element).attr("id", anchor);
  }

  activeStatus(nav, currentNav){
    const active = 
      (nav.anchor == currentNav.anchor || 
      nav.tier == "secondary-nav" && nav.closestParent == currentNav.closestParent || 
      nav.tier == "secondary-nav" && nav.closestParent == currentNav.anchor || 
      nav.anchor == currentNav.closestParent)

    return active;
  }

  updateActivePrimaryNav(currentNav){
    const _self = this;

    if((currentNav.offset > -50 && currentNav.offset < 0) || !currentNav.offset){
      this.updateHash(currentNav.anchor);
    };

    this.navs.forEach(function(nav){
      if(_self.activeStatus(nav, currentNav)){
        nav["display"] = true;

        const status = nav.anchor == currentNav.anchor || nav.anchor == currentNav.closestParent;
        nav["status"] = status ? "active" : "";
      }else{
        nav["display"] = nav.tier != "secondary-nav";
        nav["status"] = "";
      };
    });
  }

  atBottom(){
    return $(window).scrollTop() == ($(document).height() - $(window).height());
  }

  getActiveNavs(){
    const fromTop = $(window).scrollTop();
    let activeNavs = [];

    this.navs.forEach(function(nav, index){
      if(nav.anchor){
        const navOffset = $("#" + nav.anchor).offset().top - fromTop;
        if(navOffset <= 2){
          nav["offset"] =  navOffset;
          activeNavs.push(nav);
        };
      };
    });

    return activeNavs;
  }

  findClosestParents(navs){
    navs.forEach(function(nav, index){
      if(nav.tier == "secondary-nav"){
        const reverseNavs = navs.slice(0, index).reverse();
      
        reverseNavs.forEach(function(originalNav){
          if(originalNav.tier == "primary-nav" && !nav.closestParent){
            nav.closestParent = originalNav.anchor;
          };
        });
      }
    });
  }
}

export default {
  bindings: {},
  templateUrl: 'side-nav/side-nav.component.html',
  controller: SideNavCtrl
}