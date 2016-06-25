# quickstart
**QuickBase automatic build system**

quickstart is an local development environment and deployment tool for QuickBase. gulp-base utilizes gulp and its plugins to improve and automate the development environment and deployment for QuickBase.

**Please note:** for simple pages(Exact Forms, JS buttons, misc pages, etc.) this current version may not be the best option. This environment is more suited for full single-page applications.

## System Dependencies
* Node ^5.5.0 ( recommend using nvm to manage node versions )

## Start New Project
* Create new repo on Github.
* Clone 'gulp-base' repo.
```shell
  git clone https://github.com/AdvantageIntegratedSolutions/gulp-base.git <NEW APP NAME>
```

* Update the git origin remote with your app's repo url.
```shell
  git remote set-url origin <new repo git url>
```
* run "npm install"

* Complete configuration in app.json.
```js
  {
    "name": "Time Tracker", //name of app
    "description": "Simple daily time tracker app", //short description of app
    "client": "Coca-Cola", //client name
    "realm": "ais", //quickbase realm
    "dbid": "bjbsgxy2r", //quickbase main db
    "username": "uSeRnAmE", //quickbase username
    "password": "pAsSwOrD", //quickbase password
    "token": "8t82d3b3sxnfxiu2pbepcjfd", //quickbase app token
    "origin": "https://github.com/AdvantageIntegratedSolutions/<NEW APP NAME>.git", //url
    "authors": ["dev@advantagequickbase.com"], //list of authors
    "bootstrap": "./src/main.js" //the initialization file for your Browserify modules. leave blank for concatenation instead.
  }
```

## Password Management
Set the "GULPPASSWORD" ENV variable to avoid committing password. Simply keep the password value empty in app.json or remove it.

```shell
  sudo vi ~/.bash_profile; export GULPPASSWORD=PASSWORD;
```

## Local Development
Start up a local server on "localhost:3000" with "gulp local" or "gulp watch".

Changes in the src directly will trigger an automatic live-reload of your browser.

## Css & JavaScript
Sass and ES6 are totally allowed (but not mandatory).

To include your compiled JS and CSS, include the following in your index.html file. This will work for both local devleopment and after deploying to QuickBase, as these paths are auto resolved to their corresponding QuickBase urls after running "gulp deploy".
```html
  <script src="https://s3.amazonaws.com/ais_libraries/BaseJS/4.8/base.min.js"></script>
  <script src="bundle.js"></script>
  <link rel="stylesheet" type="text/css" href="bundle.css">
```

## Modules
gulp-base allows for either file concatenation or es6/requirejs modules via Browserify to compile your javascript files. To use Browserify give the "bootstrap" property in app.json the file path to the initialization javascript file for your app (the top of the .js file dependency tree). For straight concatentation simply leave the "bootstrap" property blank.

**Please be aware:** while you can bundle all dependencies using Browserify such as jQuery or underscore, the page editor in the QuickBase pages begins to become unresponsive if the code page is too large. Instead, try to use modules to include your own files and use script includes where possible so the browser can cache that nonsense.

## Deployment
Deploy to QuickBase with "gulp deploy".

Deploying will automatically compile src code, push to QuickBase, and replace local paths in index.html with their corrseponding QuickBase urls for the bundled css and js files. HTML files are all uploaded to QB separately, so if you are referencing them in your code you will need to update those references manually to reflect their QB urls (for now, stay tuned for an update here).

## File Structure
All development has to be done inside the src/ directory, otherwise there are no enforced file structures. All files ending in .js will be run through Babel and Browserify (if applicable), and all .css, .scss, or .sass files will be complied with Sass and sent through autoprefixer before being concatenated into a bundle.css file.

```
+-- dist ( production distribution, pages uploaded to QB )
|   +-- bundle.css ( compiled styles for production )
|   +-- bundle.js ( compiled js for local )
|   +-- index.html ( compiled html for local )
+-- build
|   +-- tasks ( all gulp tasks )
|   +-- paths.js ( defines file paths for gulp to reference )
+-- node_modules ( gulp dependencies )
+-- app
|   +-- index.html ( duh )
+-- tmp
|   +-- bundle.css ( compiled styles for local )
|   +-- bundle.js ( compiled js for local )
|   +-- index.html ( compiled html for local )
+-- app.json
+-- package.json
+-- gulpfile.js ( loads the tasks defined in build/tasks/ )
+-- README.md ( fresh readme for project )
```