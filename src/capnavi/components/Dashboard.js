import React from 'react'
import { withStyles } from "@material-ui/core";
import Card from './Card'

const styles = {
  dashboard: {
    width: '100%',
    padding: 40,
  },
  row: {
    display: 'flex',
  },
  board: {
    marginLeft: 8,
    marginRight: 8,
  }
}

const elements = {
  stock: {
    bgcolor: '#23C6F8',
    title: '発行済株式数（株）',
    info: '234,520',
    size: 'h2',
  },
  shareholders: {
    bgcolor: '#70eeba',
    title: '株主数（名）',
    info: '76',
    size: 'h2',
  },
  stockPrice: {
    bgcolor: '#6f69e7',
    title: '株価（円）',
    info: '1,365',
    size: 'h2',
  },
  mainShareholders: {
    bgcolor: '#6f69e7',
    title: '株価（円）',
    info: `柿本人麻呂（代表取締役)
松尾芭蕉（取締役)
YJ1号投資事業組合)
折口信夫（社外取締役)
その他`,
    size: 'h5',
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
          <Card element={elements.mainShareholders}/>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Dashboard);
