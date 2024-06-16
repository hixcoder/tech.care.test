import { useState } from "react";
import PatientsBar from "./components/PatientsBar";
import DiagnosticsHistory from "./components/DiagnosticsHistory";
import DiagnosticsList from "./components/DiagnosticsList";
import PatientInfo from "./components/PatientInfo";
import LabResults from "./components/LabResults";

function Dashboard() {
  return (
    <div className="flex flex-row  h-[85vh]">
      <div className="w-1/5">
        <PatientsBar />
      </div>
      <div className="w-3/5 h-full min-h-96 px-4 flex flex-col gap-4 ">
        <DiagnosticsHistory />
        <DiagnosticsList />
      </div>

      <div className="w-1/5 h-[85vh]  flex flex-col gap-4">
        <PatientInfo />
        <LabResults />
      </div>
    </div>
  );
}

export default Dashboard;
