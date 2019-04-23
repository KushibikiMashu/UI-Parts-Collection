import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Button from '@material-ui/core/Button';

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
    width: theme.spacing.unit * 75,
    backgroundColor: '#e2e8f0',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  left: {
    width: '46%',
  },
  profile: {},
  table: {
    width: 200,
  },
  tableBody: {
    width: '100%',
  },
  cell: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 16,
    paddingRight: 0,
  },
  buttons: {
    marginTop: 6,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: 4,
    fontSize: 12,
  }
});

let id = 0;

function createData(datetime, amount, price, getPrice) {
  id += 1;
  return {id, datetime, amount, price, getPrice};
}

const rows = [
  createData('2019/3/31', '1,000', '300', '300,000'),
  createData('2019/7/7', '500', '2,000', '1,000,000'),
  createData('計', '1,500', '867', '1,300,000'),
];

function ShareholderDetail(props) {
  const {classes} = props;

  return (
    <div style={getModalStyle()} className={classes.paper}>
      <div className={classes.left}>
        <Paper>
          <AccountCircle/>
          <Typography>
            柿本人麻呂
          </Typography>
          <div>
            <p>保有株数 1,500株</p>
            <p>株式比率 7.2%</p>
          </div>
          <div>
            <p>住所: 東京都港区南麻布1-2-1</p>
            <p>職業: 個人投資家</p>
            <p>役職: 社外取締役</p>
          </div>
        </Paper>
        <Paper>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.cell}>取得日</TableCell>
                <TableCell className={classes.cell} align="right">取得株数</TableCell>
                <TableCell className={classes.cell} align="right">単価</TableCell>
                <TableCell className={classes.cell} align="right">取得価額</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell className={classes.cell} component="th" scope="row">{row.datetime}</TableCell>
                  <TableCell className={classes.cell} align="right">{row.amount}</TableCell>
                  <TableCell className={classes.cell} align="right">{row.price}</TableCell>
                  <TableCell className={classes.cell} align="right">{row.getPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <div className={classes.buttons}>
          <Button variant="contained" color="primary" className={classes.button}>
            投資契約書を見る
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            メッセージを送る
          </Button>
        </div>
      </div>
      <Paper>
        <div>aaa</div>
      </Paper>
      <Paper>
        <div>
          <p>見込み売却益4,699,500円</p>
          <p>投資利回り461.5%</p>
          <p>生産分配額300,182円</p>
        </div>
        <div>
          <p>4,699,500円</p>
          <p>461.5%</p>
          <p>300,182円</p>
        </div>
      </Paper>
    </div>
  )
}

// We need an intermediary variable for handling the recursive nesting.
const ShareholderDetailWrapped = withStyles(styles)(ShareholderDetail);

export default ShareholderDetailWrapped;