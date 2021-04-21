# hexo-tag-gcharts
A hexo tag for inserting [google charts](https://developers.google.com/chart/interactive/docs/gallery) in your blog

Version: 0.1.0
Compatible with Hexo Version 5

## install
```bash
$ npm install hexo-tag-gcharts --save
```

## Usage
```
{% gcharts [packageName] [chartType] [width] [height] %}
\\google charts datas goes here
options
\\google charts options goes here
{% endgcharts %}
```
| Name   | Type   | Default | Description                               |
| ------ | ------ | ------- | ----------------------------------------- |
| packageName  | string | corechart    | The name of google chart packages |
| chartType  | string | Bar    | The type of google chart |
| width  | string | 85%     | The width of chart, responsive in window. |
| height | string | 300px   | The height of chart (px)                  |

## Example
### CandlestickChart
[GoogleChart CandlestickChart'page](https://developers.google.com/chart/interactive/docs/gallery/candlestickchart)
#### Google Charts Example
```html
<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]
      // Treat first row as data as well.
    ], true);

    var options = {
      legend:'none'
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));

    chart.draw(data, options);
  }
    </script>
  </head>
  <body>
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
  </body>
</html>
```

packageName : `corechart`
chartType : `CandlestickChart`
data :
```
[
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]
      // Treat first row as data as well.
    ], true
```
options :
```
{
  legend:'none'
}
```

#### marktdown Usage
```
{% gcharts corechart CandlestickChart '85%' '400px' %}
[
    ['Mon', 20, 28, 38, 45],
    ['Tue', 31, 38, 55, 66],
    ['Wed', 50, 55, 77, 80],
    ['Thu', 77, 77, 66, 50],
    ['Fri', 68, 66, 22, 15]
], true
options
{
  legend:'none'
}
{% endgcharts %}
```

For more details, visit [Demo](https://skyksit.com/hexo/hexo-use-google-charts/) here.

* I used a clone of [hexo-tag-googlecharts](https://github.com/juampi92/hexo-tag-googlecharts)