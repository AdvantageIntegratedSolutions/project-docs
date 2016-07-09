class ProjectItemCtrl {
  constructor($scope, $rootScope) {

  }
}

export default {
  bindings: {
  	name: "@",
  	description: "@",
  	color: "@"
  },
  templateUrl: 'project/project-item/project-items.component.html',
  controller: ProjectItemCtrl
}