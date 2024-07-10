import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getData } from "../service/api";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const LineChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    let response = await getData();
    setChartData(response.data);
    console.log(response.data);
  };

  const monthsArray = chartData.map((item) => item.month);
  const total_expense_array = chartData.map((item) => item.total_expense);

  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ height: "442px", width: "80%" }}>
        <Line
          data={{
            labels: monthsArray,
            datasets: [
              {
                data: total_expense_array,
                label: "Yearly Report",
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1.5,
                hoverBackgroundColor: "rgba(84, 3, 3, 0.4)",
                hoverBorderColor: "rgba(84, 3, 3, 1)",
              },
            ],
          }}
          height={200}
        />
      </div>
    </div>
  );
};

export default LineChart;
