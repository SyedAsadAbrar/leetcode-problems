import React from "react";
import medical_records from "../medicalRecords";

const flattenedMedicalRecords = medical_records
  .map((record) => record.data)
  .flat();

export const patients = flattenedMedicalRecords.reduce(
  (accumulated, current) => {
    if (
      !accumulated.find((patientObj) => patientObj.userId === current.userId)
    ) {
      return [
        ...accumulated,
        { userId: current.userId, userName: current.userName },
      ];
    }
    return accumulated;
  },
  []
);

function Search({ setRecord, setId, id }) {
  const onPatientChangeHandler = (event) => setId(Number(event.target.value));
  const showRecordsHandler = () => {
    if (!id) {
      alert("Please select a patient name");
      setRecord(false);
      return;
    }
    setRecord(true);
  };
  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select
          data-testid="patient-name"
          defaultValue="0"
          value={id}
          onChange={onPatientChangeHandler}
        >
          <option value="0" disabled>
            Select Patient
          </option>
          {patients.map((patient) => (
            <option key={patient.userId} value={patient.userId}>
              {patient.userName}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" data-testid="show" onClick={showRecordsHandler}>
        Show
      </button>
    </div>
  );
}

export default Search;
