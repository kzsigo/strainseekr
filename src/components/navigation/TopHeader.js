import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import Zoom from "react-reveal/Zoom";

const TopHeader = () => {
  return (
    <div className="header">
      <Link to="/">
        <Zoom top>
          <div className="logoDiv">
            <img src={Logo} alt="strainseekr Logo" />
          </div>
        </Zoom>
      </Link>
    </div>
  );
};

export default TopHeader;
