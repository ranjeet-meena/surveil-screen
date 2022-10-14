import React from "react";
import TextField from "@mui/material/TextField";

import "./style.css";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Login() {
  return (
    <div>
      <div className="containersign">
        <div className="textcontain">
          <TextField fullWidth id="standard-basic" label="" variant="standard" />
          <br />
          <TextField fullWidth id="standard-basic" label="" variant="standard" />
          <br />
          <span>
            <Checkbox {...label} defaultChecked size="small" />
            <span>Remember me</span>
          </span>
          {/* <br /> */}

          <button className="buttonicon">
            <h1>Sign In</h1>
            <span>
              <ArrowForwardOutlinedIcon
                style={{ width: "40px", height: "50px" }}
              />{" "}
            </span>{" "}
          </button>
          <span className="forgot">
            <span>Forgot Credentials?</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
