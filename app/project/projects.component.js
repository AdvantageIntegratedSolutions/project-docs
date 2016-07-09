import docs from "../docs/_docs"

class ProjectCtrl {
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
  templateUrl: 'project/projects.component.html',
  controller: ProjectCtrl
}