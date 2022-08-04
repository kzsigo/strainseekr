import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { api, config } from "../../../endpoints";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";

// DOES THIS AUTOMATICALLY MAKE PUSH REQUEST???

const Taste = ({ tasteChoice, setTasteChoice }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTastes = async () => {
      setIsLoading(true);
      const result = await axios(`${api}/taste`, config);

      setData(result.data);
      setIsLoading(false);
    };

    fetchTastes();
  }, []);

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
        <div className="taste">
          {data &&
            data.map((taste, index) =>
              taste.TasteID > 35 ? (
                <div
                  key={index}
                  className="answers"
                  onClick={() => {
                    setTasteChoice(taste.TasteID);
                  }}
                  style={
                    tasteChoice === taste.TasteID
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
                  {taste.Taste}
                </div>
              ) : (
                ""
              )
            )}
          <div className="bottom-links">
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
        </div>
      )}
    </div>
  );
};

export default Taste;
