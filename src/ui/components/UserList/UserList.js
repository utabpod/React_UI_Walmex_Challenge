import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
    maxWidth:350
  },
  root:{
    maxWidth:350
    }
});
const UserList=({ tableHeader, data })=> {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
        {tableHeader &&
            tableHeader.map((header, index) => {
              return (
              <TableCell key={index} >{header}</TableCell>
              )
            })}
        </TableRow>
      </TableHead>
      <TableBody>
      {data &&
          data.map((item, index) => (
            <TableRow key={index}>
               {Object.values(item).map((el, index) => (
                 <TableCell component="th" scope="row">
                 {el}
               </TableCell>
              ))}
           
          </TableRow>
          ))}


       
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default UserList;
