import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to={"/home"} className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2 ">
        <img
          className="h-full w-full object-cover"
          src="https://i.redd.it/g2r5ewz4tqk11.jpg"
          alt="map-image"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-16"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
          />
          <div className=" text-right">
            <h2 className=" text-lg font-medium">Sarthak </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">HR 04 AB 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Swift</p>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center gap-2">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">22B/11-A</h3>
                <p className=" text-sm -mt-1 text-gray-600">FBD,Haryana</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹193</h3>
                <p className=" text-sm -mt-1 text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;