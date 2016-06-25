export default class EmployeeService {
  constructor($q, $sce, quickbase) {
    this.$q = $q;
    this.$sce = $sce;
    this.quickbase = quickbase;
  }
}