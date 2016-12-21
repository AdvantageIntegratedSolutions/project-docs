import docs from "../docs/index"

class DashboardCtrl {
  constructor($scope, $rootScope) {
  	this.projects = docs;
  	this.addColor();

    this.hover = false;
  }

  addColor(){
  	const rainbow = ["blue darken-2", "green darken-1", "gray-bar"];
  	this.projects.forEach(function(project, index){
  		project["color"] = rainbow[ index % rainbow.length ];
  	});
  }
}

export default {
  bindings: {},
  templateUrl: 'dashboard/dashboard.component.html',
  controller: DashboardCtrl
}