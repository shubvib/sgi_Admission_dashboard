import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes(props) {
  const navigate = useNavigate();
  const { Component } = props;
  useEffect(() => {
    let login = sessionStorage.getItem("login");
    if (!login) {
      navigate("/");
    }
  },[]);
  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoutes;
