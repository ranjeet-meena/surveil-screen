import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import "./style.css";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Login({classnames, setClassnames}) {
    const [loginSuccess, setLoginSuccess] = useState(false)
    const navigate = useNavigate()
    const Login = ()=>{
        setLoginSuccess(true)
        setClassnames({ loginSuccess: 'login-success', loadAfterLogin: '' })
        setTimeout(()=>{
             setClassnames({ loginSuccess: 'after-login', loadAfterLogin: 'after-login' })
        },2000)
    }
  return (
      <div className={loginSuccess ? "containersign login-success" :"containersign"}>
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

          <button className="buttonicon" onClick={Login}>
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
  );
}

export default Login;
