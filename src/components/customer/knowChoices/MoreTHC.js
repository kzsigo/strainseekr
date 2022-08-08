import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MoreTHC = ({ thcLevels, setThcLevels, mostImportant }) => {
  const [minOpen, setMinOpen] = useState(false);

  const handleMin = (event) => {
    setThcLevels(event.target.value);
  };

  const handleMinClose = () => {
    setMinOpen(false);
  };

  const handleMinOpen = () => {
    setMinOpen(true);
  };

  return (
    <div className="percents" style={{ fontWeight: "500" }}>
      <h3 style={{ fontWeight: "500" }}>
        If you would like, choose a minimum level of THC:
      </h3>
      <div className="percentage-div">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-controlled-open-select-label">Min</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={minOpen}
            onClose={handleMinClose}
            onOpen={handleMinOpen}
            value={thcLevels}
            label="Age"
            onChange={handleMin}
          >
            <MenuItem value={0}>No Minimum</MenuItem>
            <MenuItem value={10}>10%</MenuItem>
            <MenuItem value={15}>15%</MenuItem>
            <MenuItem value={20}>20%</MenuItem>
            <MenuItem value={25}>25%</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="questionButtons">
        <div className="questionButtons">
          <Link to="/strains">
            <Button aria-label="delete" className="iconBTN">
              <ArrowBackIcon /> Back
            </Button>
          </Link>
          <Link to="/survey-post">
            <Button aria-label="delete" className="iconBTN">
              Next <ArrowForwardIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreTHC;
