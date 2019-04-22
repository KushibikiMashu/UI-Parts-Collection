import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  // const top = 50 + rand();
  // const left = 50 + rand();
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

function ShareholderDetail(props) {
  const {classes} = props;

  return (
    <div style={getModalStyle()} className={classes.paper}>

    </div>
  )
}

// We need an intermediary variable for handling the recursive nesting.
const ShareholderDetailWrapped = withStyles(styles)(ShareholderDetail);

export default ShareholderDetailWrapped;