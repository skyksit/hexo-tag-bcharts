var fs = require('fs');
const { format } = require('path');
var path = require('path');
var _ = require('underscore');

var filePath = path.join(__dirname, 'bcharts-template.html');

function bchartsMaps(args, content) {
  var template = fs.readFileSync(filePath).toString();
  var data = {};
  var timeouts = {};

  if (content.length) {
    var cont = content.split('timeout');
    data = cont[0];
    timeouts = cont[1];
  }
    
  // Output into 
  return _.template(template)({
    id: 'bcharts' + ((Math.random() * 99999) | 0),
    data: data,
    timeouts: timeouts,
    width: args[0] || '85%',
    height: args[1] || '300px'
  });
}

hexo.extend.tag.register('bcharts', bchartsMaps, {
  async: true,
  ends: true
});