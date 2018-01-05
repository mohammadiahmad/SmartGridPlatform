		setInterval(myMethod, 1000);
		var k=13;
		var prosumer=1;
		var x=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
		var y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		var ctx = document.getElementById("myChart");
		
		var varoption={
			type: 'line',
			data: {
				labels: x,
				datasets: [{
					label: 'Energy Produce ',
					data: y,
					fill:false,
					backgroundColor:"#129141",
					borderColor: "#129141",
					borderWidth: 1,
					lineTension: 0
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				},
				responsive: false,
                maintainAspectRatio: false
                
			}
		};
		
		var myChart = new Chart(ctx, varoption);
		
		var x1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
		var y1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		var ctx1 = document.getElementById("myChart1");
		var varoption1={
			type: 'line',
			data: {
				labels: x1,
				datasets: [{
					label: 'Energy Consumption ',
					data: y1,
					fill:false,
					backgroundColor: "#ef2121",
					borderColor: "#ef2121",
					borderWidth: 1,
					lineTension: 0
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				},
				responsive: false,
                maintainAspectRatio: false
                
			}
		};
		var myChart1 = new Chart(ctx1, varoption1);
		
		var x2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
		var y2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		var ctx2 = document.getElementById("myChart2");
		var varoption2={
			type: 'line',
			data: {
				labels: x2,
				datasets: [{
					label: 'Battery Charge State ',
					data: y2,
					fill:false,
					backgroundColor: "#3220ef",
					borderColor: "#3220ef",
					borderWidth: 1,
					lineTension: 0
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				},
				responsive: false,
                maintainAspectRatio: false
                
			}
		};
		var myChart2 = new Chart(ctx2, varoption2);
		
		$('#prosumer').on('change', function (e) {
			var optionSelected = $("option:selected", this);
			var valueSelected = this.value;
			if(valueSelected==1){
				k=13.5;
				prosumer=1;
				redraw_charts()
			}
			else if(valueSelected==2)
			{
				k=14;
				prosumer=2;
				redraw_charts()
			}
			else if (valueSelected==3)
			{	
				k=15;
				prosumer=3;
				redraw_charts()
			}
			else 
			{
				k=16;
				prosumer=4;
				redraw_charts()
				
			}
		});
		
		function myMethod(){
			//$.ajax()
			y.shift();
			y.push(k);
			myChart.update();
			y1.shift();
			y1.push(k);
			myChart1.update();
			y2.shift();
			y2.push(k);
			myChart2.update();
		};
		
		function redraw_charts(){
			myChart.destroy();
			y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			varoption.data.datasets[0].data=y;
			myChart = new Chart(ctx, varoption);
			
			
			myChart1.destroy();
			y1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			varoption1.data.datasets[0].data=y1;
			myChart1 = new Chart(ctx1, varoption1);
			
			myChart2.destroy();
			y2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			varoption2.data.datasets[0].data=y2;
			myChart2 = new Chart(ctx2, varoption2);
		};
		