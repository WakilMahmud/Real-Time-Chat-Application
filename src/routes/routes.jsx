import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import * as routePath from "./routePath";

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
		],
	},
]);

export default router;
