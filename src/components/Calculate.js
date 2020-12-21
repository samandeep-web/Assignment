import React from 'react';
import  './App.css';


const localeOptions = {
	style:'currency',
	currency:'CAD',
	minimumFractionDigits: 0,
    maximumFractionDigits: 0
}
export default function Calculate(props) {
	return(
	<div className="ui container"> 
   <div className="ui grey inverted segment">
     <div className="ui inverted form">
	  	<div className="ui grid">		
			<div className="row">	
			<div className="fourteen wide mobile four wide tablet four wide computer column fd">
			  <a className="ui tag label">Mortgage Amount</a></div>
				<div className="fourteen wide mobile four wide tablet four wide computer column fd">
				<input 
					type="number"
					id="mortgageAmount"  
					min="50000" 
					max="750000" 
					step="1000" 
					value={props.mortgageAmount} 
					onChange={(event) => 
						props.setMortgageAmount(event.target.value)
					} /></div>
			<div className="fourteen wide mobile four wide tablet four wide computer column fd">
				<span className="grid__item--header">{parseInt(props.mortgageAmount).toLocaleString('en-GB', localeOptions)}</span></div>
			</div></div><br/><br/>
			<div className="ui three row grid">
			<div className="row">	
			<div className="fourteen wide mobile four wide tablet four wide computer column fd">
			  <a className="ui tag label">Pre-Deposit Amount</a></div>
				<div className="fourteen wide mobile four wide tablet four wide computer column fd">
				<input 
					type="number"
					id="prePayment" 
					min="1000" 
					max="150000" 
					step="1000" 
					value={props.prePayment}
         			onChange={(event) =>
						props.setPrePayment(event.target.value)
         			} /></div>
        <div className="fourteen wide mobile four wide tablet four wide computer column fd">
			<span className="grid__item--header">{parseInt(props.prePayment).toLocaleString('en-GB', localeOptions)}</span></div>
			</div></div>
			<div className="ui three row grid">
			<div className="row">	
			<div className="fourteen wide mobile four wide tablet four wide computer column fd">
			  <a className="ui tag label">Mortgage Period</a></div>
				<div className="fourteen wide mobile four wide tablet four wide computer column fd">
				<input 
					type="range"
					className="grid__item--range-slider"
					id="mortgagePeriod"  
					min="5" 
					max="35" 
					step="1" 
					value={props.mortgagePeriod} 
					onChange={(event) => 
						props.setMortgagePeriod(event.target.value)
					} /></div>
				<div className="fourteen wide mobile four wide tablet four wide computer column fd">
				<span className="grid__item--header">{props.mortgagePeriod} Years</span>
			</div></div></div>
			<div className="ui three row grid">
			<div className="row">	
			<div className="fourteen wide mobile four wide tablet four wide computer column fd">
			  <a className="ui tag label">Interest Rate</a></div>
				<div className="fourteen wide mobile four wide tablet four wide computer column fd">
				<input 
					type="range"
					className="grid__item--range-slider"
					id="interestRate"  
					min="0.1" 
					max="8" 
					step="0.1" 
					value={props.interestRate} 
					onChange={(event) => 
						props.setInterestRate(event.target.value)
					} /></div><div className="fourteen wide mobile four wide tablet four wide computer column fd">
				<span className="grid__item--header">{props.interestRate} %</span>
			</div></div></div>
		</div></div>
</div>	);
}