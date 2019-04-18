import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonAppBar from './AppBar'
import Main from './Main'
import PrimarySearchAppBar from "./PrimarySearchAppBar";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    backgroundColor: '#F7FAFC',
  },
  sideber: {
    height: '100%',
    width: 200,
    margin: 0,
  },
  main: {
    flex: 1,
  },
  word: {
    fontSize: 80,
  }
}

// Layoutコンポーネントの代わり
function Layout(props) {
  const {classes} = props;
  return (
    <Router>
      <div className={classes.root}>
        <div className={classes.sideber}>
          <ButtonAppBar class={{margin: 0, width: 200}}/>
        </div>
        <div className={classes.main}>
          <PrimarySearchAppBar/>
          <Main/>
        </div>
      </div>
    </Router>
  )
}

export default withStyles(styles)(Layout);
