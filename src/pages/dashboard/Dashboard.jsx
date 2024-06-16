import { useState } from "react";
import PatientsBar from "./components/PatientsBar";

function Dashboard() {
  return (
    <div className="grid grid-cols-[367px,1fr,300px] h-full">
      <PatientsBar />
      <div className="flex flex-col gap-4 xl:grid-rows-none">
        {/* <DiagnosisHistory />
        <DiagnosticList /> */}
      </div>

      <div className="grid grid-rows-[90%,1fr] xl:grid-rows-none gap-4">
        {/* <PatientInfo />
        <LabResults /> */}
      </div>
    </div>
  );
}

export default Dashboard;
