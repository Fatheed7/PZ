import { useState } from "react";
import "./App.css";
import SidebarComponent from "./Components/Sidebar/Sidebar";
import { Button } from "primereact/button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./Pages/Books/Books";
import MagazineList from "./Pages/Magazine/Magazine";
import SkillRoute from "./Pages/SkillRoute/SkillRoute";
import TitleUpdater from "./assets/Utils/TitleUpdater";

function App() {
	const [sidebarVisible, setSidebarVisible] = useState(false);

	return (
		<>
			<Router>
				<TitleUpdater />
				<SidebarComponent
					visible={sidebarVisible}
					onHide={() => setSidebarVisible(false)}
				/>
				<Button
					className="fixed top-0 left-0 z-0 border-round-left p-2"
					style={{ backgroundColor: "#1f2937", color: "white" }}
					visible={!sidebarVisible}
					onClick={() => setSidebarVisible(true)}
				>
					<i className="bi bi-list"></i>
				</Button>
				<Routes>
					<Route path="/PZ" element={<BookList />} />
					<Route path="/PZ/magazine" element={<MagazineList />} />
					<Route path="/PZ/:skill" element={<SkillRoute />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
