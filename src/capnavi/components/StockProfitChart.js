import React from 'react'
import { Line } from 'react-chartjs-2';

const chartData = {
  labels: ['2017/3', '2017/9', '2018/3', '2017/9', '2018/3', '2018/9', '2019/3'],
  datasets: [
    {
      label: '取得価額',
      data: [0, 200, 500, 1000, 1000, 1000, 1000],
      backgroundColor: "#63B3ED",
      fill: true,
    },
    {
      label: 'バリュエーション',
      data: [500, 1000, 1500, 2000, 3000, 4000, 5000],
      backgroundColor: "#f1c40f",
      fill: true,
    },
  ]
}

const chartOptions = {
  legend: {
    display: true,
    position: 'bottom',
  }
}

export default function StockProfitChart() {
  return <Line data={chartData} options={chartOptions} width={275} height={200}/>
}
