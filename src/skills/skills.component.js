class SkillsCtrl {
  constructor($state, $stateParams) {
    this.$state = $state;
    this.$stateParams = $stateParams;

    this.employees = [
    	{ name: "Name 1", level: 2, team: "UX" },
    	{ name: "Name 2", level: 4, team: "UX" },
    	{ name: "Name 3", level: 1, team: "UX" },
    	{ name: "Name 4", level: "0", team: "UX" },
    	{ name: "Name 5", level: 4, team: "UX" },
    	{ name: "Name 6", level: 3, team: "UX" },
    	{ name: "Name 7", level: 1, team: "UX" },
    	{ name: "Name 8", level: "0", team: "UX" },
    	{ name: "Name 9", level: 2, team: "UX" },
    	{ name: "Name 10", level: 2, team: "BC/PM" },
    	{ name: "Name 11", level: 1, team: "BC/PM" },
    	{ name: "Name 12", level: 2, team: "BC/PM" }
    ]
  }
}

export default {
  bindings: { score: '=' },
  templateUrl: 'skills/skills.component.html',
  controller: SkillsCtrl
}