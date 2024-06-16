import React, { useContext } from "react";
import { Globalcontext } from "../../../context/Context";

const PatientsBar = () => {
  const { users } = useContext(Globalcontext);
  console.log("users", users);
  return (
    <main className="w-full  rounded-[16px] bg-[#FFFFFF] pb-[1rem] ">
      <div className=" flex flex-col gap-4">
        <div className=" w-full flex items-center justify-between gap-4 px-4 py-6">
          <h2 className="text-[24px] font-bold text-[#072635]">Patients</h2>
          <img src="/assets/search_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
        </div>
        <div className="relative flex flex-col gap-0 h-full max-h-[75vh] overflow-y-auto items-start justify-between pr-4">
          {users.map((user, index) => {
            return (
              <div
                key={"user" + index}
                className={`cursor-pointer w-full flex items-center justify-between    py-4 px-4 
                transition duration-100 ease-in-out
                ${
                  user.name === "Jessica Taylor"
                    ? "bg-[#D8FCF7]  hover:bg-[#D8FCF7]"
                    : "hover:bg-[#d8fcf78e]"
                }`}
              >
                <div className="flex flex-row gap-3 items-center justify-between">
                  <img
                    src={user.profile_picture}
                    alt={user.name}
                    className="w-[44px] h-[44px] rounded-[50%]"
                  />
                  <div className="flex flex-col  ">
                    <h2 className="text-[#072635]">{user.name}</h2>
                    <div className="flex text-[#707070]">
                      <h3>{user.gender},</h3>
                      <h3>{user.age}</h3>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default PatientsBar;
