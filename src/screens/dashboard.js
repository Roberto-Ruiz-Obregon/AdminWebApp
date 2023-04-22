import React, { useEffect, useState } from 'react';
import { getPostalCode, getInscriptions } from '../client/stats';
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
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [userChartData, setUserChartData] = useState({
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
  const [inscriptionChartData, setInscriptionChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Zonas con más inscripciones',
        borderColor: '#ff3333',
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
    const fetchUserData = async () => {
      const data = await getPostalCode();
      const labels = data.map((zone) => zone.postalCode);
      const counts = data.map((zone) => zone.totalUsers);
      setUserChartData({
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
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchInscriptionData = async () => {
      const { labels, data } = await getInscriptions();
      setInscriptionChartData({
        labels: labels,
        datasets: [
          {
            data: data,
            label: 'Inscripciones de usuarios por zona',
            borderColor: '#ff3333',
            fill: true,
            lineTension: 1,
          },
        ],
      });
    };
    fetchInscriptionData();
  }, []);

  return (
    <div>
      <h1>Usuarios por zona</h1>
      <Bar width={800} height={450} options={options} data={userChartData} />
      <h1>Inscripciones de usuarios por zona</h1>
      <Bar width={800} height={450} options={options} data={inscriptionChartData} />
    </div>
  );
};

export default Dashboard;
