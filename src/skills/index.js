import SkillsComponent from './skills.component';
import SkillService from './skill.service';

angular
  .module('app.skills', [])
  .component('skills', SkillsComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('app.skills', {
        url: '/skills',
        template: '<skills></skills>',
        title: 'By Skill'
      })
  })