import docs from "../docs/_docs"

class ProjectCtrl {
  constructor($scope, $rootScope) {
  	this.projects = docs;
  	this.addColor();
  }

  addColor(){
  	const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
  	this.projects.forEach(function(project, index){
  		project["color"] = rainbow[ index % 7 ];
  	});
  }
}

export default {
  bindings: {},
  templateUrl: 'project/projects.component.html',
  controller: ProjectCtrl
}