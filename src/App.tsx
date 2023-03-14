import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/pages/Admin";
import Author from "./components/pages/Author";
import BadRequest from "./components/pages/BadRequest";
import Registration from "./components/pages/Registration";
import SuccessPage from "./components/pages/SuccessPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Admin />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/author" element={<Author />} />
				<Route path="/success" element={<SuccessPage />} />
        {/* Error Route */}
        <Route path="*" element={<BadRequest />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
