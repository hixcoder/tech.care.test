import React, { useContext } from "react";
import { Globalcontext } from "../../../context/Context";

const PatientInfo = () => {
  const { users, selectedUser, setSelectedUser } = useContext(Globalcontext);

  return (
    <main className="bg-[#FFFFFF] w-full py-5 px-4 rounded-[16px] flex flex-col  justify-evenly gap-6">
      <div className="flex flex-col items-center gap-3 justify-center">
        <div>
          <img
            src={selectedUser.profile_picture}
            alt={selectedUser.name}
            className="w-[200px] h-[200px] rounded-md"
          />
        </div>
        <h2 className="text-[24px] font-bold my-4">{selectedUser.name}</h2>
      </div>
      <div>
        <div className="flex flex-col items-start justify-between  gap-2 xl:justify-evenly xl:gap-10">
          <div className="flex items-center justify-center gap-4">
            <img src="/assets/BirthIcon.svg" alt="" />
            <div className="flex flex-col">
              <h2 className="text-[14px] text-[#072635]">Date of birth</h2>
              <h2 className="text-[14px] text-[#072635] font-bold capitalize leading-[24px]">
                {selectedUser.date_of_birth}
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-4">
            <img src="/assets/FemaleIcon.svg" alt="" />
            <div>
              <h2 className="text-[14px] text-[#072635]">Gender</h2>
              <h2 className="text-[14px] text-[#072635] font-bold capitalize leading-[24px]">
                {selectedUser.gender}
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-4">
            <img src="/assets/PhoneIcon.svg" alt="" />
            <div>
              <h2 className="text-[14px] text-[#072635]">Contact Info</h2>
              <h2 className="text-[14px] text-[#072635] font-bold capitalize leading-[24px]">
                {" "}
                {selectedUser.phone_number}
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-4  ">
            <img src="/assets/PhoneIcon.svg" alt="" />
            <div>
              <h2 className="text-[14px] text-[#072635]">Emmergency Phone</h2>
              <h2 className="text-[14px] text-[#072635] font-bold capitalize leading-[24px]">
                {selectedUser.emergency_contact}
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-4 ">
            <img src="/assets/InsuranceIcon.svg" alt="" />
            <div>
              <h2 className="text-[14px] text-[#072635]">Insurance Provider</h2>
              <h2 className="text-[14px] text-[#072635] font-bold capitalize leading-[24px]">
                {selectedUser.insurance_type}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="text-[black] bg-[#01F0D0] hover:bg-[#51ffe8] font-semibold
        transition duration-200 ease-in-out
        rounded-[6rem] py-3 px-12"
        >
          show all informatons
        </button>
      </div>
    </main>
  );
};

export default PatientInfo;
