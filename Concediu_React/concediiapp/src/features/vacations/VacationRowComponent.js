import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  filters: {
    margin: "25px 0 25px 0",
    borderRadius: 14,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#26c6da",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function VacationRowComponent(props) {
  const { row } = props;
  console.log(row);
  const navigate = useNavigate();
  return (
    <StyledTableRow>
      <StyledTableCell>
        <div>{row.angajat.nume + " " + row.angajat.prenume}</div>
      </StyledTableCell>
      <StyledTableCell>
        <div>
          {row.angajat.manager.nume + " " + row.angajat.manager.prenume}
        </div>
      </StyledTableCell>
      <StyledTableCell>
        <div>{row.tipConcediu.nume}</div>
      </StyledTableCell>
      <StyledTableCell>
        <div>{row.inlocuitor.nume + " " + row.inlocuitor.prenume}</div>
      </StyledTableCell>
      <StyledTableCell>
        <div>{new Date(row.dataInceput).toLocaleDateString("en-GB")}</div>
      </StyledTableCell>
      <StyledTableCell>
        <div>{new Date(row.dataSfarsit).toLocaleDateString("en-GB")}</div>
      </StyledTableCell>
      <StyledTableCell>
        <div>{row.stareConcediu.nume}</div>
      </StyledTableCell>

      <StyledTableCell>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/vacations/details/${row.id}`)}
        >
          Detalii
        </Button>
      </StyledTableCell>
      <StyledTableCell>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/app/pdf/${row.id}`)}
        >
          Vezi PDF
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default VacationRowComponent;
