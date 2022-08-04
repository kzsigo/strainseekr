import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";

const KnowResponse = ({ userName, selections }) => {
  return (
    <div>
      <h3>Responses</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Strain</TableCell>
              <TableCell align="center" sortable={true}>
                Total THC
              </TableCell>
              <TableCell align="center">Total CBD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selections &&
              selections.map((select, index) => (
                <TableRow
                  key={select.StrainID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{select.Strain}</TableCell>
                  <TableCell align="center">{select.TotalTHC}</TableCell>
                  <TableCell align="center">{select.TotalCBD}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="refresh">
        <Link to="/" onClick={() => {}}>
          <Button variant="contained" color="success" className="btn">
            New Search
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default KnowResponse;
