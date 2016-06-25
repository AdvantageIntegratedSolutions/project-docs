class LegendCtrl {
  constructor($scope) {
    this.levels = [
      { title: "Level 0", description: "Skill/ability not required" },
      { title: "Level 1", description: "Needs instructions and hands-on guidance to perform/consults with clients" },
      { title: "Level 2", description: "Can perform with minimal assistance" },
      { title: "Level 3", description: "Can perform independently" },
      { title: "Level 4", description: "Can perform independently and can teach others (SME)" }
    ];
  }
}

export default {
  bindings: { score: '=' },
  templateUrl: 'shared/legend/legend.component.html',
  controller: LegendCtrl
}