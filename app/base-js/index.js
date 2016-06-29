import BaseJSComponent from './base-js.component';

angular
  .module('app.base-js', [])
  .component('base-js', BaseJSComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('app.base-js', {
        url: '/base-js',
        template: '<base-js></base-js>',
        title: 'Base JS'
      })
  })