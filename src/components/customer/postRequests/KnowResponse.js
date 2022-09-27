import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const KnowResponse = ({ userName, selections }) => {
  return (
    <div>
      <h3>Here are your results:</h3>
      <p>*sorted from highest concentration to lowest”</p>
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
                  <TableCell align="center">
                    {(select.TotalTHC * 100).toFixed(2)}%
                  </TableCell>
                  <TableCell align="center">
                    {(select.TotalCBD * 100).toFixed(2)}%
                  </TableCell>
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
