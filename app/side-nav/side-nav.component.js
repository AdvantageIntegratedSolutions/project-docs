class SideNavCtrl {
  constructor($q, $scope, $rootScope, $location) {
  	var _self = this;

    _self.headings = _self.updateSideNavHeadings();
    $rootScope.$on('$viewContentLoaded', function(event, nextState){ 
    	_self.headings = _self.updateSideNavHeadings();
		})
  }

  updateActive(anchor){
    var _self = this;

    var childFoundParent;

    this.headings.forEach(function(heading){
      if(anchor == heading.anchor){
        if(heading.tier == "secondary-nav"){
          var closest = $("#" + heading.anchor)
            .closest('section')
            .find('.side-nav-heading:not(.secondary)').attr("id");

          _self.headings.forEach(function(h){
            if(h.anchor == closest){
              childFoundParent = closest
              heading = h;
            }
          });
        }else{
          $(".secondary-nav").hide();
          $("#" + heading.anchor + "-nav").nextUntil(".primary-nav").show();
        };

        heading["status"] = "active"
      }else{
        if(childFoundParent != heading.anchor){
          heading["status"] = ""
        };
      };
    });
  }

  updateSideNavHeadings(){
  	var headings = [];
  	
  	$(".side-nav-heading").each(function(index, heading){
      heading = { 
        text: $(heading).text(), 
        anchor: $(heading).attr("id"),
        tier: $(heading).hasClass("secondary") ? "secondary-nav": "primary-nav",
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

        if(item.tier != "secondary-nav"){
          var itemOffset = $("#" + item.anchor).offset().top - fromTop;
          if(itemOffset < 100){
            currentAnchors.push(item.anchor);
          };
        }
      });

      var lastItem = currentAnchors[currentAnchors.length - 1];

      if(bottom){
        lastItem = headings[headings.length - 1].anchor;
      };

      document.location.hash = "#" + lastItem;
      $(".secondary-nav").hide();
      $("#" + lastItem + "-nav").nextUntil(".primary-nav").show();

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