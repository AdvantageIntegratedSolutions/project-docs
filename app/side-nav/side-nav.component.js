class SideNavCtrl {
  constructor($q, $scope, $rootScope, $location) {
  	var _self = this;
  	
  	this.url = $location.url();

    _self.headings = _self.updateSideNavHeadings();
    $rootScope.$on('$stateChangeSuccess', function(event, nextState){ 
    	_self.headings = _self.updateSideNavHeadings();
		})
  }

  updateSideNavHeadings(){
  	var headings = [];
  	
  	$(".side-nav-heading").each(function(index, heading){
  		headings.push($(heading).text());
  	})

    console.log(headings)
  	return headings;
  }
}

export default {
  bindings: {},
  templateUrl: 'side-nav/side-nav.component.html',
  controller: SideNavCtrl
}