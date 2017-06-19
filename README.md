# Charity website template - ARCHIVED

Nice fluid website template, designed by [cssauthor](http://www.cssauthor.com/) and coded by [Maxim Orlov](https://github.com/orlovmax). 

Demo: [http://website-templates.github.io/charity_responsive-template](http://website-templates.github.io/charity_responsive-template/)

![Mockup demo](screenshots/pic.jpg)
Product mockup created with [http://frame.lab25.co.uk/](http://frame.lab25.co.uk/)

## Contents
* [Folder structure](#folder-and-file-structure)
* [Requirements](#requirements)
	- [Editorconfig](#editorconfig)
* [Site configuration](#site-configuration)
* [Tasks](#tasks)
	- [Start](#start)
	- [Dev](#dev)
	- [Build](#build)
	- [Rebuild](#rebuild)
	- [Server](#server)
* [Live reload](#live-reload)
* [License](#license)

## Folder and file structure
```
./
├── .editorconfig
├── README.md
|
├── grunt_tasks/                               * grunt tasks
|   ├── config/                                * grunt tasks config
|   |   ├── paths.js
|   |   ├── settings.js
|   |   └── aliases.js
|   |
|   └── task.js
│
├── Gruntfile.js
├── package.json
|
├── screenshots/                               * responsive test screenshots
|
├── dev/                                       * site source
|   ├── coffee/                                * coffee scripts
|   │
|   ├── images/                                * image sources
|   │
|   ├── pug/                                   * templates
|   |   ├── blocks/                            * blocks library
|   |   |   └── block.pug
|   |   ├── helpers/                           * helper mixins
|   |   ├── vendor/                            * third-party code
|   |   ├── layouts/                           * page layouts
|   |   └── pages/                             * main pages templates
|   │
|   ├── js/                                    * compiled and source js
|   |   ├── vendor/                            * vendor scripts library
|   |   ├── lib/                               * site scripts library
|   |   ├── head.js                            * head scripts
|   |   └── body.js                            * vendor scripts
|   │
|   ├── stylus/                                * stylus preprocessor styles
|   |   ├── blocks/                            * blocks library
|   |   |   └── block.styl
|   |   ├── helpers/                           * mixins and vars
|   |   ├── vendor/                            * third-party code
|   |   ├── custom.styl
|   |   ├── noscript.styl
|   |   └── screen.styl
|   │
|   ├── helpers/                               * helper files
|   |   ├── favicon.ico
|   |   └── .htaccess
|   │
|   ├── fonts/                                 * font sources
|   │
|   └── data/                                  * configs and data for templates
│
└── build/                                     * built source
	├── index.html
	├── page.html
	|
	└── static/                                * static assets
		├── css/                               * minified styles
		|
		├── images/                            * minified images
		│
		├── js/                                * minified assembled js
		|
		└── fonts/                             * @font-face-ready webfonts

```

## Requirements:
- [Node.js](http://nodejs.org/)
- Build sytem: [Grunt](http://gruntjs.com/)
- Optionally: [Editorconfig](http://editorconfig.org/)

#### Editorconfig
This project have .editorconfig file at the root that used by your code editor with editorconfig plugin. It describes codestyle like indent style, trailing whitespaces etc. See more details [here](http://editorconfig.org/)

## Site configuration
This boilerplate use Pug templates with external data configs. 
Main settings can be found in `dev/data/config.json` file. And they're available for usage in templates with `config.key-name`

## Tasks
Here comes groups of grunt tasks with some explanations

#### Start 
Install bower dependencies and place them to dev folders.
Grunt: `grunt start`

* Install bower components
* Remove gitkeep files

#### Dev
Dev task with static server.
Grunt: `grunt dev`

* Compile Stylus stylesheets
* Add vendor prefixes in css
* Combine media queries in css files
* Compile Pug templates
* Sync helpers and other assets
* Sync images
* Run BrowserSync static server with live reload using 
* Watch for changes and run dev task


#### Build 
Build task.
Grunt: `grunt build`

* Minify images
* Minify stylesheets
* Minify html
* Run BrowserSync static server 


#### Rebuild 
Regenerate and build project by running all tasks.
Grunt: `grunt rebuild`

* Compile Stylus stylesheets
* Add vendor prefixes in css
* Combine media queries in css files
* Compile Pug templates
* Sync helpers and other assets
* Sync images
* Minify images
* Minify stylesheets
* Minify html

#### Server 
Run server without watching for changes.
Grunt: `grunt server`

* Run BrowserSync static server

## Live reload 
This project uses BrowserSync as static server with enabled and configured live reload option.

## License
[MIT](https://github.com/website-templates/charity_responsive-template/blob/master/LICENSE.md)
