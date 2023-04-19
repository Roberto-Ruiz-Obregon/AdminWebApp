import React from 'react';
import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
            label: 'Intereses por zona',
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ]
          }
        ]
      });
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/filter-topics', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ postalCode: '76158' }) 
            });
      
            const data = await response.json();
      
            const labels = data.data.map(item => item._id);
            const counts = data.data.map(item => item.count);
      
            setChartData({
              labels: labels,
              datasets: [
                {
                  data: counts,
                  label: 'Intereses por zona',
                  backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                  ],
                  hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                  ]
                }
              ]
            });
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);
      
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 25,
                family: 'Arial',
                weight: 'bold',
                color: 'white'
              }
            }
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Cantidad de usuarios'
            },
            ticks: {
                beginAtZero: true,
                stepSize: 1
                }
                },
            x: {
                title: {
                display: true,
                text: 'Mes'
            },
                ticks: {
            autoSkip: false
            }
            }
        }
    };

    return (
        <div>
            <h1>Usuarios por zona</h1>
            <Chart
                type='bar'
                width={800}
                height={450}
                options={options}
                data={getChartData}
            />
        </div>
    );
};

export default Dashboard;
