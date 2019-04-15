import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonAppBar from './AppBar'
import Main from './Main'

const styles = {
  root: {
    display: 'flex',
  },
  sideber: {
    height: '100vh',
    width: 200,
    margin: 0,
  },
  main: {
    flex: 1,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  word: {
    fontSize: 80,
  }
}

// Layoutコンポーネントの代わり
function Layout(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <div className={classes.sideber}>
        <ButtonAppBar class={{margin: 0, width: 200}}/>
      </div>
      <div className={classes.main}>
        {/*<p className={classes.word}>Coming Soon...</p>*/}
        <Main/>
      </div>
    </div>
  )
}

export default withStyles(styles)(Layout);
