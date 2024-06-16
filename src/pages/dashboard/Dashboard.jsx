import { useState } from "react";
import PatientsBar from "./components/PatientsBar";
import DiagnosisHistory from "./components/DiagnosisHistory";

function Dashboard() {
  return (
    <div className="flex flex-row  h-[85vh]">
      <div className="w-1/5">
        <PatientsBar />
      </div>
      <div className="w-3/5 h-full min-h-96 px-4 flex flex-col gap-4 ">
        <DiagnosisHistory />
        {/* <DiagnosticList /> */}
      </div>

      <div className="w-1/5 h-[85vh] px-2 bg-red-500 flex flex-col gap-4">
        {/* <PatientInfo />
        <LabResults /> */}
      </div>
    </div>
  );
}

export default Dashboard;
