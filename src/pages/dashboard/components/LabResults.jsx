import React, { useContext, useEffect, useState } from "react";
import { Globalcontext } from "../../../context/Context";

const LabResults = () => {
  const [labResults, setLabResults] = useState([]);
  const { users, selectedUser, setSelectedUser } = useContext(Globalcontext);

  useEffect(() => {
    // console.log("selectedUser", selectedUser);
    setLabResults(
      Array.isArray(selectedUser.lab_results) ? selectedUser.lab_results : []
    );
  }, [selectedUser]);
  return (
    <main className="w-full rounded-[16px] bg-[#FFFFFF] ">
      <div className="flex flex-col gap-3 px-4 py-8">
        <div>
          <h2 className="capitalize text-[#072635] font-bold  text-[24px]">
            lab results
          </h2>
        </div>
        <div className="py-[2rem] p-4 flex flex-col gap-3 overflow-y-auto h-[35vh]">
          {labResults.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between hover:bg-[#F6F7F8] active:bg-[#dddfe0] cursor-pointer p-2 rounded-md transition-all duration-200 ease-in-out"
              >
                <h2 className="capitalize">{item}</h2>
                <img
                  src="/assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default LabResults;
