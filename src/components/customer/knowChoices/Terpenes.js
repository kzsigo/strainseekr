import React, { useEffect, useState } from "react";
import axios from "axios";
import { api, config } from "../../../endpoints";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

//  FIX THE LINK FOR TERPENE CHOICE
//  DOES THIS AUTOMATICALLY MAKE PUSH REQUEST???

const Terpenes = ({ setTerpene, terpene }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTerpenes = async () => {
      setIsLoading(true);
      const result = await axios(`${api}/terpene`, config);

      setData(result.data);
      setIsLoading(false);
    };

    fetchTerpenes();
  }, []);
  console.log(data);
  return (
    <div>
      <div
        className="titleText"
        style={{ textAlign: "center", padding: "10px" }}
      >
        <h3>
          Sort by{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            "Terpene":
          </span>
        </h3>
        <p>
          Select a{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            “Terpene”
          </span>{" "}
          to find the product with the highest % of that terpene.
        </p>
      </div>
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div>
          <div className="taste">
            {data &&
              data.map((terp, index) => (
                <div
                  key={index}
                  className="answers"
                  onClick={() => {
                    setTerpene(terp.TerpeneID);
                  }}
                  style={
                    terpene === terp.TerpeneID
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
                  {terp.Terpene}
                </div>
              ))}
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

export default Terpenes;
