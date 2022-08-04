import React, { useEffect, useState } from "react";
import axios from "axios";
import { api, config } from "../../../endpoints";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

//  FIX THE LINK FOR Cannabinoid CHOICE
//  DOES THIS AUTOMATICALLY MAKE PUSH REQUEST???

const Cannabinoid = ({ cannabinoid, setCannabinoid }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCannabinoid = async () => {
      setIsLoading(true);
      const result = await axios(`${api}/cannabinoid`, config);

      setData(result.data);
      setIsLoading(false);
    };

    fetchCannabinoid();
  }, []);
  console.log(cannabinoid);
  return (
    <div>
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div>
          <h3 style={{ textAlign: "center" }}>Cannabinoid</h3>
          <div className="taste">
            {data &&
              data.map((can, index) => (
                <div
                  key={index}
                  className="answers"
                  onClick={() => {
                    setCannabinoid(can.CannabinoidID);
                  }}
                  style={
                    cannabinoid === can.CannabinoidID
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
                  {can.Cannabinoid}
                </div>
              ))}
          </div>
        </div>
      )}
      <div className="questionButtons">
        <Link to="/know">
          <Button aria-label="delete" className="iconBTN">
            <ArrowBackIcon /> Back
          </Button>
        </Link>
        <Link to="/dominance">
          <Button aria-label="delete" color="success" className="iconBTN">
            Next <ArrowForwardIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cannabinoid;
