import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import * as routePath from "./routePath";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

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
		],
	},
]);

export default router;
