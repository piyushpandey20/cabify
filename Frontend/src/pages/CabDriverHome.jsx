import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CabDriverDetails from "../components/CabDriverDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CabDriverDataContext } from "../context/CabDriverContext";

const CabDriverHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const { cabDriver } = useContext(CabDriverDataContext);
  useEffect(() => {
    socket.emit("join", {
      userId: cabDriver._id,
      userType: "cabDriver",
    });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit("update-location-cabDriver", {
            userId: cabDriver._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };
    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();
    // return () => clearInterval(locationInterval);
  });
  socket.on("new-ride", (data) => {
    console.log(data)
    // setConfirmRidePopupPanel(true);
  });

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-20 "
          src="https://logo-suggestion.renderforest.com/suggestions-images/20d9/dbba/20d9dbbaad8ecfeb85240ffcde495244.png"
          alt="app-logo"
        />
        <Link
          to={"/home"}
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://i.redd.it/g2r5ewz4tqk11.jpg"
          alt="map-image"
        />
      </div>
      <div className="h-2/5 p-6">
        <CabDriverDetails />
      </div>
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
      >
        <RidePopUp
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full h-screen z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CabDriverHome;
