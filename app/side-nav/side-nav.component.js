class SideNavCtrl {
  constructor($q, $scope, $rootScope, $location) {
  	var _self = this;
  	
  	this.url = $location.url();

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
      
  		headings.push(heading);
  	});
    
  	return headings;
  }
}

export default {
  bindings: {},
  templateUrl: 'side-nav/side-nav.component.html',
  controller: SideNavCtrl
}