import { AnalyticItem } from "./analytic-item";
import { DashboardChart } from "./dashboard-chart";

const chart1 = {
  label: "Customer",
  data: [
    1000, 2000, 3000, 3500, 4000, 4300, 5000, 5500, 5700, 6000, 5800, 6500,
  ],
  backgroundColor: ["rgba(52, 131, 235 ,0.4)"],
  borderColor: ["rgba(52, 131, 235 ,1)"],
  borderWidth: 1,
  fill: true,
};
const chart2 = {
  label: "Current Year",
  data: [
    1000, 2000, 3000, 3500, 4000, 4300, 5000, 5500, 5700, 6000, 5800, 6500,
  ],
  backgroundColor: ["rgba(255, 99, 132, 0.2)"],
  borderColor: ["rgba(255, 99, 132, 1)"],
  borderWidth: 1,
  fill: false,
};
const chart3 = {
  label: "Previous Year",
  data: [
    1200, 2400, 5500, 3500, 4600, 5300, 5600, 4500, 3760, 6400, 5300, 6800,
  ],
  backgroundColor: ["rgba(52, 131, 235, 0.2)"],
  borderColor: ["rgba(52, 131, 235 ,1)"],
  borderWidth: 1,
  fill: false,
};
const chart4 = {
  label: "Customer",
  data: [
    1200, 2400, 5500, 3500, 4600, 5300, 5600, 4500, 3760, 6400, 5300, 6800,
  ],
  barPercentage: 0.5,
  barThickness: 6,
  maxBarThickness: 8,
  minBarLength: 2,
};
const chart5 = {
  label: "Customer",
  data: [
    1200, 2000, 7500, 3200, 4700, 5800, 5600, 4600, 3760, 6800, 5300, 6300,
  ],
  barPercentage: 0.5,
  barThickness: 6,
  maxBarThickness: 8,
  minBarLength: 2,
};
const chart6 = {
  label: "Customer",
  data: [1200, 2000, 7500, 6800, 5300, 6300],
};

export const DashboardSheet = () => {
  return (
    <div>
      <div className="w-screen flex ">
        <div className="w-[50%]">
          <DashboardChart
            title="Total customers this month"
            menuTtile="Timeline"
            menuTrigger="By Month"
            menuItems={["By Month", "By Year"]}
            data={[chart1]}
            labels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            type="line"
          />
        </div>
        <div className="w-[50%]">
          <DashboardChart
            title="Orders Booked"
            menuTtile="Year"
            menuTrigger="2023"
            menuItems={["2023", "2022", "2021"]}
            data={[chart2, chart3]}
            labels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            type="line2"
          />
        </div>
      </div>
      <div className=" w-screen flex">
        <div className="w-[50%]">
          <DashboardChart
            title="Status"
            menuTtile="Timeline"
            menuTrigger="By Month"
            menuItems={["By Month", "By Year"]}
            data={[chart4, chart5]}
            labels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            type="bar"
          />
        </div>

        <div className="w-[50%] flex">
          <div className="w-[50%]">
            <DashboardChart
              title="Orders Booked"
              menuTtile="by Month"
              menuTrigger="Oct 23"
              menuItems={["2023", "2022", "2021"]}
              data={[chart6]}
              labels={["Home", "Life", "Health", "motor", "Travel", "other"]}
              type="pie"
            />
          </div>
          <div className="flex w-[50%] flex-col justify-center items-center">
            <div className="tag1 border-2 px-4 py-1 m-1 w-full h-[50%]">
              <p className="text-md font-bold tracking-tight text-indigo-500  ">
                Avg. Time per customer
              </p>
              <h3 className="text-xl font-bold  text-[#262626]  ">6 mins</h3>
              <p className="text-xs font-semibold text-[#737373]  ">
                vs Prev 7mins 30secs
              </p>

              <div>
                <div className="flex items-baseline justify-start">
                  <p className="text-[#737373] font-bold text-base">current </p>
                  <div className="bg-slate-500 h-2 w-32  mx-2"></div>
                </div>
                <div className="flex items-baseline justify-start">
                  <p className="text-[#737373] font-bold text-base">Previous</p>

                  <div className="bg-blue-500 h-2 w-52 mx-2 "></div>
                </div>
              </div>
            </div>
            <div className="tag1 border-2 px-4 py-1 m-1 w-full h-[50%]">
              <p className="text-md font-bold tracking-tight text-indigo-500  ">
                Avg. customer Rating (CSAT)
              </p>
              <h3 className="text-xl font-bold  text-[#262626] ">4.4</h3>
              <p className="text-xs font-semibold text-[#737373]  ">
                vs Prev 4.2
              </p>

              <div>
                <div className="flex items-baseline justify-start">
                  <p className="text-[#737373] font-bold text-base">current </p>
                  <div className="bg-slate-500 h-2 w-64  mx-2"></div>
                </div>
                <div className="flex items-baseline justify-start">
                  <p className="text-[#737373] font-bold text-base">Previous</p>

                  <div className="bg-blue-500 h-2 w-40 mx-2 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
