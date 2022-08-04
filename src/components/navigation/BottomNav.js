// import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import StoreIcon from "@mui/icons-material/Store";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const actions = [
  { icon: <StoreIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <ManageAccountsIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const BottomNav = () => {
  return (
    <Box
      sx={{ height: 500, transform: "translateZ(0px)", flexGrow: 1 }}
      className="bottom-nav"
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default BottomNav;
