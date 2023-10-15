import { HiOutlineUser, HiUser } from "react-icons/hi";

const ChatBox = () => {
	return (
		<div className="max-w-7xl mx-auto bg-gray-200">
			<div className="chat chat-start">
				<div className="chat-image avatar">
					<div className="">
						<HiOutlineUser></HiOutlineUser>
					</div>
				</div>

				<div className="chat-bubble">You were the Chosen One!</div>
			</div>
			<div className="chat chat-end">
				<div className="chat-image avatar">
					<div className="">
						<HiUser></HiUser>
					</div>
				</div>

				<div className="chat-bubble">I hate you!</div>
			</div>
		</div>
	);
};

export default ChatBox;
