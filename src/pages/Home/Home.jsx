import { Link } from "react-router-dom";
import { useUser } from "../../provider/userProvider";
import { CHAT } from "../../routes/routePath";

const Home = () => {
	const { user } = useUser();
	return (
		<div className="mx-auto flex flex-col gap-4 justify-center items-center font-bold text-3xl lg:text-5xl h-[calc(100vh-92px)] ">
			<div>
				Welcome To &nbsp; <span className="text-purple-600">Chat App</span>
			</div>
			{user && (
				<Link to={CHAT}>
					<button className="btn btn-success hover:bg-green-300 w-32">Go To Chat</button>
				</Link>
			)}
		</div>
	);
};

export default Home;
