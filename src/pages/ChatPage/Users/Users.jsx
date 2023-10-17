import ChatBox from "../../../components/ChatBox";
import SingleUser from "./SingleUser";

const Users = ({ users }) => {
	return (
		<div className="lg:flex justify-around bg-gray-800 h-[calc(100vh-92px)]">
			<div className="w-full lg:w-1/4 px-6 pt-4 flex flex-col items-start overflow-auto">
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
