import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { api, config } from "../../../endpoints";

const NeedChoices = ({
  setCondition,
  condition,
  mostImportant,
  secondImportant,
  thirdImportant,
}) => {
  const [data, setData] = useState([]);
  const [conditionAnswered, setConditionAnswered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [foundConditions, setFoundConditions] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(`${api}/condition`, config);

      setData(result.data);
      setFoundConditions(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const searchTerm = (keyword) => (need) => {
    need.Condition.toLowerCase().includes(keyword);
  };

  const completeFunction = () => {
    if (mostImportant === "WeightingProperty") {
      return "/question-two";
    } else if (thirdImportant === "WeightingProperty") {
      return "/dominance";
    } else if (
      secondImportant === "WeightingProperty" &&
      thirdImportant === ""
    ) {
      return "/dominance";
    } else if (
      secondImportant === "WeightingProperty" &&
      thirdImportant === "WeightingTaste"
    ) {
      return "/taste-choices";
    } else if (
      secondImportant === "WeightingProperty" &&
      thirdImportant === "WeightingSmell"
    ) {
      return "/smell-choices";
    } else {
      return "/";
    }
  };

  const filter = (e) => {
    setKeyword(e.target.value);

    if (keyword !== "") {
      const results = data.filter((c) => {
        return c.Condition.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundConditions(results);
    } else {
      const resulter = data.filter((c) => {
        return c.Condition.toLowerCase().includes("i");
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundConditions(resulter);
    }
  };

  console.log("Keyword: ", keyword);

  return (
    <div className="main-survey">
      <h3
        style={{
          padding: "10px",
          textAlign: "center",
        }}
      >
        You stated that you are searching for relief:
      </h3>
      <p>What would you like relief from?</p>
      <p
        style={{
          textAlign: "center",
          color: "red",
          fontSize: "12px",
          padding: "20px",
        }}
      >
        **Note: This is not a cure, and does not suffice as a medical
        examination. There is no guarantee that selecting a Condition set below
        will address that condition. This is for entertainment purposes only.
        Always seek medical advice prior to using cannabis
      </p>

      <div>
        <div className="searching">
          {/* <LocalSearch keyword={keyword} setKeyword={setKeyword} /> */}
          <input
            type="search"
            value={keyword}
            onChange={filter}
            className="input"
            placeholder="Search for a Specific Condition"
            style={{
              border: "2px solid #e0e0e0",
              borderRadius: "8px",
              padding: "10px 15px",
              width: "250px",
            }}
          />
        </div>

        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <div className="survey">
            {foundConditions && foundConditions.length > 0 ? (
              foundConditions.map((need) => (
                <div
                  key={need.ConditionID}
                  className="answers"
                  onClick={() => {
                    setCondition(need.ConditionID);
                    setConditionAnswered(true);
                  }}
                  style={
                    condition === need.ConditionID
                      ? {
                          border: "3px solid #53a57d",
                          backgroundColor: "#53a57d",
                          color: "#ffffff",
                        }
                      : {
                          border: "3px solid rgb(192, 192, 192)",
                          color: "#383d3b",
                        }
                  }
                >
                  {need.Condition}
                </div>
              ))
            ) : (
              <h1>No Results Found</h1>
            )}
          </div>
        )}
      </div>

      <div className="questionButtons">
        <Link to="/question-two">
          <Button aria-label="delete" className="iconBTN">
            <ArrowBackIcon /> Back
          </Button>
        </Link>
        <Link to={completeFunction()} disabled={conditionAnswered}>
          <Button aria-label="delete" className="iconBTN">
            Next <ArrowForwardIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NeedChoices;
