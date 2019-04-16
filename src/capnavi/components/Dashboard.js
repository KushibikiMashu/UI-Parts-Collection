import React from 'react'
import { withStyles } from "@material-ui/core";
import Card from './Card'
import ChartCard from './ChartCard'
import StockShareChart from './StockShareChart'
import StockTransitionChart from './StockTransitionChart'

const styles = {
  dashboard: {
    width: '100%',
    paddingTop: 20,
  },
  row: {
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
  },
  board: {
    marginLeft: 12,
    marginRight: 12,
  }
}

const elements = {
  stock: {
    bgcolor: '#23C6F8',
    title: '発行済株式数（株）',
    info: ['234,520'],
    size: 'h2',
  },
  shareholders: {
    bgcolor: '#70eeba',
    title: '株主数（名）',
    info: ['76'],
    size: 'h2',
  },
  stockPrice: {
    bgcolor: '#4FD1C5',
    title: '株価（円）',
    info: ['1,365'],
    size: 'h2',
  },
  mainShareholders: {
    bgcolor: '#7F9CF5',
    title: '主要株主',
    info: ["柿本人麻呂（代表取締役)", "松尾芭蕉（取締役)", "YJ1号投資事業組合)", "折口信夫（社外取締役)", "その他"],
    size: 'h6',
  },
}

function Dashboard(props) {
  const {classes} = props
  return (
    <div className={classes.dashboard}>
      <div className={classes.row}>
        <div className={classes.board}>
          <Card element={elements.stock}/>
        </div>
        <div className={classes.board}>
          <Card element={elements.shareholders}/>
        </div>
        <div className={classes.board}>
          <Card element={elements.stockPrice}/>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.board}>
          <ChartCard title={"株主比率"} chart={<StockShareChart/>}/>
        </div>
        <div className={classes.board}>
          <Card element={elements.mainShareholders}/>
        </div>
        <div className={classes.board}>
          <ChartCard title={"株主推移"} chart={<StockTransitionChart/>}/>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Dashboard);
