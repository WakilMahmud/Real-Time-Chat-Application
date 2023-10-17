import ChatBox from "../../../components/ChatBox";
import SingleUser from "./SingleUser";

const Users = ({ users }) => {
	return (
		<div className="flex justify-around bg-gray-800 text-white">
			<div className="border border-black w-1/4 ps-8 pt-4 flex flex-col items-start">
				<h1 className="font-semibold text-3xl text-green-300 mb-4">Users</h1>
				{users?.map((user, index) => (
					<SingleUser key={index} user={user}></SingleUser>
				))}
			</div>
			<ChatBox></ChatBox>
		</div>
	);
};

export default Users;