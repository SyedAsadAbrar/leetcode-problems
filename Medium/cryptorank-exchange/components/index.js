// https://www.hackerrank.com/challenges/cryptorank-exchange/problem
// React

import React, { useState } from "react";
import Table from "./Table";

const ERRORS = {
  empty: "Amount cannot be empty",
  lessThanZeroZeroOne: "Amount cannot be less than $0.01",
  greaterThanAmountBalance: "Amount cannot exceed the available balance",
};

function Main() {
  const [amountInput, setAmountInput] = useState();
  const [error, setError] = useState();
  const availableBalance = 17042.67;

  const amountInputHandler = (event) => {
    const value = event.target.value;
    setAmountInput(value);
    if (!value) {
      setError(ERRORS.empty);
    } else {
      if (value < 0.01) {
        setError(ERRORS.lessThanZeroZeroOne);
      } else if (value > availableBalance) {
        setError(ERRORS.greaterThanAmountBalance);
      } else {
        setError();
      }
    }
  };

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange ${" "}
            <input
              className="w-10"
              data-testid="amount-input"
              required
              type="number"
              placeholder="USD"
              value={amountInput}
              onChange={amountInputHandler}
            />{" "}
            of my $<span>{availableBalance}</span>:
          </label>
          {error && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {error}
            </p>
          )}
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table amountInput={amountInput} hasError={!!error && amountInput} />
    </div>
  );
}

export default Main;
