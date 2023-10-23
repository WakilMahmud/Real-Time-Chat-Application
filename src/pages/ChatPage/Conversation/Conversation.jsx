import { Link } from "react-router-dom";
import { useUser } from "../../../provider/userProvider";
import { ImSwitch } from "react-icons/im";
import { ROOT } from "../../../routes/routePath";
const Conversation = ({ directUser }) => {
	const { user, setUser } = useUser();
	// console.log(user);

	return (
		<div className="w-full lg:w-2/5 border border-gray-300">
			<div className="flex justify-between p-4">
				<p className="">Hello, {user?.UserName} </p>
				<Link to={ROOT}>
					<button
						onClick={() => {
							localStorage.removeItem("User");
							setUser(null);
						}}
					>
						<ImSwitch className="text-red-500"></ImSwitch>
					</button>
				</Link>
			</div>
			<div className="p-2 px-4  border-b-2 border-gray-300">
				<p className="font-bold text-xl ">Conversations</p>
			</div>

			<div>
				<p className={`${directUser && "border border-gray-300"}  w-full py-2 px-4`}>{directUser}</p>
			</div>
		</div>
	);
};

export default Conversation;
