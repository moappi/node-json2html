
var fs = require('fs');
var vm = require('vm');

var load = function(js) {
    vm.runInThisContext(fs.readFileSync(__dirname+'/'+js), js);
}.bind(this);

load('./json2html.js');

module.exports = json2html;
