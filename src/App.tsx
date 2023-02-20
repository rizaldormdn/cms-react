import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/Admin";
import BadRequest from "./components/pages/BadRequest";
import { BrowserRouter } from "react-router-dom";
import AddArticle from "./components/pages/AddArticle";
import Registration from "./components/pages/Registration";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Admin />} />
				<Route path="/addarticle" element={<AddArticle />} />
				{/* Error Route */}
				<Route path="*" element={<BadRequest />} />
				<Route path="/registration" element={<Registration />} />
        {/* Error Route */ }
	<Route path="*" element={<BadRequest />} />
      </Routes >
    </BrowserRouter >
  );
};

export default App;
