import React from 'react';
import { Line } from 'react-chartjs-2';


const data = {
  labels: ['Ene', 'Feb', 'Mar', '...', '...', 'Dic'],
  datasets: [
    {
      label: 'Price',
      data: [10, 11, 10, 15, 14, 16, 17],
      fill: false,
      backgroundColor: '#75bfc0',
      borderColor: '#75bfc0',
      tension: 0.5
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: false
    }
  }
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;