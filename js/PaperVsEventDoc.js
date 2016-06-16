var data = {
	    labels: ['Ordered Meds', 'Given Meds', 'Ordered Labs', 'Arrived Labs',
	    		 'Ordered ETT', 'Performed ETT', 'EtCO2', 'BMV',
	    		 'Compression Start', 'Compression Stop',
	    		 'Personnel/Equipment Arrival', 'Miscellaneous Notes',
	    		 'Deposition', 'Shock', 'Other'],
	    datasets: [
	        {
	            label: "EventDoc",
	            fillColor: "Blue",
	            strokeColor: "Blue",
	            highlightStroke: "CornflowerBlue",
	            data: [70.0, 89.0, 10.8, 9.9, 1.9, 9.1, 0, 5.1, 42.3, 48.0, 58.2,
	                   39.0, 10.0, 5.1, 22.1]
	        },
	        {
	            label: "Paper",
	            fillColor: "Silver",
	            strokeColor: "Silver",
	            highlightStroke: "Gray",
	            data: [0, 89.0, 1.1, 14.8, 0, 6.8, 5.9, 7.0, 0, 0, 0, 13.9, 6.9,
	            	   5.1, 11.0]
	        }
	    ]
	};
	var options = {
		datasetStroke : false,
		barStrokeWidth : 3,
		barValueSpacing : 0,
		barDatasetSpacing : 0

	}
	var ctx = document.getElementById("PaperVsEventDoc").getContext("2d");
	var PaperVsEventDocChart = new Chart(ctx).Bar(data, options);