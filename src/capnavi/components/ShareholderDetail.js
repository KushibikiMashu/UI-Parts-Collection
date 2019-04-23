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
import StockProfitChart from './StockProfitChart'

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
    width: theme.spacing.unit * 85,
    backgroundColor: '#e2e8f0',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    display: 'flex',
  },
  left: {
    width: '46%',
  },
  avatarArea: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    color: 'grey',
  },
  avatar: {
    fontSize: 100,
  },
  profilePaper: {
    marginTop: 4,
    marginBottom: 12,
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
  },
  tablePaper: {
    marginTop: 4,
    marginBottom: 12,
  },
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
    marginTop: 4,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: 4,
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: '#63B3ED',
  },
  right: {
    marginTop: 4,
    marginLeft: 16,
    width: '54%',
  },
  stockProfitChart:{
    height: 330,
    paddingTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
  stock:{
    marginTop: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    color: '#e2e8f0',
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
        <Paper className={classes.profilePaper}>
          <div className={classes.avatarArea}>
            <AccountCircle fontSize={'large'} className={classes.avatar}/>
          </div>
          <div>
            <Typography style={{fontSize: 24}}>
              柿本人麻呂
            </Typography>
            <div style={{paddingTop: 8, paddingBottom: 8}}>
              <Typography>保有株数 1,500株</Typography>
              <Typography>株式比率 7.2%</Typography>
            </div>
            <div>
              <Typography style={{fontSize: 12}}>住所: 東京都港区南麻布1-2-1</Typography>
              <Typography style={{fontSize: 12}}>職業: 個人投資家</Typography>
              <Typography style={{fontSize: 12}}>役職: 社外取締役</Typography>
            </div>
          </div>
        </Paper>
        <Paper className={classes.tablePaper}>
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
          <Button variant="contained" className={classes.button}>
            投資契約書を見る
          </Button>
          <Button variant="contained" className={classes.button}>
            メッセージを送る
          </Button>
        </div>
      </div>
      <div className={classes.right}>
        <Paper className={classes.stockProfitChart}>
          <StockProfitChart/>
        </Paper>
        <Paper className={classes.stock}>
          <div>
            <Typography style={{fontSize: 14}}>見込み売却益</Typography>
            <Typography style={{fontSize: 14}}>投資利回り</Typography>
            <Typography style={{fontSize: 14}}>生産分配額</Typography>
          </div>
          <div style={{marginLeft: 'auto'}}>
            <Typography style={{fontSize: 14}}>4,699,500円</Typography>
            <Typography style={{fontSize: 14}}>461.5%</Typography>
            <Typography style={{fontSize: 14}}>300,182円</Typography>
          </div>
        </Paper>
      </div>
    </div>
  )
}

// We need an intermediary variable for handling the recursive nesting.
const ShareholderDetailWrapped = withStyles(styles)(ShareholderDetail);

export default ShareholderDetailWrapped;