class SideNavCtrl {
  constructor($q, $scope, $rootScope) {
  	var _self = this;

    _self.navs = $rootScope.sideNavs;

    $rootScope.$watch('sideNavs', function(navs) {
      _self.navs = $rootScope.sideNavs;
      _self.findClosestParents(navs);
    });

    _self.onScroll();
  }

  onScroll(){
    $(window).unbind("scroll");

    var _self = this;


    $(window).scroll(function(){
      var activeNavs = _self.getActiveNavs();

      if(activeNavs.length == 0){
        var currentNav = _self.navs[0];
        currentNav.offset = 0;
      }else{
        var currentNav = activeNavs[activeNavs.length - 1];
      };

      if(_self.atBottom()){
        currentNav = _self.navs[_self.navs.length - 1];
      };

      if(!currentNav){
        currentNav = _self.navs[0];
      };

      _self.updateActivePrimaryNav(currentNav);
    });
  }

  updateHash(anchor){
    var element = $("#" + anchor);
    
    $(element).attr("id", ""); //remove ID to prevent auto-scrolling onchange
    document.location.hash = anchor;
    $(element).attr("id", anchor);
  }

  activeStatus(nav, currentNav){
    var active = 
      (nav.anchor == currentNav.anchor || 
      nav.tier == "secondary-nav" && nav.closestParent == currentNav.closestParent || 
      nav.tier == "secondary-nav" && nav.closestParent == currentNav.anchor || 
      nav.anchor == currentNav.closestParent)

    return active;
  }

  updateActivePrimaryNav(currentNav){
    var _self = this;

    if((currentNav.offset > -50 && currentNav.offset < 0) || !currentNav.offset){
      this.updateHash(currentNav.anchor);
    };

    this.navs.forEach(function(nav){
      if(_self.activeStatus(nav, currentNav)){
        nav["display"] = true;

        var status = nav.anchor == currentNav.anchor || nav.anchor == currentNav.closestParent;
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
    var fromTop = $(window).scrollTop();
    var activeNavs = [];

    this.navs.forEach(function(nav, index){
      if(nav.anchor){
        var navOffset = $("#" + nav.anchor).offset().top - fromTop;
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
        var reverseNavs = navs.slice(0, index).reverse();
      
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