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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DiagnosticsHistory() {
  const items = [
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
  const systolic = [120, 130, 140, 150, 160, 170];
  const diastolic = [80, 90, 100, 110, 120, 130];
  const data = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
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
                {"80"}
              </h2>
              <div className="flex items-center justify-start gap-3">
                <img src="/assets/ArrowUp.svg" alt="" />
                <h3 className="text-[14px] leading-[19px] capitalize">
                  Higher than average.
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
                {"160"}
              </h2>
              <div className="flex items-center justify-start gap-3">
                <img src="/assets/ArrowUp.svg" alt="" />
                <h3 className="text-[14px] leading-[19px] capitalize">
                  Higher than average.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 text-[#072635] py-8">
          {items.map((item, index) => (
            <div
              key={"item" + index}
              className={`flex flex-col items-start justify-start gap-3 min-h-[242px] rounded-lg p-3 `}
              style={{
                background: item.color,
              }}
            >
              <img src={item.imageUri} alt="" />
              <div>
                <h2>{item.title}</h2>
                <h1 className="text-[31px] leading-[41px] font-bold">
                  {item.value}
                </h1>
              </div>
              <div className="flex flex-row ">
                {item.status === "Lower than Average" && (
                  <img className="px-2" src="/assets/ArrowDown.svg" alt="" />
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
