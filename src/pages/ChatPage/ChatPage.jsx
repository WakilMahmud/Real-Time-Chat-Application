/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
import ChatBox from "../../components/ChatBox";
import { BACKEND_URL } from "../../api/api";
import { BiSend } from "react-icons/bi";
import { useEffect, useState } from "react";
import Users from "./Users/Users";

const ChatPage = () => {
	const currentUserObj = JSON.parse(localStorage.getItem("User"));
	console.log(currentUserObj);
	// const [loggedUser, setLoggedUser] = useState(currentUser.UserName);
	const [dbUsers, setDbUsers] = useState([]);
	// const [chats, setChats] = useState([]);
	// const [currentMessage, setCurrentMessage] = useState("");

	useEffect(() => {
		fetch(`${BACKEND_URL}/api/Registration/users`)
			.then((res) => res.json())
			.then((data) => setDbUsers(data.users));
	}, []);

	const connection = new signalR.HubConnectionBuilder().withUrl(`${BACKEND_URL}/chatHub`).configureLogging(signalR.LogLevel.Information).build();

	const start = async () => {
		try {
			await connection.start();
			console.log("SignalR Connected.");
		} catch (err) {
			// console.log(err);
			setTimeout(start, 1000);
		}
	};

	connection.onclose(async () => {
		await start();
	});

	start();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ message }) => {
		// setCurrentMessage(message);

		// try {
		// 	await connection.invoke("JoinChat", currentUserObj.UserName, currentMessage);
		// 	console.log(`${currentUser.UserName} has joined`);
		// } catch (err) {
		// 	console.error(err);
		// }

		try {
			await connection.invoke("SendMessage", currentUserObj.UserName, message);
		} catch (err) {
			console.error(err);
		}

		try {
			await connection.on("ReceiveMessage", (user, message) => {
				console.log(`${user} : ${message}`);
				// setChats([...chats, { user, message }]);
				reset();
			});
		} catch (err) {
			console.error(err);
		}
		// reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center bg-sky-200 h-56">
				<input
					type="text"
					placeholder="Message"
					className="input input-bordered input-info w-full max-w-xs mr-2"
					{...register("message", { required: true })}
				/>
				{errors.message && <span className="text-red-500">Empty Message</span>}

				<button className="btn btn-info">
					<BiSend className="text-2xl">
						<input type="submit" id="sendButton" className="btn btn-error" />
					</BiSend>
				</button>
			</form>
			<ul>
				{/* {chats?.map((chat, index) => (
					<li key={index}> {chat}</li>
				))} */}
			</ul>

			<Users users={dbUsers}></Users>
			{/* <ChatBox></ChatBox> */}
		</>
	);
};

export default ChatPage;
