module.exports = {
	bootstrap: "./app/main.js",
  javascript: "app/**/*.js",
  html: "app/index.html",
  css: "app/**/*.{sass,scss,css}",
  templates: "app/**/!(index).html",
  output: "./dist"
};