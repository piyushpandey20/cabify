import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CabDriverDataContext } from "../context/CabDriverContext";
import axios from "axios";

const CabDriverProtectWrapper = ({children}) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { cabDriver, setCabDriver } = useContext(CabDriverDataContext);
  useEffect(() => {
    if (!token) {
      navigate("/cabdriver-login");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/cabDrivers/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCabDriver(response.data.cabDriver);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        localStorage.removeItem("token");
        navigate("/cabdriver-login");
      });
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};

export default CabDriverProtectWrapper;
