import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page" className="flex flex-col justify-center items-center h-screen gap-2">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p className="text-red-500 text-2xl">
				<i>{error.statusText || error.message}</i>
			</p>
			<Link to="/">
				<button className="btn btn-error">Home Page</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
