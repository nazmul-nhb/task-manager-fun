import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<Toaster
			toastOptions={{
				duration: 3000,
			}}
		/>
	</StrictMode>
);
