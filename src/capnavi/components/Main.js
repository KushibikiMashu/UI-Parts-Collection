import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Dashboard from './Dashboard'
import Table from './Table'

const styles={
  root: {
    marginLeft: 40,
    marginRight: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}

function Main(props) {
  const {classes} = props
  return (
    <div className={classes.root}>
    <Dashboard/>
    <Table/>
  </div>
  )
}

export default withStyles(styles)(Main);