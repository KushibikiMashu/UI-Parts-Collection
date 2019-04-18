import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Dashboard from './Dashboard'
import Table from './Table'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
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
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/shareholders" component={Table}/>
    </div>
  )
}

export default withStyles(styles)(Main);