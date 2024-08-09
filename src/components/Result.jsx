import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;
          const totalAmontInvested = item.valueEndOfYear - totalInterest;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmontInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
