import { useState } from "react";
import "./App.css";
import SidebarComponent from "./Components/Sidebar/Sidebar";
import { Button } from "primereact/button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./Pages/Books/Books";
import Blacksmithing from "./Pages/Blacksmithing/Blacksmithing";
import Carpentry from "./Pages/Carpentry/Carpentry";
import Carving from "./Pages/Carving/Carving";
import Cooking from "./Pages/Cooking/Cooking";
import Electrical from "./Pages/Electrical/Electrical";
import Glassmaking from "./Pages/Glassmaking/Glassmaking";
import Knapping from "./Pages/Knapping/Knapping";
import Masonry from "./Pages/Masonry/Masonry";
import Mechanics from "./Pages/Mechanics/Mechanics";
import Pottery from "./Pages/Pottery/Pottery";
import Tailoring from "./Pages/Tailoring/Tailoring";
import Welding from "./Pages/Welding/Welding";

function App() {
	const [sidebarVisible, setSidebarVisible] = useState(false);

	return (
		<>
			<Router>
				<SidebarComponent
					visible={sidebarVisible}
					onHide={() => setSidebarVisible(false)}
				/>
				<Button
					className="fixed top-0 left-0 z-0 border-round-left p-2"
					visible={!sidebarVisible}
					onClick={() => setSidebarVisible(true)}
				>
					<i className="bi bi-list"></i>
				</Button>
				<Routes>
					<Route path="/" element={<BookList />} />
					<Route path="/blacksmithing" element={<Blacksmithing />} />
					<Route path="/carpentry" element={<Carpentry />} />
					<Route path="/carving" element={<Carving />} />
					<Route path="/cooking" element={<Cooking />} />
					<Route path="/electrical" element={<Electrical />} />
					<Route path="/glassmaking" element={<Glassmaking />} />
					<Route path="/knapping" element={<Knapping />} />
					<Route path="/masonry" element={<Masonry />} />
					<Route path="/mechanics" element={<Mechanics />} />
					<Route path="/pottery" element={<Pottery />} />
					<Route path="/tailoring" element={<Tailoring />} />
					<Route path="/welding" element={<Welding />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
