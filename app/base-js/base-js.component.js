class BaseJSCtrl {
  constructor($q, $scope) {
    this.$q = $q;
  }
}

export default {
  bindings: { score: '=' },
  templateUrl: 'base-js/base-js.component.html',
  controller: BaseJSCtrl
}