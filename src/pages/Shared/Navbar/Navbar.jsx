import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiChat } from "react-icons/bi";
const Navbar = () => {
	const [user, setUser] = useState("");

	// useEffect(() => {
	// 	const loggedUser = JSON.parse(localStorage.getItem("User"));
	// 	setUser(loggedUser?.UserName);
	// }, []);

	return (
		<>
			<div className="flex justify-around py-12">
				<div className="text-6xl">
					<BiChat></BiChat>
				</div>
				{user ? (
					<Link to="/login">
						<button
							className="btn btn-outline btn-success"
							onClick={() => {
								localStorage.removeItem("User");
								setUser(null);
							}}
						>
							Logout
						</button>
					</Link>
				) : (
					<Link to="/login">
						<button className="btn btn-outline btn-success">Login</button>
					</Link>
				)}
			</div>
			<hr />
		</>
	);
};

export default Navbar;
