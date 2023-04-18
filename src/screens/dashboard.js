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
        labels: ['October', 'November', 'December'],
        datasets: [
            {
                data: [8137119, 9431691, 10266674],
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
                lineTension: 0.5,
            },
            {
                data: [1216410, 1371390, 1477380],
                label: 'Deaths',
                borderColor: '#ff3333',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
                lineTension: 0.5,
            },
        ],
    });
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 30,
                        color: 'rgba(255, 255, 255, 1)',
                    },
                },
            },
        },
    };

    return (
        <div>
            <h1>Usuarios por zona</h1>
            <Chart
                type='line'
                width={160}
                height={60}
                options={options}
                data={getChartData}
            />
        </div>
    );
};

export default Dashboard;
