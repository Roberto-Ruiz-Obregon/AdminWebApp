import React, { useEffect, useState } from 'react';
import { getPostalCode, getInscriptions, getTopics } from '../client/stats';
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
import { Bar,  Pie } from 'react-chartjs-2';
import '../styles/charts.css' 

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
        fill: true,
        lineTension: 0.7,
      },
    ],
  });
  const [inscriptionChartData, setInscriptionChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Inscripciones por zona',
        fill: true,
      },
    ],
  });
  const [topicsChartData, setTopicsChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Topics por zona',
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
            size: 13,
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
            label: 'Usuarios en esta zona',
            backgroundColor: '#1D86A2',
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
      const data = await getInscriptions();
      const labels = data.map((zone) => `Cursos inscritos en ${zone._id}: \n ${zone.courses.join(',\n')} `);
      console.log(data)
      const counts = data.map((zone) => zone.totalUsers);
      setInscriptionChartData({
        labels: labels,
        datasets: [
          {
            data: counts,
            label: 'Inscripciones por zona',
            backgroundColor: '#1D86A2',
            fill: true,
            lineTension: 1,
          },
        ],
      });
    };
    fetchInscriptionData();
  }, []);

  useEffect(() => {
    const fetchTopicsData = async () => {
      const data = await getTopics();
      const labels = data.map((zone) => zone.topics);
      const counts = data.map((zone) => zone.totalUsers);
      setTopicsChartData({
        labels: labels,
        datasets: [
          {
            data: counts,
            label: ['Intereses de usuarios por zona'],
            backgroundColor: '#1D86A2',
            fill: true,
            lineTension: 1,
          },
        ],
      });
    };
    fetchTopicsData();
  }, []);
  

  return (
    <div>
      <h3>Usuarios por zona</h3>
      <Bar width={600} height={350} options={options} data={userChartData} className='chart1'/>
      <h3>Inscripciones por zona</h3>
    <Pie height={250} width={450} options={options} data={inscriptionChartData} className='chart2'/>
    <h3>Intereses por zona</h3>
    <Bar width={600} height={350} options={options} data={topicsChartData} className='chart3'/>
    </div>
  );
};

export default Dashboard;
