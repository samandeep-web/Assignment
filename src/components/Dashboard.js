import React, { useState } from 'react';
import  Calculate  from './Calculate';
import { DisplaySummary } from './DisplaySummary';
import { DisplayGraph } from './DisplayGraph';
import { calculateGraphData } from './GraphData';
export default function  Dashboard(){
  //using hooks
  const [prePayment, setPrePayment] = useState(2500);
	const [mortgageAmount, setMortgageAmount] = useState(100000);
	const [mortgagePeriod, setMortgagePeriod] = useState(25);
	const [interestRate, setInterestRate] = useState(5);

	const totalLoan = mortgageAmount - prePayment;
	const monthlyPayment = ((interestRate / 100 / 12) * totalLoan) / (1 - (Math.pow((1 + (interestRate / 100 / 12)),((0 - mortgagePeriod) * 12))));
	const payBack = monthlyPayment * 12 * mortgagePeriod;
	const totalInterestPaid = payBack - totalLoan;
	const annualPayments = calculateGraphData(totalLoan, mortgagePeriod, interestRate, monthlyPayment);
	


  return(
    <>
			<Calculate
				prePayment={prePayment}
				setPrePayment={setPrePayment}
				mortgageAmount={mortgageAmount}
				setMortgageAmount={setMortgageAmount}
				mortgagePeriod={mortgagePeriod}
				setMortgagePeriod={setMortgagePeriod}
				interestRate={interestRate}
				setInterestRate={setInterestRate}
			/>
      <DisplaySummary
        totalLoan={totalLoan}
				monthlyPayment={monthlyPayment}
				payBack={payBack}
				prePayment={prePayment}
				totalInterestPaid={totalInterestPaid}
				prePayment={prePayment}
				mortgagePeriod={mortgagePeriod}
				mortgageAmount={mortgageAmount}
      />
      <DisplayGraph
				mortgagePeriod={mortgagePeriod}
				annualPayments={annualPayments}
			/>
    </>
	);

  }

