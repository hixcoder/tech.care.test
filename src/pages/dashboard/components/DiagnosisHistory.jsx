export default function DiagnosisHistory() {
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
  const averageRespiratorRate = 18;
  return (
    <div className="bg-white w-full h-full rounded-[16px] p-6 ">
      <h2 className="text-[24px] font-bold text-[#072635]">
        Diagnosis History
      </h2>
      <div className="flex flex-col my-8">
        <div className="grid grid-cols-3 gap-6 text-[#072635]">
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
