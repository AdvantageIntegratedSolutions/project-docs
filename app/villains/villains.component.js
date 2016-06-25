//https://angular.io/docs/ts/latest/guide/style-guide.html#!#components

class VillainsCtrl {
  constructor($scope) {
    $scope.villains = [
      { villainName: "Joker", nemesis: "Batman", mainPower: "Criminal Mastermind"},
      { villainName: "Venom", nemesis: "Spiderman", mainPower: "Spider-sense" },
      { villainName: "Dr. Doom", nemesis: "Fantastic Four", mainPower: "Can exchange minds with others" },
      { villainName: "Lex Luthor", nemesis: "Superman", mainPower: "Genius-level Intellect" },
      { villainName: "Green Goblin", nemesis: "Spiderman", mainPower: "Super-human Strength" }
    ];
  }
}

export default {
  bindings: { score: '=' },
  templateUrl: 'villains/villains.component.html',
  controller: VillainsCtrl
}