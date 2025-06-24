import React, { useState, useMemo } from "react";
import "./App.css";
import "h8k-components";
import Search, { patients } from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";

const title = "Patient Medical Records";

const App = () => {
  const [patientId, setPatientId] = useState();
  const [showRecords, setShowRecords] = useState(false);

  const records = useMemo(
    () =>
      medical_records
        .map((record) => record.data)
        .flat()
        .filter((record) => record.userId === patientId),
    [patientId]
  );

  const nextButtonHandler = () => {
    const patientIds = patients.map((patientObj) => patientObj.userId);
    let currIndex = patientIds.findIndex(
      (patientIdFromList) => patientIdFromList === patientId
    );
    currIndex = currIndex + 1 === patientIds.length ? 0 : currIndex + 1;
    setPatientId(patientIds[currIndex]);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search
          id={patientId}
          setId={setPatientId}
          setRecord={setShowRecords}
        />
        {patientId && showRecords && !!records.length && (
          <Records records={records} nextButtonHandler={nextButtonHandler} />
        )}
      </div>
    </div>
  );
};

export default App;
