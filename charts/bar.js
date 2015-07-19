google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawMultSeries);


var labels = ['Ordered Meds', 'Given Meds', 'Ordered Labs', 'Arrived Labs', 'Ordered ETT', 'Performed ETT', 'EtCO2', 'BMV', 'Compression Start', 'Compression Stop', 'Personnel/Equipment Arrival', 'Miscellaneous Notes', 'Deposition', 'Shock', 'Other'];

var eventDoc = [70.0, 89.0, 10.8, 9.9, 1.9, 9.1, 0, 5.1, 42.3, 48.0, 58.2, 39.0, 10.0, 5.1, 22.1];

var paper = [0, 89.0, 1.1, 14.8, 0, 6.8, 5.9, 7.0, 0, 0, 0, 13.9, 6.9, 5.1, 11.0];

function drawMultSeries() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Data');
      data.addColumn('number', 'EventDoc');
      data.addColumn('number', 'Paper');
      for (var i = 0; i < labels.length; i++) {
          data.addRow([labels[i], eventDoc[i], paper[i]]);
      }
      var options = {
        title: 'Revised and updated findings from real code testing: n=11',
        bar: {
          groupWidth: 40
        },
        hAxis: {
          title: 'Data Elements',
          viewWindow: {
            min: [0, 0, 0],
            max: [16, 100, 0]
          }
        },
        vAxis: {
          title: 'Number of Data Elements Captured'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }