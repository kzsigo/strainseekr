import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { surveyImportance } from "../../../endpoints";

const MostImportant = ({
  setMostImportant,
  mostImportant,
  setSecondImportant,
  setThirdImportant,
}) => {
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
    <div className="main-survey" style={{ textAlign: "center" }}>
      <h3>What matters the most to you when you choose a product?</h3>
      <p>This will help us find the very best product for you</p>
      <div className="survey">
        {surveyImportance.map((option, index) => (
          <div
            key={index}
            className="answers"
            onClick={() => {
              setMostImportant(option.value);
              setSecondImportant("");
              setThirdImportant("");
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
