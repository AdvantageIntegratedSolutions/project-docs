import EmployeesComponent from './employees.component';
import EmployeeService from './employee.service';

angular
  .module('app.employees', [])
  .component('employees', EmployeesComponent)
  .config($stateProvider => {
    $stateProvider
      .state('app.employees', {
        url: '/employees',
        template: '<employees></employees>',
        title: 'By Employee'
      })
  })
  .service('EmployeeService', EmployeeService)