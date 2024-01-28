import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import VacationRowComponent from "./VacationRowComponent";

const useStyles = makeStyles({
  filters: {
    margin: "25px 0 25px 0",
    borderRadius: 14,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#7f7fd5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: "white",
  },
}))(TableCell);

function VacationsComponent(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nume</StyledTableCell>
            <StyledTableCell>Manager</StyledTableCell>
            <StyledTableCell>Tip Concediu</StyledTableCell>
            <StyledTableCell>Inlocuitor</StyledTableCell>
            <StyledTableCell>Data inceput</StyledTableCell>
            <StyledTableCell>Data sfarsit</StyledTableCell>
            <StyledTableCell>Stare</StyledTableCell>
            <StyledTableCell>Detalii</StyledTableCell>
            <StyledTableCell>Vizualizare PDF</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.arr.map((row, index) => (
            <VacationRowComponent key={index} row={row}></VacationRowComponent>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VacationsComponent;
