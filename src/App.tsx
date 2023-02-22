import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/pages/Admin";
import BadRequest from "./components/pages/BadRequest";
import { BrowserRouter } from "react-router-dom";
import Registration from "./components/pages/Registration";
import CreateArticle from "./components/pages/CreateArticle";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Admin />} />
				<Route path="/createarticle" element={<CreateArticle />} />
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
