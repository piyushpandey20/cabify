import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CabDriverDataContext } from "../context/CabDriverContext";
import axios from "axios";
import logo from "../img/logo.png"

const CabDriverLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { cabDriver, setCabDriver } = useContext(CabDriverDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const cabDriver = {
      email,
      password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/cabDrivers/login`,
      cabDriver
    );

    if (response.status === 200) {
      const data = response.data;
      setCabDriver(data.cabDriver);
      localStorage.setItem("token", data.token);
      navigate("/cabdriver-home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src={logo}
          alt="bg-img"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="test@gmail.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Join a fleet?{" "}
            <Link to="/cabdriver-signup" className="text-blue-600">
              Register as a Cab Driver
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/login"}
          className="bg-blue-400 flex items-center justify-center mb-5 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CabDriverLogin;
