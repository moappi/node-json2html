node-json2html
=========

What is node-json2html?
------------------
node-json2html is a node modules that implements the HTML templating engine <a href='https://github.com/moappi/json2html'>json2html</a> for node.js

Ok so what is json2html?
------------------
json2html is a javascript HTML templating engine which converts json object to html using json transforms.  Note that this node-json2html package includes the latest version of json2html core.

For more information check out the <a href='https://github.com/moappi/json2html'>json2html</a> core library

Also implemented for jquery <a href='https://github.com/moappi/jquery.json2html'>jquery.json2html</a>

Installation
------------

	npm install node-json2html


Usage
-----
```javascript
	var json2html = require('node-json2html');

	var data = [{'male':'Bob','female':'Jane'},{'male':'Rick','female':'Ann'}];

	var transform = {'tag':'div','html':'${male} likes ${female}'};
        
	var html = json2html.transform(data,transform);
```

Why json2html?
--------------
Instead of writing HTML templates json2html relies on JSON transforms to convert a source JSON objects to html.  The benefit of using a JSON transform is that they are already readable by the browser and DO NOT require any compilation before use.   In addition, json2html allows the following

+	Short hand notation for mapping data objects to markup
+	Event binding to DOM objects (exclusively with jquery.json2html) 
+	Use of inline functions to allow for complex logic during transformation 
+	Dynamic building of transform objects

How do I start?
--------------
Check out our website <a href='http://www.json2html.com'>www.json2html.com</a> for more information including detailed usage notes, downloadable examples and more!

