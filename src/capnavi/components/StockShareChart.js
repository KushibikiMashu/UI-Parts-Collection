import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const chartData = {
  labels: ['柿本', '松尾', 'YJ', '折口', '三井住友', 'CA', 'その他'],
  datasets: [{
    data: [42, 19, 13, 11, 3, 2, 10],
    backgroundColor: [
      "#2ecc71",
      "#3498db",
      "#fa4563",
      "#9b59b6",
      "#f1c40f",
      "#e74c3c",
      "#95a5a6"]
  }]
}

const chartOptions = {
  legend: {
    display: false
  }
}

export default function StockShareChart() {
  return <Doughnut data={chartData} options={chartOptions} width={275} height={200}/>
}
