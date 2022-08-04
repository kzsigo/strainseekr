import React from "react";
import { Link } from "react-router-dom";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const TwoChoices = ({ userName, setMostImportant, setSecondImportant }) => {
  const handleCleared = () => {
    setMostImportant("");
    setSecondImportant("");
  };

  return (
    <div className="two-choices">
      <h3>Thank you, {userName}</h3>
      <h3>Please Pick One:</h3>
      <div className="boxes">
        <Link to="/survey">
          <div className="two-box-choice">
            <div className="circle-choice">
              <QuestionMarkIcon />
            </div>

            <div className="choice-text">
              <p>Help for specific feeling or need?</p>
            </div>
          </div>
        </Link>

        <Link to="/know" onClick={handleCleared}>
          <div className="two-box-choice">
            <div className="circle-choice">
              <ThumbUpOffAltIcon />
            </div>
            <div className="choice-text">
              <p>Already know what to look for?</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TwoChoices;
