import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(avatar, name, amount, share) {
  id += 1;
  return { id, avatar, name, amount, share };
}

const rows = [
  createData('icon', '柿本人麻呂（代表取締役）',	'100,000,000 株'	,'42.64 %'),
  createData('icon', '松尾芭蕉（取締役）',	'45,000,000 株'	,'19.19 %'),
  createData('icon', 'YJ1号投資事業組合',	'30,000,000 株'	,'12.79 %'),
  createData('icon', '折口信夫（社外取締役）',	'25,000,000 株'	,'10.66 %'),
  createData('icon', '三井住友海上キャピタル',	'7,500,000 株'	,'3.20 %'),
  createData('icon', 'サイバーエージェント',	'3,500,000 株'	,'1.49 %'),
  createData('icon', '伊藤忠商事株式会社',	'3,200,000 株'	,'1.36 %'),
  createData('icon', '住友商事株式会社',	'3,200,000 株'	,'1.36 %'),
  createData('icon', '三菱商事株式会社',	'2,000,000 株'	,'0.85 %'),
  createData('icon', 'ストックオプション',	'15,120,300 個'	,'6.45 %'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Share</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.avatar}
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
