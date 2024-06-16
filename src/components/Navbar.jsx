import React, { useEffect, useState } from "react";

const Navbar = () => {
  const navLinks = [
    {
      name: "Overview",
      img: "/assets/home_FILL0_wght300_GRAD0_opsz24.svg",
      index: 0,
    },
    {
      name: "Patients",
      img: "/assets/group_FILL0_wght300_GRAD0_opsz24.svg",
      index: 1,
    },
    {
      name: "Schedule",
      img: "/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg",
      index: 2,
    },
    {
      name: "Message",
      img: "/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg",
      index: 3,
    },
    {
      name: "Transactions",
      img: "/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg",
      index: 4,
    },
  ];
  const [isClicked, setIsClicked] = useState(1);

  return (
    <nav className="">
      <main className="flex items-center justify-between bg-[#FFFFFF] rounded-full h-[72px] px-8">
        <div>
          <img
            src="/assets/TestLogo.svg"
            alt="logo"
            className="h-[48px] w-[210px]"
          />
        </div>
        <div className="flex flex-shrink gap-[24px] flex-row">
          {navLinks.map((element, index) => {
            return (
              <div
                onClick={() => setIsClicked(index)}
                key={index}
                className={`flex gap-2 items-center justify-center font-bold py-2 px-5 transition-all 
                  duration-300 ease-in-out cursor-pointer rounded-[5rem]
                  ${isClicked === index && " bg-[#01F0D0] text-white "}`}
              >
                <img
                  src={element.img}
                  alt={element.name}
                  className="w-[15px] h-[17px]"
                />
                <h2 className="text-[14px] text-[#072635]">{element.name}</h2>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-2 ">
          <div>
            <img
              src="/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
              alt="doctor"
              className="w-[44px] h-[44px]"
            />
          </div>
          <div className="text-[14px]">
            <h2 className="text-[#072635] font-bold">Dr Jose Simons</h2>
            <h2 className="text-[#707070] mt-[-6px]">General Practioner</h2>
          </div>
          <div className="h-20% w-[1px] bg-[#F6F7F8] rounded-md"></div>
          <div className="flex items-center justify-center gap-1">
            <img
              src="/assets/settings_FILL0_wght300_GRAD0_opsz24.svg"
              alt="settings"
              className="w-[17.7px] h-[18px]"
            />
            <img
              src="/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
              alt="more info"
              className="w-[17.7px] h-[18px]"
            />
          </div>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
