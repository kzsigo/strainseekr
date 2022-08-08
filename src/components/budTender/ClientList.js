import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api, config } from "../../endpoints";
import Button from "@mui/material/Button";
import TenderModal from "./TenderModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";

const ClientList = () => {
  const [open, setOpen] = useState(false);
  const [userID, setUserID] = useState(0);
  const [data, setData] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const despence = {
    DispensaryID: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(`${api}/surveyactive`, despence, config);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="client-list">
      <h3>List of Clients Waiting</h3>
      <TenderModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        userID={userID}
        data={data}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Waiting</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((d, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className="tableRow"
                  onClick={() => {
                    setUserID(d.SearchID);
                    const searchId = d.SearchID;

                    navigate(`/users/${searchId}`, { replace: true });
                  }}
                >
                  <TableCell component="th" scope="row">
                    {d.SearchID}
                  </TableCell>
                  <TableCell align="right">{d.SearchName}</TableCell>
                  <TableCell align="right">
                    {moment(d.Created).subtract(4, "hours").fromNow()}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="refresh">
        <Button
          variant="contained"
          color="success"
          className="btn"
          onClick={() => document.location.reload()}
        >
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default ClientList;
