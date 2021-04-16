var fs = require('fs');
var path = require('path');
var _ = require('underscore');

var filePath = path.join(__dirname, 'gcharts-template.html');

function gchartsMaps(args, content) {
  var template = fs.readFileSync(filePath).toString();
  var data = {};
  var options = {};

  if (content.length) {
    var cont = content.split('options');
    data = cont[0];
    options = cont[1];
  }
    
  // Output into 
  return _.template(template)({
    id: 'gcharts' + ((Math.random() * 99999) | 0),
    packageType: args[0],
    chartType: args[1],
    data: data,
    options: options,
    width: args[2] || '85%',
    height: args[3] || '300px'
  });
}

hexo.extend.tag.register('gcharts', gchartsMaps, {
  async: true,
  ends: true
});