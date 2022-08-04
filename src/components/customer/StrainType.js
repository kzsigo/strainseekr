import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { api, config } from "../../endpoints";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";

const StrainType = ({
  dominance,
  setDominance,
  setStrainType,
  strainType,
  mostImportant,
  secondImportant,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [strainAnswered, setStrainAnswered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(`${api}/straintype`, config);

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const finalLinks = () => {
    if (dominance.DominanceID === 1) {
      return "/thc-levels";
    } else if (dominance.DominanceID === 2) {
      return "/cbd-levels";
    } else {
      return "/know-post";
    }
  };

  console.log(data);

  return (
    <div className="main-survey">
      <h3>Choose a Strain:</h3>
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
              data.map((strain, index) => (
                <div
                  key={index}
                  className="answers"
                  onClick={() => {
                    setStrainType(strain);
                    setStrainAnswered(true);
                  }}
                  style={
                    strain.StrainTypeID === strainType.StrainTypeID
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
                  {strain.StrainType}
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
          <Link to={finalLinks()}>
            <Button aria-label="delete" className="iconBTN">
              Next <ArrowForwardIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StrainType;
