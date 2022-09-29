import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const TenderModal = ({
  open,
  handleClose,
  handleOpen,
  thisStrainID,
  thisStrainIDs,
  score,
}) => {
  console.log(thisStrainID, thisStrainIDs);
  return (
    <div className="divModal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="endModal"
        sx={{
          mx: 0.5,
          fontSize: 14,
          height: "100%",
        }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: "20px" }}
          >
            Strain Details
          </Typography>
          <div className="funModal">
            <TableContainer component={Paper}>
              <div className="headDiv" style={{ textAlign: "right" }}>
                <div style={{ textAlign: "center", marginLeft: "30px" }}>
                  <p>Seekr Score</p>
                </div>
                <div style={{ textAlign: "center" }} className="scoreTotal">
                  <p>{score}</p>
                </div>
              </div>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Compounds</TableCell>
                    <TableCell align="right">%Present</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {thisStrainID &&
                    thisStrainID.map((s, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {s.Terpene}
                        </TableCell>
                        <TableCell component="th" scope="row" align="right">
                          {(s.Percentage * 100).toFixed(2)}%
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TableContainer component={Paper}>
              <div className="headDiv">
                <p style={{ marginLeft: "30px" }}>ScoreSeekr Analysis</p>
              </div>

              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Property</TableCell>
                    <TableCell align="right">Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {thisStrainIDs &&
                    thisStrainIDs.map((z, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {z.Property}
                        </TableCell>
                        <TableCell component="th" scope="row" align="right">
                          {z.Score.toFixed(0)}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TenderModal;
