import React, { useState } from "react";
import axios from "axios";
import { api, config } from "../../endpoints";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const TenderModal = ({ open, handleClose, handleOpen, thisStrainID }) => {
  return (
    <div className="divModal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="endModal"
        sx={{
          mx: 0.5,
          fontSize: 14,
          height: "100%",
        }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: "20px" }}
          >
            Elements for Strain {}
          </Typography>
          <div className="funModal">
            {thisStrainID &&
              thisStrainID.map((s, index) => (
                <div className="elemenetDiv" key={index}>
                  <p>Category: {s.Category}</p>
                  <p>Property: {s.Property}</p>
                  <p>Terpene: {s.Terpene}</p>
                  <p>Percentage: {s.Percentage}</p>
                  <p>Score: {s.Score}</p>
                </div>
              ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TenderModal;
