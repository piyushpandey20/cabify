import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1553689895-e8f673d3c052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhYiUyMHdpdGglMjB0cmFmZmljJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D')] h-screen w-full pt-8 flex justify-between flex-col">
        <img
          className="w-20 ml-8"
          src="https://logo-suggestion.renderforest.com/suggestions-images/20d9/dbba/20d9dbbaad8ecfeb85240ffcde495244.png"
          alt="bg-img"
        />
        <div className="bg-white py-5 px-10">
          <h2 className="text-2xl font-bold">Get Started with Cabify</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
