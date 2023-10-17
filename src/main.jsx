import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import "./index.css";
import UserProvider from "./provider/userProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserProvider>
		<RouterProvider router={router} />
	</UserProvider>
);
