import React from "react";
import { Link } from "react-router-dom";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const TwoChoices = ({
  userName,
  setMostImportant,
  setSecondImportant,
  setThirdImportant,
}) => {
  const handleCleared = () => {
    setMostImportant("");
    setSecondImportant("");
    setThirdImportant("");
  };

  return (
    <div className="two-choices" style={{ textAlign: "center" }}>
      <h3>Thank you, {userName}</h3>
      <p>How would you like to find the perfect product today?</p>
      <div className="boxes" style={{ marginTop: "60px" }}>
        <Link to="/survey">
          <div className="two-box-choice">
            <div className="circle-choice">
              <QuestionMarkIcon />
            </div>

            <div className="choice-text">
              <p>Let our experts guide you!</p>
            </div>
          </div>
        </Link>

        <Link to="/know" onClick={handleCleared}>
          <div className="two-box-choice">
            <div className="circle-choice">
              <ThumbUpOffAltIcon />
            </div>
            <div className="choice-text">
              <p>Sort inventory by Taste, Smell, or Compound</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TwoChoices;
