import React, { useEffect, useState } from 'react';
import { getPostalCode, getInscriptions, getTopics, filterInscriptions } from '../client/stats';
import { FireError } from '../utils/alertHandler';
import '../styles/button.css';
import Input from '../components/Input';
import Button from '../components/Button';
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

/**
 * Graphs with realtime data are displayed on the dashboard
 * 
 * @return {*} 
 */
const Dashboard = () => {
  const [postalCode, setPostalCode] = useState('');

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
            backgroundColor: '#27B0C3',
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
            backgroundColor: '#27B0C3',
            fill: false,
          },
        ],
      });
    };
    fetchInscriptionData();
  }, []);
  const handlePostalCode = async () => {
    try {
      if (!postalCode) {
        return;
      }
  
      const topicsData = await getTopics(postalCode);
  
      if (!topicsData || !topicsData.result || topicsData.result.length === 0) {
        throw new Error('No se encontraron resultados para el código postal proporcionado');
      }
  
      const topicsLabels = topicsData.result.map((item) => item._id);
      const topicsCounts = topicsData.result.map((item) => item.totalUsers);
      setTopicsChartData({
        labels: topicsLabels,
        datasets: [
          {
            data: topicsCounts,
            label: 'Topics de usuarios por zona',
            backgroundColor: '#27B0C3',
            fill: false,
            lineTension: 1,
          },
        ],
      });
  
      const interestsData = await filterInscriptions(postalCode);
  
      if (!interestsData || !interestsData.result || interestsData.result.length === 0) {
        throw new Error('No se encontraron inscripciones para el código postal proporcionado');
      }
  
      const interestsLabels = interestsData.result.map((item) => item._id);
      const interestsCounts = interestsData.result.map((item) => item.totalUsers);
      setInterestsChartData({
        labels: interestsLabels,
        datasets: [
          {
            data: interestsCounts,
            label: 'Inscripciones de usuarios por zona',
            backgroundColor: '#27B0C3',
            fill: false,
            lineTension: 1,
          },
        ],
      });
    } catch (error) {
      FireError(error.message);
    }
  };

  return (
    <div className="container">
      <div className="introText">
        <h7><b>¡Bienvenid@!</b></h7>
        <p class="paragraph">
          <div>Estamos contentos de tenerte aquí, donde podrás encontrar diferentes 
            herramientas para crear, modificar y/o eliminar módulos, así como aceptar o rechazar solicitudes.</div>
        </p>
      </div>
      <p class="paragraph2">
          <div>Para las últimas dos gráficas es necesario introducir un código postal
            para poder visualizarlas.</div></p>
      <div className="chart1">
        <h3>Usuarios por zona</h3>
        <Bar width={500} height={350} options={options} data={userChartData}/>
      </div>
      <div className="chart2">
        <h3>Inscripciones por zona</h3>
        <Pie height={380} width={850} options={options} data={inscriptionChartData}/>
      </div>
      <div className="inputArea">
        <Input
          id="input"
          label='Código Postal'
          placeholder='Ingresa un código postal'
          getVal={postalCode}
          setVal={setPostalCode}
          type='text'
        />
        <Button
          action={() => handlePostalCode('interests')}
          text='Buscar'
          type='search'
        />
      </div>
      <div className="chart3">
        <h3 className="int_zona">Intereses por zona</h3>
        <Bar width={500} height={350} options={options} data={topicsChartData}/>
      </div>
      <div className="chart4">
        <h3>Inscripciones por zona</h3>
        <Bar width={550} height={390} options={options} data={interestsChartData}/>
      </div>
    </div>
  );
};

export default Dashboard;
