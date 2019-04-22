import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from './Modal'

const styles = theme => ({
  root: {
    width: 700,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 540,
  },
  avatar: {
    width: 28,
  },
  name: {
    width: 240,
  },
  amount: {
    width: 240,
  }
});

let id = 0;
function createData(avatar, name, amount, share) {
  id += 1;
  return { id, avatar, name, amount, share };
}

const rows = [
  createData('fab fa-alipay fa-2x', '柿本人麻呂（代表取締役）',	'100,000,000 株'	,'42.64 %'),
  createData('fas fa-atom fa-2x', '松尾芭蕉（取締役）',	'45,000,000 株'	,'19.19 %'),
  createData('fas fa-bible fa-2x', 'YJ1号投資事業組合',	'30,000,000 株'	,'12.79 %'),
  createData('fab fa-apple fa-2x', '折口信夫（社外取締役）',	'25,000,000 株'	,'10.66 %'),
  createData('fab fa-canadian-maple-leaf fa-2x', '三井住友海上キャピタル',	'7,500,000 株'	,'3.20 %'),
  createData('fas fa-robot fa-2x', 'サイバーエージェント',	'3,500,000 株'	,'1.49 %'),
  createData('fas fa-rocket fa-2x', '伊藤忠商事株式会社',	'3,200,000 株'	,'1.36 %'),
  createData('fas fa-star fa-2x', '住友商事株式会社',	'3,200,000 株'	,'1.36 %'),
  createData('fas fa-moon fa-2x', '三菱商事株式会社',	'2,000,000 株'	,'0.85 %'),
  createData('fas fa-jedi fa-2x', 'ストックオプション',	'15,120,300 個'	,'6.45 %'),
];

function SimpleTable(props) {
  const { classes } = props;
  const [open, toggle] = useState(false);

  function handleOpen(){
    toggle(true)
  }

  function handleClose(){
    toggle(false)
  }

  return (
    <Paper className={classes.root}>
      <Modal/>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.avatar}>Avatar</TableCell>
            <TableCell className={classes.name} align="right">Name</TableCell>
            <TableCell className={classes.amount} align="right">Amount</TableCell>
            <TableCell align="right">Share</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} onClick={() => handleOpen()}>
              <TableCell component="th" scope="row">
                {<i className={row.avatar}/>}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.share}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
