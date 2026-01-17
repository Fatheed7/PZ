import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import { BooksProvider } from "./Contexts/BooksContext";
import { MagazinesProvider } from "./Contexts/MagazinesContext";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "react-tooltip/dist/react-tooltip.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<PrimeReactProvider>
			<BooksProvider>
				<MagazinesProvider>
					<App />
				</MagazinesProvider>
			</BooksProvider>
		</PrimeReactProvider>
	</StrictMode>,
);
