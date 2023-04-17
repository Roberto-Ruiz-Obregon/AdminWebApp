import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      const response = await axios.get('/api/v1/filters/users-by-zone');
      const chartData = {
        labels: response.data.data.results.map((result) => result._id),
        datasets: [
          {
            label: 'Users by Zone',
            data: response.data.data.results.map((result) => result.count),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      };
      setChartData(chartData);
    };

    fetchChartData();
  }, []);

  return (
    <div>
      <h1>Usuarios por zona</h1>
      <Bar
        data={chartData}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Dashboard;
