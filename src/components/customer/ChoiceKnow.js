import React from "react";
import { Link } from "react-router-dom";

const ChoiceKnow = () => {
  return (
    <div className="choice-know">
      <h3>What is most important to you?</h3>
      <div className="pick-know">
        <Link to="/terpene">
          <div className="knowBoxes">
            <p>Terpenes</p>
          </div>
        </Link>
        <Link to="/cannabinoid">
          <div className="knowBoxes">
            <p>Cannabinoid</p>
          </div>
        </Link>
        <Link to="/taste">
          <div className="knowBoxes">
            <p>Taste</p>
          </div>
        </Link>
        <Link to="/smell">
          <div className="knowBoxes">
            <p>Smell</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ChoiceKnow;
