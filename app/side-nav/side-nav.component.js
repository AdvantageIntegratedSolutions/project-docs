class SideNavCtrl {
  constructor($q, $scope, $rootScope) {
  	var _self = this;

    this.navs = $rootScope.sideNavs;

    $rootScope.$watch('sideNavs', function(navs) {
      _self.navs = $rootScope.sideNavs;
      _self.findClosestParents(navs);
    }); 

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
      };

      _self.updateActivePrimaryNav(currentNav);
    });
  }

  updateActivePrimaryNav(currentNav){
    if((currentNav.offset > -30 && currentNav.offset < -5) || !currentNav.offset){
      document.location.hash = currentNav.anchor;
    }

    this.navs.forEach(function(nav){
      if(
        nav.anchor == currentNav.anchor || 
        nav.tier == "secondary-nav" && nav.closestParent == currentNav.closestParent || 
        nav.tier == "secondary-nav" && nav.closestParent == currentNav.anchor || 
        nav.anchor == currentNav.closestParent
      ){


        nav["display"] = "";
        if(nav.anchor == currentNav.anchor || nav.anchor == currentNav.closestParent){
          nav["status"] = "active";
        }else{
          nav["status"] = "";
        }
      }else{
        if(nav.tier == "secondary-nav"){
          nav["display"] = "hide"
        };

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
      var navOffset = $("#" + nav.anchor).offset().top - fromTop;
      if(navOffset <= 2){
        nav["offset"] =  navOffset;
        activeNavs.push(nav);
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