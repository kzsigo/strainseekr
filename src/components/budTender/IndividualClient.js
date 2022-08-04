import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { api, config } from "../../endpoints";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TenderModal from "./TenderModal";

const IndividualClient = () => {
  let { searchId } = useParams();
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [thisStrainID, setThisStrainID] = useState([]);

  const pushSearch = {
    SearchID: searchId,
    maxRows: 25,
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(`${api}/v1_search `, pushSearch, config);
      setData(result.data);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <TenderModal
        thisStrainID={thisStrainID}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <div>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{ marginBottom: "20px" }}
        >
          Recommended User Strains
        </Typography>
        <div className="budTendView" style={{ margin: "40px 0" }}>
          <Link to="/disp-ID/1/client-list">
            <Button aria-label="delete" className="iconBTN">
              <ArrowBackIcon /> Back to Clients
            </Button>
          </Link>
        </div>
        <TableContainer component={Paper} style={{ overflow: "auto" }}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">id</TableCell>
                <TableCell align="left">Strain</TableCell>
                <TableCell align="left">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((p, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className="tableRow"
                    onClick={(props) => {
                      axios
                        .post(
                          `${api}/v1_scoreanalysis `,
                          { SearchID: searchId, StrainID: p.StrainID },
                          config
                        )
                        .then((response) => {
                          setThisStrainID(response.data);
                        })
                        .catch((error) => {
                          console.error({ errorMessage: error.message });
                        });
                      handleOpen();
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {p.StrainID}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {p.Strain}
                    </TableCell>
                    <TableCell align="left">
                      {p.StrainScore.toFixed(8)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default IndividualClient;
