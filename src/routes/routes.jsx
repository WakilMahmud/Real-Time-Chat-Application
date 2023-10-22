import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import * as routePath from "./routePath";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ChatPage from "../pages/ChatPage/ChatPage";

const router = createBrowserRouter([
	{
		path: routePath.ROOT,
		element: <Main></Main>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: routePath.ROOT,
				element: <Home></Home>,
			},
			{
				path: routePath.LOGIN,
				element: <Login></Login>,
			},
			{
				path: routePath.REGISTER,
				element: <Register></Register>,
			},
			{
				path: routePath.CHAT,
				element: <ChatPage></ChatPage>,
			},
		],
	},
]);

export default router;
