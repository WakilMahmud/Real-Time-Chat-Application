import { BiRadioCircle } from "react-icons/bi";

const UserChat = ({ directUser }) => {
	return (
		<>
			{directUser && (
				<>
					<div className="bg-green-400 p-3 flex justify-start items-center">
						{directUser && (
							<>
								<div className="flex gap-2 items-center">
									<BiRadioCircle></BiRadioCircle> <p>{directUser}</p>
								</div>
							</>
						)}
					</div>

					<div>
						<ul id="messagesList" className="px-4"></ul>
					</div>
				</>
			)}
		</>
	);
};

export default UserChat;
