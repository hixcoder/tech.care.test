import React, { useContext } from "react";

const LabResults = () => {
  // const { labResults } = useContext(Globalcontext);
  const labResults = [
    "Blood test",
    "Urine test",
    "X-ray",
    "MRI Scan",
    "CT Scan",
    "ECG",
    "ECG",
    "ECG",
    "EEG",
  ];
  return (
    <main className="w-full rounded-[16px] bg-[#FFFFFF] ">
      <div className="flex flex-col gap-3 px-4 py-8">
        <div>
          <h2 className="capitalize text-[#072635] font-bold  text-[24px]">
            lab results
          </h2>
        </div>
        <div className="py-[2rem] p-4 flex flex-col gap-3 overflow-y-auto h-[35vh]">
          {labResults.map((list, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex items-center justify-between hover:bg-[#F6F7F8] active:bg-[#dddfe0] cursor-pointer p-2 rounded-md transition-all duration-200 ease-in-out"
                >
                  <h2 className="capitalize">{list}</h2>
                  <img
                    src="/assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                    alt=""
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default LabResults;
