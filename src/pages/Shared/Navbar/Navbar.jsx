import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="flex justify-around py-12">
				<div className="text-5xl font-bold">Chat App</div>
				<Link to="/login">
					<button className="btn btn-outline btn-success">Login</button>
				</Link>
			</div>
			<hr />
		</>
	);
};

export default Navbar;
