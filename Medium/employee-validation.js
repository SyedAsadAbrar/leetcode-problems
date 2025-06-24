// https://www.hackerrank.com/challenges/employee-validation/problem
// React

import React, { useMemo, useState } from "react";

function EmployeeValidationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeID] = useState();
  const [joiningDate, setJoiningDate] = useState();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    employeeId: "",
    joiningDate: "",
  });
  const [hasTouched, setHasTouched] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (hasError) {
      return false;
    }
    setErrors({
      name: "",
      email: "",
      employeeId: "",
      joiningDate: "",
    });
    setJoiningDate("");
    setEmployeeID("");
    setEmail("");
    setName("");
    setHasTouched(false);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setHasTouched(true);

    switch (name) {
      case "name": {
        const lengthCheck = value.length >= 4;
        const typeCheck = /^[A-Za-z\s]+$/.test(value);
        if (!(lengthCheck && typeCheck)) {
          setErrors({
            ...errors,
            name: "Name must be at least 4 characters long and only contain letters and spaces",
          });
          return;
        }
        setErrors({ ...errors, name: "" });
        break;
      }
      case "email": {
        const formatCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!formatCheck) {
          setErrors({
            ...errors,
            email: "Email must be a valid email address",
          });
          return;
        }
        setErrors({ ...errors, email: "" });
        break;
      }
      case "employeeId": {
        const formatCheck = /^\d{6}$/.test(value);
        if (!formatCheck) {
          setErrors({
            ...errors,
            employeeId: "Employee ID must be exactly 6 digits",
          });
          return;
        }
        setErrors({ ...errors, employeeId: "" });
        break;
      }
      case "joiningDate": {
        const dateCheck = new Date(value).getTime() < Date.now();
        if (!dateCheck) {
          setErrors({
            ...errors,
            joiningDate: "Joining Date cannot be in the future",
          });
          return;
        }
        setErrors({ ...errors, joiningDate: "" });
        break;
      }
      default:
        break;
    }
  };

  const hasError = useMemo(
    () =>
      errors.name.length !== 0 ||
      errors.email.length !== 0 ||
      errors.employeeId.length !== 0 ||
      errors.joiningDate.length !== 0,
    [errors]
  );

  const allFieldsFilled = useMemo(
    () =>
      hasTouched &&
      !!name.length &&
      !!(employeeId && employeeId.length) &&
      !!(joiningDate && joiningDate.length) &&
      !!email.length,
    [name, email, employeeId, joiningDate, hasTouched]
  );

  return (
    <form
      className="layout-column align-items-center mt-20"
      onSubmit={onSubmitHandler}
      onChange={onChangeHandler}
    >
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          data-testid="input-name-test"
        />
        {!!errors.name.length && <p className="error mt-2">{errors.name}</p>}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {!!errors.email.length && <p className="error mt-2">{errors.email}</p>}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeID(e.target.value)}
          placeholder="Employee ID"
        />
        {!!errors.employeeId.length && (
          <p className="error mt-2">{errors.employeeId}</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={joiningDate}
          onChange={(e) => setJoiningDate(e.target.value)}
          placeholder="Joining Date"
        />
        {!!errors.joiningDate.length && (
          <p className="error mt-2">{errors.joiningDate}</p>
        )}
      </div>
      <button
        data-testid="submit-btn"
        type="submit"
        disabled={!hasTouched || hasError || !allFieldsFilled}
      >
        Submit
      </button>
    </form>
  );
}

export default EmployeeValidationForm;
