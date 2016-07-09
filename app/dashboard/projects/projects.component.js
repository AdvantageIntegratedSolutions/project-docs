class ProjectCtrl {
  constructor() {

  }
}

export default {
  bindings: {
  	name: "@",
  	description: "@",
  	color: "@"
  },
  templateUrl: 'dashboard/projects/projects.component.html',
  controller: ProjectCtrl
}