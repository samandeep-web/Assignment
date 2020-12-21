import React from 'react';
import {Line } from 'react-chartjs-2';
import './App.css';

const graphState = {
  labels: [],
  datasets: [{
    label: 'Mortgage Balance',
    	fill: false,
    	lineTension: 0.1,
			backgroundColor: "rgba(255,99,132,0.2)",
			borderColor: "rgba(255,99,132,1)",
			borderWidth: 2,
			hoverBackgroundColor: "rgba(255,99,132,0.4)",
			hoverBorderColor: "rgba(255,99,132,1)",
    	data: []
    },
    {
    	label: 'Principal Repaid',
    	fill: false,
    	lineTension: 0.1,
    	backgroundColor: 'rgba(255,255,255,0.4)',
    	borderColor: 'rgba(75,192,192,1)',
    	borderCapStyle: 'butt',
    	borderDash: [],
    	borderDashOffset: 0.0,
    	borderJoinStyle: 'miter',
    	pointBorderColor: 'rgba(75,192,192,1)',
    	pointBackgroundColor: '#fff',
    	pointBorderWidth: 1,
    	pointHoverRadius: 5,
    	pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    	pointHoverBorderColor: 'rgba(220,220,220,1)',
    	pointHoverBorderWidth: 2,
    	pointRadius: 1,
    	pointHitRadius: 10,
    	data: []
    }
  ]
};
const graphOption = {
	scales: {
       	yAxes: [{
        	ticks: {
           		callback: function(value, index, values) {
           			if (value === 0) {
           				return value;
           			}
           			return '$' + (value / 1000) ;
             		
           		}
         	}
       	}]
    },
    legend: {
    	position: 'bottom'
    },
    tooltips: {
    	callbacks: {
        	label: function(tooltipItems, data, index) {
            	return parseFloat(tooltipItems.value).toLocaleString('en-GB', {style:'currency', currency:'GBP'}) + ' ' + data.datasets[tooltipItems.datasetIndex].label;
        	}
    	}
    }
}

export const DisplayGraph = props => {
	graphState.labels = [];
	graphState.datasets[0].data = [];
	graphState.datasets[1].data = [];
  	for(let loop = 0; loop <= props.mortgagePeriod; loop++) {
      graphState.labels.push('Year '+ loop);
      graphState.datasets[0].data.push(props.annualPayments[loop].balanceAmount);
      graphState.datasets[1].data.push(props.annualPayments[loop].principalRepaidToDate);
	}
    return( 
			<div className="ui black inverted ">
    	 	<div className="ui graph-container" >
	    	<Line 
    				data={graphState}
    				options={graphOption}
    			/>
					
</div></div>
			// <div className="ui black inverted segment">
    	// 	<div className="graph-container">
    	// 		</div></div>
    	
    )
}
