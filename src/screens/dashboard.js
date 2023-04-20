import React, { useEffect, useState } from 'react';
import {getPostalCode } from '../client/stats'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [getChartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Zonas con más usuarios',
        borderColor: '#3333ff',
        fill: true,
        lineTension: 0.1,
      },
    ],
  });
  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 10,
            color: 'rgba(255, 255, 255, 1)',
          },
        },
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostalCode();
      console.log(data)
      const labels = data.map((zone) => zone.postalCode);
      const counts = data.map((zone) => zone.totalUsers);
      setChartData({
        labels: labels,
        datasets: [
          {
            data: counts,
            label: 'Zonas con más usuarios',
            borderColor: '#3333ff',
            fill: true,
            lineTension: 1,
          },
        ],
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Usuarios por zona</h1>
      <Bar width={900} height={520} options={options} data={getChartData} />
    </div>
  );
};

export default Dashboard;
