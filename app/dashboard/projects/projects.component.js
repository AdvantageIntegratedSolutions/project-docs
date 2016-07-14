class ProjectCtrl {
  constructor() {

  }
}

export default {
  bindings: {
  	name: "@",
  	description: "@",
  	color: "@",
  	status: "@"
  },
  templateUrl: 'dashboard/projects/projects.component.html',
  controller: ProjectCtrl
}