
	var data = {
	    labels: ['Date of event', 'ETT intubation by who (ETT/Trach)', 'Patient name',
	    		 'Patient number', 'Was hospital-wide resuscitation response activated?',
				 'Time to first shock (when defibrillated)', 'Unit/Area', 'Time event recognized',
				 'Was this arrest witnessed?', 'Pediatric code?',
				 'Was the patient pulseless at onset?', 'Was the patient conscious at onset?',
				 'Type of breathing at code onset', 'Patient intubated prior to code?',
				 'Event recognized by whom?', 'Patient date of birth', 'Patient outcome',
				 'Patient with pulse became pulseless?', 'Patient defibrillated?',
				 'Rhythm at code onset', 'Event recorder\'s signature',
				 'Physician printed name and signature', 'Type of ventilation',
				 'Time compressions started', 'Time event ended', 'Patient disposition',
				 'ICU/Code team nurse\'s signature', 'AED applied?', 'ETT intubation time',
				 'Pulse Oximeter','Pacemaker on?','Blood Pressure'],
	    datasets: [
	        {
	            label: "Paper",
	            fillColor: "Silver",
	            strokeColor: "Silver",
	            highlightStroke: "Gray",
	            data: [98.76, 98.67, 98.14, 97.52, 94.41, 92.86, 92.55, 91.93, 90.68, 90.06, 90.06,
	            	   89.44, 89.44, 88.20, 85.71, 83.85, 80.75, 78.88, 78.88, 75.78, 75.16, 74.53,
	            	   69.57, 69.15, 68.94, 68.94, 68.94, 68.32, 66.67, 62.73, 58.39, 55.90]
	        }
	    ]
	};
	var options = {
		datasetStroke : false,
		barStrokeWidth : 3,
		barValueSpacing : 0,
		barDatasetSpacing : 0,
		scaleOverride: true,
		scaleSteps: 10,
		scaleStepWidth: 10,
		scaleStartValue: 0,
	}

	var ctx = document.getElementById("Paper").getContext("2d");
	var PaperChart = new Chart(ctx).Bar(data, options);
