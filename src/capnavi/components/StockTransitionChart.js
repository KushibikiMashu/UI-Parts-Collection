import React from 'react'
import { Bar } from 'react-chartjs-2';

const chartData = {
  labels: ['創業', 'シード', 'シリーズA', 'シリーズB'],
  datasets: [
    {
      label: '柿本',
      data: [70, 55, 50, 42.64],
      backgroundColor: [
        "#2ecc71",
        "#2ecc71",
        "#2ecc71",
        "#2ecc71",
        "#2ecc71"
      ],
      stack: 1,
      fill: "origin"
    },
    {
      label: '松尾',
      data: [30, 24, 22, 19.19],
      backgroundColor: [
        "#3498db",
        "#3498db",
        "#3498db",
        "#3498db",
        "#3498db"],
      stack: 1,
      fill: "-1"
    },
    {
      label: 'YJ',
      data: [0, 18, 17, 12.79],
      backgroundColor: [
        "#fa4563",
        "#fa4563",
        "#fa4563",
        "#fa4563",
        "#fa4563"],
      stack: 1,
      fill: "-1"
    },
    {
      label: '折口',
      data: [0, 0, 0, 10.66],
      backgroundColor: [
        "#9b59b6",
        "#9b59b6",
        "#9b59b6",
        "#9b59b6",
        "#9b59b6"],
      stack: 1,
      fill: "-1"
    },
    {
      label: 'その他',
      data: [0, 3, 11, 14.72],
      backgroundColor: [
        "#95a5a6"
      ],
      stack: 1,
      fill: "-1"
    },
  ]
}

const chartOptions = {
  legend: {
    display: false
  },
  stacked: true,
  scales: {
    yAxes: [{
      display: false,
    }]
  }
}
export default function StockTransitionChart() {
  return <Bar data={chartData} options={chartOptions} width={275} height={200}/>
}
