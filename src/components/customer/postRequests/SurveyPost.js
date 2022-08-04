import React, { useState, useEffect } from "react";
import axios from "axios";
import { api, config } from "../../../endpoints";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

const SurveyPost = ({
  userName,
  strainType,
  dominance,
  smellChoice,
  tasteChoice,
  condition,
  mostImportant,
  secondImportant,
  thirdImportant,
  thcLevels,
  cbdLevels,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [strainAnswered, setStrainAnswered] = useState(false);
  const [success, setSuccess] = useState(false);
  const [surveyNumber, setsurveyNumber] = useState("");

  const choiceDataScoring = (choices) => {
    if (
      mostImportant === choices &&
      secondImportant === "" &&
      thirdImportant === ""
    ) {
      return 100;
    } else if (
      mostImportant === choices &&
      secondImportant !== "" &&
      thirdImportant !== ""
    ) {
      return 70;
    } else if (
      mostImportant === choices &&
      secondImportant === "" &&
      thirdImportant !== ""
    ) {
      return 70;
    } else if (
      mostImportant === choices &&
      secondImportant !== "" &&
      thirdImportant === ""
    ) {
      return 70;
    } else if (
      mostImportant !== choices &&
      secondImportant === choices &&
      thirdImportant === ""
    ) {
      return 30;
    } else if (
      mostImportant !== choices &&
      secondImportant === "" &&
      thirdImportant === choices
    ) {
      return 30;
    } else if (
      mostImportant !== choices &&
      secondImportant !== "" &&
      thirdImportant === choices
    ) {
      return 15;
    } else if (
      mostImportant !== choices &&
      secondImportant === choices &&
      thirdImportant !== ""
    ) {
      return 15;
    } else {
      return 0;
    }
  };

  const returnNan = (selectionNaN) => {
    if (Number.isNaN(parseInt(selectionNaN))) {
      return 0;
    } else {
      return parseInt(selectionNaN);
    }
  };

  const surveyData = {
    SearchName: userName,
    SearchDesr: "",
    StrainTypeID: strainType.StrainTypeID,
    WeightingProperty: choiceDataScoring("WeightingProperty"),
    WeightingTaste: choiceDataScoring("WeightingTaste"),
    WeightingSmell: choiceDataScoring("WeightingSmell"),
    THCMin: thcLevels,
    THCMax: 100,
    CBDMin: cbdLevels,
    CBDMax: 100,
    Dominance: dominance.DominanceID,
    ConditionID: returnNan(condition),
    SmellID: returnNan(smellChoice),
    TasteID: returnNan(tasteChoice),
    ExcludedTerpenes: "",
    DispensaryID: 1,
  };

  console.log(surveyData);
  console.log(
    choiceDataScoring("WeightingProperty"),
    choiceDataScoring("WeightingTaste"),
    choiceDataScoring("WeightingSmell")
  );

  const handleAPI = () => {
    axios
      .post(`${api}/surveyadd`, surveyData, config)
      .then((response) => {
        const res = response.data[0];
        setsurveyNumber(res[Object.keys(res)[0]]);
        setSuccess(true);
      })
      .catch((error) => {
        console.error({ errorMessage: error.message });
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {success ? (
        <Alert severity="success">
          #{surveyNumber} Your submission was successful!
        </Alert>
      ) : (
        ""
      )}
      <div
        className="post-text"
        style={{
          textAlign: "center",
        }}
      >
        <h3>Thank you, {userName}!</h3>
        <p style={{ marginTop: "40px" }}>
          Please hit submit for the Bud Tender
        </p>
      </div>
      <Button
        style={{ marginTop: "40px" }}
        variant="contained"
        color="success"
        onClick={handleAPI}
      >
        Submit Request
      </Button>
    </div>
  );
};

export default SurveyPost;
