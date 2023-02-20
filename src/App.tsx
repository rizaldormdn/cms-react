import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/Admin";
import BadRequest from "./components/pages/BadRequest";
import { BrowserRouter } from "react-router-dom";
import Unauthorized from "./components/pages/Unauthorized";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />

        {/* Error Route */}
        <Route path="*" element={<BadRequest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
