/* eslint-disable no-undef */

import { BiSend } from "react-icons/bi";

// import { BACKEND_URL } from "../../../api/api";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import UserChat from "../Users/UserChat";
import NoChats from "../Users/NoChats";

const ChatBox = ({ targetUser }) => {
	const currentUserObj = JSON.parse(localStorage.getItem("User"));
	const [directUser, setDirectUser] = useState(targetUser);

	useEffect(() => {
		setDirectUser(targetUser.toUpperCase());
	}, [targetUser]);

	// const connection = new signalR.HubConnectionBuilder().withUrl(`${BACKEND_URL}/chatHub`).configureLogging(signalR.LogLevel.Information).build();

	const start = async () => {
		try {
			await connection.start();
			console.log("SignalR Connected.");
		} catch (err) {
			console.log(err);
		}
	};

	connection.onclose(async () => {
		await start();
	});

	useEffect(() => {
		console.log("User Join started");
		const joinUser = async () => {
			const name = currentUserObj.UserName;
			if (name) {
				await joinChat(name);
			}
		};

		const joinChat = async (user) => {
			if (!user) return;
			try {
				const message = `${user} joined`;
				await connection.invoke("JoinChat", user, message);
			} catch (error) {
				console.log(error);
			}
		};

		const startApp = async () => {
			await start();
			await joinUser();
		};

		startApp();
	}, []);

	const sendMessage = async (user, message) => {
		try {
			await connection.invoke("SendMessage", user, message);
		} catch (error) {
			console.log(error);
		}
	};

	// const directMessage = async (user, message) => {
	// 	try {
	// 		await connection.invoke("DirectMessage", user, message);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// try {
	// 	connection.on("DirectMessage", (user, message) => {
	// 		console.log(`${user} : ${message}`);
	// 		setChats((chats) => [...chats, { user, message }]);
	// 	});
	// } catch (err) {
	// 	console.error(err);
	// }

	// try {
	// 	connection.on("ReceiveMessage", (user, message) => {
	// 		console.log(`${user} : ${message}`);
	// 		setChats((chats) => [...chats, { user, message }]);
	// 	});
	// } catch (err) {
	// 	console.error(err);
	// }

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ message }) => {
		const currentUser = currentUserObj.UserName;
		if (!currentUser) return;

		// console.log(currentUser, targetUser);

		if (message) {
			// await start();
			await sendMessage(currentUser, message);
			// await directMessage(currentUser, message);
			// await connection.invoke("SendPrivateMessage", targetUser, message);
			reset();
		}
	};

	return (
		<>
			{directUser ? (
				<div className="w-full h-[calc(100vh-93px)] bg-blue-200 lg:bg-gray-200  overflow-y-scroll">
					<UserChat directUser={directUser}></UserChat>
					<form onSubmit={handleSubmit(onSubmit)} className="flex justify-center fixed bottom-4 lg:right-56 w-1/2">
						<input
							type="text"
							id="messageInput"
							placeholder="Enter Message"
							className="input input-bordered input-info w-4/5 mr-2 text-black"
							{...register("message", { required: true })}
						/>
						{errors.message && <span className="text-red-500">Empty Message</span>}

						<button className="btn btn-info">
							<BiSend className="text-2xl">
								<input type="submit" id="sendButton" className="btn" />
							</BiSend>
						</button>
					</form>
				</div>
			) : (
				<NoChats></NoChats>
			)}
		</>
	);
};

export default ChatBox;
