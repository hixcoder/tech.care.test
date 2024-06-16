import { useState } from "react";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center text-lg text-red-100 ">
      hello world
    </div>
  );
}

export default Dashboard;
