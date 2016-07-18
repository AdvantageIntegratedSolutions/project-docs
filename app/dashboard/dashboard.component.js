import docs from "../docs/index"

class DashboardCtrl {
  constructor($scope, $rootScope) {
  	this.projects = docs;
  	this.addColor();

    this.hover = false;

    $scope.processFilter = function(doc){ 
      if(doc.type == "process"){
        return doc;
      };
    }

    $scope.projectFilter = function(doc){ 
      if(doc.type == "project"){
        return doc;
      };
    }
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