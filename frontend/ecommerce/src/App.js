import React from "react";
import Header from "./components/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import SignupScreen from "./components/screens/SignupScreen";
import CartScreen from "./components/screens/CartScreen";
import Productscreen from "./components/screens/Productscreen";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
        <Routes>
          <Route exact path="/product/:id" element={<Productscreen />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<SignupScreen />} />
        </Routes>
        <Routes>
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </>
  );
}
