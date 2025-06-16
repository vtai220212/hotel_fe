import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartBox } from './styles/NewCustomersChartStyles';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const NewCustomersChart = () => {
  const newCustomersData = {
    labels: ['Online', 'Trực tiếp', 'Đối tác'],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#FFD700' } },
      title: { display: true, text: 'Khách hàng mới', color: '#FFD700' },
    },
  };

  return (
    <ChartBox>
      <Pie data={newCustomersData} options={chartOptions} />
    </ChartBox>
  );
};

export default NewCustomersChart;   