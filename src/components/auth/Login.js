import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { URL } from "../../endpoints";

const Login = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const fetchData = () => {
    const auth = { username: loginName, password: loginPassword };
    try {
      return axios.post(URL, auth).then((response) => {
        if (response.data[0] !== null) {
          localStorage.setItem("user", JSON.stringify(response.data[0]));
          navigate(`/dispensary/${response.data[0].DispensaryID}/client-list`);
        }
        return response.data;
      });
    } catch (error) {
      setErrorMessage(true);
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <h3>Login</h3>
        {errorMessage ? (
          <Alert variant="filled" severity="error">
            Your credentials were not authorized!! Please try again!
          </Alert>
        ) : (
          ""
        )}
        <form>
          <TextField
            onChange={(e) => setLoginName(e.target.value)}
            type="text"
            label="Username"
            variant="outlined"
            autoComplete="username"
          />
          <TextField
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
            label="Password"
            variant="outlined"
            autoComplete="current-password"
          />
          <div className="submit-button">
            <Button
              onClick={() => {
                fetchData();
              }}
              variant="contained"
              color="success"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
