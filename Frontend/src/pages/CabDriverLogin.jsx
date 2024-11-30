import React, { useState } from "react";
import { Link } from "react-router-dom";

const CabDriverLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email,
      password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://logo-suggestion.renderforest.com/suggestions-images/20d9/dbba/20d9dbbaad8ecfeb85240ffcde495244.png"
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
