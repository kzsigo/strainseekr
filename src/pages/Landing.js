import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Bounce from "react-reveal/Bounce";

const Landing = ({
  userName,
  setUserName,
  setSecondImportant,
  setThirdImportant,
  setMostImportant,
}) => {
  return (
    <div className="landing">
      <Bounce right>
        <div className="head-title">
          <h1 className="welcome">Welcome to StrainSeekr</h1>
        </div>
      </Bounce>
      <div className="username-input">
        <TextField
          id="outlined-basic"
          error={userName.length === 1}
          label="Enter a readable Username"
          variant="outlined"
          helperText={
            userName.length !== 1
              ? "**For privacy, please do not enter any personal name"
              : "Username must be greater than one letter!!!"
          }
          size="medium"
          onChange={(e) => setUserName(e.target.value)}
        />
        <div className="submitUserName">
          <Link
            to={userName.length >= 2 ? "/two-choices" : ""}
            onClick={() => {
              setMostImportant("");
              setSecondImportant("");
              setThirdImportant("");
            }}
          >
            <Button
              variant="contained"
              color="success"
              disabled={userName.length < 2}
              sx={{
                backgroundColor: "#53A57d",
                borderRadius: "10px",
                padding: "10px",
              }}
              onClick={() => {
                console.log(userName);
              }}
            >
              Next Step <ArrowForwardIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Link>
        </div>
      </div>
      {/* <div className="choice-div">
        <Bounce right>
          <SurveyChoice />
        </Bounce>
        <Bounce left>
          <SearchTerpene />
        </Bounce>
      </div> */}
    </div>
  );
};

export default Landing;
