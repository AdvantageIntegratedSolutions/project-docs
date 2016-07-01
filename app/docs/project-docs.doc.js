module.exports = {
	name: "project-docs",

	sections: [
		{ 
			title: "project-docs", 
			content: "project-docs houses and displays JS object driven documentation for common projects. Its purpose is to improve documentation outside of the standard README and standardize some common documentation practicies.",
			navigation: false
		},

		{ 
			title: "Projects", 
			content: "Here are the list of current documented projects:",
			subsections: [
				{ title: "base-js", link: "basejs", content: "JS library for QuickBase API", code: ""},
				{ title: "quickstart", link: "quickstart", content: "JS library for QuickBase API", code: ""}
			]
		}
	]
}