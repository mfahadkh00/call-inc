import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/signin";
import HomeViewContainer from "./container/homeViewContainer";
import ProfileContainer from "./container/profileContainer";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute outlet={<HomeViewContainer />} />}
      />

      <Route
        path="/profile"
        element={<PrivateRoute outlet={<ProfileContainer />} />}
      />
      <Route path="/login" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
