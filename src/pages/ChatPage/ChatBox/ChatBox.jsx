/* eslint-disable no-undef */
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
			await sendMessage(currentUser, message);
			// try {
			// 	await connection.invoke("SendPrivateMessage", targetUser, currentUser, message);
			// } catch (error) {
			// 	console.log(error);
			// }
			reset();
		}
	};

	return (
		<>
			{directUser ? (
				<div className="w-full h-[calc(100vh-92px)]  bg-gray-200 border border-gray-300">
					<UserChat directUser={directUser}></UserChat>
					<form onSubmit={handleSubmit(onSubmit)} className="flex fixed bottom-0 w-full lg:w-3/5">
						<input
							type="text"
							id="messageInput"
							placeholder="Enter your message"
							className="input rounded-none w-full lg:w-3/4 text-black"
							{...register("message", { required: true })}
						/>
						{errors.message && <span className="text-red-500">Empty Message</span>}

						<input type="submit" className="btn rounded-none btn-info" id="sendButton" value="Send" />
					</form>
				</div>
			) : (
				<NoChats></NoChats>
			)}
		</>
	);
};

export default ChatBox;
