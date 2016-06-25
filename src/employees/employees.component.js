class EmployeesCtrl {
  constructor(EmployeeService) {
    this.EmployeeService = EmployeeService;

    this.isLoading = true;

    this.skills = [
    	{
    		name: "Client Relationship Management",
    		serviceLine: "BC/PM",
    		level: "0"
    	},
			{
				name: "Business Development",
				serviceLine: "BC/PM",
				level: 2
			},
			{
				name: "Business Analysis",
				serviceLine: "BC/PM",
				level: 1
			},
			{
				name: "Scoping/Estimation",
				serviceLine: "BC/PM",
				level: 4
			},
			{
				name: "Project Management",
				serviceLine: "BC/PM",
				level: 4
			},
			{
				name: "UX Strategy",
				serviceLine: "UX",
				level: 2
			},
			{
				name: "UX Research & Testing",
				serviceLine: "UX",
				level: 2
			},
			{
				name: "User Zoom",
				serviceLine: "UX",
				level: 3
			},
			{
				name: "Interactive Prototyping",
				serviceLine: "UX",
				level: 1
			},
			{
				name: "Mobile App Development",
				serviceLine: "UX",
				level: "0"
			},
			{
				name: "Responsive Design",
				serviceLine: "UX",
				level: 1
			},
			{
				name: "Human Centered Design",
				serviceLine: "UX",
				level: 3
			}
		]

		this.isLoading = false;
  }
}

export default {
  bindings: {},
  templateUrl: 'employees/employees.component.html',
  controller: EmployeesCtrl
}