//https://angular.io/docs/ts/latest/guide/style-guide.html#!#components

class HeroesCtrl {
  constructor($scope) {
  	$scope.heroes = [
  		{ heroName: "Superman", realName: "Clark Kent", mainPower: "Superhuman Strength"},
  		{ heroName: "Batman", realName: "Bruce Wayne", mainPower: "Vast Wealth" },
  		{ heroName: "Spiderman", realName: "Peter Parker", mainPower: "Spider-sense" },
  		{ heroName: "Ironman", realName: "Tony Stark", mainPower: "Iron Man Armor" },
  		{ heroName: "The Flash", realName: "Barry Allen", mainPower: "Speed" }
  	];
  }
}

export default {
  templateUrl: 'heroes/heroes.component.html',
  controller: HeroesCtrl
}