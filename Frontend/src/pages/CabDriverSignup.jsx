import React, { useState } from "react";
import { Link } from "react-router-dom";

const CabDriverSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName,
        lastName,
      },
      email,
      password,
    });
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://logo-suggestion.renderforest.com/suggestions-images/20d9/dbba/20d9dbbaad8ecfeb85240ffcde495244.png"
          alt="bg-img"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg w-full font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="test@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Signup
          </button>
          <p className="text-center">
            Already have a account?{" "}
            <Link to="/cabdriver-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CabDriverSignup;
