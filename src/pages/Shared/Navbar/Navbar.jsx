import { Link } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { useUser } from "../../../provider/userProvider";
import { ROOT, LOGIN } from "../../../routes/routePath";

const Navbar = () => {
	const { user, setUser } = useUser();
	// console.log(user);
	return (
		<>
			<div className="flex justify-between px-4 lg:px-16 py-4 bg-black">
				<div>
					<Link to={ROOT}>
						<BiChat className="text-6xl text-purple-500"></BiChat>
					</Link>
				</div>
				<div className="flex flex-col lg:flex-row  items-center gap-4">
					{user && (
						<div className="text-white flex gap-2 items-center text-2xl">
							<FaRegUserCircle></FaRegUserCircle>
							<p className="text-sm lg:text-xl">{user?.UserName}</p>
						</div>
					)}
					{user?.UserName ? (
						<Link to={ROOT}>
							<button
								className="btn btn-outline btn-success w-32"
								onClick={() => {
									localStorage.removeItem("User");
									setUser(null);
								}}
							>
								Logout
							</button>
						</Link>
					) : (
						<Link to={LOGIN}>
							<button className="btn btn-success hover:bg-green-300 w-32">Login</button>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
