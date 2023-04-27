import React, { useEffect, useState } from 'react';
import { getPostalCode, getInscriptions, getTopics, filterInscriptions } from '../client/stats';
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
  const [postalCode, setPostalCode] = useState('');
  // const [postalCodeTopics, setPostalCodeTopics] = useState('');
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
  const [interestsChartData, setInterestsChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Inscripciones por zona',
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
            lineTension: 0.7,
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
      const counts = data.map((zone) => zone.totalUsers);
      setInscriptionChartData({
        labels: labels,
        datasets: [
          {
            data: counts,
            label: 'Inscripciones por zona',
            backgroundColor: '#1D86A2',
            fill: false,
          },
        ],
      });
    };
    fetchInscriptionData();
  }, []);

  // - 

  useEffect(() => {
    const fetchTopicsData = async () => {
      if (!postalCode) return;
      const result = await getTopics(postalCode);
      const labels = result.map((item) => item._id);
      console.log("test de resultados", result)
      const counts = result.map((item) => item.totalUsers);
      setTopicsChartData({
        labels: labels,
        datasets: [
          {
            data: counts,
            label: 'Intereses de usuarios por zona',
            backgroundColor: '#1D86A2',
            fill: false,
          },
        ],
      });
    };    
    fetchTopicsData();
  }, [postalCode]);

  useEffect(() => {
    const fetchInscriptionsData = async () => {
      if (!postalCode) return;
      const result = await filterInscriptions(postalCode);
      const labels = result.map((item) => item._id);
      console.log(result)
      const counts = result.map((item) => item.totalUsers);
      setInterestsChartData({
        labels: labels,
        datasets: [
          {
            data: counts,
            label: 'Inscripciones de usuarios por zona',
            backgroundColor: '#1D86A2',
            fill: false,
          },
        ],
      });
    };    
    fetchInscriptionsData();
  }, [postalCode]);

  const handlePostalCode = async () => {
    if (!postalCode) {
      return;
    }
  
    const topicsData = await getTopics(postalCode);
    const topicsLabels = topicsData.result.map((item) => item._id);
    const topicsCounts = topicsData.result.map((item) => item.totalUsers);
    setTopicsChartData({
      labels: topicsLabels,
      datasets: [
        {
          data: topicsCounts,
          label: 'Topics de usuarios por zona',
          backgroundColor: '#1D86A2',
          fill: false,
          lineTension: 1,
        },
      ],
    });
  
    const interestsData = await filterInscriptions(postalCode);
    const interestsLabels = interestsData.result.map((item) => item._id);
    const interestsCounts = interestsData.result.map((item) => item.totalUsers);
    setInterestsChartData({
      labels: interestsLabels,
      datasets: [
        {
          data: interestsCounts,
          label: 'Inscripciones de usuarios por zona',
          backgroundColor: '#1D86A2',
          fill: false,
          lineTension: 1,
        },
      ],
    });
  };
  
  

  return (
    <div>
  <h3>Usuarios por zona</h3>
  <Bar width={600} height={350} options={options} data={userChartData} className='chart1' />
  <h3>Inscripciones por zona</h3>
  <Pie height={250} width={450} options={options} data={inscriptionChartData} className='chart2' />

    <h3>Intereses por zona</h3>
  <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Ingresa un código postal 1" />
  <button onClick={() => handlePostalCode('interests')}>Buscar</button>
  <Bar width={600} height={350} options={options} data={topicsChartData} className='chart3' />
  
    <h3>Inscripciones por zona</h3>
<Bar width={600} height={350} options={options} data={interestsChartData} className='chart4' />

 

</div>

  );
};

export default Dashboard;
