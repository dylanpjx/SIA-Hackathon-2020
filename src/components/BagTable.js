import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  table: {
    whiteSpace: 'pre-line',
  },
}));

const BagTable = (props) => {
  const classes = useStyles(props);

  const headCells = [
    'Bag-Id',
    'Name',
    'Img before',
    'Img after',
    'Dmg reported (By ML)',
    'Dmg reported (By passenger)',
    'Claim',
  ];

  const checkFalseClaim = (dmgml, dmgpass) => {
    dmgml.sort();
    dmgpass.sort();
    if (JSON.stringify(dmgml) === JSON.stringify(dmgpass)) return true;
    return false;
  };

  const printDmg = (dmg) => {
    var str = '';
    dmg.sort();
    dmg.forEach((e) => (str += e + (e ? '\n' : '')));
    return str;
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className={classes.head}>
          <TableRow>
            {headCells.map((headCell, index) => {
              return (
                <TableCell key={index} style={{ fontWeight: 'bold' }}>
                  {headCell}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tableData.map((row) => {
            return (
              <TableRow key={row.bid} hover>
                <TableCell>{row.bid}</TableCell>
                <TableCell>
                  {row.name +
                    (checkFalseClaim(row.dmgml, row.dmgpass) ? ' 🚩' : '')}
                </TableCell>
                <TableCell>{row.imgbefore}</TableCell>
                <TableCell>{row.imgafter}</TableCell>
                <TableCell>{printDmg(row.dmgml)}</TableCell>
                <TableCell>{printDmg(row.dmgpass)}</TableCell>
                <TableCell>{row.claim}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BagTable;
