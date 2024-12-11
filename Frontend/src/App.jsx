import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CabDriverLogin from "./pages/CabDriverLogin";
import CabDriverSignup from "./pages/CabDriverSignup";
import Start from "./pages/Start";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CabDriverHome from "./pages/CabDriverHome";
import CabDriverProtectWrapper from "./pages/CabDriverProtectWrapper";
import CabDriverLogout from "./pages/CabDriverLogout";
import Riding from "./pages/Riding";
import CabDriverRiding from "./pages/CabDriverRiding";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/cabdriver-login" element={<CabDriverLogin />} />
        <Route path="/cabdriver-signup" element={<CabDriverSignup />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/cabdriver-riding" element={<CabDriverRiding />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/cabdriver-home"
          element={
            <CabDriverProtectWrapper>
              <CabDriverHome />
            </CabDriverProtectWrapper>
          }
        />
        <Route
          path="/cabdriver/logout"
          element={
            <CabDriverProtectWrapper>
              <CabDriverLogout/>
            </CabDriverProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
