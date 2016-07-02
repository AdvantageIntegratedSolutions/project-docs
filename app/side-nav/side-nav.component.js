class SideNavCtrl {
  constructor($q, $scope, $rootScope, $location) {
  	var _self = this;

    _self.headings = _self.updateSideNavHeadings();
    $rootScope.$on('$viewContentLoaded', function(event, nextState){ 
    	_self.headings = _self.updateSideNavHeadings();
		})
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

      headings.forEach(function(item, index){
        var itemOffset = $("#" + item.anchor).offset().top - fromTop;
        if(itemOffset < 100){
          currentAnchors.push(item.anchor);
        };
      });

      var lastItem = currentAnchors[currentAnchors.length - 1];
      document.location.hash = "#" + lastItem;

      $("#side-nav-headings li").removeClass("active");
      $("#" + lastItem + "-nav").addClass("active");
    });
  }
}

export default {
  bindings: {},
  templateUrl: 'side-nav/side-nav.component.html',
  controller: SideNavCtrl
}