import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { api, config } from "../../../endpoints";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// DONE!!!

const TasteChoices = ({
  setTasteChoice,
  tasteChoice,
  mostImportant,
  secondImportant,
  thirdImportant,
}) => {
  const [data, setData] = useState([]);
  const [tasteAnswered, setTasteAnswered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(`${api}/taste`, config);
      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(
    "Most Import: ",
    mostImportant,
    "Second Import: ",
    secondImportant,
    "Third Import: ",
    thirdImportant
  );

  const completeFunction = () => {
    if (mostImportant === "WeightingTaste") {
      return "/question-two";
    } else if (thirdImportant === "WeightingTaste") {
      return "/dominance";
    } else if (secondImportant === "WeightingTaste" && thirdImportant === "") {
      return "/dominance";
    } else if (
      secondImportant === "WeightingTaste" &&
      thirdImportant === "WeightingProperty"
    ) {
      return "/need-choices";
    } else if (
      secondImportant === "WeightingTaste" &&
      thirdImportant === "WeightingSmell"
    ) {
      return "/smell-choices";
    } else {
      return "/";
    }
  };

  return (
    <div className="main-survey">
      <h3>Select a Desired Taste:</h3>
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
              data.map((taste, index) =>
                taste.TasteID > 35 ? (
                  <div
                    key={index}
                    className="answers"
                    onClick={() => {
                      setTasteChoice(taste.TasteID);
                      setTasteAnswered(true);
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
          </div>
        )}
      </div>

      <div className="questionButtons">
        <Link to="/question-two">
          <Button aria-label="delete" className="iconBTN">
            <ArrowBackIcon /> Back
          </Button>
        </Link>
        <Link to={completeFunction()} disabled={tasteAnswered}>
          <Button aria-label="delete" className="iconBTN">
            Next <ArrowForwardIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TasteChoices;
