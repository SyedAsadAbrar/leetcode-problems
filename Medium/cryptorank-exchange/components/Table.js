import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({ amountInput = 0, hasError }) {
  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((currency) => (
            <tr key={currency.code}>
              <td>{currency.name}</td>
              <td>
                1 USD = {currency.rate} {currency.code}
              </td>
              <td>
                {hasError ? "n/a" : (amountInput * currency.rate).toFixed(8)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
