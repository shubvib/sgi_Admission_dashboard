import React, { useState, useMemo } from "react";
import { Link, json } from "react-router-dom";
import img from "../src/images/SGI-Logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Countdown from "react-countdown";
import { useRef } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function Login() {
  const ref = useRef();
  const [userName, setuserName] = useState("");
  const [Password, setPassword] = useState("");
  const count = useMemo(() => Date.now() + 300000, []);
  const [time, settime] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [disable, setdisable] = useState(false);
  const [k, setK] = useState(false);
  const [timerState, settimerState] = useState(Date.now());
  const onCompleteTimeFun = () => {
    console.log("Resetting Time");
    setK(true);
    settimerState(Date.now() + 300000);
  };

  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const renderer = ({ minutes, seconds }) => {
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };

  const getOTP = (e) => {
    if (userName === "") {
      toast.warn("Enter Email");
    } else {
      axios
        .get("https://localhost:44312/api/DirectLogin")
        .then((res) => {
          // console.log(res.data);
          setdisable(true);
          sessionStorage.setItem("User", JSON.stringify(res.data));
          toast.success(res.data.Message);
        })
        .catch((error) => {
          console.log(error);
          toast.warn(error);
        });
      settime(true);
    }
    e.preventDefault();
    ref.current?.start();
    setTimeout(() => sessionStorage.removeItem("User"), 300000);
    setTimeout(() => setdisable(false), 300000);
  };

  const handellogin = (e) => {
    const userData = JSON.parse(sessionStorage.getItem("User"));
    // console.log(userData.Emailid);
    // console.log(userData.OTP);
    if (userData) {
      if (userName === userData.Emailid && Password === "") {
        toast.warn("Enter OTP");
      } else if (userName === userData.Emailid && Password === userData.OTP) {
        sessionStorage.setItem("login", true);
        navigate("/portal/user-list");
      } else {
        toast.warn("Invalid Login");
      }
    } else if (userName && Password) {
      toast.warn("Invalid Login");
    } else {
      toast.warn("Generate OTP");
    }
    e.preventDefault();
  };

  return (
    <>
      <ToastContainer />
      <div className="justify-content-center">
        <div className="container-fluid">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row" style={{ height: "90vh" }}>
                <div className="col-lg-6 d-flex justify-content-center align-items-center mt-4">
                  <img
                    src={img}
                    className="img-fluid"
                    height="250px"
                    width="220px"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="p-5 ">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" name="loginform" id="loginform">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="username"
                          name="username"
                          // aria-describedby="userHelp"
                          placeholder="Enter Email"
                          onChange={(e) => setuserName(e.target.value)}
                          value={userName}
                        />
                      </div>
                      <div className="form-group d-flex mb-4">
                        <input
                          type={type}
                          className="form-control form-control-user"
                          id="password"
                          name="password"
                          placeholder="Enter OTP"
                          onChange={(e) => setPassword(e.target.value)}
                          value={Password}
                        />
                        <span
                          className="d-flex justify-content-around align-items-center"
                          onClick={handleToggle}
                        >
                          <Icon
                            className="position-absolute mr-5"
                            icon={icon}
                            size={20}
                          />
                        </span>
                      </div>
                      {time ? (
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <h6>
                              <p style={{ display: "inline" }}>
                                OTP Valid for{" "}
                              </p>
                              <Countdown
                                date={timerState}
                                renderer={renderer}
                                ref={ref}
                                key={k}
                                onComplete={onCompleteTimeFun}
                              />
                              <p style={{ display: "inline" }}> Min</p>
                            </h6>
                          </div>
                        </div>
                      ) : null}
                      <button
                        onClick={(e) => getOTP(e)}
                        className="btn btn-primary btn-user btn-block"
                        disabled={disable}
                      >
                        <h6>Get OTP</h6>
                      </button>
                      <button
                        onClick={(e) => handellogin(e)}
                        className="btn btn-primary btn-user btn-block"
                      >
                        <h6>Login</h6>
                      </button>
                      <hr />
                      <a href="#" className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw"></i> Login with
                        Google
                      </a>
                      <a
                        href="#"
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </a>
                    </form>
                    {/* <div className="text-center">
                      <a className="small" href="#">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="#">
                        Create an Account!
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
