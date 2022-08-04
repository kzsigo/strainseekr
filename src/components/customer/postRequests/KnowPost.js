import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api, config } from "../../../endpoints";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

const KnowPost = ({
  userName,
  strainType,
  dominance,
  smellChoice,
  tasteChoice,
  cannabinoid,
  terpene,
  selections,
  setSelections,
}) => {
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const returnNan = (selectionNaN) => {
    if (Number.isNaN(parseInt(selectionNaN))) {
      return 0;
    } else {
      return parseInt(selectionNaN);
    }
  };

  console.log({
    DispensaryID: 1,
    MaxRows: 5,
    DominancePreference: dominance.DominanceID,
    L1_TerpeneID: terpene,
    L1_CannabinoidID: cannabinoid,
    L1_TasteID: tasteChoice,
    L1_SmellID: smellChoice,
    L2_TerpeneID: 0,
    L2_CannabinoidID: 0,
    L2_TasteID: 0,
    L2_SmellID: 0,
  });

  const knowData = {
    DispensaryID: 1,
    MaxRows: 25,
    DominancePreference: dominance.DominanceID,
    L1_TerpeneID: terpene,
    L1_CannabinoidID: cannabinoid,
    L1_TasteID: tasteChoice,
    L1_SmellID: smellChoice,
    L2_TerpeneID: 0,
    L2_CannabinoidID: 0,
    L2_TasteID: 0,
    L2_SmellID: 0,
  };

  const handleKnow = () => {
    axios
      .post(`${api}/strainbrowser`, knowData, config)
      .then((response) => {
        setSelections(response.data);
      })
      .catch((error) => {
        console.error({ errorMessage: error.message });
      });

    navigate(`/results`, { replace: true });
  };

  console.log(selections);

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
        <Alert severity="success">Your submission was successful!</Alert>
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
        onClick={handleKnow}
      >
        Submit Request
      </Button>
    </div>
  );
};

export default KnowPost;
