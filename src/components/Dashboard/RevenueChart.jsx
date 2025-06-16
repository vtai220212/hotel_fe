import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartBox } from './styles/RevenueChartStyles';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart = () => {
  const revenueData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      {
        label: 'Doanh thu (VNĐ)',
        data: [5000000, 7500000, 6000000, 8000000, 9000000, 6500000],
        backgroundColor: 'rgba(255, 215, 0, 0.8)',
        borderColor: 'rgba(255, 215, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#FFD700' } },
      title: { display: true, text: 'Doanh thu theo tháng', color: '#FFD700' },
    },
    scales: {
      x: { ticks: { color: '#FFD700' } },
      y: { ticks: { color: '#FFD700' } },
    },
  };

  return (
    <ChartBox>
      <Bar data={revenueData} options={chartOptions} />
    </ChartBox>
  );
};

export default RevenueChart;