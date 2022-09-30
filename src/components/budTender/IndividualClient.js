import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { api, config } from "../../endpoints";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Switch from "@mui/material/Switch";
import TenderModal from "./TenderModal";

const IndividualClient = () => {
  let { searchId } = useParams();
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [thisStrainID, setThisStrainID] = useState([]);
  const [thisStrainIDs, setThisStrainIDs] = useState([]);
  const [score, setScore] = useState(0);
  const [scoreRating, setScoreRating] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchData = async () => {
    const pushSearch = {
      SearchID: searchId,
      maxRows: 25,
    };
    const result = await axios.post(`${api}/V2_Search `, pushSearch, config);
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <TenderModal
        thisStrainID={thisStrainID}
        thisStrainIDs={thisStrainIDs}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        score={score}
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
          <Link to={`/dispensary/${user.DispensaryID}/client-list`}>
            <Button aria-label="delete" className="iconBTN">
              <ArrowBackIcon /> Back to Clients
            </Button>
          </Link>
        </div>
        <TableContainer component={Paper} style={{ overflow: "auto" }}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">In Stock</TableCell>
                <TableCell align="left">Ranking</TableCell>
                <TableCell align="left">Strain</TableCell>
                <TableCell align="left">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length &&
                data.map((p, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className="tableRow"
                  >
                    <TableCell component="th" scope="row">
                      <Switch
                        color="success"
                        checked={p.InStock === 1 ? true : false}
                        onChange={(event) => {
                          axios
                            .post(
                              `https://strainseekr.prestoapi.com/api/v1_straindispensarystock`,
                              {
                                StrainID: p.StrainID,
                                DispensaryID: parseInt(user.DispensaryID),
                                Stock: event.target.checked ? 1 : 0,
                              },
                              config
                            )
                            .then(() => {
                              fetchData();
                            })
                            .catch((error) => {
                              console.error({ errorMessage: error.message });
                            });
                        }}
                        name="inStock"
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className="clickableCell"
                      onClick={(props) => {
                        axios
                          .post(
                            `${api}/V2_ScoreAnalysis `,
                            {
                              SearchID: searchId,
                              StrainID: p.StrainID,
                              ViewID: 2,
                            },
                            config
                          )
                          .then((response) => {
                            setThisStrainID(response.data);
                            console.log(response.data);
                          })
                          .catch((error) => {
                            console.error({ errorMessage: error.message });
                          });
                        axios
                          .post(
                            `${api}/V2_ScoreAnalysis `,
                            {
                              SearchID: searchId,
                              StrainID: p.StrainID,
                              ViewID: 1,
                            },
                            config
                          )
                          .then((response) => {
                            setThisStrainIDs(response.data);
                            console.log(response.data);
                          })
                          .catch((error) => {
                            console.error({ errorMessage: error.message });
                          });
                        setScore(p.StrainScore.toFixed(0));
                        handleOpen();
                      }}
                    >
                      {p.Strain}
                    </TableCell>
                    <TableCell align="left">
                      {p.StrainScore.toFixed(0)}
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
