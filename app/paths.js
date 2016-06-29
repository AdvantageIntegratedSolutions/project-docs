module.exports = {
	bootstrap: "./docs/app/main.js",
  javascript: "./docs/app/**/*.js",
  html: "./docs/app/index.html",
  css: "./docs/app/**/*.{sass,scss,css}",
  templates: "./docs/app/**/!(index).html",
  output: "./docs/dist",
  htmlBuild: "./docs/dist/index.html"
};