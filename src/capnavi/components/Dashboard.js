import React from 'react'
import { withStyles } from "@material-ui/core";
import Board from './Board'

const styles = {

}

function Dashboard() {
  return (
    <Board/>
  )
}

export default withStyles(styles)(Dashboard);
