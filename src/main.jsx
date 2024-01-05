import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./layout/Root";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<Root/>
		</AuthProvider>
	</React.StrictMode>
);
