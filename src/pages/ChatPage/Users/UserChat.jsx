// import { HiOutlineUser, HiUser } from "react-icons/hi";
import { BiRadioCircle } from "react-icons/bi";

const UserChat = ({ directUser }) => {
	return (
		<>
			<div className="bg-green-400 p-3 flex justify-start items-center">
				{directUser && (
					<>
						<BiRadioCircle></BiRadioCircle> <p>{directUser}</p>
					</>
				)}
			</div>
			{/* <div className="chat chat-start">
				<div className="chat-image avatar">
					<div className="text-black text-2xl">
						<HiOutlineUser></HiOutlineUser>
					</div>
				</div>

				<div className="chat-bubble">User has joined</div>
			</div>
			<div className="chat chat-end">
				<div className="chat-image avatar">
					<div className="text-black text-2xl">
						<HiUser></HiUser>
					</div>
				</div>

				<div className="chat-bubble">
					Messages are sending and receiving, but can&apos;t handle properly. You can see the <span className="text-red-500">CONSOLE</span>
				</div>
			</div> */}
			<ul id="messagesList" className="px-4"></ul>
		</>
	);
};

export default UserChat;
