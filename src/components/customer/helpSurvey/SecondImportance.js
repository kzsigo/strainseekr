import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { surveyImportance } from "../../../endpoints";

const SecondImportance = ({
  mostImportant,
  secondImportant,
  setSecondImportant,
  setThirdImportant,
  thirdImportant,
}) => {
  const [secondAnswered, setSecondAnswered] = useState(false);

  const linkFunction = () => {
    if (secondImportant === "WeightingProperty") {
      return "/need-choices";
    } else if (secondImportant === "WeightingTaste") {
      return "/taste-choices";
    } else if (secondImportant === "WeightingSmell") {
      return "/smell-choices";
    } else if (
      secondImportant === "" &&
      thirdImportant === "WeightingProperty"
    ) {
      return "/need-choices";
    } else if (secondImportant === "" && thirdImportant === "WeightingTaste") {
      return "/taste-choices";
    } else if (secondImportant === "" && thirdImportant === "WeightingSmell") {
      return "/smell-choices";
    } else {
      return "/dominance";
    }
  };

  const wordsImportant = () => {
    if (mostImportant === "WeightingProperty") {
      return "feeling";
    } else if (mostImportant === "WeightingTaste") {
      return "taste";
    } else {
      return "smell";
    }
  };

  return (
    <div className="main-survey">
      <h3
        style={{
          textAlign: "center",
          margin: "20px 20px 0 20px",
          fontWeight: "500",
        }}
      >
        Now that we know what you're looking for {wordsImportant()}. Do you want
        us to take anything else into consideration?
      </h3>
      <p></p>
      {
        <div className="survey">
          {surveyImportance.map((option, index) =>
            mostImportant !== option.value ? (
              <div
                key={index}
                className="answers"
                style={
                  thirdImportant === option.value ||
                  secondImportant === option.value
                    ? {
                        border: "3px solid #53a57d",
                        backgroundColor: "#53a57d",
                        color: "#ffffff",
                      }
                    : {
                        border: "3px solid rgb(192, 192, 192)",
                        color: "#383d3b",
                        fontWeight: "500",
                      }
                }
                onClick={() => {
                  if (secondImportant === "" && thirdImportant === "") {
                    setSecondImportant(option.value);
                  } else if (secondImportant === option.value) {
                    setSecondImportant("");
                  } else if (
                    secondImportant !== option.value &&
                    thirdImportant === option.value
                  ) {
                    setThirdImportant("");
                  } else if (
                    secondImportant !== "" &&
                    secondImportant !== option.value &&
                    thirdImportant !== option.value
                  ) {
                    setThirdImportant(option.value);
                  } else {
                    setSecondImportant("");
                    setThirdImportant("");
                  }
                }}
              >
                {option.question}
              </div>
            ) : (
              ""
            )
          )}
          <div
            className="answers"
            style={
              secondImportant === "" && thirdImportant === ""
                ? {
                    border: "3px solid #53a57d",
                    backgroundColor: "#53a57d",
                    color: "#ffffff",
                  }
                : {
                    border: "3px solid rgb(192, 192, 192)",
                    color: "#383d3b",
                    fontWeight: "500",
                  }
            }
            onClick={() => {
              setSecondImportant("");
              setThirdImportant("");
              setSecondAnswered(true);
            }}
          >
            Neither
          </div>
        </div>
      }
      <div className="questionButtons">
        <Link to="/survey">
          <Button aria-label="delete" className="iconBTN">
            <ArrowBackIcon /> Back
          </Button>
        </Link>
        <Link to={linkFunction()} disabled={secondAnswered}>
          <Button aria-label="delete" color="success" className="iconBTN">
            Next <ArrowForwardIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SecondImportance;
