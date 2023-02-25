import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Footer from "./components/footer";
import Header from "./components/header";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesApp;
