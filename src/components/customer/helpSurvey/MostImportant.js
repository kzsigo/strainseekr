import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { surveyImportance } from "../../../endpoints";

const MostImportant = ({ setMostImportant, mostImportant }) => {
  const [oneAnswered, setOneAnswered] = useState(false);

  const pickMostImportant = () => {
    if (mostImportant === "WeightingProperty") {
      return "/need-choices";
    } else if (mostImportant === "WeightingSmell") {
      return "/smell-choices";
    } else if (mostImportant === "WeightingTaste") {
      return "/taste-choices";
    } else {
      return "/";
    }
  };

  return (
    <div className="main-survey">
      <h3>What do you care about the most?</h3>
      <p>None of your responses will be shared</p>
      <div className="survey">
        {surveyImportance.map((option, index) => (
          <div
            key={index}
            className="answers"
            onClick={() => {
              setMostImportant(option.value);
              setOneAnswered(true);
            }}
            style={
              mostImportant === option.value
                ? {
                    border: "3px solid #53a57d",
                    backgroundColor: "#53a57d",
                    color: "#ffffff",
                  }
                : { border: "3px solid rgb(192, 192, 192)", color: "#383d3b" }
            }
          >
            {option.question}
          </div>
        ))}
      </div>
      <div className="questionButtons">
        <Link to={pickMostImportant()} disabled={oneAnswered}>
          <Button aria-label="delete" className="iconBTN">
            Next <ArrowForwardIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MostImportant;
