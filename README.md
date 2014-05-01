![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-bower


A `bower` generator for use with the Sails command-line interface.


### Installation

Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators.

<!--
```sh
$ npm install sails-generate-bower -g
```
-->


### Usage

##### New project setup

```sh
$ sails new myProject              # create a new sails project
$ cd myProject
$ sails generate bower             # generate/modify the necessary files
$ npm install                      # install modules
$ bower install bootstrap --save   # install required bower packages
$ sails lift                       # lift the server
```
Go to [http://localhost:1337](http://localhost:1337) and view page source, and you'll see the CSS and JS files injected into the template.

##### In a node script

```javascript
var path = require('path');
var sailsgen = require('sails-generate');
var scope = {
	rootPath: path.resolve(__dirname)
};
sailsgen(require('sails-generate-bower'), scope, function (err) {
	if (err) throw err;

	// It worked.
});
```

### Credits
- [The Sails, the Grunt and the Bower](http://milanito.github.io/sails%20javascript/2014/01/10/the-sails-the-grunt-and-the-bower/), by [Matthieu Rondeau](http://milanito.github.io/)
- [sails-generate-gulp-bower](https://github.com/PaulAvery/sails-generate-gulp-bower), by [Paul Avery](https://github.com/PaulAvery)


### Questions?

See `FAQ.md`.



### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>


### License

**[MIT](./LICENSE)**
&copy; 2014 [James Smtih](http://github.com/smies)

[Sails](http://sailsjs.org) is free and open-source under the [MIT License](http://sails.mit-license.org/).

