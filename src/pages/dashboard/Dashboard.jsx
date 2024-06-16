import { useState } from "react";
import Navbar from "../../components/Navbar";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center text-lg  ">
      <main className="max-w-[1850px]  flex flex-col gap-4 w-full font-manrope p-5">
        <Navbar />
      </main>
    </div>
  );
}

export default Dashboard;
