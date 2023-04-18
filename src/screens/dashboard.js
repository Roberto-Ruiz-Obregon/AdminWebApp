import React from 'react';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title as ChartTitle,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      
      try {
        // const response = await fetch('http://localhost:3000/v1/aggregations/getZonesWithMostUsers');
        const data = [['mes 1', 10], ['mes 2', 20], ['mes 3', 30]];
        // console.log(data)
        
        const chartData = {
          
            labels: data.data.results.map((result) => result._id),
            datasets: [
              {
                label: 'Usuarios por zona',
                // data: data.data.results.map((result) => result.count),
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          };
          setChartData(chartData);
        } catch (error) {
          console.error(error);
        }
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
