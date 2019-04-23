import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ViewListIcon from '@material-ui/icons/ViewList';
import SendIcon from '@material-ui/icons/Send';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import logo from '../logo_final.svg'

import TableChartIcon from '@material-ui/icons/TableChart';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SettingsIcon from '@material-ui/icons/Settings';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
  menuItem: {
    paddingLeft: 12,
    paddingRight: 8,
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {
    paddingLeft: 0,
  },
  icon: {
    padding: 0,
  },
  site: {
    height: 40,
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
  },
  siteName: {
    paddingLeft: 12,
  }
});

function ListItemComposition(props) {
  const {classes} = props;

  return (
    <Paper style={{borderRadius: 0, boxShadow: 'none', borderRight: '1px solid #e2e8f0'}}>
      <Link to="/">
        <MenuList>
          <Typography variant="h6" color="inherit" className={classes.site}>
            <img src={logo} alt="Logo" width={40} height={40}/>
            <span className={classes.siteName}>CapNavi</span>
          </Typography>
          <Divider/>
        </MenuList>
      </Link>
      <MenuList>
        <Link to="/shareholders">
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <ViewListIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.primary}} inset primary="株主リスト"/>
          </MenuItem>
        </Link>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <TableChartIcon/>
          </ListItemIcon>
          <ListItemText classes={{primary: classes.primary}} inset primary="資本政策表"/>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <ChatBubbleOutlineIcon/>
          </ListItemIcon>
          <ListItemText classes={{primary: classes.primary}} inset primary="取締役会"/>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <FiberNewIcon/>
          </ListItemIcon>
          <ListItemText classes={{primary: classes.primary}} inset primary="新株予約権"/>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <SettingsIcon/>
          </ListItemIcon>
          <ListItemText classes={{primary: classes.primary}} inset primary="各種設定"/>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);
