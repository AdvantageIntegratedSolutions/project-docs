class BaseJSCtrl {
  constructor($q, $scope) {
    this.$q = $q;
  }
}

export default {
  bindings: {},
  templateUrl: 'projects/base-js/base-js.component.html',
  controller: BaseJSCtrl
}