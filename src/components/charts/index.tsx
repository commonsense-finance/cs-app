import React from 'react'
import { Line, Doughnut } from 'react-chartjs-2'

const data = {
  labels: ['Ene', 'Feb', 'Mar', '...', '...', 'Dic'],
  datasets: [
    {
      label: 'Price',
      data: [10, 11, 10, 15, 14, 16, 17],
      fill: false,
      backgroundColor: '#75bfc0',
      borderColor: '#75bfc0',
      tension: 0.5,
    },
  ],
}

const options = {
  
  scales: {
    y: {
      beginAtZero: false,
    },
  },
}

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
)

const chartExample10 = {
  data: {
    labels: ['WBTC 25%', 'WETH 25%', 'LINK 14%', 'WMATIC 13%', 'UNI 13%', 'AAVE 5%', 'SUSHI 3%', 'TEL 2%'],
    datasets: [
      {
        label: 'CS Index',
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ['#ff8779', '#f1c388', '#5b5e8c', '#2a84e9', '#e2e2e2', '#f35f50', '#75bfc0',  '#3a3b59'],
        borderWidth: 0,
        data: [25, 25, 14, 13, 13, 5, 3, 2],
      },
    ],
  },
  
    options: {
      responsive: true,
      plugins: {
        
        title: {
          display: true,
          text: 'Title'
        }
      }
    },
  
};

const ComponentsChart = () => (
  <>
    <Doughnut data={chartExample10.data} options={chartExample10.options} />
  </>
)


export default ComponentsChart
