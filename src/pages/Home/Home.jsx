import { Link } from "react-router-dom";
import { useUser } from "../../provider/userProvider";
import { LOGIN, CHAT } from "../../routes/routePath";

const Home = () => {
	const { user } = useUser();
	return (
		<>
			<div className="mx-auto flex flex-col gap-4 justify-center items-center font-bold text-3xl lg:text-5xl h-screen bg-gray-200">
				<div>
					Welcome To <span className="text-sky-500">Chat App</span>
				</div>
				{user ? (
					<Link to={CHAT}>
						<button className="btn btn-info hover:bg-blue-300 w-32">Go To Chat</button>
					</Link>
				) : (
					<Link to={LOGIN}>
						<button className="btn btn-info hover:bg-blue-300 w-32">Login</button>
					</Link>
				)}
			</div>
		</>
	);
};

export default Home;
