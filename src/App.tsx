import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/Admin";
import BadRequest from "./components/pages/BadRequest";
import { BrowserRouter } from "react-router-dom";
import Registration from "./components/pages/Registration";
import SuccessPage from "./components/pages/SuccessPage";
import Login from "./components/pages/Login";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Admin />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route path="/success" element={<SuccessPage />} />
        {/* Error Route */}
        <Route path="*" element={<BadRequest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
