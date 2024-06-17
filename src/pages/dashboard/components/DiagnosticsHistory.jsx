import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext, useEffect, useState } from "react";
import { Globalcontext } from "../../../context/Context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// {
//   "name": "Brandon Mitchell",
//   "gender": "Male",
//   "age": 36,
//   "profile_picture": "https://fedskillstest.ct.digital/3.png",
//   "date_of_birth": "1988-11-17",
//   "phone_number": "(833) 322-4325",
//   "emergency_contact": "(586) 969-4847",
//   "insurance_type": "Secure Reinsurance Brokers",
//   "diagnosis_history": [
//       {
//           "month": "March",
//           "year": 2024,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 122,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 109,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 62,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 19,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 97,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "February",
//           "year": 2024,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 103,
//                   "levels": "Normal"
//               },
//               "diastolic": {
//                   "value": 107,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 76,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 25,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 97,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "January",
//           "year": 2024,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 167,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 111,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 94,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 16,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 99,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "December",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 179,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 96,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 71,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 26,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 103,
//               "levels": "Higher than Average"
//           }
//       },
//       {
//           "month": "November",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 135,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 81,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 70,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 17,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 103,
//               "levels": "Higher than Average"
//           }
//       },
//       {
//           "month": "October",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 155,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 104,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 77,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 15,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 100,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "September",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 95,
//                   "levels": "Normal"
//               },
//               "diastolic": {
//                   "value": 96,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 71,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 18,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 99,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "August",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 157,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 61,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 99,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 30,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 97,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "July",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 133,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 115,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 90,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 20,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 102,
//               "levels": "Higher than Average"
//           }
//       },
//       {
//           "month": "June",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 110,
//                   "levels": "Normal"
//               },
//               "diastolic": {
//                   "value": 84,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 81,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 21,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 99,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "May",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 120,
//                   "levels": "Normal"
//               },
//               "diastolic": {
//                   "value": 64,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 68,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 15,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 99,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "April",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 138,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 78,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 76,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 13,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 103,
//               "levels": "Higher than Average"
//           }
//       },
//       {
//           "month": "March",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 125,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 116,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 93,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 17,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 103,
//               "levels": "Higher than Average"
//           }
//       },
//       {
//           "month": "February",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 155,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 107,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 64,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 17,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 97,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "January",
//           "year": 2023,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 108,
//                   "levels": "Normal"
//               },
//               "diastolic": {
//                   "value": 109,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 85,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 16,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 100,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "December",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 170,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 95,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 87,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 16,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 98,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "November",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 170,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 94,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 97,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 22,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 101,
//               "levels": "Higher than Average"
//           }
//       },
//       {
//           "month": "October",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 127,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 78,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 86,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 23,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 103,
//               "levels": "Higher than Average"
//           }
//       },
//       {
//           "month": "September",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 154,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 62,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 87,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 26,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 103,
//               "levels": "Higher than Average"
//           }
//       },
//       {
//           "month": "August",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 146,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 67,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 96,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 28,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 98,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "July",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 163,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 75,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 61,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 18,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 99,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "June",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 126,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 60,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 76,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 17,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 98,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "May",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 180,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 108,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 68,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 25,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 102,
//               "levels": "Higher than Average"
//           }
//       },
//       {
//           "month": "April",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 147,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 66,
//                   "levels": "Lower than Average"
//               }
//           },
//           "heart_rate": {
//               "value": 91,
//               "levels": "Normal"
//           },
//           "respiratory_rate": {
//               "value": 19,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 100,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "March",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 126,
//                   "levels": "Higher than Average"
//               },
//               "diastolic": {
//                   "value": 91,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 69,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 29,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 97,
//               "levels": "Normal"
//           }
//       },
//       {
//           "month": "February",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 116,
//                   "levels": "Normal"
//               },
//               "diastolic": {
//                   "value": 94,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 61,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 30,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 102,
//               "levels": "Higher than Average"
//           }
//       },
//       {
//           "month": "January",
//           "year": 2022,
//           "blood_pressure": {
//               "systolic": {
//                   "value": 95,
//                   "levels": "Normal"
//               },
//               "diastolic": {
//                   "value": 116,
//                   "levels": "Normal"
//               }
//           },
//           "heart_rate": {
//               "value": 76,
//               "levels": "Lower than Average"
//           },
//           "respiratory_rate": {
//               "value": 29,
//               "levels": "Normal"
//           },
//           "temperature": {
//               "value": 100,
//               "levels": "Normal"
//           }
//       }
//   ],
//   "diagnostic_list": [
//       {
//           "name": "Type 2 Diabetes",
//           "description": "A chronic condition that affects the way the body processes blood sugar (glucose).",
//           "status": "Actively being treated"
//       },
//       {
//           "name": "Hypertension",
//           "description": "A condition in which the force of the blood against the artery walls is too high.",
//           "status": "Cured"
//       }
//   ],
//   "lab_results": [
//       "Urinalysis",
//       "Complete Blood Count (CBC)",
//       "Mammography",
//       "Hemoglobin A1C",
//       "Bone Density Scan"
//   ]
// }
export default function DiagnosticsHistory() {
  const { users, selectedUser, setSelectedUser } = useContext(Globalcontext);
  const [systolic, setSysTolic] = useState([]);
  const [diastolic, setDiastolic] = useState([]);
  const [labels, setLabels] = useState([]);
  const [systolicAverage, setSystolicAverage] = useState(0);
  const [diastolicAverage, setDiastolicAverage] = useState(0);
  const [cardItems, setCardItems] = useState([]);

  let items = [
    {
      imageUri: "/assets/respiratory rate.svg",
      title: "Respiratory Rate",
      value: "18 bpm",
      status: "Normal",
      color: " #E0F3FA ",
    },
    {
      imageUri: "/assets/temperature.svg",
      title: "Temperature",
      value: "98.6 °F",
      status: "Normal",
      color: " #FFE6E9 ",
    },
    {
      imageUri: "/assets/HeartBPM.svg",
      title: "Heart Rate",
      value: "72 bpm",
      status: "Lower than Average",
      color: "#FFE6F1",
    },
  ];
  // const systolic = [120, 130, 140, 150, 160, 170];
  // const diastolic = [80, 90, 100, 110, 120, 130];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: systolic,
        fill: false,
        borderColor: "#E66FD2",
        tension: 0.4,
        pointRadius: 5, // Increase point size
        pointBackgroundColor: "#E66FD2",
        pointHoverRadius: 7, // Increase hover point size
      },
      {
        label: "",
        data: diastolic,
        fill: false,
        borderColor: "#7E6CAB",
        tension: 0.4,
        pointRadius: 5, // Increase point size
        pointBackgroundColor: "#8C6FE6",
        pointHoverRadius: 7, // Increase hover point size
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable legend
      },
    },
    scales: {
      x: {
        display: true,

        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
        },
      },
    },
  };
  useEffect(() => {
    console.log("selectedUser", selectedUser);
    let systolic = [];
    let systolicsum = 0;
    selectedUser.diagnosis_history.map((item) => {
      systolic.push(item.blood_pressure.systolic.value);
      systolicsum += item.blood_pressure.systolic.value;
    });
    setSysTolic(systolic);
    setSystolicAverage(systolicsum / systolic.length);
    let diastolic = [];
    let diastolicsum = 0;
    selectedUser.diagnosis_history.map((item) => {
      diastolic.push(item.blood_pressure.diastolic.value);
      diastolicsum += item.blood_pressure.diastolic.value;
    });
    setDiastolic(diastolic);
    setDiastolicAverage(diastolicsum / diastolic.length);

    // set only the first 6 months
    setLabels(selectedUser.diagnosis_history.map((item) => item.month));
    setLabels(
      selectedUser.diagnosis_history
        .slice(selectedUser.diagnosis_history.length - 6)
        .reverse()
        .map((item) => item.month + " " + item.year)
    );

    items[0].value = `${selectedUser.diagnosis_history[0].respiratory_rate.value} bpm`;
    items[0].status = selectedUser.diagnosis_history[0].respiratory_rate.levels;
    items[1].value = `${selectedUser.diagnosis_history[0].temperature.value} °F`;
    items[1].status = selectedUser.diagnosis_history[0].temperature.levels;
    items[2].value = `${selectedUser.diagnosis_history[0].heart_rate.value} bpm`;
    items[2].status = selectedUser.diagnosis_history[0].heart_rate.levels;
    setCardItems(items);
  }, [selectedUser]);
  return (
    <div className="bg-white w-full h-full rounded-[16px] p-6 ">
      <h2 className="text-[24px] font-bold ">Diagnosis History</h2>
      <div className="flex flex-col my-8">
        <div className="grid grid-cols-[1fr,200px] gap-5 bg-[#F4F0FE] pb-[2rem] p-3 rounded-[.8rem]">
          <div>
            <div className="flex  justify-between mb-4">
              <h2 className="text-[18px] font-bold leading-[19px]">
                Blood pressure
              </h2>
              <div className="text-[14px] flex items-center gap-2 mr-[2rem]">
                <h3>Last 6 months</h3>
                <img
                  src="/assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
                  alt=""
                />
              </div>
            </div>
            <Line
              data={data}
              options={options}
              style={{ width: "250px", height: "250px" }}
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-[1rem]">
              <div className="flex  gap-3 items-center justify-start">
                <div className="w-[14px] h-[14px] rounded-[5rem] bg-[#E66FD2]"></div>
                <h1 className="text-[14px] font-bold leading-[19px] capitalize">
                  Systolic
                </h1>
              </div>
              <h2 className="text-[22px] font-bold text-left leading-[24px]">
                {systolicAverage.toFixed(0)}
              </h2>
              <div className="flex items-center justify-start gap-3">
                <img
                  src={
                    systolicAverage >= 100
                      ? "/assets/ArrowUp.svg"
                      : "/assets/ArrowDown.svg"
                  }
                  alt=""
                />
                <h3 className="text-[14px] leading-[19px] capitalize">
                  {systolicAverage >= 100
                    ? "Higher than average."
                    : "Lower than average."}
                </h3>
              </div>
              <div className="w-full h-[1px] rounded-[3rem] bg-[#CBC8D4]"></div>
              <div className="flex  gap-3 items-center justify-start">
                <div className="w-[14px] h-[14px] rounded-[5rem] bg-[#8C6FE6]"></div>
                <h1 className="text-[14px] font-bold leading-[19px] capitalize">
                  diastolic
                </h1>
              </div>
              <h2 className="text-[22px] font-bold text-left leading-[24px]">
                {diastolicAverage.toFixed(0)}
              </h2>
              <div className="flex items-center justify-start gap-3">
                <img
                  src={
                    diastolicAverage >= 100
                      ? "/assets/ArrowUp.svg"
                      : "/assets/ArrowDown.svg"
                  }
                  alt=""
                />
                <h3 className="text-[14px] leading-[19px] capitalize">
                  {diastolicAverage >= 100
                    ? "Higher than average."
                    : "Lower than average."}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 text-[#072635] py-8">
          {cardItems.map((item, index) => (
            <div
              key={"item" + index}
              className={`flex flex-col items-start justify-start gap-3 min-h-[242px] rounded-lg p-3 `}
              style={{
                background: item.color,
              }}
            >
              <img src={item.imageUri} alt="" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <h1 className="text-[31px] leading-[41px] font-bold">
                  {item.value}
                </h1>
              </div>
              <div className="flex flex-row ">
                {item.status === "Lower than Average" ? (
                  <img className="px-2" src={"/assets/ArrowDown.svg"} alt="" />
                ) : (
                  item.status === "Higher than Average" && (
                    <img className="px-2" src={"/assets/ArrowUp.svg"} alt="" />
                  )
                )}
                <h3>{item.status}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
