import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api, config } from "../../../endpoints";
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
  const navigate = useNavigate();

  const knowData = {
    DispensaryID: 2,
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="post-text"
        style={{
          textAlign: "center",
        }}
      >
        <h3>Thank you!</h3>
        <p style={{ marginTop: "40px" }}>
          Hit submit to instantly view your results.
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
