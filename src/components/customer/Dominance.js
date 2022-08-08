import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { api, config } from "../../endpoints";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";

const Dominance = ({
  mostImportant,
  dominance,
  setDominance,
  setStrainType,
  strainType,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dominanceAnswered, setDominanceAnswered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(`${api}/dominance`, config);

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const linker = () => {
    if (mostImportant === "") {
      return "/know-post";
    } else {
      return "/strains";
    }
  };

  return (
    <div className="main-survey">
      <h3>Choose Dominance:</h3>
      <p>*Balanced = 1:1*</p>
      <div>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <div className="survey">
            {data &&
              data.map((doms, index) => (
                <div
                  key={index}
                  className="answers"
                  onClick={() => {
                    setDominance(doms);
                    setDominanceAnswered(true);
                  }}
                  style={
                    doms.DominanceID === dominance.DominanceID
                      ? {
                          border: "3px solid #53a57d",
                          backgroundColor: "#53a57d",
                          color: "#ffffff",
                        }
                      : {
                          border: "3px solid rgb(192, 192, 192)",
                          color: "#383d3b",
                        }
                  }
                >
                  {doms.Dominance}
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="questionButtons">
        <div className="questionButtons">
          <Link to="/question-two">
            <Button aria-label="delete" className="iconBTN">
              <ArrowBackIcon /> Back
            </Button>
          </Link>
          <Link to={linker()} disabled={dominanceAnswered}>
            <Button aria-label="delete" className="iconBTN">
              Next <ArrowForwardIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dominance;
