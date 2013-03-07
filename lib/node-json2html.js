
var fs = require('fs');
var vm = require('vm');

var load = function(js) {
    vm.runInThisContext(fs.readFileSync(__dirname+'/'+js), js);
}.bind(this);

load('./json2html-0.4.1.js');

module.exports = json2html;
