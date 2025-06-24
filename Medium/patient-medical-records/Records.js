import React from "react";

function formatDateDDMMYYYY(date) {
  if (!(date instanceof Date) || isNaN(date)) return "";

  const day = String(date.getDate()).padStart(2, "0"); // DD
  const month = String(date.getMonth() + 1).padStart(2, "0"); // MM (0-based)
  const year = date.getFullYear(); // YYYY

  return `${day}/${month}/${year}`;
}

function Records({ records, nextButtonHandler }) {
  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div
          id="patient-profile"
          data-testid="patient-profile"
          className="mx-auto"
        >
          <h4 id="patient-name">{records[0].userName}</h4>
          <h5 id="patient-dob">DOB: {records[0].userDob}</h5>
          <h5 id="patient-height">Height: {records[0].meta.height} cm</h5>
        </div>
        <button
          className="mt-10 mr-10"
          data-testid="next-btn"
          onClick={nextButtonHandler}
        >
          Next
        </button>
      </div>

      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          {records.map((record, index) => (
            <tr key={record.id}>
              <td>{index + 1}</td>
              <td>{formatDateDDMMYYYY(new Date(record.timestamp))}</td>
              <td>{record.diagnosis.name}</td>
              <td>{record.meta.weight}</td>
              <td>{record.doctor.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
