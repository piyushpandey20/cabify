import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CabDriverLogin from "./pages/cabDriverLogin";
import CabDriverSignup from "./pages/cabDriverSignup";
import Start from "./pages/Start";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CabDriverHome from "./pages/CabDriverHome";
import CabDriverProtectWrapper from "./pages/CabDriverProtectWrapper";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/cabdriver-login" element={<CabDriverLogin />} />
        <Route path="/cabdriver-signup" element={<CabDriverSignup />} />
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
      </Routes>
    </div>
  );
};

export default App;
