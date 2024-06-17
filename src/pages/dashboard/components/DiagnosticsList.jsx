import React, { useContext, useEffect, useState } from "react";
import { Globalcontext } from "../../../context/Context";

const DiagnosticsList = () => {
  const [diagnosticsList, setDiagnosticsList] = useState([]);
  const { users, selectedUser, setSelectedUser } = useContext(Globalcontext);

  useEffect(() => {
    function getData() {
      if (selectedUser) {
        setDiagnosticsList(
          Array.isArray(selectedUser.diagnostic_list)
            ? selectedUser.diagnostic_list
            : []
        );
      }
    }
    getData();
  }, [selectedUser]);
  return (
    <main className="cursor-pointer w-full h-full ">
      <div className="flex flex-col  bg-[#FFFF] rounded-[16px] w-full  p-5">
        <div className="text-[24px] font-bold capitalize">
          <h2>diagnostics list</h2>
        </div>
        <table className="flex-col gap-16 text-left w-full mt-8">
          <thead>
            <tr className="text-[14px] font-bold text-[#072635] bg-[#F6F7F8] p-[10rem] rounded-[5rem]">
              <th className="p-[.85rem] rounded-l-[5rem] w-1/4 text-left">
                Problem/Diagnostics
              </th>
              <th className="p-[.85rem] w-2/4 text-left">Description</th>
              <th className="p-[.85rem] rounded-r-[5rem] w-1/4 text-left">
                Status
              </th>
            </tr>
          </thead>

          {/* <br /> */}
        </table>
        <div className="h-56 w-full overflow-y-auto">
          <table className="flex-col gap-16 text-left w-full">
            <tbody className="h-2">
              {diagnosticsList.length > 0 ? (
                diagnosticsList?.map((data, index) => {
                  return (
                    <tr
                      key={index}
                      className="ml-[3rem] text-[14px] leading-[24px] border-b-[1px] border-[#F6F7F8]"
                    >
                      <td className="p-[.85rem] w-1/4 text-left">
                        {data.name}
                      </td>
                      <td className="p-[.85rem] w-2/4 text-left">
                        {data.description}
                      </td>
                      <td className="p-[.85rem] w-1/4 text-left">
                        {data.status}
                      </td>
                    </tr>
                  );
                })
              ) : (
                // <p>No diagnostics available</p>
                <tr className="ml-[3rem] text-[14px] leading-[24px] border-b-[1px] border-[#F6F7F8]">
                  <td className="p-[.85rem] w-1/4 text-left">
                    No diagnostics available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default DiagnosticsList;
