import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartBox } from './styles/TopRoomsChartStyles';
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

const TopRoomsChart = () => {
  const topRoomsData = {
    labels: ['Phòng 101', 'Phòng 202', 'Phòng 303', 'Phòng 404'],
    datasets: [
      {
        label: 'Số lần đặt',
        data: [15, 10, 8, 5],
        backgroundColor: 'rgba(255, 215, 0, 0.8)',
        borderColor: 'rgba(255, 215, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y', // Biểu đồ cột ngang
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#FFD700' } },
      title: { display: true, text: 'Phòng được đặt nhiều nhất', color: '#FFD700' },
    },
    scales: {
      x: { ticks: { color: '#FFD700' } },
      y: { ticks: { color: '#FFD700' } },
    },
  };

  return (
    <ChartBox>
      <Bar data={topRoomsData} options={chartOptions} />
    </ChartBox>
  );
};

export default TopRoomsChart;