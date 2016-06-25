class DashboardCtrl {
  constructor($state, $q) {
    this.$state = $state;
    this.$q = $q;

    this.skills = [
    	{
    		name: "Client Relationship Management",
    		serviceLine: "UX",
    		numberQualified: "0",
    		percentQualified: "0%"
    	},
			{
				name: "Business Development",
				serviceLine: "UX",
				numberQualified: 2,
				percentQualified: "20%"
			},
			{
				name: "Business Analysis",
				serviceLine: "UX",
				numberQualified: 1,
				percentQualified: "10%"
			},
			{
				name: "Scoping/Estimation",
				serviceLine: "UX",
				numberQualified: 4,
				percentQualified: "40%"
			},
			{
				name: "Project Management",
				serviceLine: "UX",
				numberQualified: 4,
				percentQualified: "40%"
			},
			{
				name: "UX Strategy",
				serviceLine: "UX",
				numberQualified: 2,
				percentQualified: "20%"
			},
			{
				name: "UX Research & Testing",
				serviceLine: "UX",
				numberQualified: 2,
				percentQualified: "20%"
			},
			{
				name: "User Zoom",
				serviceLine: "UX",
				numberQualified: 3,
				percentQualified: "30%"
			},
			{
				name: "Interactive Prototyping",
				serviceLine: "UX",
				numberQualified: 1,
				percentQualified: "10%"
			},
			{
				name: "Mobile App Development",
				serviceLine: "UX",
				numberQualified: "0",
				percentQualified: "0%"
			},
			{
				name: "Responsive Design",
				serviceLine: "UX",
				numberQualified: 1,
				percentQualified: "10%"
			},
			{
				name: "Human Centered Design",
				serviceLine: "UX",
				numberQualified: 3,
				percentQualified: "30%"
			}
		]
  }
}

export default {
  bindings: {},
  templateUrl: "dashboard/dashboard.component.html",
  controller: DashboardCtrl
}