import React from 'react';
import './App.css';

const localeOptions = {
	style:'currency',
	currency:'CAD',
	minimumFractionDigits: 0,
    maximumFractionDigits: 0
}

export const DisplaySummary = props =>{

  return(
  	<div className="grid__container">
		<div className="ui grey message">
      <i className="home icon"></i>
      <div className="header">
      Mortgage Summary
      </div>
        <p>
      Over the <b>{parseInt(props.mortgagePeriod)}</b> year amortization period, you will:
      <ul><li>have made <b>{parseInt(props.mortgagePeriod)*12}</b> monthly (12x per year) payments of <b>{parseInt(props.monthlyPayment).toLocaleString('en-GB', localeOptions)} </b>.
      </li><li>have paid <b>{parseInt(props.prePayment)}</b> in principal.</li>
      <li>Total Interest paid by you is <b>${parseInt(props.totalInterestPaid)}</b></li>
      <li>Total loan amount was:<b>${parseInt(props.totalLoan)}</b></li> </ul>
      </p>
</div>
<table className="ui grey inverted  table">
  <thead>
    <tr><th>Category</th>
    <th>Value</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h4 className="ui image header">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogAC3irWc9aKLbN8441GFxVD2SlgUhg2nDA&usqp=CAU" className="ui mini rounded image"/>
          <div className="content">
					Total Loan needed:
            <div className="sub header">
          </div>
        </div>
      </h4></td>
      <td>
			{parseInt(props.totalLoan).toLocaleString('en-GB', localeOptions)}
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTytPMFhh-xFu2IjGrfNYSBC0Xi2tw3tigVQ&usqp=CAU" className="ui mini rounded image"/>
          <div className="content">
					Monthly Payment:
            <div className="sub header">
          </div>
        </div>
      </h4></td>
      <td>
			{parseInt(props.monthlyPayment).toLocaleString('en-GB', localeOptions)}
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrA-Q7jgyaUSUQnKWTx_76SulVv01PBWDCtQ&usqp=CAU" className="ui mini rounded image"/>
          <div className="content">
					Total Payback needed:
            <div className="sub header">
          </div>
        </div>
      </h4></td>
      <td>
			{parseInt(props.payBack).toLocaleString('en-GB', localeOptions)}
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_pB-akmTVVvn5wbS5ork0iOo2JVyIyvIhyw&usqp=CAU" className="ui mini rounded image"/>
          <div className="content">
					Total Interest Paid:
            <div className="sub header">
          </div>
        </div>
      </h4></td>
      <td>
			{parseInt(props.totalInterestPaid).toLocaleString('en-GB', localeOptions)}
      </td>
    </tr>
  </tbody>
</table>
		</div>
	)

};