class ProjectCtrl {
  constructor($scope, $rootScope) {
  	this.projects = [
  		{ 
  			name: "project-docs", 
  			description: "Platform to develop and store documentation for common libraries, projects and tools",
  			color: "red"
  		},
  		{ 
  			name: "base-js", 
  			description: "JavaScript library built for the QuickBase API.",
  			color: "blue"
  		},
  		{ 
  			name: "quickstart", 
  			description: "JavaScript library built for the QuickBase API.",
  			color: "orange"
  		}
  	];
  }
}

export default {
  bindings: {},
  templateUrl: 'project/projects.component.html',
  controller: ProjectCtrl
}