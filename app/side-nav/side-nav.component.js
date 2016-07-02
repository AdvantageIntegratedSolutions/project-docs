class SideNavCtrl {
  constructor($q, $scope, $rootScope, $location) {
  	var _self = this;

    _self.headings = _self.updateSideNavHeadings();
    $rootScope.$on('$viewContentLoaded', function(event, nextState){ 
    	_self.headings = _self.updateSideNavHeadings();
		})
  }

  updateActive(anchor){
    this.headings.forEach(function(heading){
      if(anchor == heading.anchor){
        heading["status"] = "active"
      }else{
        heading["status"] = ""
      };
    });
  }

  updateSideNavHeadings(){
  	var headings = [];
  	
  	$(".side-nav-heading").each(function(index, heading){
      heading = { 
        text: $(heading).text(), 
        anchor: $(heading).attr("id")
      };

      //one state change, default first nav to active
      //onscroll function controls updating
      if(index == 0){
        heading["status"] = "active";
      };
      
  		headings.push(heading);
  	});

    this.activateHeading(headings);
    
  	return headings;
  }

  activateHeading(headings){
    $(window).unbind("scroll");
    $(window).scroll(function(){
      var fromTop = $(this).scrollTop();
      var currentAnchors = [];

      var bottom = $(window).scrollTop() == ($(document).height() - $(window).height());

      headings.forEach(function(item, index){
        var itemOffset = $("#" + item.anchor).offset().top - fromTop;
        if(itemOffset < 100){
          currentAnchors.push(item.anchor);
        };
      });

      var lastItem = currentAnchors[currentAnchors.length - 1];

      if(bottom){
        lastItem = headings[headings.length - 1].anchor;
      };

      document.location.hash = "#" + lastItem;

      $("#side-nav-headings li").removeClass("active");
      $("#" + lastItem + "-nav").addClass("active");
    });
  }

  activate(anchor){
    this.updateActive(anchor)
  }
}

export default {
  bindings: {},
  templateUrl: 'side-nav/side-nav.component.html',
  controller: SideNavCtrl
}