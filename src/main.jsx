import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import "./styles/index.css";
import Navbar from "./components/Navbar.jsx";
import { GlobalState } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalState>
      <main className="flex items-center justify-center text-lg  ">
        <div className="max-w-[1850px]  flex flex-col gap-4 w-full font-manrope p-5 h-screen text-[#072635]">
          <Navbar />
          <Dashboard />
        </div>
      </main>
    </GlobalState>
  </React.StrictMode>
);
