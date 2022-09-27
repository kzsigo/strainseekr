import React from "react";
import { Link, Navigate } from "react-router-dom";
import Logo from "../../images/logo.png";
import Zoom from "react-reveal/Zoom";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { URL } from "../../endpoints";

const TopHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.clear();
    <Navigate to="/dispensary/login" replace />;
  };
  return (
    <div className="header">
      <Link to="/">
        <Zoom top>
          <div className="logoDiv">
            <img src={Logo} alt="strainseekr Logo" />
          </div>
        </Zoom>
      </Link>
      <div className="float-left">
        {user && user.DispensaryID ? (
          <Link to="/dispensary/login" onClick={handleLogout}>
            <IconButton color="success" component="label">
              <ExitToAppIcon />
            </IconButton>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TopHeader;
